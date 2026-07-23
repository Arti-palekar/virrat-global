"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What types of web and software applications do you develop?",
    a: "We architect custom enterprise software including Web Applications, SaaS Platforms, ERP Systems, CRM Solutions, Flutter Mobile Apps, AI Workflow Automation Engines, and High-Performance Custom Websites.",
  },
  {
    q: "What tech stack do you use for custom software projects?",
    a: "Our core engineering stack features Next.js 16, React, TypeScript, Node.js, Python, Laravel, Go, Flutter, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS, and modern AI LLMs (OpenAI, Claude, Gemini).",
  },
  {
    q: "How long does it take to develop a custom ERP or SaaS application?",
    a: "Standard MVP web applications are delivered in 6 to 10 weeks. Complex multi-module Enterprise ERPs or SaaS platforms typically take 12 to 24 weeks depending on database scope, third-party API integrations, and security compliance.",
  },
  {
    q: "Who owns the source code and IP rights after project completion?",
    a: "You retain 100% full intellectual property (IP) and source code ownership upon project completion. We transfer all GitHub repositories, cloud infrastructure access, and documentation to your company.",
  },
  {
    q: "How do you handle software security and data privacy compliance?",
    a: "We adhere strictly to SOC2 Type II, ISO 27001, GDPR, and HIPAA standards. Every software product undergoes automated SAST/DAST security scanning, role-based access control (RBAC), and SSL/TLS 1.3 data encryption.",
  },
  {
    q: "Do you provide ongoing maintenance, support, and SLA agreements?",
    a: "Yes, we offer 24x7 proactive maintenance, 99.99% uptime SLA monitoring, cloud server management, security patching, and dedicated sprint teams for continuous product iterations.",
  },
];

export function WebSoftwareFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#f8f7f5] text-[#111111] py-24 md:py-32 border-b border-[#ECECEC]">
      <div className="container mx-auto px-6 max-w-[1000px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="homepage-section-tag inline-block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111] font-heading">
            Got Questions? <span className="text-[#D62020]">We Have Answers.</span>
          </h2>
          <p className="text-[16px] text-[#666666] leading-relaxed font-body">
            Everything you need to know about partnering with Virrat Global for web and software engineering.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-white border-[#D62020] shadow-md" : "bg-white border-[#ECECEC] hover:border-gray-300"
                }`}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] font-heading">
                    {faq.q}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#ECECEC] flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "bg-[#D62020] text-white border-transparent" : "text-[#111111]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F5F5F5] text-xs sm:text-sm text-[#666666] font-body leading-relaxed">
                    {faq.a}
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

export default WebSoftwareFAQ;
