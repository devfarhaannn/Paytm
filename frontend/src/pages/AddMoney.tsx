import { DashboardLayout } from "../components/layout/DashboardLayout";
import { AddMoneyCard } from "../components/addMoney/AddMoneyCard";

export const AddMoney = () => {
  return (
    <DashboardLayout title="Add Money">
      <AddMoneyCard />
    </DashboardLayout>
  );
};