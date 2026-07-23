import { z } from "zod";

export const addMoneySchema = z.object({
  amount: z
    .number()
    .positive("Amount must be greater than zero"),
});

export const transferSchema = z.object({
  receiverId: z.string().min(1, "Receiver is required"),

  amount: z
    .number()
    .positive("Amount must be greater than zero"),

  note: z
    .string()
    .max(100)
    .optional(),
});