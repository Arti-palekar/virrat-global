"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Keyboard,
  Mail,
  Copy,
  Users,
  Database,
  AlertCircle,
  ClipboardList,
  Zap,
  Bot,
  Link2,
  MessageSquare,
  RefreshCw,
  Clock,
  ArrowRight,
  ArrowDown,
  Layers,
  Sparkles,
} from "lucide-react";

/* ─── DATA ─── */

const beforeItems = [
  { icon: ClipboardList, text: "Repetitive data entry" },
  { icon: Users, text: "Manual lead follow-ups" },
  { icon: Copy, text: "Copy-pasting between tools" },
  { icon: Mail, text: "Emails handled one-by-one" },
  { icon: Keyboard, text: "Employees doing repetitive tasks" },
  { icon: Database, text: "Data scattered across platforms" },
  { icon: AlertCircle, text: "Missed tasks and human errors" },
];

const afterItems = [
  { icon: Zap, text: "Automated data collection & processing" },
  { icon: Bot, text: "AI-powered lead qualification" },
  { icon: Link2, text: "Connected tools & workflows" },
  { icon: MessageSquare, text: "Automated communication" },
  { icon: Bot, text: "AI agents handle repetitive tasks" },
  { icon: RefreshCw, text: "Real-time data synchronization" },
  { icon: Clock, text: "24/7 automated workflows", bold: true },
];

/* ─── ANIMATION VARIANTS ─── */

const cardVariants = {
  hidden: () => ({ opacity: 0, y: 20 }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ─── COMPONENT ─── */

export default function AiAutomationBeforeAfter() {
  return (
    <section className="w-full bg-[#000000] px-6 md:px-12 lg:px-24 border-b border-zinc-900 relative overflow-hidden py-16 md:py-24">
      {/* Subtle background red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ED1C24]/[0.015] blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-tight font-heading !text-white mb-5">
            Before <span className="text-[#ED1C24]">→</span> After
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] !text-[#D1D1D1] font-sans max-w-[580px] mx-auto">
            See how AI automation transforms repetitive manual work into intelligent, connected workflows.
          </p>
        </div>

        {/* ── TRANSFORMATION GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_56px_1fr] gap-6 lg:gap-0 items-stretch mb-12 md:mb-14">

          {/* ── BEFORE CARD ── */}
          <motion.article
            custom={-1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="group relative rounded-2xl border border-[#2A2A2A] bg-[#111111] p-7 md:p-9 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
                <Layers size={18} className="text-zinc-400" strokeWidth={1.8} />
              </span>
              <h3 className="text-[18px] sm:text-[20px] font-heading font-bold !text-white leading-tight">
                Manual &amp; Time-Consuming
              </h3>
            </div>

            {/* Items list */}
            <ul className="space-y-4">
              {beforeItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <Icon size={16} className="text-[#B8B8B8] shrink-0" strokeWidth={1.8} />
                    <span className="text-[14px] sm:text-[15px] leading-[1.5] !text-[#B8B8B8] font-sans">
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            {/* Status badge */}
            <div className="mt-7">
              <span className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-[#1F1F1F] text-zinc-400 border border-[#2A2A2A]">
                Status: Pending
              </span>
            </div>
          </motion.article>

          {/* ── CENTER ARROW ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.4 }}
            aria-hidden="true"
            className="flex items-center justify-center"
          >
            {/* Desktop */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#333333] flex items-center justify-center shadow-sm transition-all duration-300 hover:border-[#ED1C24]/40 hover:bg-[#ED1C24]/10 group">
                <ArrowRight size={18} className="text-white transition-colors duration-300 group-hover:text-[#ED1C24]" />
              </div>
            </div>
            {/* Mobile */}
            <div className="flex lg:hidden items-center justify-center py-2">
              <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#333333] flex items-center justify-center shadow-sm transition-all duration-300 hover:border-[#ED1C24]/40 hover:bg-[#ED1C24]/10 group">
                <ArrowDown size={18} className="text-white transition-colors duration-300 group-hover:text-[#ED1C24]" />
              </div>
            </div>
          </motion.div>

          {/* ── AFTER CARD ── */}
          <motion.article
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="group relative rounded-2xl border border-[#ED1C24]/45 bg-[#160909] p-7 md:p-9 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(237,28,36,0.12)]"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-10 rounded-xl bg-[#ED1C24] flex items-center justify-center shadow-[0_2px_8px_rgba(237,28,36,0.25)]">
                <Sparkles size={18} className="text-white" strokeWidth={1.8} />
              </span>
              <h3 className="text-[18px] sm:text-[20px] font-heading font-bold !text-white leading-tight">
                AI-Powered &amp; Automated
              </h3>
            </div>

            {/* Items list */}
            <ul className="space-y-4">
              {afterItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <Icon size={16} className="text-[#ED1C24] shrink-0" strokeWidth={1.8} />
                    <span className={`text-[14px] sm:text-[15px] leading-[1.5] font-sans ${(item as any).bold ? "!text-white font-semibold" : "!text-[#D0D0D0]"}`}>
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            {/* Status badge */}
            <div className="mt-7">
              <span className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-[#ED1C24] text-white shadow-[0_2px_6px_rgba(237,28,36,0.2)]">
                Status: Optimized
              </span>
            </div>
          </motion.article>

        </div>

        {/* ── CTA BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#ED1C24] !text-white font-bold text-[15px] sm:text-base rounded-full shadow-[0_4px_20px_rgba(237,28,36,0.2)] hover:shadow-[0_8px_28px_rgba(237,28,36,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d11920]"
          >
            Automate Your Workflow
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
