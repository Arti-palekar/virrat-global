"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TESTIMONIALS = [
  {
    id: "01",
    quote:
      "Virrat Global scaled our D2C brand from ₹15L to ₹80L monthly revenue in under 6 months. Their Meta ad creatives and Google PMax strategy are by far the best in the market.",
    name: "Vikramaditya Mehta",
    role: "Co-Founder",
    company: "Aura Home & Living",
    initial: "V",
    service: "Meta & Google Ads",
    result: "8.4x ROAS",
  },
  {
    id: "02",
    quote:
      "Our B2B software startup was struggling with high CPL on LinkedIn. Virrat Global restructured our campaign funnel and dropped our cost-per-qualified-lead by 62%.",
    name: "Ananya Roy",
    role: "Head of Growth",
    company: "CloudFlow SaaS",
    initial: "A",
    service: "LinkedIn B2B Lead Gen",
    result: "-62% CPL",
  },
  {
    id: "03",
    quote:
      "Our organic traffic jumped by 450% in 7 months. Their technical SEO audit and content strategy pushed us to #1 rankings for our most lucrative keywords.",
    name: "Karan Johar",
    role: "Managing Director",
    company: "Apex Healthcare",
    initial: "K",
    service: "SEO & Content Engine",
    result: "+450% Organic",
  },
  {
    id: "04",
    quote:
      "The transparency and speed of execution are phenomenal. We get real-time revenue reporting, weekly creative tests, and immediate campaign optimizations.",
    name: "Neha Agarwal",
    role: "CMO",
    company: "Glow & Co. Cosmetics",
    initial: "N",
    service: "Full-Funnel Marketing",
    result: "+320% Revenue",
  },
];

export default function DMTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeReview = TESTIMONIALS[activeIdx];
  const sideReviews = TESTIMONIALS.filter((_, i) => i !== activeIdx);

  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 border-b border-[#EBEBEB]" aria-label="Client Testimonials">
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
              CLIENT RESULTS & REVIEWS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="homepage-section-title m-0"
            >
              What Growth Leaders Say <br />
              <span>About Partnering With Us.</span>
            </motion.h2>
          </div>
          <p className="text-[14px] text-[#777777] font-mono">
            Verified Client Feedback & Case Validation
          </p>
        </div>

        {/* Unique Non-Slider Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (7 Cols): Featured Review Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative flex flex-col h-full min-h-[420px] rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] p-8 md:p-12 overflow-hidden shadow-sm"
              >
                {/* Background Accent Quote Mark */}
                <span className="absolute -top-6 -right-2 font-heading font-black text-[#D62020] opacity-[0.06] text-[180px] pointer-events-none select-none leading-none">
                  “
                </span>

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#D62020] bg-[#D62020]/10 px-3 py-1 rounded-full uppercase">
                    {activeReview.service}
                  </span>
                  <span className="text-[13px] font-mono text-[#27C93F] font-bold bg-[#27C93F]/10 px-3 py-1 rounded-full">
                    {activeReview.result}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D62020] text-[#D62020]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[20px] md:text-[24px] font-medium font-heading text-[#111111] leading-relaxed mb-10 relative z-10">
                  "{activeReview.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#EBEBEB] relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#D62020] text-white flex items-center justify-center font-bold text-[18px] shadow-sm">
                    {activeReview.initial}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#111111] font-heading leading-tight">{activeReview.name}</h4>
                    <p className="text-[13px] text-[#666666]">{activeReview.role} · {activeReview.company}</p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (5 Cols): Interactive Side Review Selection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {sideReviews.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(TESTIMONIALS.findIndex((t) => t.id === item.id))}
                className="group text-left p-6 rounded-[20px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/50 hover:bg-white hover:shadow-[0_16px_40px_rgba(214,32,32,0.08)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-[#D62020] uppercase">{item.service}</span>
                  <span className="text-[12px] font-mono text-[#27C93F] font-bold">{item.result}</span>
                </div>
                <p className="text-[14px] text-[#555555] font-body leading-snug line-clamp-2 mb-3 group-hover:text-[#111111] transition-colors">
                  "{item.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-bold text-[#111111] font-heading">{item.name} <span className="text-[#888888] font-normal">({item.company})</span></p>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#D62020] transition-colors" />
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
