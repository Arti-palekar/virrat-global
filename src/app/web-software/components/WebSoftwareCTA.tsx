"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function WebSoftwareCTA() {
  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="relative rounded-3xl bg-[#0F0F10] text-white p-10 md:p-20 overflow-hidden shadow-2xl border border-white/10 text-center">
          {/* Background ambient radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D62020]/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#D62020]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-white/90">
                READY TO SCALE YOUR TECH?
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight leading-tight">
              Let’s Build Your Next <span className="text-[#D62020]">Software Product.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#A0A0A0] font-body leading-relaxed max-w-2xl mx-auto">
              Partner with Virrat Global’s senior engineering team to architect custom web applications, enterprise ERPs, SaaS platforms, and AI automation engines.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-full bg-[#D62020] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 hover:bg-[#BF1A1A] transition-all transform hover:-translate-y-0.5"
              >
                Start Your Project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all backdrop-blur-md"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareCTA;
