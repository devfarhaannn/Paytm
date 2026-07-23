import prisma from "../config/prisma.js";

export class BeneficiaryService {
  static async getBeneficiaries(userId: string) {
    const beneficiaries = await prisma.beneficiary.findMany({
      where: {
        ownerId: userId,
      },

      include: {
        beneficiary: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    const result = await Promise.all(
      beneficiaries.map(async (item) => {
        const transfers = await prisma.transaction.findMany({
          where: {
            senderId: userId,
            receiverId: item.beneficiaryId,
            status: "SUCCESS",
          },

          orderBy: {
            createdAt: "desc",
          },
        });

        return {
          ...item.beneficiary,

          totalTransfers: transfers.length,

          lastTransferAt:
            transfers.length > 0
              ? transfers[0].createdAt
              : null,
        };
      })
    );

    return result;
  }
}