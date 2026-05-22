import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { budgetAlerts, setBudget } from "../controllers/budget.controller";

const router = express.Router();

router.use(authMiddleware);

router.post("/budget", setBudget);
router.get("/budget/alerts", budgetAlerts);

export const budgetRoutes = router;