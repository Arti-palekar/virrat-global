"use client";

import React from "react";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import MobileFloatingMenu from "@/components/MobileFloatingMenu";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ1 from "@/components/FAQ1";

// Custom page components
import MerchandiseHero from "./components/MerchandiseHero";
import MerchandiseTopPicks from "./components/MerchandiseTopPicks";
import MerchandiseTools from "./components/MerchandiseTools";
import MerchandiseProcess from "./components/MerchandiseProcess";
import MerchandiseMarquee from "./components/MerchandiseMarquee";
import MerchandiseIndustries from "./components/MerchandiseIndustries";
import MerchandiseConsiderations from "./components/MerchandiseConsiderations";
import MerchandisePortfolio from "./components/MerchandisePortfolio";
import MerchandiseFinalCTA from "./components/MerchandiseFinalCTA";

// ── CUSTOM FAQ ITEMS FOR BRAND MERCHANDISE ──
const merchandiseFaqs = [
  {
    question: "What is your Minimum Order Quantity (MOQ) for custom merchandise?",
    answer: "Minimum order quantities vary by product category. For custom apparel (T-shirts, hoodies), our MOQ starts at 50 units. For smaller items like custom pens, lanyards, or keychains, the MOQ is typically 100 to 200 units, while premium welcome kits have a flexible MOQ starting at 25 kits.",
    meta: "Fulfillment"
  },
  {
    question: "What custom branding techniques do you support?",
    answer: "We support a complete suite of high-end branding methods: high-density screen printing, detailed embroidery for apparel and caps, precision laser engraving for drinkware and metal pens, custom blind debossing/embossing for leather diaries, and premium full-bleed digital printing for box packaging.",
    meta: "Branding"
  },
  {
    question: "Do you offer custom employee welcome kits?",
    answer: "Yes, employee welcome kits are one of our core specialties. We design complete onboarding boxes, handle the sourcing of premium items (notebooks, bottles, hoodies, pens, tech accessories), design custom dielines, compile the packaging, and distribute the kits directly to your hubs or new hires' homes.",
    meta: "Kits"
  },
  {
    question: "Do you provide physical product samples before batch production?",
    answer: "Yes. Once design concepts and specs are locked in, we produce a digital proof (3D rendering) for approval. Upon request, we can coordinate physical sample production for volume orders to verify print quality, fabric texture, and color accuracy before mass production begins.",
    meta: "Sampling"
  },
  {
    question: "What is the typical production and delivery timeline?",
    answer: "Standard production takes between 2 to 3 weeks depending on the selected products, order volume, and customization methods. Shipping and delivery add an additional 3 to 7 business days depending on domestic or international destinations.",
    meta: "Timeline"
  },
  {
    question: "Can we supply our own design assets or logo guides?",
    answer: "Absolutely. We work directly with your existing brand guidelines, logo vector files (AI, EPS, PDF), and corporate color codes (Pantone matching system). Our design team handles correct formatting, template setups, and dieline alignments.",
    meta: "Assets"
  },
  {
    question: "Do you offer eco-friendly or sustainable merchandise options?",
    answer: "Yes, we curate a wide selection of sustainable products: organic cotton apparel, recycled plastic lanyards, bamboo office supplies, biodegradable packaging inserts, and reusable stainless steel drinkware to align with your corporate ESG goals.",
    meta: "Sustainability"
  },
  {
    question: "How is global or multi-hub fulfillment managed?",
    answer: "We handle bulk distribution as well as individual ship-to-home setups. We pack each kit securely and dispatch orders to single corporate hubs, multiple regional offices, or directly to remote worker home addresses with real-time tracking.",
    meta: "Logistics"
  }
];

// ── CUSTOM TESTIMONIALS FOR BRAND MERCHANDISE ──
const merchandiseTestimonials = [
  {
    text: "The employee welcome kits Virrat Global designed and curated for our onboarding have been a massive hit. The leather diaries, hoodies, and steel bottles are premium quality.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Neera Desai",
    role: "HR Lead, TechVibe Solutions"
  },
  {
    text: "Our annual developer conference swag was designed, printed, and delivered within 2 weeks. The laser engraving on the custom cap and thermos is incredibly precise.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rohan Khanna",
    role: "VP Operations, DevConnect Event"
  },
  {
    text: "Their material curation and Pantone matching accuracy saved us so much time. Every piece of custom apparel matches our brand colors perfectly. Highly recommend their service.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Kavita Rao",
    role: "Brand Director, Solace Living"
  },
  {
    text: "We scaled our corporate gifting flows seamlessly using their custom dieline boxes. The overall unboxing experience created immediate excitement for our VIP clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Nikhil Advani",
    role: "CEO, FinScale Group"
  },
  {
    text: "Premium fabrics, responsive design iteration, and zero logistics hassle. Virrat Global handles everything from layout to multi-hub shipping seamlessly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zoya Malik",
    role: "People Operations, Zenith Labs"
  },
  {
    text: "Outstanding customer service, sturdy packaging, and fast sample turnarounds. They made bulk sourcing custom team swag completely risk-free.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aman Siddiqui",
    role: "Managing Director, Apex Legal Hub"
  }
];

export default function MerchandiseClient() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111111] overflow-x-hidden font-body selection:bg-[#fd2e35]/10 selection:text-[#fd2e35]">
      {/* Shared Navbar */}
      <HoverGradientNavBar />

      {/* Main Page Layout Wrapper */}
      <div className="relative w-full z-10">
        {/* Section 01 & 02: Intro & Hero */}
        <MerchandiseHero />

        {/* Top Picks Showcase Section */}
        <MerchandiseTopPicks />

        {/* Tools We Use Section */}
        <MerchandiseTools />

        {/* Our Step-by-Step Process Section */}
        <MerchandiseProcess />

        {/* Moving Typography Banner Section */}
        <MerchandiseMarquee />

        {/* Industries We Design For Section */}
        <MerchandiseIndustries />

        {/* What We Consider Section */}
        <MerchandiseConsiderations />

        {/* Selected Work / Portfolio Section */}
        <MerchandisePortfolio />

        {/* Section 12: Testimonials (Dynamic Reuse) */}
        <TestimonialsSection items={merchandiseTestimonials} />

        {/* Section 13: FAQ (Dynamic Reuse) */}
        <FAQ1 items={merchandiseFaqs} />

        {/* Section 14: Final CTA */}
        <MerchandiseFinalCTA />
      </div>

      {/* Shared Footer */}
      <CinematicFooter />

      {/* Mobile Menu Drawer Button Overlay */}
      <MobileFloatingMenu />
    </main>
  );
}
