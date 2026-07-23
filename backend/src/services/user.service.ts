import prisma from "../config/prisma.js";

export class UserService {
  static async searchUsers(
    currentUserId: string,
    query: string
  ) {
    const users = await prisma.user.findMany({
      where: {
        id: {
          not: currentUserId,
        },
        OR: [
          {
            firstName: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            lastName: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },

      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },

      take: 10,
    });

    return users;
  }
}