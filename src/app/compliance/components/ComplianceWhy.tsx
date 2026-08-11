"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Reduce regulatory and operational risk",
  "Protect sensitive business and customer information",
  "Improve internal processes and accountability",
  "Build trust with customers and partners",
  "Stay prepared for audits and regulatory changes"
];

export default function ComplianceWhy() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      {/* Very subtle background line/gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-gradient-to-r from-black/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Heading and Text */}
          <div className="flex flex-col z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-8"
            >
              REDUCE RISK.<br />
              PROTECT DATA.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] to-[#FF7A59]">BUILD TRUST.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[#666666] max-w-[480px] leading-relaxed"
            >
              Compliance is more than meeting requirements. It creates stronger processes, protects your business and gives customers and partners greater confidence.
            </motion.p>
          </div>

          {/* Right: Benefits List */}
          <div className="flex flex-col gap-6 z-10">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-[#E8E8E8] transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0 mt-0.5 relative">
                  {/* Subtle hover pulse */}
                  <div className="absolute inset-0 rounded-full border border-[#E31E24] opacity-0 group-hover:animate-ping" style={{ animationDuration: '2s' }} />
                  <Check className="w-4 h-4 text-[#E31E24]" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-medium text-[#111111] leading-snug pt-1">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
