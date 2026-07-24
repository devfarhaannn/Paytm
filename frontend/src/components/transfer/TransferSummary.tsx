import { ArrowRight, User2 } from "lucide-react";
import type { User } from "../../types/user";

import { Button } from "../ui/Button";
import { formatCurrency } from "../../utils/formatCurrency";

interface TransferSummaryProps {
  recipient: User | null;
  amount: number;
  note: string;
  loading: boolean;
  onTransfer: () => void;
}

export const TransferSummary = ({
  recipient,
  amount,
  note,
  loading,
  onTransfer,
}: TransferSummaryProps) => {
  const fee = 0;
  const total = amount + fee;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold">
        Transfer Summary
      </h2>

      <div className="mt-6 space-y-5">

        {/* Recipient */}

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Recipient
          </span>

          {recipient ? (
            <div className="flex items-center gap-2">
              <User2
                size={18}
                className="text-indigo-600"
              />

              <span className="font-semibold">
                {recipient.firstName} {recipient.lastName}
              </span>
            </div>
          ) : (
            <span className="text-slate-400">
              Not Selected
            </span>
          )}
        </div>

        {/* Amount */}

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Amount
          </span>

          <span className="font-semibold">
            {formatCurrency(amount)}
          </span>
        </div>

        {/* Fee */}

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Transfer Fee
          </span>

          <span className="font-semibold text-green-600">
            FREE
          </span>
        </div>

        {/* Note */}

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Note
          </span>

          <span className="max-w-[180px] truncate font-medium">
            {note || "--"}
          </span>
        </div>

        <hr />

        {/* Total */}

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
            Total
          </span>

          <span className="text-2xl font-bold text-indigo-600">
            {formatCurrency(total)}
          </span>
        </div>

      </div>

      <div className="mt-8">
        <Button
          type="button"
          loading={loading}
          onClick={onTransfer}
          label={
            loading
              ? "Processing..."
              : "Confirm Transfer"
          }
        />
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
        <ArrowRight size={16} />

        <span>
          Secure transfer powered by FabPay
        </span>
      </div>
    </div>
  );
};