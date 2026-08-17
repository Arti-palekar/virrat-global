"use client";

import React from "react";
import { Compass, Lightbulb, Rocket, BarChart2, TrendingUp } from "lucide-react";

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
  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden">
      
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: no-preference) {
          .process-line-animated {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: line-run 14s linear infinite;
            filter: drop-shadow(0 0 6px rgba(227,38,32,0.6));
          }
          .node-pulse-0 { animation: pulse-node 14s infinite; animation-delay: 0s; }
          .node-pulse-1 { animation: pulse-node 14s infinite; animation-delay: 2.8s; }
          .node-pulse-2 { animation: pulse-node 14s infinite; animation-delay: 5.6s; }
          .node-pulse-3 { animation: pulse-node 14s infinite; animation-delay: 8.4s; }
          .node-pulse-4 { animation: pulse-node 14s infinite; animation-delay: 11.2s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-line-animated {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }
        @keyframes line-run {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
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
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter leading-[1.1] uppercase mb-4">
            Our Step-by-Step<br />Digital Marketing Process
          </h2>
          <p className="text-sm md:text-[15px] text-zinc-500 font-medium leading-relaxed max-w-[48ch] mx-auto">
            From discovery to growth optimization, we build and run campaigns structured to convert.
          </p>
        </div>

        {/* Winding Path Container - Desktop */}
        <div className="hidden md:block relative w-full aspect-[2.5/1] max-w-[1000px] mx-auto">
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
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
                C 950,100 950,200 1000,200
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
                C 950,100 950,200 1000,200
              " 
              fill="none" 
              stroke="url(#redGradient)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              pathLength="100"
            />
            {/* End Arrow */}
            <path d="M 990,193 L 1000,200 L 990,207" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          </svg>

          {/* Desktop Nodes */}
          {dmProcessSteps.map((step, idx) => {
            const isTop = idx % 2 === 0;
            const xPercent = ((idx * 200 + 100) / 1000) * 100;
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
        <div className="block md:hidden relative w-full h-[1000px] max-w-[400px] mx-auto mt-10">
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 1000" preserveAspectRatio="xMidYMid meet">
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
                C 100,950 200,950 200,1000
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
                C 100,950 200,950 200,1000
              " 
              fill="none" 
              stroke="url(#redGradientMobile)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              pathLength="100"
            />
            {/* End Arrow */}
            <path d="M 193,990 L 200,1000 L 207,990" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          </svg>

          {/* Mobile Nodes */}
          {dmProcessSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const xPercent = isLeft ? 25 : 75;
            const yPercent = ((idx * 200 + 100) / 1000) * 100;
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
