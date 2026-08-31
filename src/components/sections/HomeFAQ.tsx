"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What services does Virrat Global offer?",
    answer: "Virrat Global provides end-to-end business solutions including Branding & Printing, Digital Marketing, Website Development, Custom Software Development, AI Automation, Business Compliance, Mobile App Development, UI/UX Design, ERP/CRM Systems, and ongoing technical support."
  },
  {
    question: "Can I get all services under one package?",
    answer: "Yes. We offer customized business packages that combine branding, website development, digital marketing, AI automation, and compliance services based on your business goals and budget."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on the scope. Branding projects may take 1–2 weeks, websites 2–6 weeks, software solutions 6–16 weeks, while enterprise applications are delivered according to a planned development roadmap."
  },
  {
    question: "Do you develop custom software and mobile applications?",
    answer: "Yes. We build fully customized web applications, ERP systems, CRM solutions, business portals, Android & iOS mobile apps, and enterprise software tailored to your business requirements."
  },
  {
    question: "Do you provide Digital Marketing after website development?",
    answer: "Absolutely. We help businesses grow through SEO, Google Ads, Meta Ads, Social Media Marketing, Content Marketing, Email Marketing, and performance-driven digital campaigns after launching their website."
  },
  {
    question: "Can you automate business processes using AI?",
    answer: "Yes. We develop AI-powered chatbots, workflow automation, CRM integrations, lead automation, intelligent dashboards, and business process automation to improve productivity and reduce manual work."
  },
  {
    question: "Do you provide business registration and compliance services?",
    answer: "Yes. We assist with Company Registration, GST Registration, Trademark Registration, ISO Certification, MSME Registration, Legal Compliance, and other essential business documentation."
  },
  {
    question: "Do you provide maintenance and long-term support after project completion?",
    answer: "Yes. We offer post-launch support, website maintenance, software updates, security monitoring, performance optimization, bug fixes, AMC plans, and dedicated technical assistance to ensure your business continues to grow smoothly."
  }
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-background)] py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="homepage-section-title mb-5">
            Frequently <br />
            <span>Asked Questions</span>
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
                className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[var(--color-primary)] bg-white' : 'border-black/10 bg-transparent hover:border-black/30'}`}
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-xl font-bold font-heading pr-8">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[var(--color-primary)] text-white' : 'bg-black/5 text-[var(--color-primary)]'}`}>
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
                      <div className="px-8 pb-8 text-lg text-[var(--color-secondary)]">
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
