"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import { Search, Target, Layers, Rocket } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  position: "above" | "below";
  anchorPercent: number; // 0 to 1
  xSvg: number;
  ySvg: number;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We analyze your business, audience, and competitors to define a clear roadmap.",
    icon: Search,
    position: "above",
    anchorPercent: 0.12,
    xSvg: 200,
    ySvg: 112,
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create the right strategy, technology plan, and execution roadmap.",
    icon: Target,
    position: "below",
    anchorPercent: 0.38,
    xSvg: 490,
    ySvg: 248,
  },
  {
    number: "03",
    title: "Design & Build",
    description: "We design and develop high-performance digital experiences.",
    icon: Layers,
    position: "above",
    anchorPercent: 0.64,
    xSvg: 800,
    ySvg: 112,
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "We launch, optimize, and continuously scale your business for long-term growth.",
    icon: Rocket,
    position: "below",
    anchorPercent: 0.90,
    xSvg: 1092,
    ySvg: 248,
  },
];

// Smooth S-curve path for viewBox="0 0 1300 360"
const PATH_D = "M 70 180 C 130 90, 260 90, 335 180 C 410 270, 570 270, 645 180 C 720 90, 880 90, 955 180 C 1030 270, 1180 270, 1230 180";

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const progressMotion = useMotionValue(0);
  const [dotPos, setDotPos] = useState<{ x: number; y: number }>({ x: 70, y: 180 });
  const [pathTotalLength, setPathTotalLength] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  // Initialize path total length
  useEffect(() => {
    if (pathRef.current) {
      setPathTotalLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Automatic Infinite Loop Animation: 2s per step + 2s pause at end
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(progressMotion, [0, 0.333, 0.666, 1.0, 1.0], {
      times: [0, 0.25, 0.5, 0.75, 1.0],
      duration: 8, // 6s movement + 2s pause
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [isInView, progressMotion]);

  // Sync dot position and progress state with motion value
  useMotionValueEvent(progressMotion, "change", (latest) => {
    setCurrentProgress(latest);
    if (pathRef.current && pathTotalLength > 0) {
      const point = pathRef.current.getPointAtLength(latest * pathTotalLength);
      setDotPos({ x: point.x, y: point.y });
    }
  });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#f8f7f5] text-[#111827] px-4 md:px-8 border-t border-black/5 overflow-hidden py-16 md:py-24"
    >
      <div className="max-w-[1360px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Heading matching homepage section title system exactly */}
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="homepage-section-title"
          >
            Our Development <span>Process.</span>
          </motion.h2>

          {/* Subtitle with 50px (mb-14) bottom margin */}
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#666666] font-inter max-w-2xl mx-auto leading-relaxed mb-14"
          >
            A proven methodology that transforms ideas into scalable digital products with clarity, precision, and measurable business results.
          </motion.p>
        </div>

        {/* DESKTOP VIEW: Auto-Looping Curved Process Path */}
        <div className="hidden lg:block relative w-full my-4 min-h-[400px]">
          
          {/* Subtle Ambient Red Glow Following Progress Dot */}
          <div 
            className="absolute pointer-events-none transition-transform duration-100 ease-out rounded-full blur-2xl opacity-15 bg-[#D62020] w-[180px] h-[180px]"
            style={{
              left: `${(dotPos.x / 1300) * 100}%`,
              top: `${(dotPos.y / 360) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* SVG Canvas for Path */}
          <div className="relative w-full h-[360px]">
            <svg 
              viewBox="0 0 1300 360" 
              className="w-full h-full overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Neutral Base Path */}
              <path
                d={PATH_D}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Active Virrat Red Drawn Path */}
              <motion.path
                ref={pathRef}
                d={PATH_D}
                fill="none"
                stroke="#D62020"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  pathLength: progressMotion,
                }}
              />

              {/* Step Anchor Points on Curve */}
              {STEPS.map((step, idx) => {
                const isReached = currentProgress >= step.anchorPercent - 0.05;
                const isActive = currentProgress >= step.anchorPercent - 0.08 && currentProgress <= step.anchorPercent + 0.15;

                return (
                  <g key={idx} transform={`translate(${step.xSvg}, ${step.ySvg})`}>
                    {/* Subtle Pulse Halo when Active */}
                    {isActive && (
                      <circle
                        r="14"
                        fill="#D62020"
                        opacity="0.2"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer Circle */}
                    <circle
                      r="7"
                      fill="white"
                      stroke={isReached ? "#D62020" : "#D1D5DB"}
                      strokeWidth={isReached ? "2.5" : "1.5"}
                      className="transition-colors duration-300"
                    />

                    {/* Center Core */}
                    <circle
                      r="3"
                      fill={isReached ? "#D62020" : "#9CA3AF"}
                      className="transition-colors duration-300"
                    />
                  </g>
                );
              })}

              {/* Smooth Gliding Progress Dot */}
              <g transform={`translate(${dotPos.x}, ${dotPos.y})`}>
                <circle r="10" fill="#D62020" opacity="0.25" />
                <circle r="5" fill="#D62020" />
                <circle r="2" fill="#FFFFFF" />
              </g>
            </svg>

            {/* Floating Process Cards */}
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isReached = currentProgress >= step.anchorPercent - 0.05;
              const isActive = currentProgress >= step.anchorPercent - 0.08 && currentProgress <= step.anchorPercent + 0.15;

              const leftPercent = (step.xSvg / 1300) * 100;

              return (
                <div
                  key={idx}
                  className={`absolute transform -translate-x-1/2 transition-all duration-500 z-10 w-[230px] xl:w-[250px] ${
                    step.position === "above" ? "bottom-[56%]" : "top-[56%]"
                  }`}
                  style={{ left: `${leftPercent}%` }}
                >
                  <div
                    className={`rounded-2xl p-4 xl:p-4.5 transition-all duration-300 backdrop-blur-md border ${
                      isActive
                        ? "bg-white/95 border-[#D62020]/30 shadow-[0_8px_24px_rgba(214,32,32,0.12)] scale-[1.02]"
                        : isReached
                        ? "bg-white/80 border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                        : "bg-white/50 border-black/[0.04] opacity-75 shadow-xs"
                    }`}
                  >
                    {/* Header: Icon & STEP Label */}
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#D62020] text-white shadow-sm shadow-[#D62020]/30"
                            : isReached
                            ? "bg-[#D62020]/10 text-[#D62020]"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className="text-[12px] font-bold text-[#D62020] uppercase tracking-[0.18em] font-sans">
                        STEP {step.number}
                      </span>
                    </div>

                    {/* Card Title: 28px Semi-bold */}
                    <h3
                      className={`text-[28px] font-semibold font-heading leading-tight transition-colors duration-300 mb-2 ${
                        isActive ? "text-[#D62020]" : "text-[#000000]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description: 16px Medium Gray (#666666) Line-height: 1.7 */}
                    <p className="text-[16px] text-[#666666] leading-[1.7] font-inter">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET VIEW (< lg): Clean Minimal Vertical Timeline */}
        <div className="block lg:hidden mt-8 max-w-xl mx-auto">
          <div className="relative pl-6 border-l border-[#E5E7EB] space-y-6">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isReached = currentProgress >= step.anchorPercent - 0.05;
              const isActive = currentProgress >= step.anchorPercent - 0.08 && currentProgress <= step.anchorPercent + 0.15;

              return (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute -left-[31px] top-2.5 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      isReached ? "bg-[#D62020] border-[#D62020]" : "bg-white border-[#D1D5DB]"
                    }`}
                  />

                  {/* Minimal Card */}
                  <div className="bg-white/90 rounded-2xl p-4.5 border border-black/[0.06] shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#D62020]/10 text-[#D62020] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[12px] font-bold text-[#D62020] uppercase tracking-[0.18em]">
                        STEP {step.number}
                      </span>
                    </div>

                    <h3 className={`text-[24px] sm:text-[28px] font-semibold font-heading leading-tight mb-2 ${
                      isActive ? "text-[#D62020]" : "text-[#000000]"
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-[#666666] leading-[1.7] font-inter">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
