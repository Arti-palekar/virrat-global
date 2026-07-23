import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

import { WebSoftwareHero } from "./components/WebSoftwareHero";
import { WebSoftwareMarquee } from "./components/WebSoftwareMarquee";
import { WebSoftwareServices } from "./components/WebSoftwareServices";
import { WebSoftwareProcess } from "./components/WebSoftwareProcess";
import { WebSoftwareBentoTech } from "./components/WebSoftwareBentoTech";
import { WebSoftwareProjects } from "./components/WebSoftwareProjects";
import { WebSoftwareIndustries } from "./components/WebSoftwareIndustries";
import { WebSoftwareWhyUs } from "./components/WebSoftwareWhyUs";
import { WebSoftwareTestimonials } from "./components/WebSoftwareTestimonials";
import { WebSoftwareFAQ } from "./components/WebSoftwareFAQ";
import { WebSoftwareCTA } from "./components/WebSoftwareCTA";

export const metadata: Metadata = {
  title: "Web & Software Development Services | Virrat Global",
  description:
    "Enterprise web development, custom ERPs, CRMs, SaaS platforms, mobile apps, and AI workflow automation engineered by Virrat Global.",
};

export default function WebSoftwarePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f7f5] text-[#111111]">
        {/* 1. Hero Section */}
        <WebSoftwareHero />

        {/* 2. Animated Infinite Tagline Slider */}
        <WebSoftwareMarquee />

        {/* 3. Our Services */}
        <WebSoftwareServices />

        {/* 4. Development Process */}
        <WebSoftwareProcess />

        {/* 5. Technologies Bento Grid */}
        <WebSoftwareBentoTech />

        {/* 6. Featured Projects */}
        <WebSoftwareProjects />

        {/* 7. Industries We Serve */}
        <WebSoftwareIndustries />

        {/* 8. Why Businesses Choose Virrat Global */}
        <WebSoftwareWhyUs />

        {/* 9. Client Testimonials */}
        <WebSoftwareTestimonials />

        {/* 10. FAQ */}
        <WebSoftwareFAQ />

        {/* 11. Call To Action */}
        <WebSoftwareCTA />
      </main>
      <Footer />
    </>
  );
}
