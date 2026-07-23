interface TransactionFilterProps {
    value: "all" | "sent" | "received";
    onChange: (value: "all" | "sent" | "received") => void;
  }
  
  const filters = [
    "all",
    "sent",
    "received",
  ] as const;
  
  export const TransactionFilter = ({
    value,
    onChange,
  }: TransactionFilterProps) => {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-lg">
  
        <h2 className="mb-5 text-2xl font-bold">
          Filter
        </h2>
  
        <div className="flex gap-4">
  
          {filters.map((filter) => (
  
            <button
              key={filter}
              onClick={() => onChange(filter)}
              className={`rounded-xl px-6 py-3 font-semibold transition ${
                value === filter
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
  
          ))}
  
        </div>
  
      </div>
    );
  };