import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { deleteGoals, goal, goals, updateGoals } from "../controllers/goal.controller";

const router = express.Router();

router.use(authMiddleware);

router.post("/goals", goal);
router.get("/goals", goals);
router.put("/goals/:id", updateGoals);
router.delete("/goals/:id", deleteGoals);

export const goalRoutes = router;