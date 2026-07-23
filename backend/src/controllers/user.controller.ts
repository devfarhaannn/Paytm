import { Request, Response } from "express";

import { UserService } from "../services/user.service.js";

export class UserController {
  static async search(
    req: Request,
    res: Response
  ) {
    try {
      const userId = req.userId!;

      const query =
        (req.query.query as string) ?? "";

      const users =
        await UserService.searchUsers(
          userId,
          query
        );

      return res.status(200).json({
        success: true,
        data: users,
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