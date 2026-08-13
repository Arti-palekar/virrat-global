"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery & AI Strategy",
    desc: "Understand the business, identify repetitive tasks, and find high-impact AI automation opportunities.",
  },
  {
    num: "02",
    title: "Process Mapping",
    desc: "Map existing workflows and identify bottlenecks, repetitive work and automation opportunities.",
  },
  {
    num: "03",
    title: "Solution Design",
    desc: "Design the AI workflow, automation logic, integrations and user experience.",
  },
  {
    num: "04",
    title: "Build & Integrate",
    desc: "Develop the automation system and connect it with existing business tools and platforms.",
  },
  {
    num: "05",
    title: "Testing & Optimization",
    desc: "Test workflows, improve reliability and optimize the automation for real-world performance.",
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "Deploy the solution, monitor performance and continuously improve the automation.",
  },
];

export default function AiAutomationProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  // Set up scroll tracking for the progress line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Create a spring physics smoothing for the scroll timeline progress
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Calculate coordinates of node circles dynamically
  const updatePath = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPoints = nodeRefs.current.map((node) => {
      if (!node) return { x: 0, y: 0 };
      const rect = node.getBoundingClientRect();
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      };
    });
    setPoints(newPoints);
  };

  useEffect(() => {
    updatePath();

    window.addEventListener("resize", updatePath);

    // Set up ResizeObserver to handle dynamic height shifts
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updatePath();
      });
      resizeObserver.observe(containerRef.current);
    }

    // Dynamic checks for post-hydration height updates
    const timer1 = setTimeout(updatePath, 150);
    const timer2 = setTimeout(updatePath, 600);
    const timer3 = setTimeout(updatePath, 1500);

    return () => {
      window.removeEventListener("resize", updatePath);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Update active step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      let activeIdx = 0;
      if (latest >= 0.9) activeIdx = 5;
      else if (latest >= 0.72) activeIdx = 4;
      else if (latest >= 0.54) activeIdx = 3;
      else if (latest >= 0.36) activeIdx = 2;
      else if (latest >= 0.18) activeIdx = 1;
      else activeIdx = 0;

      setActiveStep(activeIdx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Construct a smooth curved vertical timeline path
  const getPathD = () => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x} 0`;
    d += ` L ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const cy1 = p1.y + (p2.y - p1.y) / 2;
      const cy2 = p2.y - (p2.y - p1.y) / 2;
      d += ` C ${p1.x} ${cy1}, ${p2.x} ${cy2}, ${p2.x} ${p2.y}`;
    }
    d += ` L ${points[points.length - 1].x} ${
      containerRef.current?.clientHeight || 2000
    }`;
    return d;
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#050b09] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 border-b border-zinc-900 relative overflow-hidden"
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

      <div className="max-w-[1400px] mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[#EF1F25] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 block">
            OUR PROCESS
          </span>
          <h2 className="font-heading font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight mb-6 !text-white">
            AI AUTOMATION PROCESS
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-white/70">
            From discovery to deployment, we design and build practical AI
            automation systems that simplify work and create measurable impact.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          {/* Curved Timeline SVG */}
          <svg
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full pointer-events-none z-0"
            style={{ minHeight: "100%" }}
          >
            {/* Background inactive line */}
            {points.length > 0 && (
              <path
                d={getPathD()}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="2.5"
                strokeDasharray="5 5"
              />
            )}

            {/* Foreground active line */}
            {points.length > 0 && (
              <motion.path
                d={getPathD()}
                fill="none"
                stroke="#EF1F25"
                strokeWidth="3"
                style={{ pathLength }}
              />
            )}
          </svg>

          {/* Timeline steps list */}
          <div className="flex flex-col gap-12 lg:gap-16 relative z-10">
            {processSteps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isCompleted = idx < activeStep;

              return (
                <div
                  key={step.num}
                  className="relative flex flex-col lg:grid lg:grid-cols-12 items-center gap-6 lg:gap-8 min-h-[160px] lg:min-h-[200px] w-full"
                >
                  {/* Node Circle Container */}
                  <div className="absolute lg:relative left-4 lg:left-0 lg:col-span-1 lg:col-start-4 flex justify-center z-20">
                    <div
                      ref={(el) => {
                        nodeRefs.current[idx] = el;
                      }}
                      className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-white border-2 transition-all duration-300 ${
                        isActive
                          ? "border-[#EF1F25] shadow-[0_0_20px_rgba(239,31,37,0.35)] scale-110"
                          : isCompleted
                          ? "border-[#EF1F25]/60"
                          : "border-zinc-700/50"
                      }`}
                    >
                      {/* Pulsing active aura */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#EF1F25]/10 pointer-events-none"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      )}

                      <span
                        className={`font-mono text-sm lg:text-lg font-bold transition-colors duration-300 ${
                          isActive
                            ? "text-[#EF1F25]"
                            : isCompleted
                            ? "text-[#EF1F25]/85"
                            : "text-zinc-400"
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Horizontal Connector line (Desktop only) */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed transition-colors duration-300 ${
                      isActive ? "border-[#EF1F25]/40" : "border-zinc-800"
                    }`}
                    style={{
                      left: "33.33%",
                      width: idx % 2 === 0 ? "8.33%" : "16.66%",
                    }}
                  />

                  {/* Card Container */}
                  <div
                    className={`w-full pl-20 lg:pl-0 lg:col-span-6 ${
                      idx % 2 === 0 ? "lg:col-start-5" : "lg:col-start-6"
                    } relative z-10`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`p-6 lg:p-8 bg-white border rounded-2xl shadow-sm transition-all duration-500 ${
                        isActive
                          ? "border-[#EF1F25]/30 shadow-[0_12px_40px_rgba(239,31,37,0.06)] lg:scale-[1.01]"
                          : "border-zinc-200/50"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-2 block ${
                          isActive ? "text-[#EF1F25]" : "text-zinc-400"
                        }`}
                      >
                        Step {step.num}
                      </span>
                      <h3
                        className={`text-lg lg:text-xl font-bold tracking-tight mb-3 font-heading transition-colors duration-300 ${
                          isActive ? "text-[#EF1F25]" : "text-zinc-800"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-500 font-sans">
                        {step.desc}
                      </p>
                    </motion.div>
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
