import prisma from "../config/prisma.js";

export class TransactionService {
  static async getTransactions(userId: string) {
    const transactions = await prisma.transaction.findMany({
      where: {
        OR: [
          { senderId: userId },
          { receiverId: userId },
        ],
      },

      include: {
        sender: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },

        receiver: {
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

    return transactions.map((transaction) => {
      const isSender =
        transaction.senderId === userId;

      return {
        id: transaction.id,

        type: isSender
          ? "SENT"
          : "RECEIVED",

        amount: Number(transaction.amount),

        note: transaction.note,

        status: transaction.status,

        createdAt: transaction.createdAt,

        otherUser: isSender
          ? transaction.receiver
          : transaction.sender,
      };
    });
  }
}