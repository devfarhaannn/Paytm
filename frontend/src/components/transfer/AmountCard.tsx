import { IndianRupee } from "lucide-react";
import { useEffect, useRef } from "react";

interface AmountCardProps {
  amount: number;
  setAmount: (amount: number) => void;
  note: string;
  setNote: (note: string) => void;
  autoFocus?: boolean;

  onEnter?: () => void;
}



const quickAmounts = [100, 500, 1000, 5000];

export const AmountCard = ({
  amount,
  setAmount,
  note,
  setNote,
  autoFocus = false,
  onEnter,
}: AmountCardProps) => {

  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      amountRef.current?.focus();
    }
  }, [autoFocus]);
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="text-2xl font-bold">
        Transfer Details
      </h2>

      {/* Amount */}

      <div className="mt-6">

        <label className="mb-2 block font-semibold text-slate-700">
          Amount
        </label>

        <div className="flex items-center rounded-2xl border border-slate-300 px-4 py-3 focus-within:border-indigo-500">

          <IndianRupee
            className="text-slate-500"
            size={22}
          />

          <input
            ref={amountRef}
            type="number"
            min={1}
            value={amount === 0 ? "" : amount}
            onChange={(e) =>
              setAmount(Number(e.target.value))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onEnter?.();
              }
            }}
            placeholder="Enter amount"
            className="ml-2 w-full bg-transparent text-2xl font-bold outline-none"
          />

        </div>

      </div>

      {/* Quick Amount */}

      <div className="mt-6">

        <p className="mb-3 font-semibold text-slate-700">
          Quick Amount
        </p>

        <div className="grid grid-cols-4 gap-3">

          {quickAmounts.map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => setAmount(item)}
              className="rounded-xl border border-slate-200 py-3 transition hover:border-indigo-600 hover:bg-indigo-50"
            >
              ₹{item}
            </button>

          ))}

        </div>

      </div>

      {/* Note */}

      <div className="mt-6">

        <label className="mb-2 block font-semibold text-slate-700">
          Note (Optional)
        </label>

        <textarea
          rows={3}
          value={note}
          onChange={(e) =>
            setNote(e.target.value)
          }
          placeholder="Dinner, Rent, Shopping..."
          className="w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-indigo-500"
        />

      </div>

    </div>
  );
};