import { Router } from "express";

import { AccountController } from "../controllers/account.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/balance",
  authMiddleware,
  AccountController.getBalance
);

router.post(
  "/transfer",
  authMiddleware,
  AccountController.transfer
);

router.post(
  "/add-money",
  authMiddleware,
  AccountController.addMoney
);

export default router;