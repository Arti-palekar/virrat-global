"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart4, Cpu, Sparkles, Users2, LineChart, TrendingUp, CheckCircle2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DMWhyChooseUs() {
  return (
    <section className="w-full bg-white border-b border-[#EBEBEB] py-16 md:py-24" aria-label="Why Choose Us">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#EBEBEB]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="homepage-section-tag inline-block mb-3"
            >
              WHY VIRRAT GLOBAL
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="homepage-section-title m-0"
            >
              Engineering Growth. <br />
              <span>Not Just Vanity Impressions.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] text-[#666666] leading-relaxed max-w-md font-body m-0"
          >
            We don't focus on vanity metrics like likes or reach. We measure success by bottom-line growth, customer acquisition cost reduction, and scalable ROAS.
          </motion.p>
        </div>

        {/* 2026 Bento Grid Layout (Asymmetrical) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Tile 1: Large (2-Col Span) - Performance Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="md:col-span-2 lg:col-span-2 group p-8 md:p-10 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#D62020] shadow-sm">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D62020] bg-[#D62020]/10 px-3 py-1 rounded-full uppercase">
                  ROI GUARANTEE
                </span>
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#111111] font-heading leading-tight group-hover:text-[#D62020] transition-colors mb-6">
                Performance Guarantee & Clear KPIs
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed font-body max-w-xl mb-6">
                We align our incentives with your revenue growth. Clear target CPL, CPA, and ROAS commitments set before launching any campaign.
              </p>
            </div>

            {/* Visual Callout */}
            <div className="p-4 rounded-xl bg-white border border-[#EBEBEB] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#111111] font-heading">
                <CheckCircle2 className="w-4 h-4 text-[#D62020]" /> Guaranteed CPL Cap Set Before Campaign Launch
              </div>
              <span className="text-[12px] font-mono text-[#27C93F] font-bold">100% Protected</span>
            </div>
          </motion.div>

          {/* Bento Tile 2: Standard (1-Col) - Multi-Touch Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="group p-8 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#111111] group-hover:text-[#D62020] transition-colors mb-6 shadow-sm">
                <BarChart4 className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#777777] uppercase block mb-2">FULL-FUNNEL ATTRIBUTION</span>
              <h3 className="text-[20px] font-bold text-[#111111] font-heading leading-snug group-hover:text-[#D62020] transition-colors mb-6">
                Server-Side GA4 Tracking
              </h3>
              <p className="text-[14px] text-[#666666] leading-relaxed font-body">
                Trace every rupee spent to exact sales conversions with iOS-proof server-side pixels.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#27C93F]">+99.4% Tracking Accuracy</span>
            </div>
          </motion.div>

          {/* Bento Tile 3: Standard (1-Col) - AI Bidding */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="group p-8 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#111111] group-hover:text-[#D62020] transition-colors mb-6 shadow-sm">
                <Cpu className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#777777] uppercase block mb-2">AI-POWERED BIDDING</span>
              <h3 className="text-[20px] font-bold text-[#111111] font-heading leading-snug group-hover:text-[#D62020] transition-colors mb-6">
                Predictive Audience Engine
              </h3>
              <p className="text-[14px] text-[#666666] leading-relaxed font-body">
                AI algorithms that target high-intent buyers before competitors bid on them.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#D62020]">-38% Lower CPA</span>
            </div>
          </motion.div>

          {/* Bento Tile 4: Standard (1-Col) - Senior Strategists */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="group p-8 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#111111] group-hover:text-[#D62020] transition-colors mb-6 shadow-sm">
                <Users2 className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#777777] uppercase block mb-2">SENIOR EXPERTS ONLY</span>
              <h3 className="text-[20px] font-bold text-[#111111] font-heading leading-snug group-hover:text-[#D62020] transition-colors mb-6">
                No Junior Account Reps
              </h3>
              <p className="text-[14px] text-[#666666] leading-relaxed font-body">
                You work directly with seasoned media buyers & growth directors.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#111111]">10+ Yrs Avg Experience</span>
            </div>
          </motion.div>

          {/* Bento Tile 5: Large (3-Col Span) - Creative Engine & Live Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="md:col-span-3 lg:col-span-3 group p-8 md:p-10 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#D62020] mb-6 shadow-sm">
                <Sparkles className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D62020] uppercase block mb-2">
                IN-HOUSE CREATIVE STUDIO
              </span>
              <h3 className="text-[24px] font-bold text-[#111111] font-heading leading-tight group-hover:text-[#D62020] transition-colors mb-6">
                High-Converting Ad Creatives & UGC Motion Studio
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed font-body">
                We design high-CTR video hooks, UGC ads, motion graphics, and persuasive landing page copy engineered specifically to stop the scroll and convert cold visitors.
              </p>
            </div>

            <div className="w-full lg:w-72 p-6 rounded-2xl bg-white border border-[#EBEBEB] shadow-sm flex flex-col gap-3 shrink-0">
              <div className="flex items-center justify-between text-[12px] font-mono font-bold">
                <span className="text-[#777777]">WEEKLY CREATIVE TESTS</span>
                <span className="text-[#D62020]">12+ HOOKS</span>
              </div>
              <div className="w-full h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#D62020] w-4/5 rounded-full" />
              </div>
              <span className="text-[11px] text-[#777777] font-mono">Continuous Creative Iteration & Scale</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
