"use client";

import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import BPProcess from "./components/BPProcess";
import BPServicesMarquee from "./components/BPServicesMarquee";
import BPExpertise from "./components/BPExpertise";
import BPServicesShowcase from "./components/BPServicesShowcase";
import { ImageGallery } from "./components/ImageGallery";
import BPMarqueeStrip from "./components/BPMarqueeStrip";
import BPHeroParallax from "./components/BPHeroParallax";
import BPContactCTA from "./components/BPContactCTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ1 from "@/components/FAQ1";

export default function BrandingPrintingPage() {
  return (
    <>
      <HoverGradientNavBar />

      <main className="font-sans" style={{ background: "#FFFFFF", color: "#111111" }}>
        
        {/* 1. Hero Section */}
        <BPProcess />

        {/* 2. Branding & Printing Sections */}
        <BPExpertise />
        <BPServicesShowcase />
        <ImageGallery />
        <BPMarqueeStrip />
        <BPHeroParallax />
        <BPContactCTA />

        {/* 3. What We Create Section */}
        <BPServicesMarquee />

        {/* 4. Testimonials Section (same as Home) */}
        <TestimonialsSection />

        {/* 5. FAQ Section (same as Home) */}
        <FAQ1 />

      </main>

      {/* 6. Global Footer */}
      <CinematicFooter />
    </>
  );
}
