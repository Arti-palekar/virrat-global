"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  RotateCcw,
  ShieldAlert,
  Link2,
  Zap,
  Clock,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/* ─── DATA ─── */
const leftCards = [
  {
    num: "01",
    title: "Reduce Manual Work",
    desc: "Automate repetitive tasks and eliminate unnecessary manual processes.",
    icon: RotateCcw,
  },
  {
    num: "02",
    title: "Improve Efficiency",
    desc: "Connect workflows and tools to make business operations faster and smoother.",
    icon: Link2,
  },
  {
    num: "03",
    title: "Reduce Human Errors",
    desc: "AI-powered workflows improve consistency and reduce repetitive mistakes.",
    icon: ShieldAlert,
  },
];

const rightCards = [
  {
    num: "04",
    title: "Save Time & Cost",
    desc: "Automate routine work and allow teams to focus on higher-value activities.",
    icon: Clock,
  },
  {
    num: "05",
    title: "Scale Operations",
    desc: "Build automation systems that can handle growing workloads efficiently.",
    icon: TrendingUp,
  },
  {
    num: "06",
    title: "24/7 Intelligent Workflows",
    desc: "Keep important business processes running continuously with AI automation.",
    icon: Zap,
  },
];

/* ─── COMPONENT ─── */
export default function AiAutomationWhy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for tracking DOM rects
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const brainRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<{
    leftPoints: { x: number; y: number }[];
    rightPoints: { x: number; y: number }[];
    brainLeft: { x: number; y: number };
    brainRight: { x: number; y: number };
  }>({
    leftPoints: [],
    rightPoints: [],
    brainLeft: { x: 0, y: 0 },
    brainRight: { x: 0, y: 0 },
  });

  const updateLayout = () => {
    if (!containerRef.current || !brainRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const brainRect = brainRef.current.getBoundingClientRect();

    const getRelative = (rect: DOMRect, edge: "right" | "left") => {
      const x = edge === "right" ? rect.right - containerRect.left : rect.left - containerRect.left;
      const y = rect.top - containerRect.top + rect.height / 2;
      return { x, y };
    };

    const leftPts = leftRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      return getRelative(el.getBoundingClientRect(), "right");
    });

    const rightPts = rightRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      return getRelative(el.getBoundingClientRect(), "left");
    });

    setCoords({
      leftPoints: leftPts,
      rightPoints: rightPts,
      brainLeft: getRelative(brainRect, "left"),
      brainRight: getRelative(brainRect, "right"),
    });
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(updateLayout);
      resizeObserver.observe(containerRef.current);
    }
    const timers = [100, 500, 1000].map((t) => setTimeout(updateLayout, t));
    return () => {
      window.removeEventListener("resize", updateLayout);
      resizeObserver?.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  // Curved Path Generator
  const generateCurve = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    if (p1.x === 0 && p1.y === 0) return "";
    const cpX = (p1.x + p2.x) / 2;
    return `M ${p1.x} ${p1.y} C ${cpX} ${p1.y} ${cpX} ${p2.y} ${p2.x} ${p2.y}`;
  };

  return (
    <section className="w-full bg-[#050b09] px-6 md:px-12 lg:px-24 border-b border-zinc-900 relative overflow-hidden py-16 md:py-24">
      {/* Soft Blue/Purple Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/[0.04] blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/[0.03] blur-[150px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-2xl mx-auto relative z-20 mb-12">
          <p className="text-blue-400 text-[11px] font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] mb-6">
            WHY AI AUTOMATION
          </p>
          
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.1] tracking-tight font-heading !text-white mb-5">
            Why AI Automation?
          </h2>
          
          <p className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.6] !text-white/90 font-sans">
            Turn repetitive work into intelligent workflows that save time, reduce errors, and help your business scale.
          </p>
        </div>

        {/* ── CENTRAL HUB VISUAL ── */}
        <div ref={containerRef} className="relative w-full min-h-[500px] mt-10">
          
          {/* SVG Connector Lines Layer (Desktop Only) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-10 overflow-visible">
            
            <defs>
              <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
              </linearGradient>
              <linearGradient id="line-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.15)" />
              </linearGradient>
            </defs>

            {/* Left to Center Lines */}
            {coords.leftPoints.map((pt, i) => {
              if (pt.x === 0 && pt.y === 0) return null;
              const pathId = `left-path-${i}`;
              const d = generateCurve(pt, { x: coords.brainLeft.x - 10, y: coords.brainLeft.y });
              return (
                <g key={pathId}>
                  <path id={pathId} d={d} fill="none" stroke="url(#line-grad-left)" strokeWidth="1.5" />
                  
                  {/* Arrowhead */}
                  <polygon points="-4,-4 4,0 -4,4" fill="rgba(59, 130, 246, 0.8)" transform={`translate(${coords.brainLeft.x - 10}, ${coords.brainLeft.y})`} />

                  {/* Flowing Particle */}
                  <circle r="3.5" fill="#60a5fa" className="drop-shadow-[0_0_8px_rgba(96,165,250,0.9)]">
                    <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              );
            })}

            {/* Center to Right Lines */}
            {coords.rightPoints.map((pt, i) => {
              if (pt.x === 0 && pt.y === 0) return null;
              const pathId = `right-path-${i}`;
              // Flow from brainRight to cardLeft
              const d = generateCurve({ x: coords.brainRight.x + 10, y: coords.brainRight.y }, pt);
              return (
                <g key={pathId}>
                  <path id={pathId} d={d} fill="none" stroke="url(#line-grad-right)" strokeWidth="1.5" strokeDasharray="4 4" />
                  
                  {/* Arrowhead */}
                  <polygon points="-4,-4 4,0 -4,4" fill="rgba(236, 72, 153, 0.6)" transform={`translate(${pt.x}, ${pt.y})`} />

                  {/* Flowing Particle */}
                  <circle r="3" fill="#c084fc" className="drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
                    <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-x-16 gap-y-14 items-center relative z-20">
            
            {/* Left Column (Inputs) */}
            <div className="flex flex-col gap-6 w-full items-end">
              {leftCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="w-full flex justify-end"
                  >
                    <Card
                      ref={(el) => { leftRefs.current[i] = el; }}
                      className="group relative overflow-hidden border border-blue-900/50 bg-[#0a0f18]/80 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)] max-w-[380px] w-full backdrop-blur-sm"
                    >
                      <CardContent className="p-0 flex gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                          <Icon size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] font-bold text-white opacity-90 tracking-wider">{card.num}</span>
                            <h3 className="text-[16px] font-semibold text-white tracking-tight">{card.title}</h3>
                          </div>
                          <p className="text-[14px] leading-[1.6] text-white font-sans">{card.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Column (AI Core) */}
            <div className="flex justify-center my-8 lg:my-0">
              <motion.div
                ref={brainRef}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] rounded-[36px] border border-blue-500/20 bg-[#070b14] flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.15)] z-20 group"
              >
                {/* Glowing pulsating outer ring */}
                <div className="absolute inset-0 rounded-[36px] border border-blue-500/30 animate-[ping_4s_ease-in-out_infinite] opacity-20" />
                
                {/* Inner glass box matching the reference image */}
                <div className="relative w-[75%] h-[75%] rounded-[28px] bg-gradient-to-b from-[#111a2e] to-[#070b14] border border-blue-400/20 flex flex-col items-center justify-center gap-2 overflow-hidden shadow-[inset_0_0_30px_rgba(59,130,246,0.1)] group-hover:border-blue-400/40 transition-colors duration-500">
                  {/* Inner ambient glow */}
                  <div className="absolute inset-0 bg-blue-500/10 blur-[25px]" />
                  
                  {/* Glowing Brain Icon */}
                  <BrainCircuit size={52} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] relative z-10" />
                  
                  {/* Text Label */}
                  <span className="text-white font-bold text-[16px] tracking-wider relative z-10 drop-shadow-md">AI</span>
                  
                  {/* Futuristic UI lines beneath the text */}
                  <div className="flex flex-col gap-1.5 mt-1 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-1.5 bg-blue-500/40 rounded-sm" />
                      <div className="w-8 h-1.5 bg-blue-500/40 rounded-sm" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-10 h-1.5 bg-purple-500/40 rounded-sm" />
                      <div className="w-3 h-1.5 bg-purple-500/40 rounded-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column (Outputs) */}
            <div className="flex flex-col gap-6 w-full items-start">
              {rightCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="w-full flex justify-start"
                  >
                    <Card
                      ref={(el) => { rightRefs.current[i] = el; }}
                      className="group relative overflow-hidden border border-purple-900/50 bg-[#0a0f18]/80 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-[0_12px_40px_rgba(168,85,247,0.25)] max-w-[380px] w-full backdrop-blur-sm"
                    >
                      <CardContent className="p-0 flex gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                          <Icon size={18} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(192,132,252,0.5)]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] font-bold text-white opacity-90 tracking-wider">{card.num}</span>
                            <h3 className="text-[16px] font-semibold text-white tracking-tight">{card.title}</h3>
                          </div>
                          <p className="text-[14px] leading-[1.6] text-white font-sans">{card.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
