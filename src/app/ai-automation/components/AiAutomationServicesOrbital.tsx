"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  Cpu, 
  Hash, 
  Calendar, 
  Sliders, 
  MessageSquare 
} from "lucide-react";

interface ServiceNode {
  title: string;
  desc: string;
  btnText: string;
  icon: React.ComponentType<any>;
}

const servicesList: ServiceNode[] = [
  {
    title: "Shared Memory",
    desc: "Connect your AI teammates to a shared organizational knowledge base that grows smarter with every interaction.",
    btnText: "See memory control →",
    icon: Brain
  },
  {
    title: "Skills + MCP",
    desc: "Package repeatable workflows as skills and connect teammates to the MCP servers your team already trusts.",
    btnText: "See MCP control →",
    icon: Cpu
  },
  {
    title: "Conversational Onboarding",
    desc: "Train and onboard new agents simply by talking to them. Refine their boundaries and rules in real-time conversation.",
    btnText: "Start onboarding →",
    icon: MessageSquare
  },
  {
    title: "Team Workspace",
    desc: "Integrate teammates directly into Slack, Teams, email, or your custom business portals where work already happens.",
    btnText: "View integrations →",
    icon: Hash
  },
  {
    title: "Scheduled Agency",
    desc: "Configure agents to run autonomously on Cron schedules, triggered events, or daily cycles to monitor and report.",
    btnText: "Configure schedules →",
    icon: Calendar
  },
  {
    title: "Personality",
    desc: "Tune voice, style, and level of agency so every teammate knows how bold to be and when to ask first.",
    btnText: "Agent modeling 101 →",
    icon: Sliders
  }
];

