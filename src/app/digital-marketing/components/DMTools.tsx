"use client";

import React from "react";
import { 
  MousePointerClick, 
  LineChart, 
  Search, 
  Megaphone, 
  Instagram, 
  Linkedin, 
  Youtube, 
  TrendingUp, 
  Link as LinkIcon 
} from "lucide-react";

const tools = [
  { name: "Google Ads", icon: MousePointerClick },
  { name: "Google Analytics", icon: LineChart },
  { name: "Search Console", icon: Search },
  { name: "Meta Ads", icon: Megaphone },
  { name: "Instagram", icon: Instagram },
  { name: "LinkedIn", icon: Linkedin },
  { name: "YouTube", icon: Youtube },
  { name: "SEMrush", icon: TrendingUp },
  { name: "Ahrefs", icon: LinkIcon },
];

export default function DMTools() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 bg-white py-10 md:py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-2xl px-4 z-10 flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-black tracking-tight text-[#111111] mb-5">
            Tools we use
          </h2>
          <p className="text-sm md:text-[15px] text-[#666666] font-medium leading-relaxed max-w-[500px]">
            Powering intelligent automation with the tools, platforms, and technologies we trust.
          </p>
        </div>

        {/* Tools Container */}
        <div className="w-full relative max-w-[1100px] mx-auto">
          {/* Subtle Red Glow Shadow */}
          <div className="absolute inset-0 bg-[#d62020]/15 blur-[50px] rounded-[32px] -z-10 translate-y-2 scale-95 md:scale-100 md:scale-y-[0.9]"></div>
          
          <div className="w-full bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 border border-black/[0.04] shadow-[0_10px_40px_rgb(0,0,0,0.03)]">
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-8 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 shrink-0 group cursor-pointer w-[80px] md:w-auto">
                  <div className="w-14 h-14 md:w-[68px] md:h-[68px] rounded-full bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#111111] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_25px_rgba(214,32,32,0.15)] group-hover:text-[#d62020]">
                    <tool.icon size={26} strokeWidth={1.5} className="transition-colors duration-300" />
                  </div>
                  <span className="text-[11px] md:text-xs font-semibold text-[#111111] text-center whitespace-nowrap transition-colors duration-300 group-hover:text-[#d62020]">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
