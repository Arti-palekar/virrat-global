"use client";

import React, { useRef, useEffect } from "react";
import { Users, Presentation, MonitorSmartphone, Code, FileCheck, Send } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring } from "framer-motion";

interface Step {
  title: string;
  description: string;
  colorTheme?: string;
}

interface WebSoftwareProcessProps {
  eyebrow: string;
  title: string;
  description?: string;
  steps: Step[];
}

const Icons = [Users, Presentation, MonitorSmartphone, Code, FileCheck, Send];

const AnimatedDot = ({ scrollYProgress, pathD, width, height }: { scrollYProgress: any, pathD: string, width: number, height: number }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const dotX = useMotionValue(width / 2);
  const dotY = useMotionValue(0);

  useEffect(() => {
    if (pathRef.current) {
      const totalLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(scrollYProgress.get() * totalLength);
      dotX.set(point.x);
      dotY.set(point.y);
    }
  }, [scrollYProgress, dotX, dotY]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (pathRef.current) {
      const totalLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(latest * totalLength);
      dotX.set(point.x);
      dotY.set(point.y);
    }
  });

  return (
    <>
      <path ref={pathRef} d={pathD} fill="none" opacity={0} />
      <motion.circle cx={dotX} cy={dotY} r={5} fill="#E32620" />
      <motion.circle cx={dotX} cy={dotY} r={14} fill="#E32620" opacity={0.25} filter="blur(4px)" />
    </>
  );
};

const DesktopStep = ({ step, idx, scrollYProgress, totalSteps }: { step: Step; idx: number; scrollYProgress: any; totalSteps: number }) => {
  const isRight = idx % 2 === 0;
  const Icon = Icons[idx % Icons.length] || Users;

  const threshold = (idx * 2 + 1) / (totalSteps * 2);
  const activeValue = useTransform(scrollYProgress, [Math.max(0, threshold - 0.05), threshold], [0, 1]);
  
  const borderColor = useTransform(activeValue, [0, 1], ["#E5E7EB", "#E32620"]);
  const iconColor = useTransform(activeValue, [0, 1], ["#9CA3AF", "#E32620"]);
  const opacity = useTransform(activeValue, [0, 1], [0.45, 1]);
  const y = useTransform(activeValue, [0, 1], [15, 0]);
  const scale = useTransform(activeValue, [0, 1], [0.95, 1]);

  return (
    <div className="relative w-full flex items-center h-[220px] group z-20">
      <div className="absolute left-1/2 -translate-x-1/2 w-[240px] h-[220px] pointer-events-none">
        <motion.div 
          style={{ borderColor, scale }}
          className={`absolute top-1/2 -translate-y-1/2 w-20 h-20 bg-white border-[3px] rounded-full flex items-center justify-center shadow-sm pointer-events-auto transition-shadow duration-300 hover:shadow-md ${
            isRight ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
          }`}
        >
          <motion.div style={{ color: iconColor }}>
            <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
          </motion.div>
          <motion.div style={{ opacity: activeValue }} className="absolute inset-0 bg-[#E32620]/10 rounded-full blur-md -z-10" />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity, y }}
        className={`w-full md:w-1/2 py-10 px-6 md:px-0 flex flex-col justify-center ${
          isRight ? 'md:ml-auto md:pl-[200px]' : 'md:mr-auto md:pr-[200px] md:text-right'
        }`}
      >
        <div className={`text-[#E32620] font-bold text-sm tracking-widest mb-3 uppercase flex items-center gap-3 ${
          isRight ? '' : 'md:justify-end'
        }`}>
          STEP 0{idx + 1}
        </div>
        <h3 className="text-2xl font-bold text-[#111111] mb-3 tracking-tight">{step.title}</h3>
        <p className="text-[#555555] text-base leading-relaxed max-w-md ${isRight ? '' : 'ml-auto'}">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
};

