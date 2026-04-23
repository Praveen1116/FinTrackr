import mongoose, { model, Schema } from "mongoose";
import { MONGO_URL } from "../config/credentials";
import { title } from "node:process";

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export const UserModel = model("user", UserSchema);

const TransactionSchema = new Schema({
    amount: { type: Number, required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    note: { type: String },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true }
});

export const TransactionModel = model("transactions", TransactionSchema);

const goalSchema = new Schema({
    title: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    savedAmount: { type: Number, default: 0 },
    deadline: { type: Date },
    status: { type: String, enum: ["active", "completed"], default: "active" },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true }
});

export const goalModel = model("goal", goalSchema);

const budgetSchema = new Schema({
    category: { type: String, required: true },
    limitAmount: { type: Number, required: true },
    month: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true }
});

export const budgetModel = model("budget", budgetSchema);