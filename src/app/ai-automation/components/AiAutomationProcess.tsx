"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Activity, PenTool, Zap, Rocket, BarChart2 } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    num: "1",
    title: "Discovery & Requirements",
    desc: "Use AI models to extract key requirements, identify business goals, and find high-impact automation opportunities.",
    icon: <Search className="w-6 h-6 text-white" strokeWidth={2} />,
  },
  {
    num: "2",
    title: "Identifying Enhancements",
    desc: "Leverage AI to suggest potential enhancements, analyze bottlenecks, and identify gaps in existing workflows.",
    icon: <Activity className="w-6 h-6 text-white" strokeWidth={2} />,
  },
  {
    num: "3",
    title: "Structuring the Architecture",
    desc: "Use AI to structure requirements into intelligent workflows, defining AI agents and RPA solutions for a clear roadmap.",
    icon: <PenTool className="w-6 h-6 text-white" strokeWidth={2} />,
  },
  {
    num: "4",
    title: "Building & Integration",
    desc: "Deploy AI-powered automation, integrating intelligent tools seamlessly into your existing platforms and management systems.",
    icon: <Zap className="w-6 h-6 text-white" strokeWidth={2} />,
  },
  {
    num: "5",
    title: "Designing the UI & UX",
    desc: "Let AI propose optimized user interfaces based on the automated workflows, accelerating the design process.",
    icon: <Rocket className="w-6 h-6 text-white" strokeWidth={2} />,
  },
  {
    num: "6",
    title: "Scaling & Optimization",
    desc: "Continuously monitor results, scale automation across teams, and optimize performance for long-term growth.",
    icon: <BarChart2 className="w-6 h-6 text-white" strokeWidth={2} />,
  },
];

