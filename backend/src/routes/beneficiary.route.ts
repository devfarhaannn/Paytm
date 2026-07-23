import { Router } from "express";

import { BeneficiaryController } from "../controllers/beneficiary.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/",
  authMiddleware,
  BeneficiaryController.getBeneficiaries
);

export default router;