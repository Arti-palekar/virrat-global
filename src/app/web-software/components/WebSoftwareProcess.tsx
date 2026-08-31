"use client";

import React from "react";
import { Search, Lightbulb, PenTool, Code, Rocket, ChevronsRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
  colorTheme?: string;
}

interface WebSoftwareProcessProps {
  eyebrow: string;
  title: string;
  description?: string;
  steps?: Step[]; // We ignore the passed steps to enforce the requested 5 steps
}

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "Understand business goals, audience, and requirements.",
    icon: Search,
  },
  {
    title: "Planning & Architecture",
    description: "Define features, technology, and development roadmap.",
    icon: Lightbulb,
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive wireframes and polished user interfaces.",
    icon: PenTool,
  },
  {
    title: "Development",
    description: "Build a scalable, secure, and high-performance solution.",
    icon: Code,
  },
  {
    title: "Testing, Launch & Support",
    description: "Test, launch, and provide ongoing support and optimization.",
    icon: Rocket,
  }
];

export default function WebSoftwareProcess({
  eyebrow,
  title,
  description,
}: WebSoftwareProcessProps) {

  return (
    <section className="relative w-full bg-[#FAFAF8] text-[#111111] overflow-hidden pt-24 pb-32">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#111111 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="w-full pb-16 px-6 md:px-12 text-center relative z-20">
        <h2 className="text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight max-w-[20ch] mx-auto text-[#111111] relative">
          OUR PROCESS
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[54ch] mx-auto mt-10">
          A simple, structured process for building scalable digital products.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 mt-12 max-w-[1600px]">
        {/* Modern Infographic Grid Layout - Exactly 5 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 xl:gap-x-8 gap-y-16">
          
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            
            return (
              <div key={idx} className="relative w-full pt-8 pl-8 pb-4 pr-4 group mx-auto max-w-[340px] lg:max-w-none">
                
                {/* Large Circular Element Behind Card */}
                <div className="absolute top-0 left-0 w-[110px] h-[110px] xl:w-[130px] xl:h-[130px] bg-[#E32620] rounded-full z-0 transition-transform duration-500 group-hover:scale-105 opacity-90 shadow-lg shadow-[#E32620]/20" />
                
                {/* Decorative Floating Lines (Top Right) */}
                <div className="absolute top-4 right-12 w-6 h-[4px] bg-[#E32620]/60 rounded-full transition-all duration-300 group-hover:bg-[#E32620]" />
                <div className="absolute top-4 right-4 w-[4px] h-[4px] bg-[#E32620]/60 rounded-full transition-all duration-300 group-hover:bg-[#E32620]" />
                
                {/* Decorative Floating Lines (Bottom Left) */}
                <div className="absolute -bottom-1 left-12 w-10 h-[4px] bg-[#E32620]/60 rounded-full transition-all duration-300 group-hover:bg-[#E32620]" />
                <div className="absolute -bottom-1 left-26 w-4 h-[4px] bg-[#E32620]/60 rounded-full transition-all duration-300 group-hover:bg-[#E32620]" />

                {/* Main Card (Premium Glassmorphism over circle) */}
                <div className="relative z-10 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] xl:rounded-[2.5rem] p-6 xl:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] h-full min-h-[280px] flex flex-col group-hover:shadow-[0_16px_48px_rgba(227,38,32,0.12)] transition-all duration-500 transform group-hover:-translate-y-1">
                  
                  {/* Top Header: Icon & Arrows */}
                  <div className="flex justify-between items-start mb-6 xl:mb-8">
                    {/* Icon placed overlapping the red circle beneath the frosted glass */}
                    <div className="w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center -ml-2 -mt-2">
                       <Icon className="w-7 h-7 xl:w-8 xl:h-8 text-[#E32620] drop-shadow-sm" />
                    </div>
                    {/* Double arrows from reference */}
                    <ChevronsRight className="w-5 h-5 xl:w-6 xl:h-6 text-[#E32620]/50" />
                  </div>

                  {/* Centered Content */}
                  <div className="text-center mt-auto flex flex-col items-center pb-2">
                     <h4 className="text-[#E32620] font-bold tracking-[0.15em] text-[12px] xl:text-[13px] uppercase mb-4">
                       STEP 0{idx + 1}
                     </h4>
                     <h3 className="text-[17px] xl:text-[19px] font-bold text-[#111111] mb-3 leading-tight">
                       {step.title}
                     </h3>
                     <p className="text-[#555555] text-[12px] xl:text-[13px] leading-relaxed max-w-[240px] mx-auto">
                       {step.description}
                     </p>
                  </div>

                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
