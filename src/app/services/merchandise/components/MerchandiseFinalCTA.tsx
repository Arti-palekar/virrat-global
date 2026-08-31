"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MerchandiseFinalCTA() {
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
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight max-w-[20ch] mb-5">
            READY TO CREATE<br />
            MERCHANDISE THAT<br />
            STANDS OUT?
          </h2>

          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed max-w-[28em]">
            Elevate your corporate gifting, welcome kits, and promotional apparel with premium designs built to engage.
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
