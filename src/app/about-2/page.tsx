"use client";

import React from 'react';
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import MobileFloatingMenu from "@/components/MobileFloatingMenu";
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';

export default function About2Page() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <HoverGradientNavBar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CinematicFooter />
      <MobileFloatingMenu />
    </main>
  );
}
