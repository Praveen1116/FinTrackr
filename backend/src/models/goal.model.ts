import mongoose, { model, Schema } from "mongoose";

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