"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, ShieldAlert, FileEdit, Send, RefreshCw } from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Understand",
    description: "Understand the business and its requirements.",
    icon: Search
  },
  {
    num: "02",
    title: "Identify",
    description: "Identify applicable registrations, licences and compliance obligations.",
    icon: ShieldAlert
  },
  {
    num: "03",
    title: "Prepare",
    description: "Prepare documents, forms and required information.",
    icon: FileEdit
  },
  {
    num: "04",
    title: "File",
    description: "Submit applications, registrations or returns.",
    icon: Send
  },
  {
    num: "05",
    title: "Maintain",
    description: "Track renewals, filings and ongoing compliance requirements.",
    icon: RefreshCw
  }
];

export default function ComplianceProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a continuous animation value for the line
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let start = performance.now();
    const duration = 8000; // 8 seconds per loop

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = (elapsed % duration) / duration;
      // dashoffset moves from 0 to -200 to push the segment forward
      // We use a large pathLength so 100 is just a fraction
      setDashOffset(progress * -100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#FAF9F6] border-t border-[#E8E8E8] overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
              OUR COMPLIANCE PROCESS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight"
          >
            A Streamlined Path to Compliance
          </motion.h2>
        </div>

        <div className="relative">
          {/* Desktop SVG Path */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[300px] pointer-events-none -z-10">
            <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none" fill="none">
              {/* Base grey dotted path */}
              <path 
                d="M 50,100 C 200,100 250,20 400,20 C 550,20 600,180 750,180 C 900,180 950,100 1050,100" 
                stroke="#E8E8E8" 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                fill="none" 
              />
              {/* Animated red process line - short segment */}
              <path 
                d="M 50,100 C 200,100 250,20 400,20 C 550,20 600,180 750,180 C 900,180 950,100 1050,100" 
                stroke="url(#processGradient)" 
                strokeWidth="3"
                strokeLinecap="round"
                fill="none" 
                strokeDasharray="10 90" /* 10% dash, 90% gap */
                strokeDashoffset={dashOffset}
                pathLength="100"
                style={{ filter: "drop-shadow(0 0 6px rgba(227,30,36,0.5))" }}
              />
              <defs>
                <linearGradient id="processGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E31E24" stopOpacity="0" />
                  <stop offset="50%" stopColor="#E31E24" />
                  <stop offset="100%" stopColor="#FF7A59" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile SVG Path (Vertical) */}
          <div className="block lg:hidden absolute top-0 left-[23px] w-[50px] h-full pointer-events-none -z-10">
            <svg width="100%" height="100%" viewBox="0 0 50 1000" preserveAspectRatio="none" fill="none">
              <path 
                d="M 25,0 L 25,1000" 
                stroke="#E8E8E8" 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                fill="none" 
              />
              <path 
                d="M 25,0 L 25,1000" 
                stroke="url(#processGradientVertical)" 
                strokeWidth="3"
                strokeLinecap="round"
                fill="none" 
                strokeDasharray="10 90"
                strokeDashoffset={dashOffset}
                pathLength="100"
                style={{ filter: "drop-shadow(0 0 6px rgba(227,30,36,0.5))" }}
              />
              <defs>
                <linearGradient id="processGradientVertical" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E31E24" stopOpacity="0" />
                  <stop offset="50%" stopColor="#E31E24" />
                  <stop offset="100%" stopColor="#FF7A59" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 5 Process Steps */}
          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-16 lg:gap-4">
            {processSteps.map((step, idx) => {
              // Custom vertical positioning for desktop wave effect
              const yOffsetClass = 
                idx === 0 ? "lg:translate-y-0" : 
                idx === 1 ? "lg:-translate-y-[80px]" : 
                idx === 2 ? "lg:translate-y-[10px]" : 
                idx === 3 ? "lg:translate-y-[80px]" : "lg:translate-y-0";

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`flex flex-row lg:flex-col items-start lg:items-center relative w-full lg:w-1/5 group ${yOffsetClass}`}
                >
                  {/* Step Node */}
                  <div className="relative flex-shrink-0 lg:mb-6 mr-6 lg:mr-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#E8E8E8] flex items-center justify-center relative z-20 group-hover:border-[#E31E24] group-hover:shadow-[0_0_20px_rgba(227,30,36,0.2)] transition-all duration-300">
                      <span className="text-sm font-bold text-[#111111] group-hover:text-[#E31E24] transition-colors duration-300">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col lg:items-center lg:text-center mt-1 lg:mt-0 pt-2 lg:pt-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <step.icon className="w-5 h-5 text-[#E31E24]" strokeWidth={2} />
                      <h3 className="text-[19px] font-bold text-[#111111] leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#666666] leading-relaxed max-w-[220px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
