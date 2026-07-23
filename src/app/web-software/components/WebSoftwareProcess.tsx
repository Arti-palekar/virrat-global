"use client";

import React from "react";
import { Search, Palette, Code, CheckCircle, Rocket, LifeBuoy } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "We analyze technical requirements, define database schemas, user personas, and system architecture.",
    icon: Search,
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Crafting wireframes, high-fidelity interactive prototypes, and design systems in Figma.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Clean, modular code execution using Next.js, React, Node, or Flutter with weekly sprint demos.",
    icon: Code,
  },
  {
    step: "04",
    title: "QA & Security Testing",
    desc: "Comprehensive automated unit testing, end-to-end load testing, and penetration security audits.",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Cloud Deployment",
    desc: "CI/CD automated deployment to AWS, Vercel, or Azure with zero downtime architecture.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "24x7 Maintenance & Support",
    desc: "Proactive uptime monitoring, security updates, feature enhancements, and dedicated SLA support.",
    icon: LifeBuoy,
  },
];

export function WebSoftwareProcess() {
  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 border-b border-[#ECECEC] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="homepage-section-tag inline-block mb-3">
            AGILE DEVELOPMENT METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111] font-heading">
            Our Software Engineering <span className="text-[#D62020]">Process.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body">
            A transparent, 6-step development framework that turns complex ideas into reliable, enterprise-grade software.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-[#F8F9FA] border border-[#ECECEC] p-8 hover:bg-white hover:shadow-xl hover:border-[#D62020]/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#D62020] text-white flex items-center justify-center font-bold shadow-md shadow-red-600/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-mono font-bold text-[#D62020]">
                    STEP {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#111111] font-heading mb-3 group-hover:text-[#D62020] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] font-body leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareProcess;
