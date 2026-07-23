import type { ReactNode } from "react";
import { AuthBanner } from "../auth/AuthBanner";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">

      {/* Left Side */}

      <div className="hidden lg:flex">
        <AuthBanner />
      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center p-8">

        <div className="w-full max-w-md">

          {children}

        </div>

      </div>

    </div>
  );
};