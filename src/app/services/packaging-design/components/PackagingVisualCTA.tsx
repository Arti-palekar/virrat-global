"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PackagingVisualCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const floatMockupY = useTransform(scrollYProgress, [0, 1], [-80, -20]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-black py-16 md:py-24"
    >
      
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" 
          alt="Premium cosmetic beauty product lifestyle background" 
          className="w-full h-full object-cover opacity-45"
        />
      </motion.div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60 z-10" />

      {/* Floating Mockup on top of background */}
      <motion.div
        style={{ y: floatMockupY }}
        className="absolute z-20 w-[240px] sm:w-[320px] md:w-[400px] h-auto drop-shadow-[0_45px_70px_rgba(0,0,0,0.65)] pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1605797314151-e737cbb22fbb?q=80&w=500&auto=format&fit=crop" 
          alt="Floating gold tin mockup box" 
          className="w-full h-auto object-contain rounded-[2rem]"
        />
      </motion.div>

      {/* Oversized Typography */}
      <motion.div 
        style={{ y: textY }}
        className="absolute z-10 text-center pointer-events-none select-none"
      >
        <h2 className="font-heading text-white text-opacity-95 text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight mb-5">
          Packaging<br />that gets<br />noticed.
        </h2>
      </motion.div>

      {/* Content HUD (Labels + CTA Button) */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between p-8 md:p-12 lg:p-16 pointer-events-none">
        
        {/* Top details */}
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            {["Brand Strategy", "Packaging Design", "Print Production"].map((tag) => (
              <span 
                key={tag} 
                className="hidden sm:inline-block text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm bg-black/25"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-white/50 uppercase">
            VIRRAT GLOBAL / STUDIO
          </span>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center items-center w-full pointer-events-auto">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#fd2e35] text-white font-semibold text-xs tracking-wider rounded-full hover:bg-white hover:text-black hover:gap-3.5 transition-all duration-300 shadow-xl shadow-[#fd2e35]/20 active:scale-95"
          >
            START YOUR PACKAGING PROJECT <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </section>
  );
}
