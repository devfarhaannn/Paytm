import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

import { useSidebar } from "../../context/SidebarContext";
import { useAuth } from "../../hooks/useAuth";

interface TopbarProps {
  title: string;
}

export const Topbar = ({
  title,
}: TopbarProps) => {
  const { toggleSidebar } = useSidebar();
  const { user } = useAuth();

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 17
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white
        px-8
        py-5
        transition-colors
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">

        <button
          onClick={toggleSidebar}
          className="
            hidden
            rounded-xl
            border
            border-slate-300
            p-2
            transition
            hover:bg-slate-100

            dark:border-slate-700
            dark:hover:bg-slate-800

            lg:flex
          "
        >
          <Menu
            size={20}
            className="dark:text-white"
          />
        </button>

        <div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {title}
          </h1>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {greeting} • {today}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div
          className="
            hidden
            items-center
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-2

            dark:border-slate-700
            dark:bg-slate-800

            lg:flex
          "
        >

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Search..."
            className="
              ml-3
              bg-transparent
              outline-none
              text-slate-900
              placeholder:text-slate-400

              dark:text-white
            "
          />

        </div>

        {/* Notification */}

        <button
          className="
            relative
            rounded-xl
            border
            border-slate-300
            p-3
            transition
            hover:bg-slate-100

            dark:border-slate-700
            dark:hover:bg-slate-800
          "
        >

          <Bell
            size={20}
            className="dark:text-white"
          />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        {/* User */}

        <div
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-slate-300
            px-3
            py-2

            dark:border-slate-700
            dark:bg-slate-800
          "
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 font-bold text-white">

            {user?.firstName?.charAt(0).toUpperCase() ?? "U"}

          </div>

          <div className="hidden lg:block">

            <p className="font-semibold text-slate-900 dark:text-white">
              {user
                ? `${user.firstName} ${user.lastName}`
                : "User"}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              {user?.email}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};