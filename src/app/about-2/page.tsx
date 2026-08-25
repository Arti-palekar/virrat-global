"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import LumenIndexSection from './components/LumenIndexSection';
import ServicesSection from './components/ServicesSection';
import CeoSection from './components/CeoSection';
import AboutJoinClan from './components/AboutJoinClan';
import ProjectsSection from './components/ProjectsSection';
import CinematicFooter from "@/components/CinematicFooter";
import MobileFloatingMenu from "@/components/MobileFloatingMenu";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";

export default function About2Page() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#0C0C0C]">
      <HoverGradientNavBar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection theme="dark" />
      <CeoSection />
      <AboutJoinClan />
      <LumenIndexSection />
      <ServicesSection />
      <ProjectsSection />
      <CinematicFooter />
      <MobileFloatingMenu />
    </main>
  );
}
