import {
  Moon,
  Palette,
  Globe,
  Sun
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export const AppearanceCard = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">
        Appearance
      </h2>

      <div className="space-y-5">

        {/* Dark Mode */}

        <div className="flex items-center justify-between border-b pb-4">

          <div className="flex items-center gap-4">

            {theme === "dark" ? (
              <Moon className="text-indigo-600" />
            ) : (
              <Sun className="text-yellow-500" />
            )}

            <div>

              <h3 className="font-semibold">
                Dark Mode
              </h3>

              <p className="text-sm text-slate-500">
                {theme === "dark"
                  ? "Enabled"
                  : "Disabled"}
              </p>

            </div>

          </div>

          <button
            onClick={toggleTheme}
            className={`flex h-7 w-14 items-center rounded-full transition ${theme === "dark"
                ? "bg-indigo-600"
                : "bg-slate-300"
              }`}
          >
            <div
              className={`h-6 w-6 rounded-full bg-white transition-transform duration-300 ${theme === "dark"
                  ? "translate-x-7"
                  : "translate-x-1"
                }`}
            />
          </button>

        </div>

        {/* Theme */}

        <div className="flex items-center justify-between border-b pb-4">

          <div className="flex items-center gap-4">

            <Palette className="text-indigo-600" />

            <div>

              <h3 className="font-semibold">
                Theme
              </h3>

              <p className="text-sm text-slate-500">
                Default
              </p>

            </div>

          </div>

        </div>

        {/* Language */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Globe className="text-indigo-600" />

            <div>

              <h3 className="font-semibold">
                Language
              </h3>

              <p className="text-sm text-slate-500">
                English
              </p>

            </div>

          </div>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
            English
          </span>

        </div>

      </div>

    </div>
  );
};