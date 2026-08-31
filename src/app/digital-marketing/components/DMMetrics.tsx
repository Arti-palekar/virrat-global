"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const METRICS = [
  {
    number: "500+",
    label: "CAMPAIGNS MANAGED",
    desc: "Across Meta, Google, LinkedIn, and organic SEO channels.",
  },
  {
    number: "4.8M+",
    label: "LEADS GENERATED",
    desc: "Verified high-intent B2B & B2C inquiries delivered to clients.",
  },
  {
    number: "₹180Cr+",
    label: "REVENUE CREATED",
    desc: "Tracked client sales directly attributed to marketing campaigns.",
  },
  {
    number: "6.4x",
    label: "AVERAGE AD ROAS",
    desc: "Consistent return on ad spend across performance accounts.",
  },
  {
    number: "98.2%",
    label: "RETENTION RATE",
    desc: "Clients who renew their monthly retainer with Virrat Global.",
  },
];

export default function DMMetrics() {
  return (
    <section className="w-full bg-white text-[#111111] border-b border-[#EBEBEB] py-16 md:py-24" aria-label="Marketing Metrics">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="homepage-section-tag inline-block mb-3"
          >
            IMPACT IN NUMBERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="homepage-section-title m-0"
          >
            Quantifiable Scale. <br />
            <span>By The Numbers.</span>
          </motion.h2>
        </div>

        {/* Metrics Grid (5 Cards - White Light Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {METRICS.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE }}
              className="flex flex-col p-6 rounded-[20px] bg-[#F8F9FA] border border-[#EBEBEB] text-center hover:border-[#D62020]/50 hover:bg-white hover:shadow-[0_16px_40px_rgba(214,32,32,0.08)] transition-all duration-300"
            >
              <span className="text-[36px] md:text-[44px] font-black text-[#D62020] font-heading leading-none mb-2">
                {m.number}
              </span>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#111111] uppercase mb-3">
                {m.label}
              </span>
              <p className="text-[13px] text-[#666666] leading-relaxed font-body mt-auto">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
