import api from "./api";

export interface Analytics {
  totalSent: number;
  totalReceived: number;
  totalTransactions: number;
  totalBeneficiaries: number;
}

export const getAnalytics = async () => {
  const response = await api.get("/analytics");

  return response.data.data as Analytics;
};