import {
    IndianRupee,
    ArrowRightLeft,
    Users,
  } from "lucide-react";
  
  interface AccountStatsProps {
    balance: number;
    transactions: number;
    beneficiaries: number;
  }
  
  export const AccountStats = ({
    balance,
    transactions,
    beneficiaries,
  }: AccountStatsProps) => {
    const stats = [
      {
        title: "Current Balance",
        value: `₹${balance.toLocaleString("en-IN")}`,
        icon: IndianRupee,
        color: "bg-green-100 text-green-600",
      },
      {
        title: "Transactions",
        value: transactions,
        icon: ArrowRightLeft,
        color: "bg-indigo-100 text-indigo-600",
      },
      {
        title: "Beneficiaries",
        value: beneficiaries,
        icon: Users,
        color: "bg-orange-100 text-orange-600",
      },
    ];
  
    return (
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">
          Account Statistics
        </h2>
  
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
  
            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200 p-5 transition hover:shadow-md"
              >
                <div
                  className={`inline-flex rounded-xl p-3 ${stat.color}`}
                >
                  <Icon size={24} />
                </div>
  
                <p className="mt-4 text-sm text-slate-500">
                  {stat.title}
                </p>
  
                <h3 className="mt-2 text-2xl font-bold">
                  {stat.value}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  };