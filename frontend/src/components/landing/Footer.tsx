import { Wallet, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-3">
                <Wallet className="text-white" size={24} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  FabPay
                </h2>

                <p className="text-sm text-slate-400">
                  Smart Digital Wallet
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Fast, secure and modern digital payments.
              FabPay helps users transfer money instantly,
              manage balances and track every transaction
              with confidence.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#features"
                  className="hover:text-indigo-400 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how"
                  className="hover:text-indigo-400 transition"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-indigo-400 transition"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/signin"
                  className="hover:text-indigo-400 transition"
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="hover:text-indigo-400 transition"
                >
                  Create Account
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-indigo-400"
                />

                <span>
                  support@fabwpay.com
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-indigo-400"
                />

                <span>
                  +91 99999 99999
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={18}
                  className="text-indigo-400"
                />

                <span>
                  Ahmedabad, Gujarat, India
                </span>

              </div>

            </div>

            <button
              className="
                mt-8
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Contact Support
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © 2026 FabPay. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 transition"
            >
              Help Center
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};