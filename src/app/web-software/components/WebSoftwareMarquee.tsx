"use client";

import React from "react";

const TAGS = [
  "CUSTOM WEB APPS",
  "NEXT.JS DEVELOPMENT",
  "REACT",
  "NODE.JS",
  "FLUTTER",
  "ERP SYSTEMS",
  "CRM SOLUTIONS",
  "AI AUTOMATION",
  "API INTEGRATIONS",
  "CLOUD SOLUTIONS",
  "SAAS PLATFORMS",
  "MOBILE APPS",
  "SOFTWARE DEVELOPMENT",
];

export function WebSoftwareMarquee() {
  return (
    <section className="relative w-full bg-white border-y border-[#ECECEC] py-5 min-h-[80px] flex items-center overflow-hidden z-20 select-none">
      <style>{`
        @keyframes webMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-web-marquee {
          display: flex;
          width: max-content;
          animation: webMarquee 35s linear infinite;
          will-change: transform;
        }
        .animate-web-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Side Fade Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Marquee Track */}
      <div className="animate-web-marquee flex items-center gap-8 transform-gpu">
        {[...TAGS, ...TAGS, ...TAGS].map((tag, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="text-lg md:text-2xl font-black font-heading tracking-tight text-[#111111] uppercase whitespace-nowrap">
              {tag}
            </span>
            <span className="text-[#D62020] text-sm font-bold">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebSoftwareMarquee;
