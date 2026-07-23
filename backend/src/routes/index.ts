import { Router } from "express";

import authRoutes from "./auth.route.js";
import accountRoutes from "./account.route.js";
import userRoutes from "./user.route.js";
import transactionRoutes from "./transaction.route.js";
import beneficiaryRoutes from "./beneficiary.route.js";
import analyticsRoutes from "./analytics.route.js";
import dashboardRoutes from "./dashboard.route.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/account", accountRoutes);

router.use("/users", userRoutes);

router.use(
    "/transactions",
    transactionRoutes
);

router.use(
  "/beneficiaries",
  beneficiaryRoutes
);

router.use(
  "/analytics",
  analyticsRoutes
);

router.use("/dashboard", dashboardRoutes);

export default router;