"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is AI automation and how can it help my business?",
    answer: "AI automation combines artificial intelligence with automated workflows to handle repetitive tasks, improve decision-making, streamline operations and help teams focus on higher-value work."
  },
  {
    question: "Which business processes can you automate?",
    answer: "We can automate workflows such as lead management, customer support, CRM updates, data processing, follow-ups, reporting, internal operations and other repetitive business processes."
  },
  {
    question: "Can AI automation integrate with our existing CRM and business tools?",
    answer: "Yes. We can connect automation workflows with existing CRMs, communication platforms, forms, databases and other business tools depending on your current technology stack."
  },
  {
    question: "Can you build custom AI automation workflows for our business?",
    answer: "Absolutely. We don't use a one-size-fits-all approach. Every automation system we build is custom-tailored to fit your unique operational needs and business goals."
  },
  {
    question: "How long does it take to implement an AI automation solution?",
    answer: "Implementation typically takes 2 to 6 weeks, depending on the complexity of the workflow, the number of systems being integrated, and your specific requirements."
  },
  {
    question: "Will AI automation replace our existing team?",
    answer: "No, AI automation is designed to augment your team, not replace them. It takes over the tedious, repetitive work so your employees can focus on strategic, creative, and customer-facing tasks."
  },
  {
    question: "Can you automate lead generation and customer follow-ups?",
    answer: "Yes. We set up intelligent lead capture and automated follow-up sequences that engage prospects immediately, qualify them, and route them to your sales team without manual intervention."
  },
  {
    question: "How do you maintain security and data privacy with AI automation?",
    answer: "We use enterprise-grade security protocols, secure APIs, and encrypted data transfers. We also ensure our AI automation solutions comply with relevant data privacy regulations to keep your business information safe."
  }
];

export default function AiAutomationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-22 bg-white text-[#111111]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block text-[#E52B26] text-xs font-bold tracking-[0.25em] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[#111111]">
            Everything you need to know about our <span className="text-[#E52B26]">AI automation</span> services.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[#111111] bg-[#FAF9F6]' : 'border-black/10 bg-transparent hover:border-black/30'}`}
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-xl font-bold font-heading pr-8 text-[#111111]">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#E52B26] text-white' : 'bg-black/5 text-[#111111]'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-lg text-[#555555]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
