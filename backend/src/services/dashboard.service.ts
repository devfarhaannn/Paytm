import prisma from "../config/prisma.js";

export class DashboardService {
  static async getDashboard(userId: string) {
    const [
      user,
      account,
      sent,
      received,
      beneficiaries,
      recentTransactions,
    ] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      }),

      prisma.account.findUnique({
        where: { userId },
        select: {
          balance: true,
        },
      }),

      prisma.transaction.aggregate({
        where: {
          senderId: userId,
          status: "SUCCESS",
        },
        _sum: {
          amount: true,
        },
        _count: true,
      }),

      prisma.transaction.aggregate({
        where: {
          receiverId: userId,
          status: "SUCCESS",
        },
        _sum: {
          amount: true,
        },
        _count: true,
      }),

      prisma.beneficiary.findMany({
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
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.transaction.findMany({
        where: {
          OR: [
            { senderId: userId },
            { receiverId: userId },
          ],
        },
        include: {
          sender: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
            },
          },
          receiver: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),
    ]);

    return {
      user,

      balance: Number(account?.balance ?? 0),

      analytics: {
        totalSent: Number(sent._sum.amount ?? 0),
        totalReceived: Number(received._sum.amount ?? 0),
        totalTransactions:
          sent._count + received._count,
        totalBeneficiaries:
          beneficiaries.length,
      },

      beneficiaries: beneficiaries.map(
        (b) => b.beneficiary
      ),

      recentTransactions: recentTransactions.map(
        (t) => ({
          id: t.id,

          amount: Number(t.amount),

          status: t.status,

          note: t.note,

          createdAt: t.createdAt,

          type:
            t.senderId === userId
              ? "SENT"
              : "RECEIVED",

          otherUser:
            t.senderId === userId
              ? t.receiver
              : t.sender,
        })
      ),
    };
  }
}