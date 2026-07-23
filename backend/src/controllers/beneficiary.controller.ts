import { Request, Response } from "express";

import { BeneficiaryService } from "../services/beneficiary.service.js";

export class BeneficiaryController {
  static async getBeneficiaries(
    req: Request,
    res: Response
  ) {
    try {
      const userId = req.userId!;

      const beneficiaries =
        await BeneficiaryService.getBeneficiaries(
          userId
        );

      return res.status(200).json({
        success: true,
        data: beneficiaries,
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