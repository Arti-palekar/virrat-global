"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Bot,
  Workflow,
  MessageCircle,
  Magnet,
  Users,
  Cog,
  Database,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BorderBeamPanel } from "@/components/ui/border-beam-panel";

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    id: "ai-agents",
    title: "AI Agent Development",
    description:
      "Build intelligent AI agents that handle repetitive business tasks and workflows.",
    tag: "AI",
    icon: <Bot className="w-5 h-5" />,
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    description:
      "Automate multi-step processes and connect your business tools seamlessly.",
    tag: "Automation",
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    id: "chatbot",
    title: "AI Chatbot Development",
    description:
      "Create intelligent conversational assistants for websites, support, and sales.",
    tag: "Conversational AI",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    id: "leads",
    title: "Lead Generation Automation",
    description:
      "Capture, qualify, and nurture leads automatically with AI-powered workflows.",
    tag: "Growth",
    icon: <Magnet className="w-5 h-5" />,
  },
  {
    id: "crm",
    title: "CRM Automation",
    description:
      "Automate lead management, follow-ups, customer updates, and CRM workflows.",
    tag: "CRM",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "bpa",
    title: "Business Process Automation",
    description:
      "Reduce manual work by automating repetitive operational processes.",
    tag: "Operations",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    id: "data",
    title: "AI-Powered Data Processing",
    description:
      "Extract, classify, analyze, and process business data automatically.",
    tag: "Data",
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: "custom",
    title: "Custom AI Solutions",
    description:
      "Develop tailored AI automation solutions around your specific business needs.",
    tag: "Custom",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

/* ────────────────────────────────────────────
   Hook — responsive visible count
   ──────────────────────────────────────────── */

function useVisibleCount(): number {
  const [count, setCount] = useState(4);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setCount(1);
      else if (w < 1024) setCount(2);
      else setCount(4);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

/* ────────────────────────────────────────────
   Hook — prefers-reduced-motion
   ──────────────────────────────────────────── */

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */

export default function AiAutomationServicesCarousel() {
  const visibleCount = useVisibleCount();
  const reducedMotion = useReducedMotion();
  const total = services.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  /* ── Navigation ── */
  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  /* ── Tab visibility ── */
  useEffect(() => {
    const handler = () => setTabVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  /* ── Autoplay ── */
  useEffect(() => {
    if (isPaused || !tabVisible || reducedMotion) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext, isPaused, tabVisible, reducedMotion]);

  /* ── Build visible indices (wrapping) ── */
  const visibleIndices: number[] = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleIndices.push((currentIndex + i) % total);
  }

  return (
    <section className="w-full bg-[#050b09] text-white overflow-hidden border-b border-zinc-900 relative py-16 md:py-24">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E31E24]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#E31E24] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 block">
            AI Automation Services
          </span>

          <h2 className="font-heading font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight !text-[#ffffff] mb-5">
            What we build for you
          </h2>

          <p className="font-sans mx-auto max-w-[600px] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-white/70 text-center">
            End-to-end AI automation services — from intelligent agents to
            custom solutions — designed to eliminate manual work and accelerate
            growth.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          {/* Cards grid */}
          <div
            className="grid gap-5 transition-none"
            style={{
              gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
            }}
          >
            {visibleIndices.map((serviceIdx, slotIdx) => {
              const service = services[serviceIdx];
              return (
                <div
                  key={`${service.id}-slot-${slotIdx}`}
                  className="animate-fadeSlideIn"
                  style={{
                    animation: reducedMotion
                      ? "none"
                      : "fadeSlideIn 0.4s ease-out both",
                    animationDelay: `${slotIdx * 60}ms`,
                  }}
                >
                  <BorderBeamPanel
                    beams={1}
                    colors={["#E31E24"]}
                    thickness={1}
                    radius={20}
                    idleSpeed={28}
                    hoverSpeed={180}
                    glow={false}
                    seed={serviceIdx + 1}
                    className="!bg-[#0a0a0a] !border-white/15 h-full"
                  >
                    <div className="flex flex-col gap-4 min-h-[180px]">
                      {/* Tag */}
                      <span className="inline-block self-start text-[9px] font-bold tracking-[0.15em] uppercase rounded-full px-2.5 py-0.5 bg-[#E31E24]/12 text-[#E31E24]">
                        {service.tag}
                      </span>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[#E31E24]/10 flex items-center justify-center text-[#E31E24]">
                        {service.icon}
                      </div>

                      {/* Title */}
                      <h3 className="carousel-card-title text-[15px] font-semibold tracking-tight text-white font-heading leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] leading-relaxed text-white/70 font-sans">
                        {service.description}
                      </p>
                    </div>
                  </BorderBeamPanel>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={goPrev}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#E31E24]/40 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5" role="tablist">
              {services.map((s, idx) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-label={`Go to ${s.title}`}
                  aria-selected={idx === currentIndex}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-5 h-1.5 bg-[#E31E24]"
                      : "w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#E31E24]/40 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Keyframe for card entrance */}
      <style>{`
        .carousel-card-title {
          color: #FFFFFF !important;
        }
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
