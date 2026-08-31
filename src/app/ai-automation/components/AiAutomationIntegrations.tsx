"use client";

import React from "react";

interface IntegrationItem {
  name: string;
  badge?: string;
  icon: React.ReactNode;
}

const integrations: IntegrationItem[] = [
  {
    name: "Claude Code",
    icon: (
      <div className="w-5 h-5 rounded-full bg-[#cc5a37] flex items-center justify-center shrink-0 shadow-sm">
        {/* Pixelated retro face/bot icon */}
        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
          <path d="M9 15h6" />
        </svg>
      </div>
    )
  },
  {
    name: "Codex",
    icon: (
      <div className="w-5 h-5 rounded-full bg-[#10a37f] flex items-center justify-center shrink-0 shadow-sm">
        {/* OpenAI Spiral */}
        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.3,11.1c0.2-0.7,0.1-1.4-0.3-2.1c-0.4-0.6-1.1-1-1.8-1.1c-0.2,0-0.4,0-0.6,0.1c-0.4-0.8-1.1-1.3-2-1.5c-0.9-0.2-1.7,0-2.4,0.5c-0.1-0.1-0.3-0.2-0.5-0.3C13,6.3,12,6.3,11.2,6.7C10.4,7.2,9.9,8,9.7,9C9.5,8.9,9.2,8.9,9,8.9C8.1,8.9,7.3,9.4,6.9,10.2C6.4,11,6.4,12,6.8,12.8c-0.1,0.1-0.2,0.1-0.2,0.2c-0.7,0.4-1.1,1.1-1.2,1.9C5.3,15.7,5.6,16.5,6.1,17c0.2,0.2,0.4,0.3,0.6,0.4c0,0.2,0.1,0.4,0.2,0.6c0.4,0.8,1.1,1.3,2,1.5c0.9,0.2,1.7,0,2.4-0.5c0.1,0.1,0.3,0.2,0.5,0.3c0.7,0.3,1.4,0.3,2.1-0.1c0.7-0.4,1.1-1.1,1.3-1.9c0.2,0,0.4,0,0.6-0.1c0.9-0.1,1.6-0.6,2-1.4C22.2,13.8,22,12.8,21.3,11.1z" />
        </svg>
      </div>
    )
  },
  {
    name: "Gemini",
    icon: (
      <div className="w-5 h-5 rounded-full bg-[#1b2b48] flex items-center justify-center shrink-0 border border-blue-500/30 shadow-sm">
        {/* Gemini Sparkle with custom gradient */}
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="gemini-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8ab4f8" />
              <stop offset="50%" stopColor="#ff8bcb" />
              <stop offset="100%" stopColor="#ffb74d" />
            </linearGradient>
          </defs>
          <path d="M12 2c.132 4.937 4.063 8.868 9 9-.132 4.937-4.063 8.868-9 9-4.937-.132-8.868-4.063-9-9 4.937-.132 8.868-4.063 9-9z" fill="url(#gemini-star-grad)" />
        </svg>
      </div>
    )
  },
  {
    name: "Copilot",
    icon: (
      <div className="w-5 h-5 rounded-full bg-[#1e1e24] flex items-center justify-center shrink-0 border border-zinc-800 shadow-sm">
        {/* Microsoft Copilot logo representation */}
        <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-7.07 17.07l1.41-1.41A8 8 0 1 1 12 20v2a10 10 0 0 0 0-20z" />
          <circle cx="12" cy="12" r="3" fill="#ff7043" />
        </svg>
      </div>
    )
  },
  {
    name: "OpenCode",
    icon: (
      <div className="w-5 h-5 rounded-full bg-[#2a2d3d] flex items-center justify-center shrink-0 shadow-sm">
        {/* Grid/Layout block */}
        <svg className="w-3 h-3 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      </div>
    )
  },
  {
    name: "Cursor",
    badge: "BETA",
    icon: (
      <div className="w-5 h-5 rounded-full bg-[#111] flex items-center justify-center shrink-0 border border-zinc-800 shadow-sm">
        {/* Cursor/Prism shape */}
        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22l10-4 10 4L12 2z" />
        </svg>
      </div>
    )
  }
];

export default function AiAutomationIntegrations() {
  return (
    <section className="relative w-full bg-[#050b09] overflow-hidden border-b border-zinc-900 flex flex-col items-center justify-center text-center py-16 md:py-24">
      {/* Background orange/gold glow gradients matching screenshot */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-red-900/12 blur-[95px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-yellow-800/8 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 z-10 w-full flex flex-col items-center gap-8">
        
        {/* Label Header */}
        <span className="text-[#06f0b4] text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase">
          BUILT ON THE HARNESSES YOU ALREADY USE
        </span>

        {/* Horizontal Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl py-2">
          {integrations.map((item) => (
            <div 
              key={item.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-zinc-950/45 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 transition-colors duration-300 shadow-sm cursor-default"
            >
              {item.icon}
              <span className="text-[13px] font-semibold text-zinc-100 font-sans tracking-wide">
                {item.name}
              </span>
              {item.badge && (
                <span className="px-1.5 py-0.5 rounded text-[8px] font-extrabold tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Supporting Description */}
        <p className="text-xs md:text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed">
          Bring your own provider and subscription. Pick the best harness per session, no lock-in. All in a web workspace that leaves the terminal behind.
        </p>
      </div>
    </section>
  );
}
