import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/credentials";

interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    };
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
        if(!token) {
            return res.status(401).json({ message: "Invalid token" });
        }

        const decodedData = jwt.verify(token, JWT_SECRET) as JwtPayload;
        if(!decodedData.userId) {
            return res.status(401).json({ message: "Invalid token payload" });
        }

        req.user = {
            userId: decodedData.userId,
            email: decodedData.email
        }

        next();
    } catch(err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}