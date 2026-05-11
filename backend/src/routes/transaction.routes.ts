import express from "express";
import { delTransaction, transaction, transactions } from "../controllers/transaction.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.use(authMiddleware);

router.post("/transactions", transaction);
router.get("/transactions", transactions);
router.delete("/transactions/:id", delTransaction);

export const transactionRoutes = router;