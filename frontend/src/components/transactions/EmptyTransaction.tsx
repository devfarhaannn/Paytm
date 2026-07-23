import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EmptyTransactions = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl bg-white p-12 shadow-lg text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">

        <CreditCard
          size={42}
          className="text-indigo-600"
        />

      </div>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        No Transactions Yet
      </h2>

      <p className="mt-3 text-slate-500">
        You haven't made any transactions yet.
        Start by sending money to your friends or family.
      </p>

      <button
        onClick={() => navigate("/transfer")}
        className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Make Your First Transfer
      </button>

    </div>
  );
};