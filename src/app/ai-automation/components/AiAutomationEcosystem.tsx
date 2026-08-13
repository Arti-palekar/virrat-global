"use client";

import React from "react";
import {
  Bot,
  Workflow,
  Users,
  Magnet,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import {
  CircularCarousel,
  type CarouselItem,
} from "@/components/ui/circular-carousel";

const ecosystemItems: CarouselItem[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Intelligent agents that automate repetitive business workflows, learn from your processes, and execute tasks autonomously.",
    icon: <Bot className="w-5 h-5" />,
    tag: "AI",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Connect apps and automate multi-step business processes with triggers, conditions, and real-time data routing.",
    icon: <Workflow className="w-5 h-5" />,
    tag: "Automation",
  },
  {
    id: "crm-automation",
    title: "CRM Automation",
    description:
      "Automate lead management, follow-ups, pipeline updates, and customer workflows so nothing slips through the cracks.",
    icon: <Users className="w-5 h-5" />,
    tag: "CRM",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Capture, qualify, and route leads automatically from websites, ads, and social channels directly into your pipeline.",
    icon: <Magnet className="w-5 h-5" />,
    tag: "Growth",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description:
      "Deploy intelligent conversational experiences that handle customer inquiries, bookings, and support around the clock.",
    icon: <MessageCircle className="w-5 h-5" />,
    tag: "Conversational AI",
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Turn automation data into actionable business insights with real-time dashboards and performance reporting.",
    icon: <BarChart3 className="w-5 h-5" />,
    tag: "Analytics",
  },
];

export default function AiAutomationEcosystem() {
  return (
    <section className="w-full py-24 bg-[#050b09] text-white overflow-hidden border-b border-zinc-900 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E31E24]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#E31E24] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 block">
            AI Automation Ecosystem
          </span>

          <h2 className="font-heading font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight mb-4 text-white">
            Everything you need to automate
          </h2>

          <p className="font-sans mx-auto max-w-[600px] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-white/70 text-center">
            From intelligent agents to real-time analytics — a complete
            ecosystem to eliminate manual work and scale your operations.
          </p>
        </div>

        {/* Carousel */}
        <CircularCarousel items={ecosystemItems} autoplayInterval={4500} />
      </div>
    </section>
  );
}
