"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PackagingPhilosophy() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 bg-white text-[#111111] overflow-hidden border-t border-zinc-100 py-16 md:py-24">
      
      {/* Background Subtle Wireframes / Floating Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Floating Box Dieline Outline 1 */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] w-24 h-24 border border-dashed border-zinc-200 rounded-lg flex items-center justify-center opacity-70"
        >
          <span className="text-[9px] font-mono text-zinc-300">W: 120mm</span>
        </motion.div>
        
        {/* Floating Circle Dieline Outline 2 */}
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-[15%] w-32 h-32 border border-zinc-200/80 rounded-full flex items-center justify-center opacity-60"
        >
          <div className="w-28 h-28 border border-dashed border-zinc-200 rounded-full flex items-center justify-center">
            <span className="text-[9px] font-mono text-zinc-300">R: 45mm</span>
          </div>
        </motion.div>

        {/* Diagonal Line */}
        <div className="absolute top-[30%] right-[5%] w-48 h-[1px] bg-zinc-200 rotate-45 opacity-50" />
      </div>

      {/* Main Philosophy Content */}
      <div className="max-w-[1000px] mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">Philosophy</span>
          
          <h2 className="font-heading max-w-[18ch] text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight mb-5">
            More than packaging.<br />
            it’s your brand experience.
          </h2>

          <p className="mt-6 text-zinc-600 max-w-[32em] mx-auto text-[18px] font-semibold leading-[1.5] tracking-normal">
            Great packaging does more than protect a product. It communicates quality, builds recognition, creates desire, and shapes how customers experience your brand before they even open it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
