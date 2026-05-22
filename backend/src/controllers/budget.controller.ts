import { Request, Response } from "express";
import { budgetModel } from "../models/budget.model";
import { TransactionModel } from "../models/transaction.model";

interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    };
}

export const setBudget = async (req: AuthRequest, res: Response) => {
    const { category, limitAmount, month } = req.body;

    try {
        if (!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!category || !month || limitAmount === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (limitAmount <= 0) {
            return res.status(400).json({ message: "Limit amount must be greater than 0" });
        }

        const budget = await budgetModel.findOneAndUpdate(
            {
                userId: req.user.userId,
                category,
                month
            },
            {
                category,
                month,
                limitAmount,
                userId: req.user.userId
            },
            {
                new: true,
                upsert: true
            }
        );

        return res.status(200).json({
            message: "Budget saved successfully",
            budget
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to save budget" });
    }
};

export const budgetAlerts = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const month = req.query.month as string;

        if (!month) {
            return res.status(400).json({ message: "Month is required" });
        }

        const budgets = await budgetModel.find({
            userId: req.user.userId,
            month
        });

        const alerts = [];

        for (const budget of budgets) {
            const startDate = new Date(`${month}-01T00:00:00.000Z`);
            const endDate = new Date(startDate);
            endDate.setMonth(endDate.getMonth() + 1);

            const expenseData = await TransactionModel.aggregate([
                {
                    $match: {
                        userId: budget.userId,
                        type: "expense",
                        category: budget.category,
                        date: {
                            $gte: startDate,
                            $lt: endDate
                        }
                    }
                },
                {
                    $group: {
                        _id: null,
                        totalSpent: { $sum: "$amount" }
                    }
                }
            ]);

            const totalSpent = expenseData[0]?.totalSpent || 0;
            const remaining = budget.limitAmount - totalSpent;
            const percentUsed = (totalSpent / budget.limitAmount) * 100;

            if (totalSpent >= budget.limitAmount) {
                alerts.push({
                    category: budget.category,
                    month: budget.month,
                    limitAmount: budget.limitAmount,
                    totalSpent,
                    remaining,
                    status: "exceeded"
                });
            } else if (percentUsed >= 80) {
                alerts.push({
                    category: budget.category,
                    month: budget.month,
                    limitAmount: budget.limitAmount,
                    totalSpent,
                    remaining,
                    status: "warning"
                });
            }
        }

        return res.status(200).json({
            message: "Budget alerts fetched successfully",
            alerts
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch budget alerts" });
    }
};