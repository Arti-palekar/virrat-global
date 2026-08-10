"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export default function AiAutomationFinalCTA() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-white text-[#111111] overflow-hidden border-t border-zinc-100 text-center">
      <div className="max-w-[800px] mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <span className="text-[#E32620] text-[10px] font-bold tracking-[0.3em] uppercase">Get Started</span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tighter leading-tight uppercase max-w-[20ch]">
            READY TO AUTOMATE<br />
            YOUR BUSINESS?
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed max-w-[28em]">
            Let's build intelligent workflows that save time, eliminate manual tasks, and scale your growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 bg-[#E32620] hover:bg-[#c11c1c] text-white text-[10px] font-bold tracking-wider rounded-full hover:gap-3 transition-all duration-300 shadow-xl shadow-red-500/20 active:scale-95 w-full sm:w-auto px-8"
            >
              GET A FREE AUTOMATION AUDIT <ArrowUpRight className="w-4 h-4" />
            </Button>
            
            <Button
              href="/work"
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2 border-[#111111]/20 text-[#111111] hover:bg-[#111111]/5 text-[10px] font-bold tracking-wider rounded-full transition-all duration-300 active:scale-95 w-full sm:w-auto px-8"
            >
              VIEW CASE STUDIES
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
