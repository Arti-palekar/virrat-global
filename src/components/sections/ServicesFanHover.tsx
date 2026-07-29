"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Printer,
  Globe,
  Code,
  Cpu,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

interface FanChipData {
  title: string;
  badge: string;
  bgGradient: string;
  borderColor: string;
  content: React.ReactNode;
}

interface ServiceCardData {
  title: string;
  tagline: string;
  href: string;
  tag: string;
  chips: FanChipData[];
}

const SERVICES_DATA: ServiceCardData[] = [
  // 1. Branding + Printing
  {
    title: "Branding + Printing",
    tagline: "Brand identities, luxury packaging, stationery & premium print collateral.",
    href: "/branding-printing",
    tag: "BRAND IDENTITY & PRINT",
    chips: [
      {
        title: "Packaging Box",
        badge: "LUXURY BOX",
        bgGradient: "from-slate-900 to-slate-800",
        borderColor: "border-amber-500/40",
        content: (
          <div className="flex flex-col justify-between h-full text-white p-2.5 text-[9px]">
            <span className="font-mono font-bold text-amber-400">FOIL EMBOSS</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center font-bold text-amber-300">VG</div>
            <span className="opacity-75">Rigid Luxury Box</span>
          </div>
        ),
      },
      {
        title: "Color Swatches",
        badge: "PALETTE",
        bgGradient: "from-rose-950 to-rose-900",
        borderColor: "border-rose-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-[9px] text-white">
            <span className="font-mono text-rose-300">SWATCHES</span>
            <div className="flex gap-1 my-1">
              <div className="w-4 h-4 rounded bg-[#111]" />
              <div className="w-4 h-4 rounded bg-[#D62020]" />
              <div className="w-4 h-4 rounded bg-[#FAFAFA]" />
            </div>
            <span className="font-bold">Space Grotesk</span>
          </div>
        ),
      },
      {
        title: "Business Card",
        badge: "FOIL PRINT",
        bgGradient: "from-neutral-900 to-black",
        borderColor: "border-red-500/50",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <div className="flex justify-between items-center">
              <span className="font-bold text-red-500">VIRRAT</span>
              <Printer className="w-3 h-3 text-red-400" />
            </div>
            <span className="text-[8px] opacity-75">400GSM Soft Touch</span>
          </div>
        ),
      },
      {
        title: "Brochures",
        badge: "CATALOGUE",
        bgGradient: "from-amber-950 to-stone-900",
        borderColor: "border-amber-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-amber-100 text-[9px]">
            <span className="font-mono text-amber-400">TRI-FOLD</span>
            <span className="font-bold leading-tight">Corporate Catalogue</span>
          </div>
        ),
      },
      {
        title: "Outdoor Print",
        badge: "BILLBOARD",
        bgGradient: "from-red-950 to-neutral-900",
        borderColor: "border-red-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-red-400">1200 DPI</span>
            <span className="font-bold">Vinyl Standee</span>
          </div>
        ),
      },
    ],
  },

  // 2. Digital Marketing
  {
    title: "Digital Marketing",
    tagline: "SEO rankings, high-conversion PPC ads & performance analytics.",
    href: "/digital-marketing",
    tag: "GROWTH & PERFORMANCE",
    chips: [
      {
        title: "Google SERP",
        badge: "SEO RANK 1",
        bgGradient: "from-emerald-950 to-slate-900",
        borderColor: "border-emerald-500/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-emerald-400">GOOGLE #1</span>
            <div className="font-bold text-emerald-300">↑ +450% Traffic</div>
            <span className="opacity-75">SERP Dominance</span>
          </div>
        ),
      },
      {
        title: "Google Ads",
        badge: "PMAX PPC",
        bgGradient: "from-blue-950 to-slate-900",
        borderColor: "border-blue-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-blue-400">ROAS 8.4X</span>
            <div className="font-bold text-blue-200">Google Search</div>
            <span className="opacity-75">-38% CPA</span>
          </div>
        ),
      },
      {
        title: "Meta Ads",
        badge: "PAID SOCIAL",
        bgGradient: "from-indigo-950 to-purple-950",
        borderColor: "border-indigo-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-indigo-300">CTR 4.8%</span>
            <div className="font-bold text-purple-200">IG & FB Reels</div>
            <span className="opacity-75">5.8x ROAS</span>
          </div>
        ),
      },
      {
        title: "Analytics",
        badge: "GA4 REPORT",
        bgGradient: "from-slate-950 to-neutral-900",
        borderColor: "border-rose-500/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-rose-400">REALTIME</span>
            <div className="font-bold text-rose-200">1,482 Active</div>
            <span className="opacity-75">Multi-Touch</span>
          </div>
        ),
      },
      {
        title: "Local SEO",
        badge: "MAP PACK",
        bgGradient: "from-amber-950 to-neutral-950",
        borderColor: "border-amber-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-amber-400">MAP PACK #1</span>
            <div className="font-bold text-amber-200">5.0 ★★★★★</div>
            <span className="opacity-75">+210% Calls</span>
          </div>
        ),
      },
    ],
  },

  // 3. Web + Software
  {
    title: "Web + Software",
    tagline: "High-performance web apps, SaaS platforms & mobile interfaces.",
    href: "/web-software",
    tag: "FULL-STACK & SAAS",
    chips: [
      {
        title: "Hero Landing",
        badge: "NEXT.JS 16",
        bgGradient: "from-zinc-950 to-slate-900",
        borderColor: "border-cyan-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-cyan-400">SPEED 100</span>
            <div className="font-bold text-cyan-200">Web App UI</div>
            <span className="opacity-75">Tailwind CSS</span>
          </div>
        ),
      },
      {
        title: "SaaS Admin",
        badge: "DASHBOARD",
        bgGradient: "from-blue-950 to-indigo-950",
        borderColor: "border-blue-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-blue-300">ANALYTICS</span>
            <div className="font-bold text-blue-100">$84.2k MRR</div>
            <span className="opacity-75">Admin Panel</span>
          </div>
        ),
      },
      {
        title: "IDE Code",
        badge: "TURBOPACK",
        bgGradient: "from-neutral-950 to-slate-950",
        borderColor: "border-red-500/50",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px] font-mono">
            <span className="text-red-400">&lt;WebApp /&gt;</span>
            <div className="text-slate-300 text-[8px]">export default</div>
            <span className="text-emerald-400">✓ 0 Errors</span>
          </div>
        ),
      },
      {
        title: "Mobile App",
        badge: "IOS & ANDROID",
        bgGradient: "from-purple-950 to-slate-900",
        borderColor: "border-purple-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-purple-300">REACT NATIVE</span>
            <div className="font-bold text-purple-200">Mobile UI</div>
            <span className="opacity-75">60 FPS Smooth</span>
          </div>
        ),
      },
      {
        title: "API Architecture",
        badge: "MICROSERVICES",
        bgGradient: "from-slate-900 to-zinc-900",
        borderColor: "border-sky-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-sky-400">GRAPHQL / REST</span>
            <div className="font-bold text-sky-200">Node API</div>
            <span className="opacity-75">&lt; 10ms Latency</span>
          </div>
        ),
      },
    ],
  },

  // 4. AI + Automation
  {
    title: "AI + Automation",
    tagline: "Intelligent AI agents, automated workflows & predictive ML engines.",
    href: "/services",
    tag: "INTELLIGENCE ENGINE",
    chips: [
      {
        title: "AI Chatbot",
        badge: "AGENT UI",
        bgGradient: "from-violet-950 to-purple-900",
        borderColor: "border-purple-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-purple-300">LLM AGENT</span>
            <div className="font-bold text-purple-100">"Analyzing Data..."</div>
            <span className="opacity-75">Instant AI Bot</span>
          </div>
        ),
      },
      {
        title: "Workflow CRM",
        badge: "ZAPIER / HUBSPOT",
        bgGradient: "from-indigo-950 to-slate-900",
        borderColor: "border-indigo-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-indigo-400">NODES</span>
            <div className="font-bold text-indigo-200">Trigger → Action</div>
            <span className="opacity-75">Zero Lead Drop</span>
          </div>
        ),
      },
      {
        title: "ML Predictive",
        badge: "AI MODEL",
        bgGradient: "from-slate-950 to-zinc-900",
        borderColor: "border-emerald-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-emerald-400">99.2% ACCURACY</span>
            <div className="font-bold text-emerald-200">ML Forecast</div>
            <span className="opacity-75">Neural Net</span>
          </div>
        ),
      },
      {
        title: "Document OCR",
        badge: "AUTO EXTRACTION",
        bgGradient: "from-[#111] to-slate-900",
        borderColor: "border-rose-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-rose-400">AI OCR</span>
            <div className="font-bold text-rose-200">Auto Scanned</div>
            <span className="opacity-75">10x Speed</span>
          </div>
        ),
      },
      {
        title: "Task Automation",
        badge: "CRON QUEUE",
        bgGradient: "from-teal-950 to-slate-950",
        borderColor: "border-teal-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-teal-400">ACTIVE QUEUE</span>
            <div className="font-bold text-teal-200">100% Executed</div>
            <span className="opacity-75">Automated Drips</span>
          </div>
        ),
      },
    ],
  },

  // 5. Compliance
  {
    title: "Compliance",
    tagline: "Digital document vaults, security verification & legal audit reports.",
    href: "/contact",
    tag: "SECURITY & AUDIT",
    chips: [
      {
        title: "Security Shield",
        badge: "SOC2 CERTIFIED",
        bgGradient: "from-slate-900 to-zinc-900",
        borderColor: "border-amber-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-amber-400">ISO 27001</span>
            <div className="font-bold text-amber-200">Security Vault</div>
            <span className="opacity-75">256-Bit Encrypted</span>
          </div>
        ),
      },
      {
        title: "Digital Vault",
        badge: "E-SIGNATURE",
        bgGradient: "from-stone-950 to-neutral-900",
        borderColor: "border-emerald-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-emerald-400">VERIFIED</span>
            <div className="font-bold text-emerald-200">Legal Signature</div>
            <span className="opacity-75">Immutable Log</span>
          </div>
        ),
      },
      {
        title: "Audit Meter",
        badge: "AUDIT READY",
        bgGradient: "from-neutral-950 to-zinc-950",
        borderColor: "border-[#D62020]/50",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-red-400">STATUS</span>
            <div className="font-bold text-white">100% Compliant</div>
            <span className="opacity-75">Audit Verified</span>
          </div>
        ),
      },
      {
        title: "Privacy GDPR",
        badge: "GDPR / HIPAA",
        bgGradient: "from-cyan-950 to-slate-900",
        borderColor: "border-cyan-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-cyan-300">DATA VAULT</span>
            <div className="font-bold text-cyan-100">GDPR Protected</div>
            <span className="opacity-75">Privacy Shield</span>
          </div>
        ),
      },
      {
        title: "Executive Report",
        badge: "LEGAL REPORT",
        bgGradient: "from-slate-950 to-neutral-900",
        borderColor: "border-blue-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-blue-400">SUMMARY</span>
            <div className="font-bold text-blue-200">Executive Audit</div>
            <span className="opacity-75">Passed Clean</span>
          </div>
        ),
      },
    ],
  },

  // 6. Custom Business Solutions (6th card for 2x3 grid symmetry)
  {
    title: "Custom Business Solutions",
    tagline: "Tailored enterprise systems, digital transformation & strategic consulting.",
    href: "/contact",
    tag: "ENTERPRISE TRANSFORMATION",
    chips: [
      {
        title: "Enterprise Suite",
        badge: "CUSTOM TECH",
        bgGradient: "from-slate-950 to-zinc-900",
        borderColor: "border-red-500/50",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-red-400">ENTERPRISE</span>
            <div className="font-bold text-white">Bespoke Suite</div>
            <span className="opacity-75">Tailored Architecture</span>
          </div>
        ),
      },
      {
        title: "Consulting Visuals",
        badge: "ROADMAP",
        bgGradient: "from-blue-950 to-slate-900",
        borderColor: "border-blue-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-blue-300">STRATEGY</span>
            <div className="font-bold text-blue-100">Digital Roadmap</div>
            <span className="opacity-75">10x Transformation</span>
          </div>
        ),
      },
      {
        title: "Executive Analytics",
        badge: "BI METRICS",
        bgGradient: "from-amber-950 to-neutral-900",
        borderColor: "border-amber-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-amber-400">BI DASHBOARD</span>
            <div className="font-bold text-amber-200">360° Vision</div>
            <span className="opacity-75">Realtime KPI</span>
          </div>
        ),
      },
      {
        title: "Integration Vault",
        badge: "CROSS PLATFORM",
        bgGradient: "from-indigo-950 to-slate-950",
        borderColor: "border-indigo-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-indigo-300">SYNC ENGINE</span>
            <div className="font-bold text-indigo-100">Unified Systems</div>
            <span className="opacity-75">Enterprise Sync</span>
          </div>
        ),
      },
      {
        title: "Growth Advisory",
        badge: "ROI ADVISORY",
        bgGradient: "from-emerald-950 to-slate-900",
        borderColor: "border-emerald-400/40",
        content: (
          <div className="flex flex-col justify-between h-full p-2.5 text-white text-[9px]">
            <span className="font-mono text-emerald-400">ROI MATRIX</span>
            <div className="font-bold text-emerald-200">Scale Strategy</div>
            <span className="opacity-75">Category Leader</span>
          </div>
        ),
      },
    ],
  },
];

