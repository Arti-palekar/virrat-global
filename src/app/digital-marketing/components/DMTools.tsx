"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PLATFORMS = [
  { name: "Google Ads", category: "PAID SEARCH & PMAX", badge: "PREMIER PARTNER" },
  { name: "Meta Ads", category: "PAID SOCIAL", badge: "BUSINESS PARTNER" },
  { name: "LinkedIn Marketing", category: "B2B ABM ADVERTISING", badge: "CERTIFIED" },
  { name: "Instagram Growth", category: "SOCIAL & CREATIVE", badge: "NATIVE" },
  { name: "Google Analytics 4", category: "DATA & ATTRIBUTION", badge: "GA4 CERTIFIED" },
  { name: "Google Search Console", category: "ORGANIC DATA", badge: "SEO ENGINE" },
  { name: "Google Tag Manager", category: "SERVER-SIDE TRACKING", badge: "PIXEL STACK" },
  { name: "Semrush", category: "SEO & COMPETITOR INTEL", badge: "PRO" },
  { name: "Ahrefs", category: "BACKLINK AUDIT", badge: "ENTERPRISE" },
  { name: "HubSpot", category: "CRM & AUTOMATION", badge: "PLATINUM" },
];

export default function DMTools() {
  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 border-b border-[#EBEBEB]" aria-label="Tools & Platforms">
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
              21ST.DEV HOVER MATRIX
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="homepage-section-title m-0"
            >
              Enterprise Marketing Stack. <br />
              <span>Certified Ecosystem.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] text-[#666666] leading-relaxed max-w-md font-body m-0"
          >
            We leverage world-class advertising platforms, SEO tools, analytics software, and automation engines with certified proficiency.
          </motion.p>
        </div>

        {/* 10 Platform Badge Grid with 21st.dev Hover Interactions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PLATFORMS.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.05, ease: EASE }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-6 rounded-[22px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/50 hover:bg-white hover:shadow-[0_16px_40px_rgba(214,32,32,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D62020] group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#D62020] bg-[#D62020]/10 px-2.5 py-0.5 rounded-full uppercase">
                  {tool.badge}
                </span>
              </div>

              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#111111] font-heading leading-tight mb-1 group-hover:text-[#D62020] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-[11px] font-mono text-[#777777] uppercase tracking-wider">
                  {tool.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
