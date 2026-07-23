"use client";

import React, { useState } from "react";
import { Zap, Users, Shield, Cpu, Layers, Headphones, MessageSquare, ChevronRight, LucideIcon } from "lucide-react";

interface WhyUsItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
}

const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: "fast-delivery",
    title: "Fast Rapid Delivery",
    subtitle: "Agile 2-Week Sprints",
    desc: "We use pre-built microservice modules and CI/CD pipelines to launch functional MVPs 40% faster than traditional agencies.",
    icon: Zap,
  },
  {
    id: "dedicated-team",
    title: "Dedicated Senior Engineers",
    subtitle: "Top 2% Talent",
    desc: "Handpicked full-stack developers, UI designers, and DevOps architects dedicated exclusively to your project roadmap.",
    icon: Users,
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security & Compliance",
    subtitle: "SOC2 & ISO 27001 Ready",
    desc: "End-to-end data encryption, automated vulnerability scanning, role-based access control, and GDPR/HIPAA compliance.",
    icon: Shield,
  },
  {
    id: "scalable-architecture",
    title: "Scalable Microservices",
    subtitle: "Handles Millions of Users",
    desc: "Cloud-native Kubernetes architecture that auto-scales dynamically with traffic spikes without performance drops.",
    icon: Layers,
  },
  {
    id: "latest-technology",
    title: "Cutting-Edge Tech Stack",
    subtitle: "Next.js 16 + AI Engines",
    desc: "We build on modern stacks (Next.js, TypeScript, Go, Flutter, LLMs) ensuring your product remains maintainable for a decade.",
    icon: Cpu,
  },
  {
    id: "support-247",
    title: "24x7 Proactive Support",
    subtitle: "99.99% Uptime Guarantee",
    desc: "Dedicated site reliability engineers monitoring application health around the clock with guaranteed 15-minute response SLAs.",
    icon: Headphones,
  },
  {
    id: "transparent-comm",
    title: "Transparent Communication",
    subtitle: "Direct Slack & Jira Access",
    desc: "Zero hidden fees, weekly video demos, shared GitHub repositories, and direct real-time communication with developers.",
    icon: MessageSquare,
  },
];

export function WebSoftwareWhyUs() {
  const [activeId, setActiveId] = useState<string>("fast-delivery");

  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 border-b border-[#ECECEC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="homepage-section-tag inline-block mb-3">
            WHY VIRRAT GLOBAL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111] font-heading">
            Why Leading Enterprises <span className="text-[#D62020]">Partner With Us.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body">
            We combine high-speed engineering with strict enterprise quality standards to build software that scales effortlessly.
          </p>
        </div>

        {/* Interactive Accordion / Cards List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {WHY_US_ITEMS.map((item) => {
            const Icon = item.icon;
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(isOpen ? "" : item.id)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8F9FA] border-[#D62020] shadow-md"
                    : "bg-white border-[#ECECEC] hover:border-gray-300"
                }`}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-colors ${
                        isOpen
                          ? "bg-[#D62020] text-white"
                          : "bg-[#F0F0F0] text-[#111111]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] font-heading">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#D62020] uppercase block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#ECECEC] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-90 bg-[#D62020] text-white border-transparent" : "text-[#111111]"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#EBEBEB] text-sm text-[#555555] leading-relaxed font-body">
                    {item.desc}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareWhyUs;
