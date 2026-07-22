"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ─── HAND-DRAWN SVG ACCENTS ───────────────────────────────── */

const ArrowAccentLeft = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full stroke-current overflow-visible text-[#CCFF00]"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
);

const ArrowAccentRight = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full stroke-current overflow-visible text-[#CCFF00]"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
);

const ArrowCardRight = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full stroke-current overflow-visible text-black"
    fill="none"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);

const CircularBadge = () => (
  <div className="relative w-28 h-28 md:w-36 md:h-36 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-black/5">
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="bpCirclePath"
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text className="text-[11px] font-black tracking-[0.18em] uppercase" fill="black">
          <textPath href="#bpCirclePath" startOffset="0%">
            START YOUR PROJECT • START YOUR PROJECT • 
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 stroke-current text-black overflow-visible"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </div>
  </div>
);

/* ─── PROCESS DATA ──────────────────────────────────────────── */

const PROCESS_STEPS = [
  {
    id: "01",
    title: "BRIEF\n& DISCOVER",
    sub: "We start by understanding your brand",
    description:
      "Deep-dive into your goals, audience, and market. Every great design starts with a clear strategy.",
    icon: "🎯",
    badge: "Strategy First",
    badgeColor: "bg-[#D62020] hover:bg-[#BF1A1A] transition-all duration-300 shadow-[0_8px_20px_rgba(214,32,32,0.25)] hover:shadow-[0_12px_24px_rgba(214,32,32,0.35)] transform hover:-translate-y-0.5 border-none",
    badgeText: "text-white",
  },
  {
    id: "02",
    title: "DESIGN\n& REFINE",
    sub: "Concepts crafted, iterated to perfection",
    description:
      "We create, present, and refine your visual identity until every detail is exactly right.",
    icon: "✏️",
    badge: "3 Rounds of Revisions",
    badgeColor: "bg-[#CCFF00]",
    badgeText: "text-black",
  },
  {
    id: "03",
    title: "PRINT\n& DELIVER",
    sub: "Premium production, on-time delivery",
    description:
      "High-quality printing and manufacturing with meticulous quality control. Your brand, perfectly produced.",
    icon: "🚀",
    badge: "On-Time Delivery",
    badgeColor: "bg-[#111111]",
    badgeText: "text-white",
  },
];

/* ─── MAIN COMPONENT ────────────────────────────────────────── */

