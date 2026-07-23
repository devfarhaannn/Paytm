import { DashboardLayout } from "../components/layout/DashboardLayout";

import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfileInfo } from "../components/profile/ProfileInfo";
import { AccountStats } from "../components/profile/AccountStats";
import { SecurityCard } from "../components/profile/SecurityCard";

import { useAuth } from "../hooks/useAuth";
import { useBalance } from "../hooks/useBalance";

import { useEffect, useState } from "react";

import { getAnalytics } from "../services/analytics.service";

import { PageLoader } from "../components/common/PageLoader";

export const Profile = () => {
  const { user } = useAuth();

  const { balance, loading: balanceLoading } =
    useBalance();

  const [stats, setStats] = useState({
    totalTransactions: 0,
    totalBeneficiaries: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const analytics = await getAnalytics();

        setStats({
          totalTransactions:
            analytics.totalTransactions,
          totalBeneficiaries:
            analytics.totalBeneficiaries,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading || balanceLoading) {
    return (
      <PageLoader message="Loading Profile..." />
    );
  }

  return (
    <DashboardLayout title="Profile">
      <div className="space-y-6">

        <ProfileHeader
          firstName={user?.firstName ?? ""}
          lastName={user?.lastName ?? ""}
          email={user?.email ?? ""}
        />

        <ProfileInfo
          firstName={user?.firstName ?? ""}
          lastName={user?.lastName ?? ""}
          email={user?.email ?? ""}
          phone="Not Added"
        />

        <AccountStats
          balance={balance}
          transactions={
            stats.totalTransactions
          }
          beneficiaries={
            stats.totalBeneficiaries
          }
        />

        <SecurityCard />

      </div>
    </DashboardLayout>
  );
};