"use client";

import React from "react";
import dynamic from "next/dynamic";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import AiAutomationServicesOrbital from "./components/AiAutomationServicesOrbital";
import AiAutomationProcess from "./components/AiAutomationProcess";
import AiAutomationBeforeAfter from "./components/AiAutomationBeforeAfter";
import AiAutomationWhy from "./components/AiAutomationWhy";
import AiAutomationIndustries from "./components/AiAutomationIndustries";
import AiAutomationServicesCarousel from "./components/AiAutomationServicesCarousel";

import { ClipPathLinks } from "@/components/ui/clip-path-links";

// Load TubesCursor component dynamically to prevent SSR/hydration issues
const TubesCursor = dynamic(() => import("@/components/ui/tubes-cursor"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-zinc-500 font-medium tracking-widest text-sm uppercase">
        Loading Hero...
      </div>
    </div>
  ),
});

export default function AiAutomationBlankClient() {
  return (
    <main className="ai-automation-page w-full min-h-screen bg-[#FAF9F6] text-[#111111] overflow-x-hidden font-body selection:bg-[#fd2e35]/10 selection:text-[#fd2e35]">
      {/* Shared Navbar */}
      <HoverGradientNavBar />

      {/* Tubes Cursor Hero Section */}
      <div className="relative w-full z-10">
        <TubesCursor />
      </div>

      {/* AI Automation Services Carousel — immediately after Hero */}
      <AiAutomationServicesCarousel />

      {/* AI Automation Services Orbital Section */}
      <AiAutomationServicesOrbital />



      {/* Tools We Use Showcase Section */}
      <ClipPathLinks />

      {/* Process Timeline Section */}
      <AiAutomationProcess />

      {/* Before → After Transformation Section */}
      <AiAutomationBeforeAfter />

      {/* Why AI Automation Section */}
      <AiAutomationWhy />

      {/* Industries Section */}
      <AiAutomationIndustries />

      <CinematicFooter />
    </main>
  );
}
