import React from "react";
import { Metadata } from "next";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";

import { WebSoftwareHeroNew } from "./components/WebSoftwareHeroNew";
import { WebSoftwareServicesShowcase } from "./components/WebSoftwareServicesShowcase";
import { WebSoftwareMarquee } from "./components/WebSoftwareMarquee";
import { WebSoftwareToolkit } from "./components/WebSoftwareToolkit";
import { WebSoftwareDevProcess } from "./components/WebSoftwareDevProcess";
import { WebSoftwarePlatforms } from "./components/WebSoftwarePlatforms";
import { WebSoftwareIndustriesCarousel } from "./components/WebSoftwareIndustriesCarousel";

export const metadata: Metadata = {
  title: "Web & Software Development Services | Virrat Global",
  description:
    "Enterprise web development, custom ERPs, CRMs, SaaS platforms, mobile apps, and AI workflow automation engineered by Virrat Global.",
};

export default function WebSoftwarePage() {
  return (
    <>
      <HoverGradientNavBar />
      <main className="min-h-screen bg-[#f8f7f5] text-[#111111]">
        {/* 1. Hero Section */}
        <WebSoftwareHeroNew />

        {/* 1.5 NEW — Web + Software Services Showcase */}
        <WebSoftwareServicesShowcase />

        {/* 2. Animated Infinite Tagline Slider */}
        <WebSoftwareMarquee />

        {/* 3. Development Toolkit */}
        <WebSoftwareToolkit />

        {/* 3.1 — S-curve Development Process */}
        <WebSoftwareDevProcess />

        {/* 3.2 — Development Workflow Platforms */}
        <WebSoftwarePlatforms />

        {/* 3.3 — Industries We Serve (Coverflow Carousel) */}
        <WebSoftwareIndustriesCarousel />
      </main>
      <CinematicFooter />
    </>
  );
}
