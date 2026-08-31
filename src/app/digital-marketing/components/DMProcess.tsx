"use client";

import React, { useState, useEffect, useRef } from "react";
import { Compass, Lightbulb, Rocket, BarChart2, TrendingUp } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const dmProcessSteps = [
  {
    num: "01",
    title: "Research",
    description: "Analyze competitors, keywords, audiences and market opportunities.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Create",
    description: "Build the channel, content, targeting and advertising strategy.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Promote",
    description: "Launch SEO, advertising and digital marketing campaigns.",
    icon: Rocket,
  },
  {
    num: "04",
    title: "Analyze",
    description: "Track results, report key metrics and identify new growth opportunities.",
    icon: BarChart2,
  },
  {
    num: "05",
    title: "Optimize",
    description: "Improve campaigns using performance and conversion data.",
    icon: TrendingUp,
  }
];

export default function DMProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % dmProcessSteps.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + dmProcessSteps.length) % dmProcessSteps.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = dmProcessSteps[activeIndex];
  const Icon = current.icon;

  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#111111] overflow-hidden py-16 md:py-24">
      


      <div className="flex items-center justify-center min-h-[60vh] overflow-hidden px-4 md:px-12 lg:px-24">
        <div ref={containerRef} className="relative w-full max-w-5xl" onMouseMove={handleMouseMove}>
          
          {/* Oversized index number - positioned to bleed off left edge */}
          <motion.div
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 text-[18rem] md:text-[28rem] font-bold text-[#111111]/[0.03] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {current.num}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content - asymmetric layout */}
          <div className="relative flex flex-col md:flex-row">
            
            {/* Left column - vertical text */}
            <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-[#111111]/10">
              <motion.span
                className="text-xs font-mono text-zinc-400 tracking-widest uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                PROCESS
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-32 w-px bg-[#111111]/10 mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#E32620] origin-top"
                  animate={{
                    height: `${((activeIndex + 1) / dmProcessSteps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Mobile Progress Line */}
            <div className="md:hidden relative w-full h-px bg-[#111111]/10 mb-12">
              <motion.div
                  className="absolute top-0 left-0 h-full bg-[#E32620] origin-left"
                  animate={{
                    width: `${((activeIndex + 1) / dmProcessSteps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            {/* Center - main content */}
            <div className="flex-1 md:pl-16 md:py-12 relative z-10">
              
              {/* Step Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-widest text-[#111111] border border-[#111111]/10 bg-white/50 backdrop-blur-md rounded-full px-4 py-2">
                    <div className="w-6 h-6 rounded-full bg-[#E32620]/10 flex items-center justify-center text-[#E32620]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    {current.title}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Description with character reveal */}
              <div className="relative mb-12 min-h-[140px] md:min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-3xl md:text-5xl font-heading font-semibold text-[#111111] leading-[1.2] tracking-tight"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.description.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.3em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, delay: i * 0.02 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Bottom row */}
              <div className="flex items-end justify-between border-t border-[#111111]/10 pt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      className="w-8 h-px bg-[#E32620]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div>
                      <p className="text-sm font-bold text-[#E32620] tracking-widest uppercase">Step {current.num}</p>
                      <p className="text-sm text-zinc-500 font-medium">Digital Marketing Workflow</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-2 md:gap-4">
                  <motion.button
                    onClick={goPrev}
                    className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#111111]/10 flex items-center justify-center overflow-hidden bg-white/50 backdrop-blur-sm"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#E32620]"
                      initial={{ x: "-100%" }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-[#111111] group-hover:text-white transition-colors"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#111111]/10 flex items-center justify-center overflow-hidden bg-white/50 backdrop-blur-sm"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#E32620]"
                      initial={{ x: "100%" }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-[#111111] group-hover:text-white transition-colors"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
