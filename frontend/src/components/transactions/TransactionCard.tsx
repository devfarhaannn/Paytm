import {
    ArrowDownLeft,
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    XCircle,
  } from "lucide-react";
  
  import type { Transaction } from "../../types/transaction";
  
  import { formatCurrency } from "../../utils/formatCurrency";
  import { formatDate } from "../../utils/formatDate";
  import { Badge } from "../ui/Badge";
  
  interface TransactionCardProps {
    transaction: Transaction;
  }
  
  export const TransactionCard = ({
    transaction,
  }: TransactionCardProps) => {
    const isSent = transaction.type === "SENT";
  
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg">
  
        <div className="flex items-center justify-between">
  
          {/* Left */}
  
          <div className="flex items-center gap-4">
  
            <div
              className={`rounded-2xl p-4 ${
                isSent
                  ? "bg-red-100"
                  : "bg-green-100"
              }`}
            >
              {isSent ? (
                <ArrowUpRight
                  size={24}
                  className="text-red-600"
                />
              ) : (
                <ArrowDownLeft
                  size={24}
                  className="text-green-600"
                />
              )}
            </div>
  
            <div>
  
              <h3 className="text-lg font-semibold">
                {transaction.otherUser.firstName} {transaction.otherUser.lastName}
              </h3>
  
              <p className="text-sm text-slate-500">
                {transaction.otherUser.email}
              </p>
  
              <p className="mt-1 text-sm text-slate-400">
                {formatDate(transaction.createdAt)}
              </p>
  
            </div>
  
          </div>
  
          {/* Right */}
  
          <div className="text-right">
  
            <p
              className={`text-xl font-bold ${
                isSent
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {isSent ? "-" : "+"}
              {formatCurrency(transaction.amount)}
            </p>
  
            <div className="mt-3 flex items-center justify-end gap-2">
  
              {transaction.status === "SUCCESS" && (
                <>
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />
  
                  <Badge
                    text="Success"
                    color="green"
                  />
                </>
              )}
  
              {transaction.status === "PENDING" && (
                <>
                  <Clock3
                    size={18}
                    className="text-orange-600"
                  />
  
                  <Badge
                    text="Pending"
                    color="orange"
                  />
                </>
              )}
  
              {transaction.status === "FAILED" && (
                <>
                  <XCircle
                    size={18}
                    className="text-red-600"
                  />
  
                  <Badge
                    text="Failed"
                    color="red"
                  />
                </>
              )}
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  };