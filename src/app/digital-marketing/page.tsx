"use client";

import React from "react";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import MobileFloatingMenu from "@/components/MobileFloatingMenu";
import DMTestimonials from "./components/DMTestimonials";
import DMFAQ1 from "./components/DMFAQ1";

// Custom page components
import DMHero from "./components/DMHero";
import DMServices from "./components/DMServices";
import { SocialConnect } from "@/components/ui/connect-with-us";
import DMProcess from "./components/DMProcess";
import DMTextSlider from "./components/DMTextSlider";
import DMIndustries from "./components/DMIndustries";
import DMConsiderations from "./components/DMConsiderations";

// ── CUSTOM FAQ ITEMS FOR DIGITAL MARKETING ──
const dmFaqs = [
  {
    question: "What digital marketing channels do you specialize in?",
    answer: "We specialize in Google Search/Display Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, Search Engine Optimization (SEO), Email Marketing, and Conversion Rate Optimization (CRO).",
    meta: "Channels"
  },
  {
    question: "How do you track campaign performance and attribution?",
    answer: "We implement advanced server-side tracking, Google Tag Manager (GTM), and Conversions API (CAPI) configurations. This ensures data privacy compliance and near 100% attribution accuracy, bypassing browser cookie limitations.",
    meta: "Attribution"
  },
  {
    question: "Do you create the ad creatives and copy?",
    answer: "Yes, our creative studio handles copy writing, static graphic design, motion visuals, and UGC video production. Every creative asset is engineered for high CTR and conversion performance.",
    meta: "Creatives"
  },
  {
    question: "What is your approach to Search Engine Optimization (SEO)?",
    answer: "Our SEO methodology covers technical site speed audits, structural dielines, on-page optimization, content strategy, keyword maps, and high-quality backlink profile acquisition.",
    meta: "SEO"
  },
  {
    question: "How long does it take to see results from digital marketing campaigns?",
    answer: "Paid advertising (Google/Meta Ads) typically generates leads and sales within 48 to 72 hours of launch. Organic channels like SEO and Content Marketing are long-term assets that show compounding growth in 3 to 6 months.",
    meta: "Timeline"
  },
  {
    question: "Do you offer marketing reports and dashboard access?",
    answer: "Yes, we provide interactive, real-time Google Looker Studio dashboards tracking key performance metrics (CPA, ROAS, leads, organic ranking) alongside detailed weekly and monthly performance reports.",
    meta: "Analytics"
  },
  {
    question: "What is your minimum budget requirement for advertising?",
    answer: "We design campaign strategies for various growth phases. During strategy onboarding, we model budgets, target CPA, and expected ROAS thresholds to lock in profitability before aggressively scaling spend.",
    meta: "Budget"
  },
  {
    question: "Can you optimize and manage our existing campaigns?",
    answer: "Yes, we start with a forensic audit of your historical ad spend and campaign setups. We can then restructure your ad groups, refresh creative assets, and calibrate smart bidding strategy to reduce waste.",
    meta: "Optimization"
  }
];

// ── CUSTOM TESTIMONIALS FOR DIGITAL MARKETING ──
const dmTestimonials = [
  {
    text: "The search engine optimization campaigns Virrat Global executed for our SaaS platform increased organic sign-ups by 150%. Their technical SEO and content roadmap are outstanding.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aisha Sharma",
    role: "Head of Marketing, CloudFlow"
  },
  {
    text: "Our Google and Meta ad campaigns reached a steady 5.8x ROAS within two months of migrating to Virrat. Their conversion optimization focus changed our unit economics completely.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marcus Thorne",
    role: "E-commerce Director, Solace Threads"
  },
  {
    text: "Their server-side GTM tagging and HubSpot integration solved our attribution gaps. We now have a clean, trusted lead tracking pipeline.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Tariq Mahmood",
    role: "VP Growth, FinScale Solutions"
  },
  {
    text: "Our social media engagement grew by 300% through their motion graphic and ad creative pipeline. The content strategy is incredibly aligned with our brand voice.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Elena Rostova",
    role: "Brand Manager, Velo Dynamics"
  },
  {
    text: "We scaled our email marketing campaigns using their segmentation flows, resulting in a 24% boost in repeat purchases. The reporting is transparent and thorough.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Julian Cruz",
    role: "Founder, Peak Nutrition"
  },
  {
    text: "Expert keyword strategies, high-performing lead generation campaigns, and regular technical audits. Working with Virrat Global has been key to our market expansion.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Priya Nair",
    role: "Managing Director, Apex Legal Group"
  }
];

export default function DigitalMarketingPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111111] overflow-x-hidden font-body selection:bg-[#fd2e35]/10 selection:text-[#fd2e35]">
      {/* Shared Navbar */}
      <HoverGradientNavBar />

      {/* Main Page Layout Wrapper */}
      <div className="relative w-full z-10">
        {/* Section 01 & 02: Intro & Hero */}
        <DMHero />

        {/* Premium Digital Marketing Services Section */}
        <DMServices />

        {/* Connect With Us Section */}
        <SocialConnect />

        {/* Our Step-by-Step Process Section */}
        <DMProcess />

        {/* Animated Marquee */}
        <DMTextSlider />

        {/* Industries We Build For */}
        <DMIndustries />

        {/* Why Businesses Choose Virrat Global */}
        <DMConsiderations />

        {/* Section 12: Testimonials (Dynamic Reuse) */}
        <DMTestimonials items={dmTestimonials} />

        {/* Section 13: FAQ (Dynamic Reuse) */}
        <DMFAQ1 items={dmFaqs} />
      </div>

      {/* Shared Footer */}
      <CinematicFooter />

      {/* Mobile Menu Drawer Button Overlay */}
      <MobileFloatingMenu />
    </main>
  );
}
