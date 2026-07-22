"use client";

import NavbarH1 from "../home1/components/NavbarH1";
import { Footer } from "@/components/shared/Footer";

import DMHero from "./components/DMHero";
import DMMarqueeStrip from "./components/DMMarqueeStrip";
import DMServices from "./components/DMServices";
import DMOrbitalProcess from "./components/DMOrbitalProcess";
import DMWhyChooseUs from "./components/DMWhyChooseUs";
import DMCampaignShowcase from "./components/DMCampaignShowcase";
import DMProcess from "./components/DMProcess";
import DMCaseStudies from "./components/DMCaseStudies";
import DMMetrics from "./components/DMMetrics";
import DMIndustries from "./components/DMIndustries";
import DMTools from "./components/DMTools";
import DMTestimonials from "./components/DMTestimonials";
import DMFAQ from "./components/DMFAQ";
import DMCTA from "./components/DMCTA";

export default function DigitalMarketingPage() {
  return (
    <>
      <NavbarH1 />

      <main className="font-sans bg-white text-[#111111] overflow-hidden">
        {/* Step 1: Premium Hero Section */}
        <DMHero />

        {/* Step 2: Animated Tagline Marquee Section (Immediately Below Hero) */}
        <DMMarqueeStrip />

        {/* Step 3: Digital Marketing Services (21st.dev Interactive Split Showcase) */}
        <DMServices />

        {/* Step 4: Interactive Radial Orbital Timeline Process */}
        <DMOrbitalProcess />

        {/* Step 5: Why Choose Virrat Global (Bento Grid) */}
        <DMWhyChooseUs />

        {/* Step 6: Interactive Campaign Showcase (Before vs After Simulator) */}
        <DMCampaignShowcase />

        {/* Step 7: Marketing Process (Research -> Strategy -> Launch -> Optimize -> Scale) */}
        <DMProcess />

        {/* Step 8: Case Studies / Campaign Portfolio */}
        <DMCaseStudies />

        {/* Step 9: Results & Performance Metrics */}
        <DMMetrics />

        {/* Step 10: Industries We Serve (Bento Grid) */}
        <DMIndustries />

        {/* Step 11: Marketing Tools (21st.dev Hover Matrix) */}
        <DMTools />

        {/* Step 12: Client Testimonials (Unique Non-Slider Layout) */}
        <DMTestimonials />

        {/* Step 13: FAQ Accordion */}
        <DMFAQ />

        {/* Step 14: Premium High-Impact CTA */}
        <DMCTA />
      </main>

      {/* Step 15: Global Shared Footer */}
      <Footer />
    </>
  );
}
