import api from "./api";

export interface Beneficiary {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  totalTransfers: number;

  lastTransferAt: string | null;
}

export const getBeneficiaries = async () => {
  const response = await api.get("/beneficiaries");

  return response.data.data as Beneficiary[];
};