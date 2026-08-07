"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { cn } from "@/lib/utils";

/* ─── Floating Indicator Component ────────────────────────────────────────── */

function FloatingIndicator({ 
  text, 
  delay, 
  className,
  yOffset = 10
}: { 
  text: string; 
  delay: number;
  className?: string;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: yOffset }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={cn(
        "absolute flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-[#111111]/5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <CheckCircle2 size={16} className="text-[#d62020]" />
      <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]">{text}</span>
    </motion.div>
  );
}

/* ─── Main Hero Component ─────────────────────────────────────────────────── */

export function AiAutomationHero() {
  return (
    <section className="relative w-full min-h-[100svh] pt-32 pb-20 overflow-hidden bg-[#faf9f6]">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-60 pointer-events-none overflow-hidden z-0">
        {/* Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border-[120px] border-[#d62020]/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#d62020]/5 rounded-full blur-3xl" />
        
        {/* Geometric Grid lines */}
        <div 
          className="absolute inset-0 opacity-50" 
          style={{
            backgroundImage: "linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(circle at 70% 50%, black 0%, transparent 60%)",
            WebkitMaskImage: "radial-gradient(circle at 70% 50%, black 0%, transparent 60%)"
          }} 
        />

        {/* Large Glowing Theme Arrow (from reference) */}
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
          <g filter="url(#glow)">
            <path 
              d="M-50,700 L250,400 L450,600 L800,250 L800,350 L1050,100 L750,-50 L750,150 L450,450 L250,250 L-50,550 Z" 
              fill="rgba(214, 32, 32, 0.08)" 
              stroke="#d62020" 
              strokeWidth="5" 
              strokeLinejoin="round" 
            />
          </g>
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* LEFT COLUMN: Typography & Content */}
        <div className="flex-1 w-full max-w-2xl flex flex-col items-start justify-center mt-12 md:mt-0">
          
          <div className="relative mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(42px,6vw,80px)] font-medium text-[#737373] leading-[1] mb-[-0.2em] tracking-tight uppercase"
            >
              Still Doing
            </motion.h2>
            
            <div className="flex flex-col">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-[clamp(52px,8vw,105px)] font-bold text-[#111111] leading-[0.95] tracking-tight uppercase"
              >
                Everything
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-[clamp(52px,8vw,105px)] font-bold text-[#d62020] leading-[0.95] tracking-tight uppercase"
              >
                Manually?
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-lg"
          >
            <p className="text-sm md:text-base font-bold text-[#111111] uppercase tracking-widest mb-4">
              AI + Automation for Modern Business
            </p>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed">
              Automate repetitive work, connect your systems and build intelligent AI workflows that help your business move faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button 
              href="#solutions" 
              variant="primary" 
              size="lg" 
              className="flex items-center gap-2 group !text-[#ffffff]"
              style={{ color: "#ffffff !important" }}
            >
              EXPLORE AI SOLUTIONS
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="!border-[#111111]/20 !text-[#111111] hover:!bg-[#111111]/5"
            >
              TALK TO AN EXPERT
            </Button>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: AI Robot Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative w-full h-[500px] md:h-[650px] lg:h-[750px] flex items-center justify-center lg:justify-end"
        >
          {/* Main Robot Image */}
          <div className="relative w-full h-full max-w-[700px] flex items-center justify-center">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image 
                src="/images/services/ai-robot-hero.png" 
                alt="AI Assistant Robot Automating Workflows" 
                fill 
                className="object-contain object-center lg:object-right scale-[1.1] md:scale-[1.15] z-10 relative" 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Chat Bubble from reference */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[5%] left-[-10%] md:top-[10%] md:left-[-15%] lg:left-[-25%] z-20 bg-white/95 backdrop-blur-xl px-6 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#111111]/5 max-w-[300px] md:max-w-[400px]"
            >
              <p className="text-base md:text-xl font-medium text-[#111111] leading-snug md:leading-tight text-center">
                <span className="font-bold text-[#d62020]">4 Ways AI Automation</span> Can Save Your Business Time & Cost
              </p>
              {/* Bubble Tail */}
              <div className="absolute -bottom-3 md:-bottom-4 right-16 w-6 h-6 md:w-8 md:h-8 bg-white/95 border-b border-r border-[#111111]/5 transform rotate-45 shadow-[10px_10px_20px_rgba(0,0,0,0.05)]" />
            </motion.div>

            {/* Floating UI Indicators */}
            <FloatingIndicator 
              text="LEAD CAPTURED" 
              delay={1.2} 
              className="top-[10%] left-[5%] md:top-[15%] md:left-[0%]" 
            />
            
            <FloatingIndicator 
              text="CRM UPDATED" 
              delay={1.4} 
              className="top-[30%] right-[-5%] md:top-[25%] md:right-[5%]" 
              yOffset={-10}
            />
            
            <FloatingIndicator 
              text="FOLLOW-UP SENT" 
              delay={1.6} 
              className="bottom-[35%] left-[-5%] md:bottom-[40%] md:left-[-10%]" 
            />

            <FloatingIndicator 
              text="REPORT GENERATED" 
              delay={1.8} 
              className="bottom-[15%] right-[10%] md:bottom-[20%] md:right-[15%]" 
              yOffset={15}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default AiAutomationHero;