export default function AiAutomationServicesOrbital() {
  // Default active node is Personality (index 5)
  const [activeIdx, setActiveIdx] = useState<number>(5);

  // Polar percentage coordinates on a 640px grid to prevent overlap and support responsiveness
  const nodesPos = [
    { left: "50%", top: "15.625%" },     // Top Node (Shared Memory)
    { left: "79.76%", top: "32.81%" },   // Top-Right (Skills + MCP)
    { left: "79.76%", top: "67.19%" },   // Bottom-Right (Conversational Onboarding)
    { left: "50%", top: "84.375%" },     // Bottom Node (Team Workspace)
    { left: "20.24%", top: "67.19%" },   // Bottom-Left (Scheduled Agency)
    { left: "20.24%", top: "32.81%" }    // Top-Left (Personality)
  ];

  const activeNode = servicesList[activeIdx];

  return (
    <section className="ai-automation-services w-full py-24 bg-[#050b09] text-white overflow-hidden border-b border-zinc-900">
      <style>{`
        @keyframes orbit-glow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-orbit-glow {
          animation: orbit-glow 35s linear infinite;
        }

        /* Scoped white text rule for Services section */
        .ai-automation-services h2,
        .ai-automation-services h3,
        .ai-automation-services p,
        .ai-automation-services span {
          color: #ffffff !important;
        }

        /* Default (non-hovered) transparent light styling for outer nodes */
        .ai-automation-services .circle {
          background: transparent !important;
          border: 1.5px solid rgba(255, 255, 255, 0.22) !important;
          box-shadow: none !important;
        }

        /* Active circle state override (Teal/Cyan theme) */
        .ai-automation-services .active-circle {
          background: rgba(4, 9, 7, 0.95) !important;
          border: 2px solid #06f0b4 !important;
          box-shadow: 0 0 25px rgba(6, 240, 180, 0.15) !important;
        }

        /* Center Card styling (Dark glass background with subtle cyan highlights) */
        .ai-automation-services .circle-center {
          background: rgba(4, 9, 7, 0.85) !important;
          border: 1px solid rgba(34, 211, 238, 0.12) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>

      {/* Subtle green/cyan ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#06f0b4]/3 blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN: EDITORIAL COPY ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#06f0b4] text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
              AI AGENTS THAT WORK FOR YOU
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-light leading-[1.15] tracking-tight uppercase mb-8 font-heading text-zinc-300">
              Build AI teammates that automate your workflows
            </h2>
            
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans">
              Deploy intelligent AI agents that learn your processes, use your tools, and handle repetitive tasks. Automate workflows, improve productivity, and help your team focus on what matters most.
            </p>
          </div>

          {/* ── RIGHT COLUMN: ORBIT VISUALIZATION ── */}
          <div className="lg:col-span-7 flex justify-center items-center">
            
            {/* Desktop orbital layout (Expanded size, responsive scaling) */}
            <div className="hidden md:block w-full max-w-[640px] aspect-square relative select-none">
              
              {/* Outer Glowing Circle Gradient Ring (Cyan / Blue / Purple) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 640 640">
                <defs>
                  <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06f0b4" stopOpacity="0.7" />
                    <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06f0b4" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <circle cx="320" cy="320" r="220" stroke="url(#orbit-grad)" strokeWidth="3" fill="none" opacity="0.4" className="blur-[1px]" />
                <circle cx="320" cy="320" r="220" stroke="url(#orbit-grad)" strokeWidth="1.5" fill="none" opacity="0.7" />
              </svg>

              {/* Orbit animated glow dot (Cyan) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 animate-orbit-glow">
                  <div className="absolute top-[15.625%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 blur-[1px] shadow-[0_0_12px_#22d3ee,0_0_4px_#06f0b4]" />
                </div>
              </div>

              {/* CENTER DISPLAY CARD */}
              <div 
                className="circle-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42.2%] h-[42.2%] rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center p-6 text-center z-20"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`active-${activeIdx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center justify-center h-full w-full"
                  >
                    <p className="text-[12px] lg:text-[13px] text-zinc-300 leading-relaxed font-sans px-2">
                      {activeNode.desc}
                    </p>
                    
                    <Link
                      href="/contact"
                      className="mt-4 px-4 py-2 rounded-full bg-[#06f0b4] text-[#050b09] text-[11px] font-bold tracking-wide transition-all hover:bg-[#05dfa5] flex items-center gap-1 shadow-[0_4px_12px_rgba(6,240,180,0.2)]"
                    >
                      {activeNode.btnText}
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ORBITAL SERVICE NODES (Positioned on percentages to scale proportionally) */}
              {servicesList.map((node, idx) => {
                const IconComponent = node.icon;
                const isActive = activeIdx === idx;
                const pos = nodesPos[idx];
                const labelLines = node.title.split(" ");

                return (
                  <div
                    key={node.title}
                    onMouseEnter={() => setActiveIdx(idx)}
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: "translate(-50%, -50%)",
                      width: "20.3%",
                      height: "20.3%"
                    }}
                    className={`absolute z-30 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? "active-circle scale-105" 
                        : "circle hover:border-[#06f0b4]/40"
                    }`}
                  >
                    {/* Floating Node Icon Badge (Cyan theme) */}
                    <div 
                      className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-6.5 h-6.5 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive 
                          ? "bg-[#06f0b4] border-[#06f0b4] text-[#050b09]" 
                          : "bg-[#050b09] border-zinc-800 text-[#06f0b4]"
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>

                    {/* Centered Node Label */}
                    <span 
                      className={`text-[9px] lg:text-[10px] font-bold tracking-tight text-center font-sans mt-3 px-2 leading-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-zinc-400"
                      }`}
                    >
                      {labelLines.map((line, lIdx) => (
                        <React.Fragment key={lIdx}>
                          {line}
                          {lIdx < labelLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet vertical layout */}
            <div className="md:hidden w-full flex flex-col gap-5">
              {servicesList.map((node) => {
                const IconComponent = node.icon;
                return (
                  <div 
                    key={node.title}
                    className="glass-panel w-full p-6 rounded-2xl flex flex-col gap-4 shadow-lg border border-zinc-800/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#06f0b4]/10 border border-[#06f0b4]/20 flex items-center justify-center text-[#06f0b4] shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white font-heading">
                        {node.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {node.desc}
                    </p>
                    <Link
                      href="/contact"
                      className="w-fit px-4 py-1.5 rounded-full bg-[#06f0b4] text-[#050b09] text-[10px] font-bold tracking-wide inline-flex items-center gap-1 shadow-sm mt-1"
                    >
                      {node.btnText}
                    </Link>
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