export function ServicesFanHover() {
  return (
    <section className="w-full bg-[#f8f7f5] text-[#111111] py-24 px-6 md:px-12 overflow-hidden font-sans border-b border-[#ECECEC]">
      <style>{`
        .fan-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #ECECEC;
          border-radius: 24px;
          padding: 30px;
          overflow: visible;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }
        .fan-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
        }
        .fan-stack {
          position: relative;
          height: 190px;
          margin-bottom: 25px;
        }
        .fan-chip {
          position: absolute;
          top: 0;
          left: 50%;
          width: 123px;
          height: 165px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
          will-change: transform;
          overflow: hidden;
        }

        /* Resting fan state */
        .fan-chip:nth-child(1) { transform: translate(calc(-50% - 68px), 8px) rotate(-9deg) scale(0.92); z-index: 1; }
        .fan-chip:nth-child(2) { transform: translate(calc(-50% - 35px), 3px) rotate(-5deg) scale(0.95); z-index: 2; }
        .fan-chip:nth-child(3) { transform: translate(-50%, 0) rotate(0deg) scale(1); z-index: 4; }
        .fan-chip:nth-child(4) { transform: translate(calc(-50% + 35px), 3px) rotate(5deg) scale(0.95); z-index: 2; }
        .fan-chip:nth-child(5) { transform: translate(calc(-50% + 68px), 8px) rotate(9deg) scale(0.92); z-index: 1; }

        /* Hover fan-out expansion */
        .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 194px), -10px) rotate(-18deg) scale(1); z-index: 3; }
        .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 100px), -5px) rotate(-9deg) scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(3) { transform: translate(-50%, -15px) rotate(0deg) scale(1.05); z-index: 5; }
        .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 100px), -5px) rotate(9deg) scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 194px), -10px) rotate(18deg) scale(1); z-index: 3; }

        .fan-card:hover .fan-chip { box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35); }

        @media (max-width: 560px) {
          .fan-chip { width: 103px; height: 138px; }
          .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 113px), -8px) rotate(-14deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 56px), -3px) rotate(-7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 56px), -3px) rotate(7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 113px), -8px) rotate(14deg) scale(1); }
        }
      `}</style>

      {/* Section Header */}
      <div className="max-w-[650px] mx-auto mb-16 text-center">
        <span className="homepage-section-tag inline-block mb-3">
          OUR SERVICES
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] font-heading">
          Our Services
        </h2>
      </div>

      {/* 2 x 3 Grid Composition */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
        {SERVICES_DATA.map((service, index) => (
          <Link key={index} href={service.href} className="fan-card group block">
            
            {/* Visual Fan Stack */}
            <div className="fan-stack">
              {service.chips.map((chip, colorIdx) => (
                <div
                  key={colorIdx}
                  className={`fan-chip bg-gradient-to-br ${chip.bgGradient} border ${chip.borderColor}`}
                >
                  {chip.content}
                </div>
              ))}
            </div>

            {/* Service Header Info */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[25px] font-bold text-[#111111] font-heading leading-tight group-hover:text-[#D62020] transition-colors">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-[#888888] transition-transform duration-300 group-hover:text-[#D62020] group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-2" strokeWidth={2.5} />
              </div>

              <p className="text-[16px] text-[#666666] font-body leading-relaxed mb-4">
                {service.tagline}
              </p>

              <div className="flex justify-between items-center text-[15px] font-bold text-[#D62020] font-heading border-t border-[#F5F5F5] pt-3">
                <span className="group-hover:underline">Explore Service</span>
                <ArrowUpRight className="w-5 h-5 text-[#888888] transition-transform duration-300 group-hover:text-[#D62020] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServicesFanHover;
