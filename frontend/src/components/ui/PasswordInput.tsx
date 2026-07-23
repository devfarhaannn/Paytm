import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      {/* Label */}

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      {/* Input */}

      <div
        className={`
          flex items-center
          rounded-xl
          border
          bg-white
          px-4
          transition-all
          duration-300

          ${
            error
              ? "border-red-500 focus-within:border-red-500"
              : "border-slate-300 focus-within:border-indigo-600"
          }
        `}
      >
        <Lock
          size={20}
          className="text-slate-400"
        />

        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-4 outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-slate-500 hover:text-indigo-600 transition"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      {/* Error */}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};