"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function ComplianceHero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" ref={containerRef}>
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#E31E24]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
                COMPLIANCE SERVICES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
              className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-[#111111] leading-[1.05] mb-6"
            >
              COMPLIANCE THAT <br className="hidden md:block" />
              BUILDS TRUST
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
              className="text-lg md:text-xl text-[#666666] mb-10 max-w-[540px] leading-relaxed"
            >
              Reduce business risk, protect sensitive information, and build processes that keep your organization ready for evolving regulatory and industry requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E31E24] text-white font-semibold hover:bg-[#c9181d] hover:shadow-[0_4px_14px_0_rgba(227,30,36,0.3)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Talk to a Compliance Expert &rarr;
              </Link>
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-[#E8E8E8] text-[#111111] font-semibold hover:bg-black/5 transition-all duration-300"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } } }}
            className="relative w-full aspect-square max-w-[500px] mx-auto z-10 flex items-center justify-center"
          >
            {/* Base glowing orb */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E31E24]/20 to-[#FF7A59]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
            
            {/* Shield Center */}
            <div className="relative z-20 w-32 h-32 rounded-full bg-white border border-[#E8E8E8] shadow-[0_20px_40px_-10px_rgba(227,30,36,0.15)] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E31E24] to-[#FF7A59] opacity-10 animate-pulse" />
              <Shield className="w-12 h-12 text-[#E31E24]" strokeWidth={1.5} />
            </div>

            {/* Orbiting / Connected Nodes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E31E24" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF7A59" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Connecting Lines */}
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                d="M250,250 L100,120 M250,250 L400,120 M250,250 L50,250 M250,250 L450,250 M250,250 L120,400 M250,250 L380,400" 
                stroke="url(#lineGrad)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
              
              {/* Subtle animated particles along lines */}
              <motion.circle cx="100" cy="120" r="3" fill="#E31E24" opacity="0.6">
                <animateMotion dur="4s" repeatCount="indefinite" path="M250,250 L100,120" keyPoints="0;1" keyTimes="0;1" />
              </motion.circle>
              <motion.circle cx="400" cy="120" r="3" fill="#E31E24" opacity="0.6">
                <animateMotion dur="5s" repeatCount="indefinite" path="M250,250 L400,120" keyPoints="0;1" keyTimes="0;1" />
              </motion.circle>
              <motion.circle cx="450" cy="250" r="3" fill="#E31E24" opacity="0.6">
                <animateMotion dur="4.5s" repeatCount="indefinite" path="M250,250 L450,250" keyPoints="0;1" keyTimes="0;1" />
              </motion.circle>
              <motion.circle cx="380" cy="400" r="3" fill="#E31E24" opacity="0.6">
                <animateMotion dur="5.5s" repeatCount="indefinite" path="M250,250 L380,400" keyPoints="0;1" keyTimes="0;1" />
              </motion.circle>
              
            </svg>

            {/* Nodes */}
            <HeroNode label="Privacy" x={100} y={120} delay={0.6} />
            <HeroNode label="Security" x={400} y={120} delay={0.7} />
            <HeroNode label="Risk" x={50} y={250} delay={0.8} />
            <HeroNode label="Policies" x={450} y={250} delay={0.9} />
            <HeroNode label="Audit" x={120} y={400} delay={1.0} />
            <HeroNode label="Monitoring" x={380} y={400} delay={1.1} />

          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroNode({ label, x, y, delay }: { label: string, x: number, y: number, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, type: "spring" }}
      className="absolute bg-white border border-[#E8E8E8] shadow-sm rounded-full px-4 py-2 flex items-center justify-center whitespace-nowrap z-30"
      style={{ left: `${(x/500)*100}%`, top: `${(y/500)*100}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mr-2" />
      <span className="text-xs font-semibold text-[#111111]">{label}</span>
    </motion.div>
  );
}
