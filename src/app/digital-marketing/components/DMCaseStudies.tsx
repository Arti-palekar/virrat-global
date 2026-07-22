"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, DollarSign, Users, Award } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CASE_STUDIES = [
  {
    id: "01",
    client: "LUXE FURNISHINGS D2C",
    title: "Scaling Luxury Home Decor to 8.4x ROAS on Meta & Google Ads",
    category: "E-COMMERCE & PERFORMANCE ADS",
    metrics: [
      { label: "ROAS ACHIEVED", val: "8.4x" },
      { label: "REVENUE GROWTH", val: "+420%" },
      { label: "CPA REDUCTION", val: "-45%" },
    ],
    summary: "Re-architected Meta dynamic product ads and Google Performance Max campaigns paired with custom UGC video hooks.",
  },
  {
    id: "02",
    client: "FINTECH SAAS PLATFORM",
    title: "Generating 14,000+ Qualified B2B Leads via LinkedIn & SEO",
    category: "B2B LEAD GENERATION",
    metrics: [
      { label: "QUALIFIED LEADS", val: "14.2K+" },
      { label: "ORGANIC TRAFFIC", val: "+680%" },
      { label: "COST PER LEAD", val: "₹180" },
    ],
    summary: "Implemented technical SEO overhauls, high-intent lead magnet campaigns, and hyper-targeted LinkedIn ABM outreach.",
  },
  {
    id: "03",
    client: "PREMIUM DENTAL CLINICS",
    title: "Dominating Local Search & Booking 1,200+ High-Ticket Patients",
    category: "LOCAL SEO & GOOGLE ADS",
    metrics: [
      { label: "PATIENT BOOKINGS", val: "1,250+" },
      { label: "MAP PACK RANK", val: "#1 Spot" },
      { label: "ROAS ON ADS", val: "6.2x" },
    ],
    summary: "Optimized 12 Google Business Profiles, targeted high-intent local search ads, and implemented automated SMS review growth.",
  },
];

export default function DMCaseStudies() {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-b border-[#EBEBEB]" aria-label="Case Studies">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#EBEBEB]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="homepage-section-tag inline-block mb-3"
            >
              SUCCESS STORIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="homepage-section-title m-0"
            >
              Proven Results. <br />
              <span>Real Client Impact.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-[13px] font-black uppercase tracking-[0.18em] text-[#111111] hover:text-[#D62020] transition-colors"
            >
              View All Case Studies
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>

        {/* Case Studies Grid (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className="group flex flex-col p-8 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400"
            >
              {/* Client & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#D62020] uppercase bg-[#D62020]/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-[12px] font-mono text-[#888888] font-bold">{item.id}</span>
              </div>

              <p className="text-[12px] font-mono text-[#777777] uppercase font-semibold tracking-wider mb-2">
                {item.client}
              </p>

              <h3 className="text-[22px] font-bold text-[#111111] font-heading leading-snug mb-4 group-hover:text-[#D62020] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-[14px] text-[#666666] leading-relaxed font-body mb-8">
                {item.summary}
              </p>

              {/* Metrics Grid */}
              <div className="mt-auto pt-6 border-t border-[#EBEBEB] grid grid-cols-3 gap-2">
                {item.metrics.map((m, i) => (
                  <div key={i} className="text-center p-2 rounded-xl bg-white border border-[#EBEBEB]">
                    <p className="text-[18px] font-black text-[#111111] font-heading">{m.val}</p>
                    <p className="text-[9px] font-mono text-[#888888] uppercase mt-0.5 font-semibold">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
