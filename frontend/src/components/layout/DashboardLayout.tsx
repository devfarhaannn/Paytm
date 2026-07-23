import type { ReactNode } from "react";

import { Sidebar } from "../dashboard/Sidebar";
import { Topbar } from "../dashboard/Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export const DashboardLayout = ({
  children,
  title,
}: DashboardLayoutProps) => {
  return (
    <div
      className="
        flex
        min-h-screen
        bg-slate-100
        text-slate-900
        transition-colors
        duration-300

        dark:bg-slate-950
        dark:text-white
      "
    >
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <Topbar title={title} />

        <main
          className="
            flex-1
            overflow-y-auto
            p-6
            lg:p-8

            transition-colors
            duration-300
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
};