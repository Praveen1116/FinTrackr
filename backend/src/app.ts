import express from "express";
import { authRoutes } from "./routes/auth.routes"
import { transactionRoutes } from "./routes/transaction.routes";

const app = express();

app.use(express.json());

app.use("/api/v1/Fintrackr", authRoutes);
app.use("/api/v1/Fintrackr", transactionRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hi, server running"});
});

export default app;