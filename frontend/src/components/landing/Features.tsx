import {
    ShieldCheck,
    Send,
    Users,
    Wallet,
    Bell,
    BarChart3,
  } from "lucide-react";
  import { motion } from "framer-motion";
  
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "JWT-based authentication with secure account access and protected transactions.",
    },
    {
      icon: Send,
      title: "Instant Transfers",
      description:
        "Transfer money between registered users instantly with a smooth experience.",
    },
    {
      icon: Users,
      title: "Beneficiaries",
      description:
        "Save your favorite recipients for faster and easier money transfers.",
    },
    {
      icon: Wallet,
      title: "Smart Wallet",
      description:
        "Track your available balance and manage your digital wallet effortlessly.",
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description:
        "Get notified instantly whenever money is sent or received.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description:
        "Visualize spending habits and transaction history with interactive charts.",
    },
  ];
  
  export const Features = () => {
    return (
      <section
        id="features"
        className="bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Heading */}
  
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-slate-900">
              Why Choose FabPay?
            </h2>
  
            <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-500">
              Everything you need to manage payments securely,
              quickly, and effortlessly in one modern platform.
            </p>
          </motion.div>
  
          {/* Cards */}
  
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  
            {features.map((feature, index) => {
              const Icon = feature.icon;
  
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-md
                    border
                    border-slate-200
                    transition
                    hover:shadow-2xl
                  "
                >
  
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600">
  
                    <Icon
                      className="text-white"
                      size={30}
                    />
  
                  </div>
  
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
  
                  <p className="mt-4 leading-7 text-slate-500">
                    {feature.description}
                  </p>
  
                </motion.div>
              );
            })}
  
          </div>
        </div>
      </section>
    );
  };