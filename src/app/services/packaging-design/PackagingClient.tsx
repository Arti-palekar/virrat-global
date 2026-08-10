"use client";

import React from "react";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import MobileFloatingMenu from "@/components/MobileFloatingMenu";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ1 from "@/components/FAQ1";
import PackagingIndustriesExpand from "./components/PackagingIndustriesExpand";

// Custom page components
import PackagingHero from "./components/PackagingHero";
import PackagingTopPicks from "./components/PackagingTopPicks";
import PackagingTools from "./components/PackagingTools";

import PackagingProcess from "./components/PackagingProcess";
import PackagingMarquee from "./components/PackagingMarquee";



// ── CUSTOM FAQ ITEMS FOR PACKAGING ──
const packagingFaqs = [
  {
    question: "What does your packaging design service include?",
    answer: "Our service covers complete end-to-end packaging design: initial concept moodboards, graphic design (typography, colors, artwork), structural dieline creation, 3D digital mockup rendering from multiple angles, and preparing final press-ready CMYK printer vector files.",
    meta: "Process"
  },
  {
    question: "Can you create print-ready packaging files?",
    answer: "Absolutely. We supply precise vector files in PDF, AI, or EPS formats containing proper bleed margins, fold/cut guides (dielines), Pantone/CMYK colors, and linked design assets. Your printing partner will be able to load them directly into production.",
    meta: "Deliverables"
  },
  {
    question: "Do you design packaging for existing brands?",
    answer: "Yes, we frequently work with established brand guidelines. We can translate your existing brand assets into retail packaging, custom boxes, shipping boxes, or bottles, ensuring consistency across all marketing touchpoints.",
    meta: "Brand"
  },
  {
    question: "Can you help with packaging materials and printing?",
    answer: "While we do not print in-house, we provide comprehensive guidance on paper stocks, weights, cardboards, coatings (matte vs. gloss, UV spot, foil stamping), and structural box mechanics. We also offer printer coordination services to align specifications.",
    meta: "Production"
  },
  {
    question: "Do you create product mockups before production?",
    answer: "Yes, we produce high-fidelity 3D digital renders showing your packaging wraps, boxes, or cans from multiple perspectives. This helps you visualize and evaluate the graphic layouts and physical proportions before committing to a production run.",
    meta: "Mockups"
  },
  {
    question: "Can you redesign our existing packaging?",
    answer: "Yes, we conduct packaging audits to analyze shelf presence and typography legibility. We can modernize your layout, enhance structural aesthetics, and refine brand messaging to make your product command attention in modern retail spaces.",
    meta: "Redesign"
  },
  {
    question: "How long does a packaging design project take?",
    answer: "A standard project takes between 3 to 6 weeks. This timeline includes client research, presentation of initial design directions, feedback cycles, material/dieline adjustments, and compiling print-ready files.",
    meta: "Timeline"
  },
  {
    question: "Do you provide multiple packaging variations?",
    answer: "Yes, we begin by presenting 2 to 3 distinct visual directions based on your brand positioning. Once a concept is selected, we iterate and refine it. We can also adapt the final theme across multiple flavors, sizes, or SKU variations.",
    meta: "Scope"
  }
];

// ── CUSTOM TESTIMONIALS FOR PACKAGING ──
const packagingTestimonials = [
  {
    text: "The premium box packaging Virrat Global designed for our luxury cosmetic collection increased our retail store inquiries by 45%. The custom dieline wraps are flawless.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Jenkins",
    role: "Founder, Bloom Cosmetics"
  },
  {
    text: "Virrat Global transformed our draft idea into a modern beverage can design that stands out on any shelf. The typography matches our brand perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Vance",
    role: "Creative Director, Fizz Brewery"
  },
  {
    text: "Their precise CMYK setup and material recommendations saved us weeks of back-and-forth with our printing house. Unmatched attention to production specifications.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager, Luna Jewellery"
  },
  {
    text: "Every box we ship now feels like an absolute brand experience. The e-commerce packaging redesign they did has driven incredible customer reviews.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager, Gourmet Artisan Group"
  },
  {
    text: "The retail response to our new health food packaging has been spectacular. Virrat Global simplified our packaging message into clean, bold shelf authority.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Melissa Cole",
    role: "Marketing Director, Organic Roots"
  },
  {
    text: "Professional dielines, clear guidelines, and stunning 3D mockups. They made the entire manufacturing integration simple and risk-free.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO, TechPack Premium"
  }
];

export default function PackagingClient() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111111] overflow-x-hidden font-body selection:bg-[#fd2e35]/10 selection:text-[#fd2e35]">
      {/* Shared Navbar */}
      <HoverGradientNavBar />

      {/* Main Page Layout Wrapper */}
      <div className="relative w-full z-10">
        {/* Section 01 & 02: Intro & Hero */}
        <PackagingHero />

        {/* Top Picks Showcase Section */}
        <PackagingTopPicks />

        {/* Tools We Use Section */}
        <PackagingTools />

        {/* Our Step-by-Step Process Section */}
        <PackagingProcess />

        {/* Moving Typography Banner Section */}
        <PackagingMarquee />

        <div className="[&_article_*]:!text-[#ffffff] [&_article]:!text-[#ffffff] [&_ul]:!max-w-[1020px] md:[&_ul]:!h-[420px] [&_.mb-12]:!mb-6">
          <PackagingIndustriesExpand />
        </div>


        {/* Section 12: Testimonials (Dynamic Reuse) */}
        <TestimonialsSection items={packagingTestimonials} />

        {/* Section 13: FAQ (Dynamic Reuse) */}
        <FAQ1 items={packagingFaqs} />

      </div>

      {/* Shared Footer */}
      <CinematicFooter />

      {/* Mobile Menu Drawer Button Overlay */}
      <MobileFloatingMenu />
    </main>
  );
}
