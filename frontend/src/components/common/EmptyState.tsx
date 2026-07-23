import type{ ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const EmptyState = ({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}: EmptyStateProps) => {
  return (
    <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">

        {icon}

      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          {buttonText}
        </button>
      )}

    </div>
  );
};