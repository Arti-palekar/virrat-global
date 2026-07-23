"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code, Terminal, Cpu, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export function WebSoftwareHero() {
  return (
    <section className="relative w-full bg-[#f8f7f5] text-[#111111] pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-[#ECECEC]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#D62020]/10 via-rose-500/5 to-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#ECECEC] shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#D62020] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#111111] uppercase font-sans">
                ENTERPRISE WEB & SOFTWARE ENGINEERING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#111111] tracking-tight leading-[1.04]"
            >
              Engineering <br />
              Next-Gen <span className="text-[#D62020]">Web & Software</span> Solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-[#555555] font-body leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We architect high-performance web applications, custom ERPs, CRMs, SaaS platforms, and AI-driven software engineered for speed, security, and enterprise scalability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#D62020] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/25 hover:bg-[#BF1A1A] transition-all transform hover:-translate-y-0.5"
              >
                Start Your Project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-[#ECECEC] text-[#111111] text-xs font-bold uppercase tracking-wider hover:bg-[#F5F5F7] transition-colors shadow-xs"
              >
                Book Consultation
              </Link>
            </motion.div>

            {/* Metrics Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[#ECECEC] max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <span className="text-2xl md:text-3xl font-extrabold font-heading text-[#111111] block">100+</span>
                <span className="text-[11px] font-mono text-[#888888] uppercase">Systems Shipped</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-extrabold font-heading text-[#D62020] block">99.9%</span>
                <span className="text-[11px] font-mono text-[#888888] uppercase">Uptime Architecture</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-extrabold font-heading text-[#111111] block">&lt;10ms</span>
                <span className="text-[11px] font-mono text-[#888888] uppercase">API Latency</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Software Glass Cards (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Main Software Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[480px] rounded-3xl bg-white border border-[#ECECEC] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative"
            >
              {/* Header mockup window */}
              <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-[#888888] ml-2">app.virratglobal.com</span>
                </div>
                <Sparkles className="w-4 h-4 text-[#D62020]" />
              </div>

              {/* Code Snippet Block */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white text-xs font-mono mb-4 space-y-1.5 shadow-inner">
                <div className="text-slate-400">// Next.js 16 + Turbopack Microservices</div>
                <div className="text-emerald-400">export default async function App() &#123;</div>
                <div className="pl-4 text-sky-300">const data = await fetchEnterpriseAPI();</div>
                <div className="pl-4 text-purple-300">return &lt;SaaSPlatform data=&#123;data&#125; /&gt;;</div>
                <div className="text-emerald-400">&#125;</div>
              </div>

              {/* Live Status Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#ECECEC]">
                  <span className="text-[10px] font-mono text-[#888888] block">API Health</span>
                  <span className="text-sm font-bold text-[#27C93F] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-current" /> 100% Operational
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#ECECEC]">
                  <span className="text-[10px] font-mono text-[#888888] block">Security Vault</span>
                  <span className="text-sm font-bold text-[#111111] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D62020]" /> SOC2 Certified
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Floating Mini Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-4 bg-white border border-[#ECECEC] p-3 rounded-2xl shadow-lg flex items-center gap-2.5 z-20 text-xs font-bold text-[#111]"
            >
              <Cpu className="w-4 h-4 text-[#D62020]" /> AI Engine Active
            </motion.div>

            {/* Floating Mini Badge 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 bg-white border border-[#ECECEC] p-3 rounded-2xl shadow-lg flex items-center gap-2.5 z-20 text-xs font-bold text-[#111]"
            >
              <Terminal className="w-4 h-4 text-emerald-600" /> React Native Mobile
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WebSoftwareHero;
