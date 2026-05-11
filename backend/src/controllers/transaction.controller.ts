import { Request, Response } from "express";
import { TransactionModel } from "../models/transaction.model";

interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    }
}

export const transaction = async (req: AuthRequest, res: Response) => {
    const { amount, type, category, date, note } = req.body;

    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if(!amount || !type || !category || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if(!["income", "expense"].includes(type)) {
            return res.status(400).json({ message: "Type must be income or expense" });
        }

        const newTransaction = await TransactionModel.create({
            amount,
            type,
            category,
            date,
            note,
            userId: req.user.userId
        });

        return res.status(201).json({
            message: "Transaction created successfully",
            transaction: newTransaction
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to create transaction" });
    }
};

export const transactions = async (req: AuthRequest, res: Response) => {
    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const allTransaction = await TransactionModel.find({
            userId: req.user.userId
        }).sort({ date: -1 });

        return res.status(200).json({
            message: "Transaction fetched successfully",
            transaction: allTransaction
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch transactions" });
    }
};

export const delTransaction = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const deletedTransaction = await TransactionModel.findOneAndDelete({
            _id: id,
            userId: req.user.userId
        });

        if(!deletedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        return res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ message: "Failed to delete Transaction" });
    }
}