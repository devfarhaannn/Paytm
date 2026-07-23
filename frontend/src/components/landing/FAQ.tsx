import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is FlowPay secure?",
    answer:
      "Yes. FlowPay uses JWT authentication and secure APIs to help protect user accounts and payment operations.",
  },
  {
    question: "How can I transfer money?",
    answer:
      "After signing in, search for a registered user, enter the amount, and confirm the transfer.",
  },
  {
    question: "Can I view my transaction history?",
    answer:
      "Yes. The Transaction History page lets you review all completed transfers and account activity.",
  },
  {
    question: "Can I add beneficiaries?",
    answer:
      "Yes. You can save frequently used recipients as beneficiaries for faster future transfers.",
  },
  {
    question: "Does FlowPay support QR payments?",
    answer:
      "QR payments are planned as one of the upcoming premium features of the application.",
  },
  {
    question: "Can I update my profile information?",
    answer:
      "Yes. You'll be able to edit your profile, upload an avatar, and manage your account settings.",
  },
];

export const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-slate-500 text-lg">
            Everything you need to know about FlowPay.
          </p>

        </motion.div>

        {/* FAQ List */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .4,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >

              {/* Question */}

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >

                <span className="font-semibold text-lg text-slate-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* Answer */}

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: .3,
                    }}
                  >

                    <div className="px-6 pb-6 text-slate-500 leading-7">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};