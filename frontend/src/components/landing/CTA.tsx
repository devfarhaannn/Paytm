import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 py-24">

      {/* Background Blur */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-white md:text-6xl"
        >
          Ready to Experience
          <br />
          Modern Digital Banking?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-indigo-100"
        >
          Join thousands of users who trust FlowPay for
          secure, fast and reliable digital payments.
          Create your free account today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:scale-105"
          >
            Get Started

            <ArrowRight size={18} />
          </Link>

          <Link
            to="/signin"
            className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-indigo-700"
          >
            Sign In
          </Link>

        </motion.div>

      </div>

    </section>
  );
};