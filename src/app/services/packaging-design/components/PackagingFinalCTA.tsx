"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PackagingFinalCTA() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 bg-white text-[#111111] overflow-hidden border-t border-zinc-100 text-center py-16 md:py-24">
      <div className="max-w-[800px] mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">Get Started</span>
          
          <h2 className="font-heading max-w-[20ch] text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight mb-5">
            Ready to create<br />
            packaging that<br />
            stands out?
          </h2>

          <p className="text-zinc-500 max-w-[28em] text-[18px] font-semibold leading-[1.5] tracking-normal">
            Turn your product into a memorable brand experience with packaging designed for impact.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white font-semibold text-xs tracking-wider rounded-full hover:bg-[#fd2e35] hover:gap-3 transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 mt-4"
          >
            START YOUR PROJECT <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
