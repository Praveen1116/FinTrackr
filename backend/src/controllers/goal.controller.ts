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

        if(!title || targetAmount === undefined || targetAmount <= 0) {
            return res.status(400).json({ message: "Fields are required and amount should be greater than 0" });
        }

        if(savedAmount !== undefined && savedAmount < 0) {
            return res.status(400).json({
                message: "Saved amount canno be negative"
            });
        }

        if(status !== undefined && !["active", "completed"].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
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

        const allGoals = await goalModel.find({
            userId: req.user.userId
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Goals fetched successfully",
            goals: allGoals
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch goals" });
    }
}

export const updateGoals = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const { title, targetAmount, savedAmount, deadline, status } = req.body;

    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const updatedData: any = {};

        if(title !== undefined) {
            updatedData.title = title;
        }

        if(targetAmount !== undefined) {
            if(targetAmount <= 0) {
                return res.status(400).json({ message: "Target amount must be greater than 0" });
            }
            updatedData.targetAmount = targetAmount;
        }

        if(savedAmount !== undefined) {
            if(savedAmount < 0) {
                return res.status(400).json({ message: "Saved amount cannot be negative" });
            }
            updatedData.savedAmount = savedAmount;
        }

        if(deadline !== undefined) {
            updatedData.deadline = deadline;
        }        

        if(status !== undefined) {
            if(!["active", "completed"].includes(status)) {
                return res.status(400).json({ message: "Invalid status" });
            }
            updatedData.status = status;
        }

        const existingGoal = await goalModel.findOne({
            _id: id,
            userId: req.user.userId
        });

        if(!existingGoal) {
            return res.status(404).json({ message: "Goal not found" });
        }

        if (updatedData.savedAmount !== undefined && updatedData.targetAmount === undefined) {
            if (updatedData.savedAmount >= existingGoal.targetAmount) {
                updatedData.status = "completed";
            } else if(updatedData.status === undefined) {
                updatedData.status = "active";
            }
        }

        if (updatedData.savedAmount !== undefined && updatedData.targetAmount !== undefined) {
            if (updatedData.savedAmount >= updatedData.targetAmount) {
                updatedData.status = "completed";
            } else if (updatedData.status === undefined) {
                updatedData.status = "active";
            }
        }

        const updatedGoal = await goalModel.findOneAndUpdate(
            {
                _id: id,
                userId: req.user.userId
            },
            updatedData,
            { new: true }
        );

        return res.status(200).json({
            message: "Goal updated successfully",
            goal: updatedGoal
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to update goal" });
    }
}

export const deleteGoals = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    try {
        if(!req.user?.userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const deletedGoal = await goalModel.findOneAndDelete({
            _id: id,
            userId: req.user.userId
        });

        if(!deletedGoal) {
            return res.status(404).json({ message: "Goal not found" });
        }

        return res.status(200).json({ message: "Goal deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to delete the goal" });
    }
}