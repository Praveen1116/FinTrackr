import mongoose from "mongoose";
import { MONGO_URL } from "./credentials";

export const connectDB = async () => {
    await mongoose.connect(MONGO_URL);
}