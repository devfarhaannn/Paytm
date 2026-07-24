import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-3 shadow-lg">
            <Wallet className="text-white" size={24} />
          </div>

          <div>

            <h1 className="text-2xl font-bold text-slate-900">
              FabPay
            </h1>

            <p className="text-xs text-slate-500">
              Digital Wallet
            </p>

          </div>
        </Link>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-10">

          <a
            href="#features"
            className="text-slate-600 hover:text-indigo-600 transition font-medium"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-slate-600 hover:text-indigo-600 transition font-medium"
          >
            How It Works
          </a>

          <a
            href="#faq"
            className="text-slate-600 hover:text-indigo-600 transition font-medium"
          >
            FAQ
          </a>

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-4">

          <Link
            to="/signin"
            className="font-medium text-slate-700 hover:text-indigo-600 transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="
            rounded-xl
            bg-gradient-to-r
            from-indigo-600
            to-violet-600
            px-6
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-indigo-400/40
          "
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
};