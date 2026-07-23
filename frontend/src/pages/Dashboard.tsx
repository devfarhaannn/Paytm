import { DashboardLayout } from "../components/layout/DashboardLayout";

import { useAuth } from "../hooks/useAuth";
import { useBalance } from "../hooks/useBalance";

import { WelcomeCard } from "../components/dashboard/WelcomeCard";
import { BalanceCard } from "../components/dashboard/BalanceCard";
import { QuickActions } from "../components/dashboard/QuickAction";
import { AnalyticsCard } from "../components/dashboard/AnalyticsCard";
import { AnalyticsCharts } from "../components/dashboard/AnalyticsCharts";
import { RecentTransactions } from "../components/dashboard/RecentTransaction";
import { Beneficiaries } from "../components/dashboard/Beneficiaries";


import { PageLoader } from "../components/common/PageLoader";

export const Dashboard = () => {
  const { user } = useAuth();

  const { balance, loading } = useBalance();

  if (loading) {
    return (
      <PageLoader message="Loading Dashboard..." />
    );
  }

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8">

        {/* Top Section */}

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <WelcomeCard
              firstName={user?.firstName ?? "User"}
            />
          </div>

          <BalanceCard balance={balance} />

        </div>

        {/* Middle Section */}

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <QuickActions />
          </div>

          <AnalyticsCard />

        </div>

        {/* Analytics Charts */}

        <AnalyticsCharts />

        {/* Recent Transactions */}

        <RecentTransactions />

        {/* Beneficiaries */}

        <Beneficiaries />

      </div>
    </DashboardLayout>
  );
};