export interface Transaction {
  id: string;

  type: "SENT" | "RECEIVED";

  amount: number;

  note?: string;

  status: "SUCCESS" | "PENDING" | "FAILED";

  createdAt: string;

  otherUser: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}