"use client";

import NavbarH1 from "../home1/components/NavbarH1";
import { Footer } from "@/components/shared/Footer";
import BPProcess from "./components/BPProcess";
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
      <NavbarH1 />

      <main className="font-sans" style={{ background: "#FFFFFF", color: "#111111" }}>
        
        {/* 1. Hero Section */}
        <BPProcess />

        {/* 2. Our Expertise */}
        <BPExpertise />

        {/* 3. Our Services */}
        <BPServicesShowcase />

        {/* 4. Portfolio Showcase */}
        <ImageGallery />
        <BPMarqueeStrip />
        <BPHeroParallax />

        {/* 5. Client Testimonials (Immediately below Portfolio) */}
        <BPTestimonials />

        {/* 6. CTA Section */}
        <BPContactCTA />

      </main>

      {/* 7. Global Footer */}
      <Footer />
    </>
  );
}
