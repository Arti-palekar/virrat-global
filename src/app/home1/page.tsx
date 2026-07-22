import type { Metadata } from "next";
import NavbarH1 from "./components/NavbarH1";
import HeroH1 from "./components/HeroH1";
import StatsH1 from "./components/StatsH1";
import ServicesH1 from "./components/ServicesH1";
import WhyUsH1 from "./components/WhyUsH1";
import PortfolioH1 from "./components/PortfolioH1";
import ProcessH1 from "./components/ProcessH1";
import TestimonialsH1 from "./components/TestimonialsH1";
import TechStackH1 from "./components/TechStackH1";
import CtaH1 from "./components/CtaH1";
import PreFooterCta from "./components/PreFooterCta";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Virrat Global — Enterprise B2B Creative & Tech Agency",
  description:
    "Virrat Global Pvt. Ltd. is a premium creative agency offering branding, digital marketing, Next.js web development, UI/UX design, corporate packaging, and scale solutions.",
  keywords:
    "branding agency, B2B creative, software development, Next.js UI, Cashfree branding, Virrat Global",
};

export default function Home1Page() {
  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to main content
      </a>

      {/* Modern sticky Red & White Navbar */}
      <NavbarH1 />

      <main id="main-content">
        {/* Hero Section */}
        <HeroH1 />

        {/* Trusted By logo marquee strip */}
        <StatsH1 />

        {/* Services Grid (8 cards) */}
        <ServicesH1 />

        {/* Features Highlights (Why choose us) */}
        <WhyUsH1 />

        {/* Portfolio case studies */}
        <PortfolioH1 />

        {/* 6-step Process Timeline */}
        <ProcessH1 />

        {/* Testimonials outcomes slider */}
        <TestimonialsH1 />

        {/* FAQ Accordion Section */}
        <TechStackH1 />

        {/* Contact form strategy call */}
        <CtaH1 />

        {/* Pre-footer Call to Action */}
        <PreFooterCta />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
