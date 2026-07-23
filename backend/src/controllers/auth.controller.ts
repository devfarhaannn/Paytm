import { Request, Response } from "express";

import { signupSchema, signinSchema } from "../validators/auth.validator.js";
import { AuthService } from "../services/auth.service.js";
import { updateProfileSchema } from "../validators/profile.validator.js";

export class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const body = signupSchema.parse(req.body);

      const result = await AuthService.signup(body);

      return res.status(201).json({
        success: true,
        message: "Account created successfully.",
        data: result,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async signin(req: Request, res: Response) {
    try {
      const body = signinSchema.parse(req.body);

      const result = await AuthService.signin(body);

      return res.status(200).json({
        success: true,
        message: "Login successful.",
        data: result,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async me(req: Request, res: Response) {
    try {
      const userId = req.userId!;

      const user = await AuthService.getProfile(userId);

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async updateProfile(
  req: Request,
  res: Response
) {
  try {
    const userId = req.userId!;

    const body = updateProfileSchema.parse(
      req.body
    );

    const user =
      await AuthService.updateProfile(
        userId,
        body
      );

    return res.status(200).json({
      success: true,
      message:
        "Profile updated successfully.",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
}
}