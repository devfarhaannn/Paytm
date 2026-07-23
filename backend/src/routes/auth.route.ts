import { Router } from "express";

import { AuthController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// Public Routes
router.post("/signup", AuthController.signup);

router.post("/signin", AuthController.signin);

// Protected Route
router.get("/me", authMiddleware, AuthController.me);

router.patch(
  "/profile",
  authMiddleware,
  AuthController.updateProfile
);

export default router;