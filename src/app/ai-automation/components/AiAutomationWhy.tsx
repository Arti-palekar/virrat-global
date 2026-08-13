"use client";

import React from "react";
import {
  Clock,
  Zap,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Brain,
  MessageCircle,
  CircleDollarSign,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01";

/* ─── DATA ROWS ─── */

const row1Cards = [
  {
    title: "Save Time",
    desc: "Automate repetitive tasks and give your team more time to focus on high-value work.",
    icon: Clock,
  },
  {
    title: "Work 24/7",
    desc: "AI workflows keep running around the clock without depending on manual intervention.",
    icon: Zap,
  },
  {
    title: "Reduce Errors",
    desc: "Automated workflows create consistent processes and reduce costly manual mistakes.",
    icon: ShieldCheck,
  },
  {
    title: "Scale Faster",
    desc: "Handle more customers, leads, and operations without increasing repetitive workload.",
    icon: TrendingUp,
  },
];

const row2Cards = [
  {
    title: "Connect Your Tools",
    desc: "Bring your apps, APIs, databases, and business systems together into one workflow.",
    icon: Workflow,
  },
  {
    title: "AI-Powered Decisions",
    desc: "Use AI to analyze information, classify data, and trigger the right action automatically.",
    icon: Brain,
  },
  {
    title: "Faster Response",
    desc: "Respond to leads, customers, and internal requests instantly with intelligent automation.",
    icon: MessageCircle,
  },
  {
    title: "Lower Operational Costs",
    desc: "Reduce repetitive manual work and improve operational efficiency as your business grows.",
    icon: CircleDollarSign,
  },
];

export default function AiAutomationWhy() {
  return (
    <section className="w-full bg-[#050b09] py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-24 border-b border-zinc-900 relative overflow-hidden">
      {/* Subtle background red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#E31E24]/[0.012] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[#E31E24] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
            WHY AI AUTOMATION
          </p>
          
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-6 font-heading !text-white">
            Why AI Automation?
          </h2>
          
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] !text-white/75 font-sans">
            Turn repetitive work into intelligent workflows that save time, reduce errors, and help your business scale.
          </p>
        </div>

        {/* ── TWO-ROW MARQUEE DISPLAY ── */}
        <div className="relative w-full flex flex-col gap-6 md:gap-8 overflow-hidden select-none py-4">
          
          {/* Side Fades (Adapted to dark background) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/6 bg-gradient-to-r from-[#050b09] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/6 bg-gradient-to-l from-[#050b09] to-transparent" />

          {/* Row 1 — Moves Normal, pauses on hover */}
          <Marquee pauseOnHover className="[--duration:35s]">
            {row1Cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Card
                  key={i}
                  className="group relative w-[260px] sm:w-[290px] lg:w-[320px] overflow-hidden border border-[#E31E24]/20 bg-black/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24] hover:shadow-[0_0_30px_rgba(227,30,36,0.18)]"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Icon 
                        size={24} 
                        className="text-white transition-colors duration-300 group-hover:text-[#E31E24]" 
                        aria-hidden="true"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#E31E24]">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </Marquee>

          {/* Row 2 — Moves Reverse, pauses on hover */}
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {row2Cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Card
                  key={i}
                  className="group relative w-[260px] sm:w-[290px] lg:w-[320px] overflow-hidden border border-[#E31E24]/20 bg-black/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24] hover:shadow-[0_0_30px_rgba(227,30,36,0.18)]"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Icon 
                        size={24} 
                        className="text-white transition-colors duration-300 group-hover:text-[#E31E24]" 
                        aria-hidden="true"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#E31E24]">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </Marquee>

        </div>

      </div>
    </section>
  );
}
