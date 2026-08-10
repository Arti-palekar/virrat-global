"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plus, Mic, ArrowUp, Star } from "lucide-react";
import Link from "next/link";

export default function AiAutomationHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for the glow effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 bg-[#FAF9F6] text-[#111111] overflow-hidden flex flex-col items-center justify-center font-body"
    >
      {/* Very subtle overall noise texture for the page background */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1000px] w-full mx-auto relative z-20 flex flex-col items-center text-center">
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.15] tracking-tight text-[#111111] mb-6 max-w-4xl"
        >
          Intelligent AI Systems That
          <br className="hidden sm:block" />
          Build 
          <span className="inline-flex items-center justify-center px-6 py-1.5 sm:py-2.5 mx-2 md:mx-4 mt-2 sm:mt-0 rounded-full bg-[#E32620]/[0.08] border-[1.5px] border-[#E32620]/20 text-[#111111]">
            Growth
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#555555] text-sm sm:text-base md:text-lg max-w-2xl mb-10 font-medium"
        >
          Our AI automation enables smarter business operations, faster response times, and seamless scalability with advanced technology.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 sm:mb-28"
        >
          <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#111111] font-semibold text-sm sm:text-base rounded-full shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)] border border-gray-200/60 hover:shadow-[0_8px_32px_-6px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 group">
            Start Your Project
            <ArrowRight size={18} className="text-[#555555] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* The Glassmorphism Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[850px] mx-auto"
        >
          {/* Intense Textured Red Glow Effect behind the chat */}
          <motion.div 
            style={{ y: glowY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[160%] pointer-events-none -z-10 flex items-center justify-center"
          >
            {/* The base soft glows */}
            <div className="absolute w-[80%] h-[70%] bg-[#E32620] opacity-[0.25] blur-[100px] rounded-full scale-y-[0.7] scale-x-[1.1] -translate-y-4" />
            <div className="absolute w-[60%] h-[50%] bg-[#E32620] opacity-[0.4] blur-[80px] rounded-[100%]" />
            <div className="absolute w-[40%] h-[40%] bg-[#E32620] opacity-[0.6] blur-[60px] rounded-full -translate-x-12 translate-y-6" />
            
            {/* Heavy noise overlay to create the spray effect inside the glow region */}
            <div 
              className="absolute inset-0 mix-blend-overlay opacity-60 rounded-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)'
              }}
            />
          </motion.div>

          {/* Chat Box Container */}
          <div className="relative w-full backdrop-blur-[24px] bg-white/30 border-[1.5px] border-white/80 shadow-[0_24px_50px_-12px_rgba(227,38,32,0.15)] rounded-[40px] p-6 sm:p-8 md:p-10 flex flex-col gap-12 sm:gap-16">
            
            {/* Input placeholder text */}
            <div className="text-left w-full pl-2">
              <span className="text-gray-900/60 font-medium text-lg sm:text-xl">
                Type your prompt here...
              </span>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between w-full">
              
              {/* Left Action Button */}
              <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors shrink-0">
                <Plus size={24} />
              </button>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-4 bg-white/20 backdrop-blur-sm rounded-full p-1 border border-white/40">
                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent flex items-center justify-center text-gray-500 hover:bg-white/40 hover:text-gray-800 transition-colors shrink-0">
                  <Mic size={20} />
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E32620] shadow-[0_4px_16px_rgba(227,38,32,0.4)] flex items-center justify-center text-white hover:bg-[#c11c1c] hover:scale-105 transition-all shrink-0">
                  <ArrowUp size={20} strokeWidth={2.5} />
                </button>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] border border-gray-100/80 rounded-full backdrop-blur-sm"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-100">
            <Star size={10} className="text-orange-500 fill-orange-500" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#111111]">
            Trusted by over 5,000+ businesses globally
          </span>
        </motion.div>

      </div>
    </section>
  );
}
