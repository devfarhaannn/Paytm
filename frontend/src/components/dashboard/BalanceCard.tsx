import { Wallet, TrendingUp } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

interface BalanceCardProps {
  balance: number;
}

export const BalanceCard = ({
  balance,
}: BalanceCardProps) => {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 p-8 text-white shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-indigo-100">
            Available Balance
          </p>

          <h1 className="mt-2 text-5xl font-bold">
            {formatCurrency(balance)}
          </h1>

          <p className="mt-3 text-indigo-100">
            Updated just now
          </p>

        </div>

        <div className="rounded-2xl bg-white/20 p-5">

          <Wallet size={45} />

        </div>

      </div>

      <div className="mt-8 flex items-center gap-2 text-green-200">

        <TrendingUp size={20} />

        <span>
          Your account is active and ready for payments.
        </span>

      </div>

    </div>
  );
};