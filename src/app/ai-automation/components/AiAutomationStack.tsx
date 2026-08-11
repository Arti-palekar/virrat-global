"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { RiOpenaiFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import {
  SiGooglegemini,
  SiAnthropic,
  SiN8N,
  SiMake,
  SiZapier,
  SiPython,
  SiNodedotjs,
  SiGithub,
  SiGooglecloud,
  SiPostgresql,
} from "react-icons/si";

const innerRingTools = [
  { icon: RiOpenaiFill, label: "OpenAI", color: "text-black", delay: "0s" },
  { icon: SiZapier, label: "Zapier", color: "text-[#FF4A00]", delay: "-6.25s" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-[#339933]", delay: "-12.5s" },
  { icon: FaAws, label: "AWS", color: "text-[#FF9900]", delay: "-18.75s" },
]; // 25s total animation

const middleRingTools = [
  { icon: SiGooglegemini, label: "Google Gemini", color: "text-[#8E75FF]", delay: "0s" },
  { icon: SiMake, label: "Make", color: "text-[#6B31F7]", delay: "-8.75s" },
  { icon: SiPython, label: "Python", color: "text-[#3776AB]", delay: "-17.5s" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-[#4169E1]", delay: "-26.25s" },
]; // 35s total animation

const outerRingTools = [
  { icon: SiAnthropic, label: "Claude", color: "text-[#D97757]", delay: "0s" },
  { icon: SiN8N, label: "n8n", color: "text-[#FF6D5A]", delay: "-12.5s" },
  { icon: SiGithub, label: "GitHub", color: "text-[#181717]", delay: "-25s" },
  { icon: SiGooglecloud, label: "Google Cloud", color: "text-[#4285F4]", delay: "-37.5s" },
]; // 50s total animation

export default function AiAutomationStack() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#FAF9F6]">
      
      {/* Custom CSS for Orbit Animations */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        .orbit-arm-1 { animation: orbit 25s linear infinite; }
        .orbit-arm-reverse-1 { animation: orbit-reverse 25s linear infinite; }
        
        .orbit-arm-2 { animation: orbit 35s linear infinite; }
        .orbit-arm-reverse-2 { animation: orbit-reverse 35s linear infinite; }
        
        .orbit-arm-3 { animation: orbit 50s linear infinite; }
        .orbit-arm-reverse-3 { animation: orbit-reverse 50s linear infinite; }
        
        .orbit-system:hover .orbit-arm-1,
        .orbit-system:hover .orbit-arm-reverse-1,
        .orbit-system:hover .orbit-arm-2,
        .orbit-system:hover .orbit-arm-reverse-2,
        .orbit-system:hover .orbit-arm-3,
        .orbit-system:hover .orbit-arm-reverse-3 {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6 leading-[1.1]">
            AI + Automation<br className="hidden md:block" /> Tools We Use
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
            We combine leading AI platforms, automation tools, development technologies and integrations to build intelligent, scalable solutions for our clients.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-[#111111] rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center gap-2">
              Explore Our Tools
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Right Column: Visual Concept */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[450px] md:min-h-[600px]">
          
          <div className="relative w-full h-full flex justify-center items-center orbit-system">
            
            {/* Central Glowing Orb (Stationary) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#fd2e35] via-[#ff6b6b] to-[#ffa502] opacity-80 blur-3xl mix-blend-multiply animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#fd2e35] to-[#ff8c00] shadow-[0_0_80px_rgba(253,46,53,0.7)] z-10"></div>
            
            {/* Inner Ring (Fast) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full border border-black/5">
              {innerRingTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div key={index} className="absolute top-0 left-0 w-full h-full orbit-arm-1" style={{ animationDelay: tool.delay }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-black/5 flex items-center justify-center orbit-arm-reverse-1 group cursor-pointer transition-colors hover:border-[#fd2e35]/30 hover:shadow-[0_8px_30px_rgba(253,46,53,0.15)]" style={{ animationDelay: tool.delay }}>
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${tool.color}`} />
                      <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow border border-black/5 pointer-events-none z-30">
                        {tool.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Middle Ring (Medium) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full border border-black/5">
              {middleRingTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div key={index} className="absolute top-0 left-0 w-full h-full orbit-arm-2" style={{ animationDelay: tool.delay }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-black/5 flex items-center justify-center orbit-arm-reverse-2 group cursor-pointer transition-colors hover:border-[#fd2e35]/30 hover:shadow-[0_8px_30px_rgba(253,46,53,0.15)]" style={{ animationDelay: tool.delay }}>
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${tool.color}`} />
                      <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow border border-black/5 pointer-events-none z-30">
                        {tool.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Outer Ring (Slow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[580px] md:h-[580px] rounded-full border border-black/5 border-dashed">
              {outerRingTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div key={index} className="absolute top-0 left-0 w-full h-full orbit-arm-3" style={{ animationDelay: tool.delay }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-black/5 flex items-center justify-center orbit-arm-reverse-3 group cursor-pointer transition-colors hover:border-[#fd2e35]/30 hover:shadow-[0_8px_30px_rgba(253,46,53,0.15)]" style={{ animationDelay: tool.delay }}>
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${tool.color}`} />
                      <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow border border-black/5 pointer-events-none z-30">
                        {tool.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