const MobileStep = ({ step, idx, scrollYProgress, totalSteps }: { step: Step; idx: number; scrollYProgress: any; totalSteps: number }) => {
  const Icon = Icons[idx % Icons.length] || Users;

  const threshold = (idx * 2 + 1) / (totalSteps * 2);
  const activeValue = useTransform(scrollYProgress, [Math.max(0, threshold - 0.05), threshold], [0, 1]);
  
  const borderColor = useTransform(activeValue, [0, 1], ["#E5E7EB", "#E32620"]);
  const iconColor = useTransform(activeValue, [0, 1], ["#9CA3AF", "#E32620"]);
  const opacity = useTransform(activeValue, [0, 1], [0.45, 1]);
  const y = useTransform(activeValue, [0, 1], [15, 0]);
  const scale = useTransform(activeValue, [0, 1], [0.95, 1]);

  return (
    <div className="relative w-full flex h-[220px] items-center z-20">
      <motion.div 
        style={{ borderColor, scale }}
        className="absolute left-[38px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white border-[3px] rounded-full flex items-center justify-center shadow-sm z-20 pointer-events-auto"
      >
        <motion.div style={{ color: iconColor }}>
          <Icon className="w-6 h-6" />
        </motion.div>
        <motion.div style={{ opacity: activeValue }} className="absolute inset-0 bg-[#E32620]/10 rounded-full blur-md -z-10" />
      </motion.div>

      <motion.div 
        style={{ opacity, y }}
        className="w-full pl-[90px] pr-4 flex flex-col justify-center"
      >
        <div className="text-[#E32620] font-bold text-sm tracking-widest mb-2 uppercase flex items-center gap-2">
          <span className="w-4 h-[2px] bg-[#E32620]/50" />
          STEP 0{idx + 1}
        </div>
        <h3 className="text-xl font-bold text-[#111111] mb-2 tracking-tight">{step.title}</h3>
        <p className="text-[#555555] text-sm leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
};

export default function WebSoftwareProcess({
  eyebrow,
  title,
  description,
  steps,
}: WebSoftwareProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const shouldReduceMotion = useReducedMotion();
  const finalScrollYProgress = shouldReduceMotion ? useMotionValue(1) : smoothProgress;

  // Desktop Path Calculation
  const svgWidth = 240;
  const stepHeight = 220;
  const rx = svgWidth / 2;
  const ry = stepHeight / 2;
  const totalHeight = steps.length * stepHeight;

  let desktopPathD = `M ${rx} 0`;
  for (let i = 0; i < steps.length; i++) {
    const isRight = i % 2 === 0;
    const sweepFlag = isRight ? 1 : 0;
    const endY = (i + 1) * stepHeight;
    desktopPathD += ` A ${rx} ${ry} 0 0 ${sweepFlag} ${rx} ${endY}`;
  }

  // Mobile Path Calculation
  const mobilePathD = `M 38 0 L 38 ${totalHeight}`;

  return (
    <section className="relative w-full bg-[#FAFAF8] text-[#111111] overflow-hidden pt-24 pb-32">
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#111111 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="w-full pb-16 px-6 md:px-12 text-center relative z-20">
        <span className="inline-block text-[#E32620] text-xs font-bold tracking-[0.25em] uppercase mb-4">
          {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-tight uppercase max-w-[20ch] mx-auto text-[#111111] relative">
          Our Step-by-Step<br />
          Development Process
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#E32620]"></span>
        </h2>
        {description && (
          <p className="text-sm md:text-base text-[#555555] font-medium leading-relaxed max-w-[54ch] mx-auto mt-10">
            {description}
          </p>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 mt-12">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col" ref={containerRef}>
          
          {/* DESKTOP SVG TIMELINE */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[240px] pointer-events-none z-10" style={{ height: totalHeight }}>
            <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${totalHeight}`} style={{ overflow: 'visible' }}>
              <path d={desktopPathD} fill="none" stroke="#D9D9D9" strokeWidth="2" strokeDasharray="6 6" />
              <motion.path 
                d={desktopPathD} 
                fill="none" 
                stroke="#E32620" 
                strokeWidth="3" 
                style={{ 
                  pathLength: finalScrollYProgress,
                  filter: "drop-shadow(0 0 4px rgba(227,38,32,0.18))"
                }} 
              />
              <AnimatedDot scrollYProgress={finalScrollYProgress} pathD={desktopPathD} width={svgWidth} height={totalHeight} />
            </svg>
          </div>

          {/* MOBILE SVG TIMELINE */}
          <div className="md:hidden absolute top-0 left-0 w-[76px] pointer-events-none z-10" style={{ height: totalHeight }}>
            <svg width="100%" height="100%" viewBox={`0 0 76 ${totalHeight}`} style={{ overflow: 'visible' }}>
              <path d={mobilePathD} fill="none" stroke="#D9D9D9" strokeWidth="2" strokeDasharray="6 6" />
              <motion.path 
                d={mobilePathD} 
                fill="none" 
                stroke="#E32620" 
                strokeWidth="3" 
                style={{ 
                  pathLength: finalScrollYProgress,
                  filter: "drop-shadow(0 0 4px rgba(227,38,32,0.18))"
                }} 
              />
              <AnimatedDot scrollYProgress={finalScrollYProgress} pathD={mobilePathD} width={76} height={totalHeight} />
            </svg>
          </div>

          {/* STEPS */}
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="hidden md:block">
                <DesktopStep step={step} idx={idx} scrollYProgress={finalScrollYProgress} totalSteps={steps.length} />
              </div>
              <div className="md:hidden">
                <MobileStep step={step} idx={idx} scrollYProgress={finalScrollYProgress} totalSteps={steps.length} />
              </div>
            </React.Fragment>
          ))}
          
        </div>
      </div>
    </section>
  );
}
