import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/jwt.js";

export const generateToken = (
  userId: string
): string => {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = (
  token: string
) => {
  return jwt.verify(
    token,
    JWT_SECRET
  );
};