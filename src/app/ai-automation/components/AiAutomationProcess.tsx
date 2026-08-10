"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Layers, Gauge, LayoutGrid, Network, Rocket } from "lucide-react";

const aiProcessSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "Understand business goals and identify high-impact AI opportunities.",
    icon: Lightbulb,
  },
  {
    num: "02",
    title: "Process Mapping",
    description: "Map workflows and find opportunities to remove manual work.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Solution Design",
    description: "Design AI workflows and user experiences tailored to your business.",
    icon: Gauge,
  },
  {
    num: "04",
    title: "Build & Integrate",
    description: "Build the solution and connect it with existing business systems.",
    icon: LayoutGrid,
  },
  {
    num: "05",
    title: "Testing & Optimize",
    description: "Test, refine and optimize workflows for accuracy and performance.",
    icon: Network,
  },
  {
    num: "06",
    title: "Launch & Support",
    description: "Deploy and continuously improve the solution as your business grows.",
    icon: Rocket,
  }
];

export default function AiAutomationProcess() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #d4d4d8 1px, transparent 1px), linear-gradient(to bottom, #d4d4d8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-100 shadow-sm">
          <span className="text-[#E32620] text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase mb-4">OUR PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter leading-[1.1] uppercase">
            The 6 Pillars of our<br />
            AI Automation Strategy
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative w-full max-w-4xl mx-auto pb-12">
          
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#111111] md:-translate-x-1/2 z-0" />
          
          {/* Top Node */}
          <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-white border-2 border-[#111111] rounded-full -translate-x-[9.5px] md:-translate-x-1/2 -mt-2 z-10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#111111] rounded-full" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative z-10 mt-16 md:mt-24">
            {aiProcessSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp = step.icon;
              
              return (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* Text Card */}
                  <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 relative flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    
                    {/* Horizontal Connector Line (Desktop Only) */}
                    <div 
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-[#111111] w-[40px] z-0 ${
                        isEven ? "right-[-40px]" : "left-[-40px]"
                      }`} 
                    />

                    {/* Horizontal Connector Line (Mobile Only) */}
                    <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-6 w-10 h-px bg-[#111111] z-0" />

                    {/* The Card */}
                    <div className="w-full md:max-w-[340px] bg-white border-2 border-[#111111] rounded-[24px] p-6 md:p-8 relative mt-4 md:mt-0 shadow-[4px_4px_0_0_#111111] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#111111] z-10">
                      {/* Pill Title */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E32620] px-4 md:px-6 py-1.5 md:py-2 rounded-full border-2 border-[#111111] whitespace-nowrap z-20 shadow-[2px_2px_0_0_#111111]">
                        <span className="text-white text-[11px] md:text-[13px] font-bold tracking-wider uppercase">
                          {step.title}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-[#444444] text-sm md:text-[15px] font-medium text-center leading-relaxed mt-3">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node (Dot) */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-[9.5px] md:-translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#111111] rounded-full z-20 flex items-center justify-center shadow-sm">
                    <div className="w-1.5 h-1.5 bg-[#E32620] rounded-full" />
                  </div>

                  {/* Large Icon (Opposite Side - Desktop Only) */}
                  <div className={`hidden md:flex w-[calc(50%-40px)] items-center justify-center ${isEven ? 'pl-20' : 'pr-20'}`}>
                    <div className="relative">
                      {/* Blur glow behind icon */}
                      <div className="absolute inset-0 bg-[#E32620]/20 blur-3xl rounded-full scale-150" />
                      <IconComp size={140} strokeWidth={1} className="text-[#E32620]/60 relative z-10 transition-transform duration-700 hover:scale-110 hover:text-[#E32620]/80" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Bottom Node */}
          <div className="absolute left-6 md:left-1/2 bottom-0 w-5 h-5 bg-white border-2 border-[#111111] rounded-full -translate-x-[9.5px] md:-translate-x-1/2 translate-y-2 z-10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#111111] rounded-full" />
          </div>

        </div>

      </div>
    </section>
  );
}
