"use client";

import React from "react";
import ImageStreamHero from "@/components/ui/image-stream-hero";

const industriesData = [
  {
    name: "SaaS & Technology",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "E-commerce",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marketing & Agencies",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Finance & Accounting",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Professional Services",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Startups",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
];

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

      {/* Interactive 3D Corridor Layout */}
      <div className="w-full h-full relative z-10">
        <ImageStreamHero
          industries={industriesData}
          cards={8}
          speed={18}
          axis={55}
        />
      </div>
    </section>
  );
}