export default function AiAutomationProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const updateLayout = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setDimensions({ width: rect.width, height: rect.height });

    const newPoints = nodeRefs.current.map((node) => {
      if (!node) return { x: 0, y: 0 };
      const nodeRect = node.getBoundingClientRect();
      return {
        x: nodeRect.left - rect.left + nodeRect.width / 2,
        y: nodeRect.top - rect.top + nodeRect.height / 2,
      };
    });
    setPoints(newPoints);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(updateLayout);
      resizeObserver.observe(containerRef.current);
    }

    // Post-hydration layout checks
    const timers = [100, 500, 1000].map((t) => setTimeout(updateLayout, t));

    return () => {
      window.removeEventListener("resize", updateLayout);
      resizeObserver?.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  // Calculate diagonal spine coordinates
  const spineTopX = dimensions.width * 0.58; // Starts slightly right of center
  const spineTopY = 80;
  const spineBottomX = dimensions.width * 0.42; // Ends slightly left of center
  const spineBottomY = dimensions.height - 80;

  // Ensure spine visually covers the nodes vertically
  const actualSpineTopY = Math.min(spineTopY, points[0]?.y || spineTopY) - 50;
  const actualSpineBottomY = Math.max(spineBottomY, points[points.length - 1]?.y || spineBottomY) + 50;

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen py-24 md:py-32 lg:py-40 overflow-hidden bg-[#050b09] border-b border-zinc-900 font-sans ai-process-section-override"
    >
      {/* Subtle dotted technical background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(239, 31, 37, 0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Red ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#EF1F25]/[0.02] blur-[130px] pointer-events-none z-0" />

      {/* SVG CONNECTING LINES (SPINE & BRANCHES) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {/* Draw branches from icons to the diagonal spine */}
        {points.map((p, i) => {
          if (p.x === 0 && p.y === 0) return null;
          
          // Calculate the X coordinate of the diagonal spine at this Y
          const spineXAtY = 
            spineTopX + 
            ((spineBottomX - spineTopX) * (p.y - actualSpineTopY)) / 
            (actualSpineBottomY - actualSpineTopY);

          return (
            <motion.line
              key={`branch-${i}`}
              x1={p.x}
              y1={p.y}
              x2={spineXAtY}
              y2={p.y}
              stroke="#EF1F25"
              strokeWidth="2"
              strokeOpacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            />
          );
        })}

        {/* Diagonal Spine */}
        {dimensions.width > 0 && (
          <motion.line
            x1={spineTopX}
            y1={actualSpineTopY}
            x2={spineBottomX}
            y2={actualSpineBottomY}
            stroke="#EF1F25"
            strokeWidth="3"
            strokeOpacity="0.8"
            style={{ pathLength }}
          />
        )}
      </svg>

      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 relative z-20">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg"
          >
            Our Automation Process
          </motion.h2>
        </div>

        {/* STEPS LIST */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {processSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div key={idx} className="flex w-full items-center relative group">
                
                {/* Mobile Layout (Visible on small screens, hidden on md+) */}
                <div className="md:hidden flex flex-col w-full relative z-20 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      ref={isLeft ? el => { nodeRefs.current[idx] = el; } : undefined} // Track for mobile spine? We'll hide spine on mobile.
                      className="w-12 h-12 rounded-xl bg-[#EF1F25] shadow-[0_0_20px_rgba(239,31,37,0.4)] flex items-center justify-center shrink-0"
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.num}. {step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Desktop Layout (Hidden on mobile) */}
                <div className="hidden md:flex w-full items-center">
                  
                  {isLeft ? (
                    /* LEFT ALIGNED STEP */
                    <>
                      <div className="w-1/2 flex items-center justify-end pr-8 lg:pr-12">
                        {/* Text Content */}
                        <motion.div 
                          initial={{ opacity: 0, x: -60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                          className="flex-1 text-left pr-6 lg:pr-12 max-w-[400px]"
                        >
                          <h3 className="text-[20px] lg:text-[22px] font-semibold text-white mb-3 drop-shadow-md">
                            {step.num}. {step.title}
                          </h3>
                          <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed drop-shadow-sm">
                            {step.desc}
                          </p>
                        </motion.div>
                        
                        {/* Connecting Dot & Line */}
                        <div className="flex items-center shrink-0">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#EF1F25] shadow-[0_0_8px_rgba(239,31,37,0.8)]" />
                          <div className="w-8 lg:w-16 h-[2px] bg-[#EF1F25]/80" />
                          
                          {/* Icon Box */}
                          <div 
                            ref={el => { nodeRefs.current[idx] = el; }}
                            className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-[#EF1F25] shadow-[0_0_25px_rgba(239,31,37,0.5)] flex items-center justify-center shrink-0 relative z-20 group-hover:scale-110 transition-transform duration-300"
                          >
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2" />
                    </>
                  ) : (
                    /* RIGHT ALIGNED STEP */
                    <>
                      <div className="w-1/2" />
                      <div className="w-1/2 flex items-center justify-start pl-8 lg:pl-12">
                        {/* Connecting Icon, Line & Dot */}
                        <div className="flex items-center shrink-0">
                          {/* Icon Box */}
                          <div 
                            ref={el => { nodeRefs.current[idx] = el; }}
                            className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-[#EF1F25] shadow-[0_0_25px_rgba(239,31,37,0.5)] flex items-center justify-center shrink-0 relative z-20 group-hover:scale-110 transition-transform duration-300"
                          >
                            {step.icon}
                          </div>
                          
                          <div className="w-8 lg:w-16 h-[2px] bg-[#EF1F25]/80" />
                          <div className="w-[6px] h-[6px] rounded-full bg-[#EF1F25] shadow-[0_0_8px_rgba(239,31,37,0.8)]" />
                        </div>

                        {/* Text Content */}
                        <motion.div 
                          initial={{ opacity: 0, x: 60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                          className="flex-1 text-left pl-6 lg:pl-12 max-w-[400px]"
                        >
                          <h3 className="text-[20px] lg:text-[22px] font-semibold text-white mb-3 drop-shadow-md">
                            {step.num}. {step.title}
                          </h3>
                          <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed drop-shadow-sm">
                            {step.desc}
                          </p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Global styles for mobile adjustments & text overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ai-process-section-override h2,
        .ai-process-section-override h3,
        .ai-process-section-override span,
        .ai-process-section-override div.text-white {
          color: #FFFFFF !important;
        }
        .ai-process-section-override p {
          color: rgba(255, 255, 255, 0.85) !important;
        }
        @media (max-width: 767px) {
          /* Hide the SVG connecting lines on mobile since layout shifts */
          svg.pointer-events-none {
            display: none;
          }
        }
      `}} />
    </section>
  );
}