export default function BPProcess() {
  return (
    <div className="min-h-screen bg-[#0038FF] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-hidden w-full">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* ── HERO TYPOGRAPHY SECTION ────────────────────────────── */}
      <main className="flex-1 relative z-10 pt-16 pb-36 md:pt-20 md:pb-52 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">

        {/* Massive stacked typography + floating elements */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 mb-16">

          {/* --- Big words stack --- */}
          <div className="w-full flex flex-col items-center relative z-10 space-y-1 md:space-y-3">

            {/* DESIGN */}
            <div className="w-full flex justify-start pl-[8%] md:pl-[20%] relative z-30">
              <motion.h2
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(4.5rem,12vw,150px)] font-black leading-[0.85] tracking-tighter text-[#CCFF00] m-0 p-0 uppercase font-heading"
                style={{
                  textShadow:
                    "1px 1px 0 #001A99,2px 2px 0 #001A99,3px 3px 0 #001A99,4px 4px 0 #001A99,5px 5px 0 #001A99,6px 6px 0 #001A99,8px 8px 0 #001A99,10px 10px 0 #001A99,12px 12px 0 #001A99",
                }}
              >
                DESIGN
              </motion.h2>
            </div>

            {/* PRINT */}
            <div className="w-full flex justify-center relative z-20">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(5rem,15vw,210px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase font-heading"
                style={{
                  textShadow:
                    "1px 1px 0 #001A99,2px 2px 0 #001A99,3px 3px 0 #001A99,4px 4px 0 #001A99,5px 5px 0 #001A99,6px 6px 0 #001A99,8px 8px 0 #001A99,10px 10px 0 #001A99,12px 12px 0 #001A99",
                }}
              >
                PRINT
              </motion.h2>
            </div>

            {/* DELIVER */}
            <div className="w-full flex justify-start pl-[14%] md:pl-[28%] relative z-10">
              <motion.h2
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(4.5rem,12vw,150px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase font-heading"
                style={{
                  textShadow:
                    "1px 1px 0 #001A99,2px 2px 0 #001A99,3px 3px 0 #001A99,4px 4px 0 #001A99,5px 5px 0 #001A99,6px 6px 0 #001A99,8px 8px 0 #001A99,10px 10px 0 #001A99,12px 12px 0 #001A99",
                }}
              >
                DELIVER
              </motion.h2>
            </div>

          </div>

          {/* --- Absolute floating overlays --- */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">

            {/* Floating card 1 — bottom left (logo branding mockup) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[8%] left-[4%] md:left-[18%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[-12deg] shadow-2xl hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden bg-white/10 flex-shrink-0">
                  <img
                    src="/portfolio/portfolio_logo_branding_1784618160119.png"
                    alt="Logo Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="font-bold text-sm md:text-base text-white leading-tight">Logo Design</p>
                  <p className="text-[10px] md:text-xs text-white/70 mt-1">Brand Identity</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 — top right (packaging mockup) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[12%] right-[4%] md:right-[20%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[12deg] shadow-2xl hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden bg-white/10 flex-shrink-0">
                  <img
                    src="/portfolio/portfolio_luxury_packaging_1784618217548.png"
                    alt="Packaging Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="font-bold text-sm md:text-base text-white leading-tight">Packaging</p>
                  <p className="text-[10px] md:text-xs text-white/70 mt-1">Premium Design</p>
                </div>
              </div>
            </motion.div>

            {/* Hand-drawn arrow — bottom left */}
            <div className="absolute bottom-[0%] left-[0%] md:left-[8%] w-24 h-24 md:w-32 md:h-32 z-20">
              <ArrowAccentLeft />
            </div>

            {/* Hand-drawn arrow — top right */}
            <div className="absolute top-[5%] right-[0%] md:right-[8%] w-24 h-24 md:w-32 md:h-32 z-20">
              <ArrowAccentRight />
            </div>

            {/* Circular spinning badge — bottom right */}
            <Link href="/contact" className="absolute bottom-[-12%] right-[0%] md:right-[14%] z-40 pointer-events-auto">
              <CircularBadge />
            </Link>

          </div>
        </div>
      </main>

      {/* ── BOTTOM WHITE PROCESS CARDS ─────────────────────────── */}
      <section className="bg-white text-black rounded-t-[2.5rem] md:rounded-t-[3.5rem] px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] mt-auto w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.id}
              className="bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-start text-left relative min-h-64 border border-gray-100"
            >
              {/* Step number */}
              <span className="text-xs font-black tracking-[0.2em] text-black/30 uppercase mb-4">
                {step.id}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black whitespace-pre-line">
                {step.title}
              </h3>

              {/* Sub */}
              <p className="text-[11px] md:text-xs text-black/50 font-semibold mb-4">
                {step.sub}
              </p>

              {/* Description */}
              <p className="text-sm text-black/70 leading-relaxed mb-auto">
                {step.description}
              </p>

              {/* Badge pill */}
              <div className={`mt-6 ${step.badgeColor} ${step.badgeText} text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full inline-flex items-center gap-2`}>
                <span>{step.icon}</span>
                {step.badge}
              </div>

              {/* Arrow to next card */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-10 bottom-10 w-14 h-14 z-30">
                  <ArrowCardRight />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Bottom CTA strip */}
        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/50 font-medium">
            Ready to start your branding journey?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D62020] hover:bg-[#BF1A1A] text-white text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 border-none shadow-[0_8px_24px_rgba(214,32,32,0.3)] hover:shadow-[0_12px_28px_rgba(214,32,32,0.4)] transform hover:-translate-y-0.5"
          >
            Get a Free Consultation →
          </Link>
        </div>
      </section>

    </div>
  );
}
