import api from "./api";

export interface Transaction {
  id: string;
  type: "SENT" | "RECEIVED";
  amount: number;
  note?: string;
  status: "SUCCESS" | "FAILED" | "PENDING";
  createdAt: string;

  otherUser: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export const getTransactions = async () => {
  const response = await api.get("/transactions");

  return response.data.data as Transaction[];
};