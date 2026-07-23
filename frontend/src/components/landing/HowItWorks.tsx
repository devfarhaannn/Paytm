import { motion } from "framer-motion";
import {
  UserPlus,
  ShieldCheck,
  Send,
  BarChart3
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up in just a few seconds and create your secure FlowPay account.",
    icon: UserPlus,
  },
  {
    id: "02",
    title: "Secure Login",
    description:
      "Login safely using JWT authentication with complete account protection.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "Transfer Money",
    description:
      "Search registered users and transfer money instantly in real time.",
    icon: Send,
  },
  {
    id: "04",
    title: "Track Transactions",
    description:
      "View your complete transaction history and wallet activity anytime.",
    icon: BarChart3,
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900">
            How FlowPay Works
          </h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
            Getting started is simple. Complete your transfer in
            just a few easy steps.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: .6,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
                  relative
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition
                "
              >

                {/* Number */}

                <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                  {step.id}
                </div>

                {/* Icon */}

                <div className="mt-6 h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center">

                  <Icon
                    className="text-white"
                    size={30}
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-500 leading-7">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};