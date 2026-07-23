import { ArrowRight, ShieldCheck, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="grid w-full gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-sm text-indigo-200">

              <ShieldCheck size={18} />

              Secure Digital Wallet

            </span>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Send Money
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Instantly.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              FlowPay lets you securely transfer money, manage your balance,
              and keep track of every transaction with a beautiful modern
              experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/signup"
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-indigo-700"
              >
                Get Started

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/signin"
                className="rounded-xl border border-slate-600 px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Sign In
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <h2 className="text-3xl font-bold text-white">10K+</h2>
                <p className="text-slate-400">Active Users</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">₹5Cr+</h2>
                <p className="text-slate-400">Transferred</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">99.9%</h2>
                <p className="text-slate-400">Success Rate</p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >

            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-300">
                    Available Balance
                  </p>

                  <h2 className="mt-2 text-4xl font-bold text-white">
                    ₹52,430
                  </h2>

                </div>

                <div className="rounded-2xl bg-indigo-600 p-4">
                  <Wallet className="text-white" size={28} />
                </div>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between rounded-xl bg-white/10 p-4">

                  <span className="text-slate-300">
                    Rahul Sharma
                  </span>

                  <span className="font-semibold text-green-400">
                    +₹2,000
                  </span>

                </div>

                <div className="flex justify-between rounded-xl bg-white/10 p-4">

                  <span className="text-slate-300">
                    Aman Patel
                  </span>

                  <span className="font-semibold text-red-400">
                    -₹500
                  </span>

                </div>

                <div className="flex justify-between rounded-xl bg-white/10 p-4">

                  <span className="text-slate-300">
                    Priya Shah
                  </span>

                  <span className="font-semibold text-green-400">
                    +₹3,200
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};