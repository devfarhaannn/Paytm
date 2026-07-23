import { Request, Response } from "express";

import { AccountService } from "../services/account.service.js";
import { transferSchema } from "../validators/account.validator.js";
import {
  addMoneySchema
} from "../validators/account.validator.js";

export class AccountController {
  static async getBalance(
    req: Request,
    res: Response
  ) {
    try {
      const userId = req.userId!;

      const balance =
        await AccountService.getBalance(userId);

      return res.status(200).json({
        success: true,
        data: balance,
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

  static async transfer(
    req: Request,
    res: Response
  ) {
    try {
      const userId = req.userId!;

      const body = transferSchema.parse(req.body);

      const result =
        await AccountService.transfer(
          userId,
          body.receiverId,
          body.amount,
          body.note
        );

      return res.status(200).json({
        success: true,
        data: result,
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
  static async addMoney(
  req: Request,
  res: Response
) {
  try {
    const userId = req.userId!;

    const body = addMoneySchema.parse(req.body);

    const result = await AccountService.addMoney(
      userId,
      body.amount
    );

    return res.status(200).json({
      success: true,
      message: "Money added successfully.",
      data: result,
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