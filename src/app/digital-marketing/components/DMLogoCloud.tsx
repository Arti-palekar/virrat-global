"use client";

import React from "react";
import { motion } from "framer-motion";

const BRANDS = [
  "GOOGLE ADS PREMIER",
  "META BUSINESS PARTNER",
  "LINKEDIN MARKETING",
  "SHOPIFY PLUS",
  "HUBSPOT PLATINUM",
  "SEMRUSH CERTIFIED",
  "SALESFORCE PARTNER",
  "GA4 ANALYTICS HUB",
  "WOOCOMMERCE EXPERT",
  "MAILCHIMP PRO",
];

const REPEAT_BRANDS = Array(4).fill(BRANDS).flat();

export default function DMLogoCloud() {
  return (
    <section className="w-full bg-white border-b border-[#EBEBEB] overflow-hidden select-none py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-6 text-center">
        <p className="text-[12px] font-mono font-bold text-[#888888] tracking-[0.25em] uppercase">
          TRUSTED BY HIGH-GROWTH BRANDS & CERTIFIED ON TOP PLATFORMS
        </p>
      </div>

      {/* Continuous Marquee Strip */}
      <div className="relative w-full overflow-hidden flex items-center py-3 bg-[#F9F9F9] border-y border-[#EBEBEB]">
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          {REPEAT_BRANDS.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-6 px-8 text-[13px] font-black tracking-[0.2em] font-heading uppercase text-[#222222] hover:text-[#D62020] transition-colors duration-300"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62020] flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
