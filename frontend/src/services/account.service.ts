import api from "./api";

export const getBalance = async () => {
  const response = await api.get("/account/balance");

  return response.data.data.balance;
};

export const addMoney = async (amount: number) => {
  const response = await api.post("/account/add-money", {
    amount,
  });

  return response.data.data;
};

export interface TransferMoneyData {
  receiverId: string;
  amount: number;
  note?: string;
}

export interface TransferResponse {
  message: string;

  transaction: {
    id: string;
    amount: number;
    note?: string;
    status: string;
    createdAt: string;

    receiver: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
}

export const transferMoney = async (
  data: TransferMoneyData
): Promise<TransferResponse> => {
  const response = await api.post(
    "/account/transfer",
    data
  );

  return response.data.data;
};