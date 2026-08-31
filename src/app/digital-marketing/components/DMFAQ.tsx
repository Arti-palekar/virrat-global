"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FAQS = [
  {
    q: "How quickly can we expect to see results from Google Ads & Meta campaigns?",
    a: "Paid ad campaigns (Google Search, Meta, Shopping) start generating impressions, traffic, and leads within 24 to 48 hours of launch. Full optimization and CPA stabilization typically occur within 14 to 21 days as machine learning algorithms calibrate.",
  },
  {
    q: "What is the minimum recommended monthly ad budget to start?",
    a: "We recommend a minimum ad spend of ₹50,000 to ₹1,500,000/month depending on your industry and target market. This ensures enough conversion data volume for algorithm optimization and rapid creative A/B testing.",
  },
  {
    q: "How do you track ROI and attribution accurately?",
    a: "We deploy server-side tracking (Conversions API), Google Tag Manager containers, and GA4 custom events. Every client gets a 24/7 real-time Looker Studio dashboard showing ad spend, cost-per-lead (CPL), cost-per-acquisition (CPA), and overall ROAS.",
  },
  {
    q: "What makes Virrat Global different from traditional digital marketing agencies?",
    a: "We don't focus on vanity metrics like impressions or likes. We operate as your dedicated growth partner with performance guarantees, senior media buyers, in-house video/copy creative production, and full transparency.",
  },
  {
    q: "Do you require long-term lock-in contracts?",
    a: "No long-term lock-ins. We work on flexible 3-month or monthly performance retainer models. Our 98.2% client retention rate comes from delivering consistent bottom-line ROI, not binding legal contracts.",
  },
  {
    q: "How does your SEO strategy ensure page-1 Google rankings?",
    a: "We combine technical site architecture fixes, high-intent keyword mapping, EEAT content production, and authoritative white-hat backlink acquisition. Most clients see significant page-1 movements within 90 to 120 days.",
  },
];

export default function DMFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white border-b border-[#EBEBEB] py-16 md:py-24" aria-label="Frequently Asked Questions">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="homepage-section-tag inline-block mb-3"
          >
            CLEAR ANSWERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="homepage-section-title m-0"
          >
            Frequently Asked <br />
            <span>Questions.</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: EASE }}
                className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8F9FA] border-[#111111]"
                    : "bg-white border-[#EBEBEB] hover:border-[#CCCCCC]"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-[17px] md:text-[19px] font-bold text-[#111111] font-heading leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#D62020] text-white" : "bg-[#F0F0F0] text-[#111111]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[15px] text-[#555555] font-body leading-relaxed border-t border-[#EBEBEB]/60 mt-2 pt-4">
                        {faq.a}
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
