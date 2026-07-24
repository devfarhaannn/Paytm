import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  ArrowRightLeft,
  ChartColumnIncreasing,
  CheckCircle2,
} from "lucide-react";

export const AuthBanner = () => {
  return (
    <div className="relative flex h-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-900 to-violet-900">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

      <div className="relative z-10 flex w-full flex-col justify-between p-12">

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="flex items-center gap-3"
        >
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">

            <Wallet
              size={32}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              FabPay
            </h1>

            <p className="text-slate-300">
              Smart Digital Wallet
            </p>

          </div>

        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: .2,
            duration: .7,
          }}
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-indigo-100">

            <ShieldCheck size={18} />

            Trusted by Thousands

          </span>

          <h2 className="mt-8 text-6xl font-extrabold leading-tight text-white">

            Banking

            <br />

            Reimagined.

          </h2>

          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">

            Secure digital payments, instant transfers,
            transaction tracking and a premium banking
            experience — all in one application.

          </p>

        </motion.div>

        {/* Cards */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .4,
            duration: .8,
          }}
          className="space-y-5"
        >

          {/* Card 1 */}

          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-indigo-600 p-3">

                <ArrowRightLeft
                  className="text-white"
                />

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  Instant Transfers
                </h3>

                <p className="text-sm text-slate-300">
                  Send money securely in seconds.
                </p>

              </div>

            </div>

          </div>

          {/* Card 2 */}

          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-green-600 p-3">

                <CheckCircle2
                  className="text-white"
                />

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  99.99% Success Rate
                </h3>

                <p className="text-sm text-slate-300">
                  Reliable and secure transactions.
                </p>

              </div>

            </div>

          </div>

          {/* Card 3 */}

          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-purple-600 p-3">

                <ChartColumnIncreasing
                  className="text-white"
                />

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  Smart Analytics
                </h3>

                <p className="text-sm text-slate-300">
                  Monitor your spending with insights.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .7,
          }}
        >

          <p className="text-sm text-slate-400">

            © 2026 FabPay

            <span className="mx-2">•</span>

            Secure Banking Platform

          </p>

        </motion.div>

      </div>

    </div>
  );
};