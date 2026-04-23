import mongoose, { model, Schema } from "mongoose";

const budgetSchema = new Schema({
    category: { type: String, required: true },
    limitAmount: { type: Number, required: true },
    month: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true }
});

export const budgetModel = model("budget", budgetSchema);