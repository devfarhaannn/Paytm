import { Request, Response } from "express";

import { TransactionService } from "../services/transaction.service.js";

export class TransactionController {
  static async getTransactions(
    req: Request,
    res: Response
  ) {
    try {
      const userId = req.userId!;

      const transactions =
        await TransactionService.getTransactions(
          userId
        );

      return res.status(200).json({
        success: true,
        data: transactions,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal server error",
      });
    }
  }
}