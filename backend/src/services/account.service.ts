import prisma from "../config/prisma.js";

export class AccountService {
  static async getBalance(userId: string) {
    const account = await prisma.account.findUnique({
      where: {
        userId,
      },
      select: {
        balance: true,
      },
    });

    if (!account) {
      throw new Error("Account not found");
    }

    return {
      balance: Number(account.balance),
    };
  }

  static async transfer(
    senderId: string,
    receiverId: string,
    amount: number,
    note?: string
  ) {
    if (senderId === receiverId) {
      throw new Error("You cannot transfer money to yourself.");
    }

    const transaction = await prisma.$transaction(async (tx) => {
      const sender = await tx.account.findUnique({
        where: {
          userId: senderId,
        },
      });

      if (!sender) {
        throw new Error("Sender account not found.");
      }

      const receiver = await tx.account.findUnique({
        where: {
          userId: receiverId,
        },
      });

      if (!receiver) {
        throw new Error("Receiver account not found.");
      }

      if (Number(sender.balance) < amount) {
        throw new Error("Insufficient balance.");
      }

      // Update balances together
      await Promise.all([
        tx.account.update({
          where: {
            userId: senderId,
          },
          data: {
            balance: {
              decrement: amount,
            },
          },
        }),

        tx.account.update({
          where: {
            userId: receiverId,
          },
          data: {
            balance: {
              increment: amount,
            },
          },
        }),
      ]);

      // Create transaction
      const createdTransaction = await tx.transaction.create({
        data: {
          senderId,
          receiverId,
          amount,
          note,
          status: "SUCCESS",
        },

        include: {
          receiver: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      });

      // Save beneficiary if not already saved
      const beneficiary = await tx.beneficiary.findFirst({
        where: {
          ownerId: senderId,
          beneficiaryId: receiverId,
        },
      });

      if (!beneficiary) {
        await tx.beneficiary.create({
          data: {
            ownerId: senderId,
            beneficiaryId: receiverId,
          },
        });
      }

      return createdTransaction;
    });

    return {
      message: "Transfer completed successfully.",

      transaction: {
        id: transaction.id,

        amount: Number(transaction.amount),

        note: transaction.note,

        status: transaction.status,

        createdAt: transaction.createdAt,

        receiver: transaction.receiver,
      },
    };
  }

  static async addMoney(
    userId: string,
    amount: number
  ) {
    const account = await prisma.account.findUnique({
      where: {
        userId,
      },
    });

    if (!account) {
      throw new Error("Account not found.");
    }

    const updatedAccount = await prisma.account.update({
      where: {
        userId,
      },
      data: {
        balance: {
          increment: amount,
        },
      },
    });

    return {
      balance: Number(updatedAccount.balance),
    };
  }
}