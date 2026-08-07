"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function AiAutomationHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax on the background image
  const backgroundY = useTransform(scrollY, [0, 800], ["0%", "15%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[90svh] lg:min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: "url('/ai-automation-hero.jpg')",
            backgroundPosition: "center right 15%", // Keep robot visible on smaller screens
          }}
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-black/50 lg:from-black/70 lg:via-black/30 lg:to-transparent z-10" />
      </motion.div>

      <div className="container relative z-20 h-full flex flex-col items-start justify-center">
        
        {/* Content Container: ~40-45% width on desktop */}
        <div className="w-full lg:w-[45%] max-w-2xl flex flex-col items-start justify-center mt-12 md:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm md:text-base font-bold text-white/90 uppercase tracking-widest mb-4">
              AI + Automation
            </p>
          </motion.div>
          
          <div className="relative mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(42px,5vw,72px)] font-bold text-white leading-[1.1] tracking-tight mb-2"
            >
              Intelligent Automation.
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(42px,5vw,72px)] font-bold text-[#d62020] leading-[1.1] tracking-tight"
            >
              Built for Business.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-lg"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-sm">
              Automate repetitive work, connect your systems and scale faster with AI-powered workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button 
              data-magnetic
              href="#solutions" 
              variant="primary" 
              size="lg" 
              className="flex items-center justify-center gap-2 group w-full sm:w-auto !text-white hover:scale-105 transition-transform"
            >
              EXPLORE AI SOLUTIONS
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              data-magnetic
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              TALK TO AN EXPERT
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AiAutomationHero;
