import mongoose, { model, Schema } from "mongoose";

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