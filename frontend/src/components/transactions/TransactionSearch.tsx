import { Search } from "lucide-react";

interface TransactionSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const TransactionSearch = ({
  value,
  onChange,
}: TransactionSearchProps) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-2xl font-bold">
        Search Transactions
      </h2>

      <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 focus-within:border-indigo-600">

        <Search
          size={20}
          className="text-slate-400"
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name or email..."
          className="ml-3 w-full bg-transparent outline-none"
        />

      </div>

    </div>
  );
};