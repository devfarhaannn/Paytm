import { Spinner } from "../ui/Spinner";

interface PageLoaderProps {
  message?: string;
}

export const PageLoader = ({
  message = "Loading...",
}: PageLoaderProps) => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5">

      <Spinner size={45} />

      <h2 className="text-xl font-semibold text-slate-700">
        {message}
      </h2>

    </div>
  );
};