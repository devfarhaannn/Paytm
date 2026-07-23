export interface ReceiptTransaction {
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
}