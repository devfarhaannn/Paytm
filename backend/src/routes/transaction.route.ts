import { Router } from "express";

import { TransactionController } from "../controllers/transaction.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/",
  authMiddleware,
  TransactionController.getTransactions
);

export default router;