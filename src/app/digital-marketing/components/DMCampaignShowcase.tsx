"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap, Target, TrendingUp, ShieldAlert, Sparkles } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const COMPARISONS = [
  {
    metric: "Cost Per Lead (CPL)",
    before: "₹420",
    after: "₹142",
    difference: "-66% Cost Reduction",
    desc: "Targeted broad interest bidding without AI vs. Virrat's predictive intent targeting.",
  },
  {
    metric: "Return on Ad Spend (ROAS)",
    before: "1.8x",
    after: "6.4x",
    difference: "+255% ROAS Growth",
    desc: "Unoptimized landing pages & static images vs. Virrat's high-converting UGC video funnel.",
  },
  {
    metric: "Conversion Rate (CVR)",
    before: "1.2%",
    after: "4.8%",
    difference: "4x Conversion Rate",
    desc: "Generic store templates vs. Virrat's CRO-tuned, ultra-fast landing pages.",
  },
  {
    metric: "Ad Attribution Accuracy",
    before: "35%",
    after: "99.4%",
    difference: "100% Truth Signal",
    desc: "Relying on broken browser pixels vs. Virrat's CAPI & server-side GTM setup.",
  },
];

export default function DMCampaignShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const currentItem = COMPARISONS[activeTab];

  return (
    <section className="w-full bg-[#F8F9FA] border-b border-[#EBEBEB] py-16 md:py-24" aria-label="Campaign Showcase & Results">
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
              BEFORE VS AFTER SIMULATOR
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="homepage-section-title m-0"
            >
              Standard Marketing <br />
              <span>VS Virrat Growth Engine.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] text-[#666666] leading-relaxed max-w-md font-body m-0"
          >
            See how our performance marketing infrastructure transforms stagnant marketing budgets into compounding growth.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-10">
          {COMPARISONS.map((comp, idx) => (
            <button
              key={comp.metric}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-full text-[13px] font-bold font-heading transition-all duration-300 ${
                activeTab === idx
                  ? "bg-[#111111] text-white shadow-md"
                  : "bg-white text-[#666666] border border-[#EBEBEB] hover:border-[#111111]"
              }`}
            >
              {comp.metric}
            </button>
          ))}
        </div>

        {/* Comparison Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Box: Before Virrat */}
          <div className="lg:col-span-5 p-8 rounded-[24px] bg-white border border-[#EBEBEB] shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#888888] uppercase tracking-wider">TRADITIONAL AGENCY</span>
              <span className="p-1.5 rounded-full bg-red-100 text-red-600"><ShieldAlert className="w-4 h-4" /></span>
            </div>
            
            <p className="text-[13px] font-mono text-[#777777] uppercase font-semibold mb-6">{currentItem.metric}</p>
            <p className="text-[44px] font-black text-[#111111] font-heading leading-none mb-6">{currentItem.before}</p>
            
            <ul className="space-y-3 pt-4 border-t border-[#EBEBEB] text-[13px] text-[#666666] font-body">
              <li className="flex items-center gap-2 text-red-500"><X className="w-4 h-4 shrink-0" /> High acquisition cost & ad spend burn</li>
              <li className="flex items-center gap-2 text-red-500"><X className="w-4 h-4 shrink-0" /> Broken tracking & missing attribution</li>
              <li className="flex items-center gap-2 text-red-500"><X className="w-4 h-4 shrink-0" /> Low CTR static ad templates</li>
            </ul>
          </div>

          {/* Center Connector Indicator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#D62020] text-white flex items-center justify-center shadow-lg shadow-[#D62020]/30 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-[12px] font-mono font-bold text-[#D62020] tracking-widest uppercase">
              {currentItem.difference}
            </span>
          </div>

          {/* Right Box: Virrat Growth Engine */}
          <div className="lg:col-span-5 p-8 rounded-[24px] bg-white border-2 border-[#D62020] shadow-[0_20px_50px_rgba(214,32,32,0.1)]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#D62020] uppercase tracking-wider">VIRRAT GROWTH ENGINE</span>
              <span className="px-3 py-1 rounded-full bg-[#D62020]/10 text-[#D62020] text-[11px] font-mono font-bold uppercase">
                SCALED RESULT
              </span>
            </div>

            <p className="text-[13px] font-mono text-[#777777] uppercase font-semibold mb-6">{currentItem.metric}</p>
            <p className="text-[44px] font-black text-[#D62020] font-heading leading-none mb-6">{currentItem.after}</p>

            <ul className="space-y-3 pt-4 border-t border-[#EBEBEB] text-[13px] text-[#222222] font-body">
              <li className="flex items-center gap-2 text-[#27C93F] font-semibold"><Check className="w-4 h-4 shrink-0" /> {currentItem.desc}</li>
              <li className="flex items-center gap-2 text-[#27C93F] font-semibold"><Check className="w-4 h-4 shrink-0" /> Real-time server-side tracking & CAPI</li>
              <li className="flex items-center gap-2 text-[#27C93F] font-semibold"><Check className="w-4 h-4 shrink-0" /> High-converting UGC & video creative engine</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
