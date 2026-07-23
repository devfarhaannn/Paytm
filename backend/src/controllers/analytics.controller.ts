import { Request, Response } from "express";

import { AnalyticsService } from "../services/analytics.service.js";

export class AnalyticsController {
  static async getAnalytics(
    req: Request,
    res: Response
  ) {
    try {
      const data =
        await AnalyticsService.getAnalytics(
          req.userId!
        );

      return res.status(200).json({
        success: true,
        data,
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