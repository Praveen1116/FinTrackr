import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import { JWT_SECRET } from "../config/credentials";

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        if(!username || !email || !password) {
            return res.status(400).json({ message: "All field are necessary" });
        }

        const existingUser = await UserModel.findOne({
            $or: [{ email }, { username }]
        });

        if(existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message: "User created" });
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Registration failed" });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        if(!email || !password) {
            return res.status(409).json({ message: "All fields are necessary" });
        }

        const user = await UserModel.findOne({ email });

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPassword = await bcrypt.compare(password, user.password);

        if(!isPassword) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Login failed" });
    }
}