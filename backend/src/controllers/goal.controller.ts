import { Request, Response } from "express";
import { goalModel } from "../models/goal.model";

interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    }
}

export const goal = async (req: AuthRequest, res: Response) => {
    const { title, targetAmount, savedAmount, deadline, status } = req.body;

    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if(!title || !targetAmount && targetAmount <= 0) {
            return res.status(400).json({ message: "Fields are required and amount should be greater than 0" });
        }

        const newGoal = await goalModel.create({
            title,
            targetAmount,
            savedAmount,
            deadline,
            status,
            userId: req.user.userId
        });

        return res.status(201).json({
            message: "Goal added successfully",
            goal: newGoal
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to add goal" });
    }
}

export const goals = async (req: AuthRequest, res: Response) => {
    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {

    }
}

export const updateGoals = async (req: AuthRequest, res: Response) => {

}

export const deleteGoals = async (req: AuthRequest, res: Response) => {

}