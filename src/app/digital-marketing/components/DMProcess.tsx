"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Rocket, RefreshCw, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    id: "01",
    phase: "RESEARCH",
    title: "Forensic Audit & Buyer Discovery",
    desc: "We perform a deep-dive audit of your historical ad spend, customer acquisition costs, competitor funnels, and search intent to discover untapped revenue levers.",
    icon: Search,
    deliverables: ["Historical Ad Spend Audit", "Competitor Funnel Analysis", "Search Intent & Keyword Map", "Unit Economics Benchmark"],
  },
  {
    id: "02",
    phase: "STRATEGY",
    title: "Funnel Architecture & Budget Allocation",
    desc: "We engineer a full-funnel acquisition strategy mapping budget allocation across Google, Meta, and LinkedIn with strict target CPA and ROAS thresholds.",
    icon: Compass,
    deliverables: ["Channel Budget Breakdown", "Target CPA & ROAS Modeling", "Creative & Hook Strategy", "Conversion Funnel Wireframes"],
  },
  {
    id: "03",
    phase: "LAUNCH",
    title: "Ad Creative & Campaign Deployment",
    desc: "Our creative studio produces high-converting UGC videos, scroll-stopping ad copy, and high-CTR static assets, launching across multi-touch channels.",
    icon: Rocket,
    deliverables: ["UGC & Motion Video Ads", "High-CTR Static Graphics", "iOS-Proof Server-Side Pixels", "Campaign Structure Setup"],
  },
  {
    id: "04",
    phase: "OPTIMIZE",
    title: "Bid Calibration & CRO A/B Testing",
    desc: "We run daily algorithmic bid optimizations, audience pruning, and landing page A/B tests to systematically drop cost-per-lead and double conversion rates.",
    icon: RefreshCw,
    deliverables: ["Daily Bid & Audience Tuning", "Landing Page A/B Testing", "Creative Refresh Cycles", "CPA & CPL Reduction"],
  },
  {
    id: "05",
    phase: "SCALE",
    title: "Aggressive Expansion & Multi-Channel Domination",
    desc: "Once campaign unit economics are proven, we scale ad spend aggressively while preserving high ROAS and opening secondary acquisition channels.",
    icon: TrendingUp,
    deliverables: ["Budget Doubling Protocols", "Secondary Channel Scale", "LTV Retargeting Flows", "Weekly C-Suite Reports"],
  },
];

export default function DMProcess() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = STEPS[activeIdx];

  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 border-b border-[#EBEBEB]" aria-label="Marketing Process">
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
              5-STEP GROWTH STORYLINE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="homepage-section-title m-0"
            >
              Research → Strategy → Launch <br />
              <span>→ Optimize → Scale.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] text-[#666666] leading-relaxed max-w-md font-body m-0"
          >
            A battle-tested 5-phase growth methodology designed to remove friction and compound your marketing returns over time.
          </motion.p>
        </div>

        {/* 21st.dev Storytelling Process Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeIdx;
            const Icon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex flex-col items-start p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? "bg-[#111111] text-white border-[#111111] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                    : "bg-[#F8F9FA] text-[#111111] border-[#EBEBEB] hover:border-[#CCCCCC]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono font-bold tracking-widest ${isActive ? "text-[#D62020]" : "text-[#888888]"}`}>
                    0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#D62020]" : "text-[#777777]"}`} />
                </div>
                <p className="text-[14px] font-bold font-heading leading-snug">
                  {step.phase}
                </p>
                {isActive && (
                  <motion.div
                    layoutId="activeProcessIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#D62020]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Storytelling Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-[28px] bg-[#F8F9FA] border border-[#EBEBEB] items-center"
          >
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D62020]/10 text-[#D62020] text-[11px] font-mono font-bold uppercase mb-4">
                STEP {activeStep.id} — {activeStep.phase}
              </div>
              <h3 className="text-[26px] md:text-[34px] font-bold text-[#111111] font-heading mb-4 leading-tight">
                {activeStep.title}
              </h3>
              <p className="text-[16px] text-[#555555] font-body leading-relaxed mb-8 max-w-2xl">
                {activeStep.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeStep.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EBEBEB] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#D62020] shrink-0" />
                    <span className="text-[13px] font-bold text-[#222222] font-heading">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Badge (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-[24px] bg-[#111111] text-white p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#D62020]/20 blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono text-[#D62020] font-bold tracking-widest uppercase">GROWTH ENGINE</span>
                  <span className="text-[32px] font-black font-heading text-white/20">{activeStep.id}</span>
                </div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#D62020] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#D62020]/30">
                    {React.createElement(activeStep.icon, { className: "w-7 h-7" })}
                  </div>
                  <h4 className="text-[22px] font-bold font-heading text-white mb-1">{activeStep.phase}</h4>
                  <p className="text-[12px] text-white/60 font-mono">Phase {activeStep.id} of 05 Active</p>
                </div>

                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#D62020] rounded-full transition-all duration-500"
                    style={{ width: `${((activeIdx + 1) / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
