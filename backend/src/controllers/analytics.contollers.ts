import { Request, Response } from "express";

interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    }
}

export const summary = async (req: AuthRequest, res: Response) => {
    res.json({ message: "Workin summary" });
}

export const category = async (req: AuthRequest, res: Response) => {
    res.json({ message: "Workin category" });
}

export const monthly = async (req: AuthRequest, res: Response) => {
    res.json({ message: "Workin monthly" });
}