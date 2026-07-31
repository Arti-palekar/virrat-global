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
import BPTestimonials from "./components/BPTestimonials";
import BPContactCTA from "./components/BPContactCTA";

export default function BrandingPrintingPage() {
  return (
    <>
      <HoverGradientNavBar />

      <main className="font-sans" style={{ background: "#FFFFFF", color: "#111111" }}>
        
        {/* 1. Hero Section */}
        <BPProcess />

        {/* 2. Services Marquee — immediately below hero */}
        <BPServicesMarquee />

        {/* 4. Our Expertise */}
        <BPExpertise />

        {/* 5. Our Services */}
        <BPServicesShowcase />

        {/* 6. Additional Portfolio Showcase */}
        <ImageGallery />
        <BPMarqueeStrip />
        <BPHeroParallax />

        {/* 7. Client Testimonials */}
        <BPTestimonials />

        {/* 8. CTA Section */}
        <BPContactCTA />

      </main>

      {/* 8. Global Footer */}
      <CinematicFooter />
    </>
  );
}
