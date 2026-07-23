import type { ReactNode } from "react";

interface AuthFormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm = ({
  children,
  onSubmit,
}: AuthFormProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      <form
        onSubmit={onSubmit}
        className="space-y-5"
      >
        {children}
      </form>

    </div>
  );
};