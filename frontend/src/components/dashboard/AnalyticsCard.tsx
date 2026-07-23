import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  ArrowDownLeft,
  Activity,
  Users,
} from "lucide-react";

import { formatCurrency } from "../../utils/formatCurrency";
import { Skeleton } from "../common/Skeleton";

import {
  getAnalytics,
  type Analytics,
} from "../../services/analytics.service";

export const AnalyticsCard = () => {
  const [analytics, setAnalytics] =
    useState<Analytics | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await getAnalytics();

        setAnalytics(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <Skeleton className="mb-6 h-8 w-40" />

      <div className="space-y-5">

        <Skeleton className="h-20 rounded-2xl" />

        <Skeleton className="h-20 rounded-2xl" />

        <Skeleton className="h-20 rounded-2xl" />

        <Skeleton className="h-20 rounded-2xl" />

      </div>

    </div>
  );
}

  if (!analytics) {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold">
          Analytics
        </h2>

        <div className="py-10 text-center text-slate-500">
          Failed to load analytics.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">
        Analytics
      </h2>

      <div className="space-y-5">

        {/* Total Sent */}

        <div className="flex items-center justify-between rounded-2xl bg-red-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-red-100 p-3">

              <ArrowUpRight
                size={22}
                className="text-red-600"
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Total Sent
              </p>

              <h3 className="font-bold text-red-600">
                {formatCurrency(
                  analytics.totalSent
                )}
              </h3>

            </div>

          </div>

        </div>

        {/* Total Received */}

        <div className="flex items-center justify-between rounded-2xl bg-green-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-green-100 p-3">

              <ArrowDownLeft
                size={22}
                className="text-green-600"
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Total Received
              </p>

              <h3 className="font-bold text-green-600">
                {formatCurrency(
                  analytics.totalReceived
                )}
              </h3>

            </div>

          </div>

        </div>

        {/* Transactions */}

        <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-slate-200 p-3">

              <Activity
                size={22}
                className="text-slate-700"
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Transactions
              </p>

              <h3 className="font-bold">
                {analytics.totalTransactions}
              </h3>

            </div>

          </div>

        </div>

        {/* Beneficiaries */}

        <div className="flex items-center justify-between rounded-2xl bg-indigo-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-indigo-100 p-3">

              <Users
                size={22}
                className="text-indigo-600"
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Beneficiaries
              </p>

              <h3 className="font-bold text-indigo-600">
                {analytics.totalBeneficiaries}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};