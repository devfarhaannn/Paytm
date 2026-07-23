import { motion } from "framer-motion";
import {
  Users,
  Wallet,
  ArrowRightLeft,
  ShieldCheck
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10K+",
    title: "Active Users",
    description: "People using FlowPay every day."
  },
  {
    icon: Wallet,
    number: "₹5Cr+",
    title: "Money Transferred",
    description: "Secure payments processed."
  },
  {
    icon: ArrowRightLeft,
    number: "250K+",
    title: "Transactions",
    description: "Successful transfers completed."
  },
  {
    icon: ShieldCheck,
    number: "99.99%",
    title: "Success Rate",
    description: "Reliable and secure payments."
  }
];

export const Statistics = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Trusted by Thousands
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Our platform is designed for fast, secure and reliable
            digital payments.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: .5
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-slate-800 p-8 text-center border border-slate-700 hover:border-indigo-500 transition"
              >

                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center">

                  <Icon
                    className="text-white"
                    size={30}
                  />

                </div>

                <h3 className="mt-8 text-4xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="mt-2 text-xl font-semibold text-white">
                  {item.title}
                </p>

                <p className="mt-4 text-slate-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};