import { Request, Response } from "express";

import { DashboardService } from "../services/dashboard.service.js";

export class DashboardController {
  static async getDashboard(
    req: Request,
    res: Response
  ) {
    try {
      const dashboard =
        await DashboardService.getDashboard(
          req.userId!
        );

      return res.status(200).json({
        success: true,
        data: dashboard,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      });
    }
  }
}