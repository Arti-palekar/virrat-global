"use client";

import React from "react";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import AiAutomationHero from "./components/AiAutomationHero";
import AiAutomationServicesSlider from "./components/AiAutomationServicesSlider";
import AiAutomationProcess from "./components/AiAutomationProcess";
import AiAutomationConsiderations from "./components/AiAutomationConsiderations";
import AiAutomationIndustries from "./components/AiAutomationIndustries";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ1 from "@/components/FAQ1";
import AiAutomationTextSlider from "./components/AiAutomationTextSlider";
import AiAutomationStack from "./components/AiAutomationStack";

// ── CUSTOM AI AUTOMATION FAQS ──
const aiFaqs = [
  {
    question: "What is AI automation and how can it help my business?",
    answer: "AI automation combines artificial intelligence with automated workflows to handle repetitive tasks, improve efficiency, streamline operations and help teams focus on higher-value work.",
    meta: "Overview"
  },
  {
    question: "What business processes can you automate?",
    answer: "We can automate processes such as lead management, CRM updates, customer support, follow-ups, data processing, reporting, notifications and other repetitive workflows.",
    meta: "Processes"
  },
  {
    question: "Can AI automation integrate with our existing CRM and business tools?",
    answer: "Yes. We can connect AI automation workflows with your existing CRM, communication platforms, forms, databases and other business tools based on your technology stack.",
    meta: "Integration"
  },
  {
    question: "Can you build custom AI automation workflows?",
    answer: "Yes. We create custom automation workflows based on your specific business processes, requirements and goals rather than using a one-size-fits-all solution.",
    meta: "Custom"
  },
  {
    question: "Can you automate lead generation and customer follow-ups?",
    answer: "Yes. AI automation can help capture leads, qualify them, update CRM records, send follow-ups and trigger personalized customer communication automatically.",
    meta: "Leads"
  },
  {
    question: "Can AI automation improve customer support?",
    answer: "Yes. AI-powered support workflows can handle common customer queries, route requests, provide automated responses and help your support team respond faster.",
    meta: "Support"
  },
  {
    question: "How long does an AI automation project take?",
    answer: "The timeline depends on the complexity of your workflows, integrations and requirements. After understanding your process, we can provide a suitable implementation timeline.",
    meta: "Timeline"
  },
  {
    question: "Is my business data secure with AI automation?",
    answer: "We design automation workflows with appropriate security and access controls and consider data privacy requirements when selecting tools, integrations and AI services.",
    meta: "Security"
  }
];

// ── CUSTOM AI AUTOMATION TESTIMONIALS ──
const aiTestimonials = [
  {
    text: "The AI automation workflows transformed our daily operations. We eliminated repetitive manual tasks and our team can now focus on higher-value work.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Jenkins",
    role: "Operations Director"
  },
  {
    text: "Their automation solution connected our CRM, lead management and customer communication into one seamless workflow.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Vance",
    role: "Founder"
  },
  {
    text: "The AI-powered workflows significantly improved our response time and helped our team manage more customers without increasing manual workload.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Sales Manager"
  },
  {
    text: "The team understood our business processes quickly and built automation that actually fits the way we work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager"
  }
];

export default function AiAutomationClient() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111111] overflow-x-hidden font-body selection:bg-[#fd2e35]/10 selection:text-[#fd2e35]">
      {/* Shared Navbar */}
      <HoverGradientNavBar />

      <div className="relative w-full z-10">
        <AiAutomationHero />
        <AiAutomationServicesSlider />
        <AiAutomationStack />
        <AiAutomationProcess />
        <AiAutomationTextSlider />
        <AiAutomationIndustries />
        <AiAutomationConsiderations />
        <TestimonialsSection items={aiTestimonials} />
        <FAQ1 items={aiFaqs} />
      </div>

      <CinematicFooter />
    </main>
  );
}
