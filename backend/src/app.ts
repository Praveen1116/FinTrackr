import express from "express";
import { authRoutes } from "./routes/auth.routes"

const app = express();

app.use(express.json());

app.use("/api/v1/Fintrackr", authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hi, server running"});
});

export default app;