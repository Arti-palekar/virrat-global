import React from "react";
import { Metadata } from "next";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ1 from "@/components/FAQ1";

import { WebSoftwareHeroNew } from "./components/WebSoftwareHeroNew";
import { WebSoftwareServicesShowcase } from "./components/WebSoftwareServicesShowcase";
import { WebSoftwareMarquee } from "./components/WebSoftwareMarquee";
import { WebSoftwareToolkit } from "./components/WebSoftwareToolkit";
import { WebSoftwareDevProcess } from "./components/WebSoftwareDevProcess";
import { WebSoftwarePlatforms } from "./components/WebSoftwarePlatforms";
import { WebSoftwareIndustriesCarousel } from "./components/WebSoftwareIndustriesCarousel";
import WebSoftwareConsiderations from "./components/WebSoftwareConsiderations";
import WebSoftwarePortfolio from "./components/WebSoftwarePortfolio";

export const metadata: Metadata = {
  title: "Web & Software Development Services | Virrat Global",
  description:
    "Enterprise web development, custom ERPs, CRMs, SaaS platforms, mobile apps, and AI workflow automation engineered by Virrat Global.",
};

const webSoftwareTestimonials = [
  {
    text: "Communication was clear throughout the project and the final website was fast, responsive and easy for our team to manage.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Jenkins",
    role: "Founder, Bloom Cosmetics"
  },
  {
    text: "The new system brought our daily operations into one workflow and reduced the amount of manual coordination required.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Vance",
    role: "Creative Director, Fizz Brewery"
  },
  {
    text: "The platform gave our team a much clearer way to manage leads, customers and internal processes.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager, Luna Jewellery"
  },
  {
    text: "The team translated a complex requirement into a clean and practical digital product.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager, Gourmet Artisan Group"
  }
];

const webSoftwareFaqs = [
  {
    question: "What types of websites and software do you develop?",
    answer: "We develop business websites, e-commerce platforms, custom web applications, ERP and CRM systems, SaaS products, mobile applications and API-connected business solutions.",
    meta: "Services"
  },
  {
    question: "Do you build fully custom websites and web applications?",
    answer: "Yes. We can design and develop solutions around your specific workflows, users, integrations and business requirements.",
    meta: "Custom"
  },
  {
    question: "Can you develop ERP and CRM systems?",
    answer: "Yes. ERP and CRM solutions can be tailored for areas such as leads, customers, sales, inventory, operations, HR and reporting.",
    meta: "Enterprise"
  },
  {
    question: "Do you provide e-commerce development?",
    answer: "Yes. We design and build custom stores, marketplaces, and billing interfaces with integrated payment gateways and smooth order management.",
    meta: "E-Commerce"
  },
  {
    question: "Can you build SaaS platforms?",
    answer: "Yes. We build custom multi-tenant software-as-a-service platforms, complete with user subscription management, role-based controls, and dashboard metrics.",
    meta: "SaaS"
  },
  {
    question: "Do you develop mobile applications?",
    answer: "Yes. We build native and cross-platform mobile apps for iOS and Android using technologies like Flutter and React Native.",
    meta: "Mobile"
  },
  {
    question: "Can you integrate third-party APIs and payment gateways?",
    answer: "Yes. We can integrate third-party APIs, payment gateways, CRM/ERP systems, WhatsApp and other external platforms depending on project requirements.",
    meta: "Integrations"
  },
  {
    question: "Which technologies do you use?",
    answer: "We leverage modern, performant technologies such as Next.js, React, Node.js, TypeScript, TailwindCSS, AWS, and secure serverless infrastructures.",
    meta: "Technologies"
  },
  {
    question: "How long does a web or software project take?",
    answer: "Timelines depend on scope, features, integrations and complexity. A clear development timeline should be defined after requirements and project planning.",
    meta: "Timeline"
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer: "Yes. Ongoing maintenance, updates, optimization and technical support can be provided based on the project's support plan.",
    meta: "Support"
  }
];

export default function WebSoftwarePage() {
  return (
    <>
      <HoverGradientNavBar />
      <main className="min-h-screen bg-[#f8f7f5] text-[#111111]">
        {/* 1. Hero Section */}
        <WebSoftwareHeroNew />

        {/* 1.5 NEW — Web + Software Services Showcase */}
        <WebSoftwareServicesShowcase />

        {/* 2. Animated Infinite Tagline Slider */}
        <WebSoftwareMarquee />

        {/* 3. Development Toolkit */}
        <WebSoftwareToolkit />

        {/* 3.1 — S-curve Development Process */}
        <WebSoftwareDevProcess />

        {/* 3.2 — Development Workflow Platforms */}
        <WebSoftwarePlatforms />

        {/* 3.3 — Industries We Serve (Coverflow Carousel) */}
        <WebSoftwareIndustriesCarousel />

        {/* 3.4 — What We Consider */}
        <WebSoftwareConsiderations />

        {/* 3.5 — Selected Work */}
        <WebSoftwarePortfolio />

        {/* 3.6 — Testimonials */}
        <TestimonialsSection items={webSoftwareTestimonials} />

        {/* 3.7 — FAQ */}
        <FAQ1 items={webSoftwareFaqs} />
      </main>
      <CinematicFooter />
    </>
  );
}
