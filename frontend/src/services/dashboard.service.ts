import api from "./api";

import type { Analytics } from "./analytics.service";
import type { Beneficiary } from "./beneficiary.service";
import type { Transaction } from "./transaction.service";

export interface DashboardData {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };

  balance: number;

  analytics: Analytics;

  beneficiaries: Beneficiary[];

  recentTransactions: Transaction[];
}

export const getDashboard = async () => {
  const response = await api.get("/dashboard");

  return response.data.data as DashboardData;
};