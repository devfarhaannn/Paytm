import prisma from "../config/prisma.js";

export class AnalyticsService {
  static async getAnalytics(userId: string) {
    const sent = await prisma.transaction.aggregate({
      where: {
        senderId: userId,
        status: "SUCCESS",
      },
      _sum: {
        amount: true,
      },
      _count: true,
    });

    const received = await prisma.transaction.aggregate({
      where: {
        receiverId: userId,
        status: "SUCCESS",
      },
      _sum: {
        amount: true,
      },
      _count: true,
    });

    const beneficiaries = await prisma.beneficiary.count({
      where: {
        ownerId: userId,
      },
    });

    return {
      totalSent: Number(sent._sum.amount ?? 0),

      totalReceived: Number(received._sum.amount ?? 0),

      totalTransactions:
        sent._count + received._count,

      totalBeneficiaries: beneficiaries,
    };
  }
}