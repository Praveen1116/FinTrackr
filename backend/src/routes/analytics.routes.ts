import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { category, monthly, summary } from "../controllers/analytics.contollers";

const router = express.Router();

router.use(authMiddleware);

router.get("/analytics/summary", summary);
router.get("/analytics/category", category);
router.get("/analytics/monthly", monthly);

export const analyticsRoutes = router;