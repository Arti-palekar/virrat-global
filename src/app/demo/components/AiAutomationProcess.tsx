"use client";

import React from "react";
import { Lightbulb, Layers, Compass, LayoutGrid, CheckCircle, Rocket } from "lucide-react";

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
    icon: Compass,
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
    icon: CheckCircle,
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
    <section className="relative w-full py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden">
      
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: no-preference) {
          .process-line-animated {
            stroke-dasharray: 12 150;
            animation: line-run 14s linear infinite;
            filter: drop-shadow(0 0 6px rgba(227,38,32,0.6));
          }
          .node-pulse-0 { animation: pulse-node 14s infinite; animation-delay: 0s; }
          .node-pulse-1 { animation: pulse-node 14s infinite; animation-delay: 2s; }
          .node-pulse-2 { animation: pulse-node 14s infinite; animation-delay: 4s; }
          .node-pulse-3 { animation: pulse-node 14s infinite; animation-delay: 6s; }
          .node-pulse-4 { animation: pulse-node 14s infinite; animation-delay: 8s; }
          .node-pulse-5 { animation: pulse-node 14s infinite; animation-delay: 10s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-line-animated {
            stroke-dasharray: 120;
            stroke-dashoffset: 0;
          }
        }
        @keyframes line-run {
          0% { stroke-dashoffset: 6; }
          100% { stroke-dashoffset: -134; }
        }
        @keyframes pulse-node {
          0%, 15%, 100% { box-shadow: 0 0 0px rgba(227,38,32,0); border-color: white; transform: scale(1); }
          7.14% { box-shadow: 0 0 35px rgba(227,38,32,0.8); border-color: #E32620; transform: scale(1.15); }
        }
      `}} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[#E32620] text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase mb-4">OUR PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter leading-[1.1] uppercase">
            The 6 Pillars of our<br />
            AI Automation Strategy
          </h2>
        </div>

        {/* Winding Path Container - Desktop */}
        <div className="hidden md:block relative w-full aspect-[3/1] max-w-[1200px] mx-auto">
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E32620" />
                <stop offset="100%" stopColor="#FF7A59" />
              </linearGradient>
            </defs>
            
            {/* Base dotted path */}
            <path 
              d="
                M 0,200 
                C 50,200 50,100 100,100 
                C 200,100 200,300 300,300 
                C 400,300 400,100 500,100 
                C 600,100 600,300 700,300 
                C 800,300 800,100 900,100 
                C 1000,100 1000,300 1100,300 
                C 1150,300 1150,200 1200,200
              " 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />

            {/* Animated line */}
            <path 
              className="process-line-animated"
              d="
                M 0,200 
                C 50,200 50,100 100,100 
                C 200,100 200,300 300,300 
                C 400,300 400,100 500,100 
                C 600,100 600,300 700,300 
                C 800,300 800,100 900,100 
                C 1000,100 1000,300 1100,300 
                C 1150,300 1150,200 1200,200
              " 
              fill="none" 
              stroke="url(#redGradient)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              pathLength="120"
            />
            {/* End Arrow */}
            <path d="M 1190,193 L 1200,200 L 1190,207" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          </svg>

          {/* Desktop Nodes */}
          {aiProcessSteps.map((step, idx) => {
            const isTop = idx % 2 === 0;
            const xPercent = ((idx * 200 + 100) / 1200) * 100;
            const yPercent = isTop ? 25 : 75;
            const IconComp = step.icon;

            return (
              <div 
                key={step.num}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
                style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
              >
                {/* Text Above */}
                {isTop && (
                  <div className="absolute bottom-full mb-6 w-[200px] text-center">
                    <h3 className="text-[17px] font-bold text-[#111111] mb-1 leading-tight">{step.title}</h3>
                    <p className="text-[13px] text-gray-500 font-medium leading-snug">{step.description}</p>
                  </div>
                )}

                {/* Node Circle */}
                <div 
                  className={`node-pulse-${idx} w-[70px] h-[70px] rounded-full flex items-center justify-center border-4 border-white relative z-20 bg-gradient-to-br from-[#E32620] to-[#ff5a5f] transition-transform duration-300`}
                >
                  <IconComp className="text-white w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Text Below */}
                {!isTop && (
                  <div className="absolute top-full mt-6 w-[200px] text-center">
                    <h3 className="text-[17px] font-bold text-[#111111] mb-1 leading-tight">{step.title}</h3>
                    <p className="text-[13px] text-gray-500 font-medium leading-snug">{step.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>


        {/* Winding Path Container - Mobile */}
        <div className="block md:hidden relative w-full h-[1200px] max-w-[400px] mx-auto mt-10">
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 1200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="redGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E32620" />
                <stop offset="100%" stopColor="#FF7A59" />
              </linearGradient>
            </defs>

            {/* Base dotted path */}
            <path 
              d="
                M 200,0 
                C 200,50 100,50 100,100 
                C 100,200 300,200 300,300 
                C 300,400 100,400 100,500 
                C 100,600 300,600 300,700 
                C 300,800 100,800 100,900 
                C 100,1000 300,1000 300,1100 
                C 300,1150 200,1150 200,1200
              " 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />

            {/* Animated line */}
            <path 
              className="process-line-animated"
              d="
                M 200,0 
                C 200,50 100,50 100,100 
                C 100,200 300,200 300,300 
                C 300,400 100,400 100,500 
                C 100,600 300,600 300,700 
                C 300,800 100,800 100,900 
                C 100,1000 300,1000 300,1100 
                C 300,1150 200,1150 200,1200
              " 
              fill="none" 
              stroke="url(#redGradientMobile)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              pathLength="120"
            />
            {/* End Arrow */}
            <path d="M 193,1190 L 200,1200 L 207,1190" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          </svg>

          {/* Mobile Nodes */}
          {aiProcessSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const xPercent = isLeft ? 25 : 75;
            const yPercent = ((idx * 200 + 100) / 1200) * 100;
            const IconComp = step.icon;

            return (
              <div 
                key={step.num}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
                style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
              >
                
                {/* Text Left (for Right nodes) */}
                {!isLeft && (
                  <div className="absolute right-full mr-4 w-[140px] text-right">
                    <h3 className="text-[15px] font-bold text-[#111111] mb-1 leading-tight">{step.title}</h3>
                    <p className="text-[12px] text-gray-500 font-medium leading-tight">{step.description}</p>
                  </div>
                )}

                {/* Node Circle */}
                <div 
                  className={`node-pulse-${idx} w-[60px] h-[60px] rounded-full flex items-center justify-center border-4 border-white relative z-20 bg-gradient-to-br from-[#E32620] to-[#ff5a5f] transition-transform duration-300`}
                >
                  <IconComp className="text-white w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Text Right (for Left nodes) */}
                {isLeft && (
                  <div className="absolute left-full ml-4 w-[140px] text-left">
                    <h3 className="text-[15px] font-bold text-[#111111] mb-1 leading-tight">{step.title}</h3>
                    <p className="text-[12px] text-gray-500 font-medium leading-tight">{step.description}</p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
