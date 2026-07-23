import "dotenv/config";

export const env = {
  PORT: process.env.PORT || "3000",

  JWT_SECRET:
    process.env.JWT_SECRET || "super-secret-key",

  DATABASE_URL:
    process.env.DATABASE_URL || "",
};