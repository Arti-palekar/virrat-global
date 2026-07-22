"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, PhoneCall, ShieldCheck } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DMCTA() {
  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-36 relative overflow-hidden" aria-label="Start Your Marketing Journey">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#D62020]/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D62020]/30 bg-[#D62020]/10 text-[#D62020] text-[12px] font-mono font-bold tracking-widest uppercase mb-6"
        >
          READY TO SCALE YOUR REVENUE?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-black font-heading leading-[1.02] tracking-tighter uppercase mb-6 max-w-4xl mx-auto text-[#111111]"
        >
          Stop Burning Ad Spend. <br />
          <span className="text-[#D62020]">Start Generating Predictable ROAS.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="text-[17px] md:text-[19px] text-[#555555] leading-relaxed font-body max-w-2xl mx-auto mb-10"
        >
          Book a free 30-minute growth audit with our senior performance strategists. We'll analyze your current ad accounts, SEO rankings, and funnel bottlenecks with 0 obligations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-5 mb-14"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-9 py-5 rounded-full bg-[#D62020] hover:bg-[#BF1A1A] text-white text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_12px_40px_rgba(214,32,32,0.3)] hover:shadow-[0_18px_50px_rgba(214,32,32,0.45)] transform hover:-translate-y-1"
          >
            Claim Free Marketing Audit
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </Link>

          <a
            href="tel:+918484042080"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-full border border-[#EBEBEB] hover:border-[#111111] bg-white text-[#111111] text-[13px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#F8F9FA]"
          >
            <PhoneCall className="w-4 h-4 text-[#D62020]" />
            Call +91 8484 04 2080
          </a>
        </motion.div>

        {/* Trust Footnote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-8 text-[12px] font-mono text-[#777777] uppercase tracking-widest pt-8 border-t border-[#EBEBEB]"
        >
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#D62020]" /> No Long-Term Contracts</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#D62020]" /> 100% Free Audit Report</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#D62020]" /> 24/7 Live Analytics</span>
        </motion.div>

      </div>
    </section>
  );
}
