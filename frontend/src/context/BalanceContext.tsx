import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getBalance } from "../services/account.service";
import { isAuthenticated } from "../services/auth.service";

interface BalanceContextType {
  balance: number;
  loading: boolean;
  refreshBalance: () => Promise<void>;
}

const BalanceContext =
  createContext<BalanceContextType | null>(null);

export const BalanceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [balance, setBalance] = useState(0);

  const [loading, setLoading] = useState(true);

  const refreshBalance = async () => {
    try {
      if (!isAuthenticated()) {
        setBalance(0);
        return;
      }

      const amount = await getBalance();

      setBalance(amount);
    } catch (error) {
      console.error(error);

      setBalance(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshBalance();
  }, []);

  return (
    <BalanceContext.Provider
      value={{
        balance,
        loading,
        refreshBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  const context = useContext(BalanceContext);

  if (!context) {
    throw new Error(
      "useBalance must be used inside BalanceProvider"
    );
  }

  return context;
};