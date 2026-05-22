import { Request, Response } from "express";
import { Types } from "mongoose";
import { TransactionModel } from "../models/transaction.model";

interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    }
}

export const summary = async (req: AuthRequest, res: Response) => {
    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const userObjectId = new Types.ObjectId(req.user.userId);

        const data = await TransactionModel.aggregate([
            {
                $match: {
                    userId: userObjectId
                }
            },
            {
                $group: {
                    _id: "$type",
                    total: { $sum: "$amount" },
                    count: { $sum: 1 }
                }
            }
        ]);

        let totalIncome = 0;
        let totalExpense = 0;
        let incomeCount = 0;
        let expenseCount = 0;

        for(const item of data) {
            if(item._id === "income") {
                totalIncome = item.total;
                incomeCount = item.count;
            }

            if(item._id === "expense") {
                totalExpense = item.total;
                expenseCount = item.count;
            }
        }

        return res.status(200).json({
            message: "Summary fetched successfully",
            summary:{
                totalIncome,
                totalExpense,
                balance: totalIncome - totalExpense,
                transactionCount: incomeCount + expenseCount,
                incomeCount,
                expenseCount
            }
        });
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch summary" });
    }
};

export const category = async (req: AuthRequest, res: Response) => {
    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const type = (req.query.type as string) || "expense";

        if(!["income", "expense"].includes(type)) {
            return res.status(400).json({ message: "Type must be income or expense" });
        }

        const userObjectId = new Types.ObjectId(req.user.userId);

        const categories = await TransactionModel.aggregate([
            {
                $match: {
                    userId: userObjectId,
                    type
                }
            },
            {
                $group: {
                    _id: "$category",
                    totalAmount: { $sum: "$amount" },
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: "$_id",
                    totalAmount: 1,
                    count: 1
                }
            },
            {
                $sort: {
                    totalAmount: -1
                }
            }
        ]);

        return res.status(200).json({
            message: "Category analytics fetched successfully",
            type,
            categories
        })
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch category anaytics" });
    }
};

export const monthly = async (req: AuthRequest, res: Response) => {
    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const monthsParam = Number(req.query.months) || 6;
        const months = monthsParam > 0 ? monthsParam : 6;
        
        const userObjectId = new Types.ObjectId(req.user.userId);

        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - (months - 1));
        startDate.setDate(1);
        startDate.setHours(0, 0, 0, 0);

        const data = await TransactionModel.aggregate([
            {
                $match: {
                    userId: userObjectId,
                    date: { $gte: startDate }
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" },
                        type: "$type"
                    },
                    total: { $sum: "$amount" }
                }
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1
                }
            }
        ]);

        const monthlyMap = new Map<string, { month: string; income: number; expense: number }>();

        for(const item of data) {
            const year = item._id.year;
            const monthNumber = item._id.month;
            const type = item._id.type;

            const monthLabel = `${year}-${String(monthNumber).padStart(2, "0")}`;

            if(!monthlyMap.has(monthLabel)) {
                monthlyMap.set(monthLabel, {
                    month: monthLabel,
                    income: 0,
                    expense: 0
                });
            }

            const existingMonth = monthlyMap.get(monthLabel)!;

            if(type === "income") {
                existingMonth.income = item.total;
            }

            if(type === "expense") {
                existingMonth.expense = item.total;
            }
        }

        return res.status(200).json({
            message: "Monthly analytics fetched successfully",
            monthly: Array.from(monthlyMap.values()).map((item) => ({
                ...item,
                balance: item.income - item.expense
            }))
        });
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch monthly analytics" });
    }
}