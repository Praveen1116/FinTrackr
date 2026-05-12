import express from "express";
import { authRoutes } from "./routes/auth.routes"
import { transactionRoutes } from "./routes/transaction.routes";
import { goalRoutes } from "./routes/goal.routes";

const app = express();

app.use(express.json());

app.use("/api/v1/Fintrackr", authRoutes);
app.use("/api/v1/Fintrackr", transactionRoutes);
app.use("/api/v1/Fintrackr", goalRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hi, server running"});
});

export default app;