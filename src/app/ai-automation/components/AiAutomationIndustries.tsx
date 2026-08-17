"use client";

import React from "react";
import CarouselStacked from "@/components/ui/carousel-07";

export default function AiAutomationIndustries() {
  return (
    <section className="w-full bg-[#050b09] py-24 md:py-32 lg:py-36 px-6 md:px-12 lg:px-24 border-b border-zinc-900 relative overflow-hidden flex flex-col justify-between min-h-[750px] lg:min-h-[850px]">
      {/* Subtle red background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#E31E24]/[0.015] blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative text-center mb-10 w-full">
        {/* Small Label */}
        <p className="text-[#E31E24] text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
          INDUSTRIES
        </p>

        {/* Main Heading */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-6 font-heading !text-white">
          AI Automation Built for Your Business
        </h2>

        {/* Description */}
        <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] !text-zinc-400 font-sans max-w-[650px] mx-auto">
          Intelligent automation designed to streamline workflows, reduce repetitive work, and help businesses scale faster.
        </p>
      </div>

      {/* Stacked Carousel Component */}
      <div className="w-full relative z-10 flex items-center justify-center -mt-6">
        <CarouselStacked />
      </div>
    </section>
  );
}
