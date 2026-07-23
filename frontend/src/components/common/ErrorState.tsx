import { TriangleAlert } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const ErrorState = ({
  title = "Something went wrong",
  description = "Please try again.",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

      <TriangleAlert
        size={60}
        className="mx-auto text-red-500"
      />

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Try Again
        </button>
      )}

    </div>
  );
};