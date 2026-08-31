"use client";

import React from "react";
import { motion } from "framer-motion";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { Search, Target, Zap, BarChart3, Rocket, ShieldCheck } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MARKETING_ORBITAL_DATA: TimelineItem[] = [
  {
    id: 1,
    title: "1. Market Audit",
    date: "Phase 01",
    content: "Deep competitive audit, audience intent mapping, and SEO baseline diagnostic.",
    category: "Audit & Intel",
    icon: Search,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "2. Strategy & Funnels",
    date: "Phase 02",
    content: "Full-funnel Google & Meta campaign setup, keyword strategy, and creative hooks.",
    category: "Architecture",
    icon: Target,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "3. Campaign Launch",
    date: "Phase 03",
    content: "PMax search ads, paid social scaling, and server-side GA4 attribution go-live.",
    category: "Go-Live",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 85,
  },
  {
    id: 4,
    title: "4. AI Optimization",
    date: "Phase 04",
    content: "Real-time AI smart bidding, negative keyword suppression, and creative iteration.",
    category: "Optimization",
    icon: Zap,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 70,
  },
  {
    id: 5,
    title: "5. Scale & Revenue",
    date: "Phase 05",
    content: "Predictable customer acquisition scaling, lower CPA, and multi-channel expansion.",
    category: "Scaling",
    icon: BarChart3,
    relatedIds: [4, 6],
    status: "pending",
    energy: 50,
  },
  {
    id: 6,
    title: "6. LTV Retention",
    date: "Phase 06",
    content: "Automated Klaviyo email drips, VIP loyalty flows, and max customer LTV.",
    category: "Retention",
    icon: ShieldCheck,
    relatedIds: [5],
    status: "pending",
    energy: 30,
  },
];

export default function DMOrbitalProcess() {
  return (
    <section className="w-full bg-[#09090b] text-white border-b border-white/10 relative overflow-hidden select-none py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D62020]/[0.05] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="homepage-section-tag dark-theme inline-block mb-3"
          >
            INTERACTIVE ORBITAL ENGINE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="text-[2.5rem] md:text-[3.5rem] font-bold font-heading text-white tracking-tight leading-[1.08] mb-4"
          >
            Radial Marketing <br />
            <span className="text-[#D62020]">Execution Timeline.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[15px] md:text-[17px] text-[#A1A1AA] font-normal leading-relaxed font-body"
          >
            Click any node on the orbital timeline below to inspect connected funnels, real-time campaign energy metrics, and execution phases.
          </motion.p>
        </div>

        {/* Radial Orbital Timeline Component Container */}
        <div className="w-full">
          <RadialOrbitalTimeline timelineData={MARKETING_ORBITAL_DATA} />
        </div>

      </div>
    </section>
  );
}
