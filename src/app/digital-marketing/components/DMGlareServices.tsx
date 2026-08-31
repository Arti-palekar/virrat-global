"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Target, Share2, ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FEATURED_PILLARS = [
  {
    id: "01",
    icon: Search,
    category: "ORGANIC SEARCH ENGINE",
    title: "SEO & Technical Authority",
    desc: "Dominate page-1 Google rankings with deep technical audits, schema architecture, high-intent buyer keywords, and authority link building.",
    metricLabel: "PROVEN BENCHMARK",
    metricVal: "+450% Traffic YoY",
    highlights: ["Core Web Vitals Optimized", "Intent Keyword Mapping", "High-Authority Backlinks"],
  },
  {
    id: "02",
    icon: Target,
    category: "HIGH INTENT BUYERS",
    title: "Google & PMax Campaigns",
    desc: "Laser-focused Search, Shopping, and Performance Max funnels structured to convert buyers at the lowest Cost Per Acquisition.",
    metricLabel: "TARGET RETURN",
    metricVal: "8.4x Average ROAS",
    highlights: ["PMax Conversion Funnels", "Negative Keyword Rules", "Smart Bidding Optimization"],
  },
  {
    id: "03",
    icon: Share2,
    category: "PAID SOCIAL SCALE",
    title: "Meta & Video Ads",
    desc: "High-converting video creative hooks, UGC ad variations, and custom audience retargeting funnels built to scale paid social ROI.",
    metricLabel: "AVERAGE CTR",
    metricVal: "4.8% Click-Through",
    highlights: ["UGC Video Hooks", "Custom Audience Stacking", "Dynamic Product Catalogs"],
  },
];

export default function DMGlareServices() {
  return (
    <section className="w-full bg-[#FAFAFA] text-[#111111] border-b border-[#EBEBEB] relative overflow-hidden select-none py-16 md:py-24">
      {/* Subtle Light Radial Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#D62020]/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="homepage-section-tag inline-block mb-3 text-[#D62020]"
          >
            HIGH-IMPACT CAPABILITIES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="text-[2.5rem] md:text-[3.5rem] font-bold font-heading text-[#111111] tracking-tight leading-[1.08] mb-4"
          >
            Flagship Growth <br />
            <span className="text-[#D62020]">Pillars & Solutions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body"
          >
            Our core digital marketing pillars engineered to expand market share, optimize acquisition costs, and drive predictable revenue.
          </motion.p>
        </div>

        {/* 3-Card Redesigned Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {FEATURED_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: EASE }}
                whileHover={{ y: -10 }}
                className="group relative p-8 md:p-9 rounded-[24px] bg-white border border-[#ECECEC] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_rgba(214,32,32,0.12)] hover:border-[#D62020] hover:ring-2 hover:ring-[#D62020]/20 transition-all duration-350 flex flex-col justify-between text-left cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Top Row: Icon & Tag Badge */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-13 h-13 rounded-2xl bg-[#F8F9FA] border border-[#EBEBEB] text-[#D62020] flex items-center justify-center shadow-xs group-hover:bg-[#D62020] group-hover:text-white group-hover:border-[#D62020] transition-all duration-300 transform group-hover:scale-110">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#D62020] bg-[#D62020]/10 px-3 py-1 rounded-full uppercase">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#111111] font-heading leading-tight group-hover:text-[#D62020] transition-colors duration-300 mb-6">
                    {pillar.title}
                  </h3>

                  <p className="text-[14px] md:text-[15px] text-[#666666] font-body leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-8">
                    {pillar.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[13px] font-bold text-[#333333] font-heading">
                        <CheckCircle2 className="w-4 h-4 text-[#D62020] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Metric Bar & Circular CTA */}
                <div className="pt-6 border-t border-[#EBEBEB] flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] font-mono text-[#888888] uppercase block mb-0.5">
                      {pillar.metricLabel}
                    </span>
                    <span className="text-[16px] font-bold text-[#111111] font-heading group-hover:text-[#D62020] transition-colors">
                      {pillar.metricVal}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#F8F9FA] border border-[#EBEBEB] text-[#111111] flex items-center justify-center group-hover:bg-[#D62020] group-hover:border-[#D62020] group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.5} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
