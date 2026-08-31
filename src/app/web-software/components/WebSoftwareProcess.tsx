"use client";

import React from "react";
import { Search, Lightbulb, PenTool, Code, Rocket } from "lucide-react";

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

  // Process title: splitting by newline if any
  const formattedTitle = title.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <section className="relative w-full bg-white text-[#111111] overflow-hidden py-16 md:py-24">
      {/* Header */}
      <div className="w-full text-center relative z-20 px-6 mb-16 md:mb-32">
        <h2 className="text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight max-w-[20ch] mx-auto text-[#111111] relative mb-5">
          {formattedTitle}
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[54ch] mx-auto mt-6">
          {description}
        </p>
      </div>

      {/* Desktop Timeline (Curved Wave) */}
      <div className="hidden lg:block relative max-w-[1400px] mx-auto h-[480px]">
        
        {/* The SVG Wavy Line (200px height, vertically centered) */}
        <div className="absolute top-1/2 left-0 w-full h-[200px] -translate-y-1/2 pointer-events-none">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1000 200" 
            preserveAspectRatio="none" 
            className="overflow-visible"
          >
            <path 
              d="M 0 100 
                 C 40 100, 50 50, 100 50 
                 S 200 150, 300 150 
                 S 400 50, 500 50 
                 S 600 150, 700 150 
                 S 800 50, 900 50 
                 C 950 50, 960 100, 1000 100" 
              fill="none" 
              stroke="#E32620" 
              strokeWidth="2.5" 
              className="drop-shadow-[0_6px_12px_rgba(227,38,32,0.3)]"
            />
          </svg>

          {/* Nodes & Content */}
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            const isTop = idx % 2 === 0; // Peak (y=50) -> Top
            const leftPos = `${10 + (idx * 20)}%`; 
            const topPos = isTop ? "25%" : "75%"; 
            
            return (
              <div 
                key={idx} 
                className="absolute flex flex-col items-center justify-center z-20 pointer-events-auto"
                style={{ left: leftPos, top: topPos, transform: "translate(-50%, -50%)" }}
              >
                {/* The Icon Badge */}
                <div className="w-[72px] h-[72px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(227,38,32,0.12)] border border-[#E32620]/10 flex items-center justify-center relative z-20 group hover:-translate-y-1 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#E32620]" strokeWidth={2.2} />
                </div>

                {/* The Text Box */}
                <div 
                  className={`absolute w-72 text-center flex flex-col items-center justify-center pointer-events-none ${isTop ? 'bottom-[80px]' : 'top-[80px]'}`}
                >
                  <div className="relative w-full flex flex-col items-center justify-center">
                    {/* Giant faded number */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'bottom-[-20px]' : 'top-[-35px]'} text-[180px] font-black text-slate-100/70 z-0 leading-none tracking-tighter select-none`}
                    >
                      {idx + 1}
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed px-4">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile/Tablet Timeline (Vertical) */}
      <div className="lg:hidden relative px-6 md:px-12 max-w-2xl mx-auto mt-16 pb-12">
        {/* Vertical Line */}
        <div className="absolute left-[3.25rem] md:left-[5rem] top-8 bottom-0 w-[2px] bg-gradient-to-b from-[#E32620]/60 to-transparent z-0" />
        
        <div className="flex flex-col gap-16 relative z-10">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex gap-6 md:gap-10 relative items-start">
                {/* Icon Node */}
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-[0_8px_20px_rgba(227,38,32,0.15)] border border-[#E32620]/10 flex items-center justify-center relative z-20 mt-1 md:mt-2">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#E32620]" strokeWidth={2.2} />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1 md:pt-3 relative">
                  {/* Background Number */}
                  <div className="absolute -top-10 md:-top-16 left-0 text-[100px] md:text-[140px] font-black text-slate-100/70 z-0 leading-none tracking-tighter select-none pointer-events-none">
                    {idx + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-base text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
