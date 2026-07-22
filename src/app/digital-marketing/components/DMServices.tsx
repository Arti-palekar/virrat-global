"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Target,
  Share2,
  Megaphone,
  FileText,
  Mail,
  MapPin,
  Video,
  Cpu,
  BarChart2,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  TrendingUp,
  Zap,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SERVICES = [
  {
    id: "01",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    tag: "ORGANIC GROWTH",
    desc: "Technical SEO, high-intent keyword targeting, and authority link building to dominate page-1 Google rankings and drive sustainable organic traffic.",
    benefits: [
      "Technical Audit & Schema Markup",
      "High-Intent Keyword Mapping",
      "Authority Backlink Engineering",
      "Core Web Vitals & Speed Optimization",
    ],
    metricLabel: "Traffic Increase",
    metricVal: "+450%",
    roas: "Rank #1 Focus",
    chartData: [30, 45, 60, 75, 90, 110, 140],
  },
  {
    id: "02",
    icon: Target,
    title: "Google Ads (PPC)",
    tag: "HIGH INTENT TRAFFIC",
    desc: "Laser-focused Search, Shopping, and Performance Max campaigns structured to convert high-intent buyers at the lowest Cost Per Acquisition.",
    benefits: [
      "PMax & Search Funnel Architecture",
      "Negative Keyword Suppression",
      "High-Converting Ad Extensions",
      "AI Smart Bidding Optimization",
    ],
    metricLabel: "Average ROAS",
    metricVal: "8.4x",
    roas: "-38% Lower CPA",
    chartData: [40, 55, 70, 65, 85, 100, 125],
  },
  {
    id: "03",
    icon: Share2,
    title: "Meta Ads",
    tag: "PAID SOCIAL SCALE",
    desc: "High-impact video ads, UGC creatives, and custom retargeting funnels that turn social scrollers into high-value paying customers.",
    benefits: [
      "UGC Video Hooks & Ad Creatives",
      "Lookalike & Custom Audience Stacking",
      "Dynamic Catalog Product Ads",
      "Broad Retargeting Funnels",
    ],
    metricLabel: "Click-Through Rate",
    metricVal: "4.8%",
    roas: "5.8x ROAS",
    chartData: [25, 40, 50, 75, 95, 115, 130],
  },
  {
    id: "04",
    icon: Megaphone,
    title: "Social Media Marketing",
    tag: "BRAND ENGAGEMENT",
    desc: "End-to-end content production, community management, and trend-driven social strategy to build an engaged brand following across platforms.",
    benefits: [
      "Monthly Content Calendar & Reels",
      "Reels & Short-Form Video Production",
      "Active Community Management",
      "Influencer Outreach & Collaborations",
    ],
    metricLabel: "Reach Expansion",
    metricVal: "+240%",
    roas: "High Virality",
    chartData: [20, 35, 50, 65, 80, 105, 120],
  },
  {
    id: "05",
    icon: FileText,
    title: "Content Marketing",
    tag: "THOUGHT LEADERSHIP",
    desc: "Persuasive sales copy, SEO articles, whitepapers, and brand stories engineered to position your business as the undisputed category leader.",
    benefits: [
      "EEAT Search-Engineered Blogs",
      "High-Converting Landing Page Copy",
      "Lead Magnet E-books & Guides",
      "Email Nurture Sequences",
    ],
    metricLabel: "Lead Conversion",
    metricVal: "+180%",
    roas: "Top Authority",
    chartData: [35, 45, 55, 70, 85, 95, 110],
  },
  {
    id: "06",
    icon: Mail,
    title: "Email Marketing",
    tag: "LTV OPTIMIZATION",
    desc: "Automated welcome series, abandoned cart sequences, and segment-targeted campaigns that maximize customer lifetime value (LTV).",
    benefits: [
      "Klaviyo Flow Architecture",
      "Cart Abandonment Automation",
      "VIP Customer Loyalty Campaigns",
      "A/B Subject Line Testing",
    ],
    metricLabel: "Revenue Attributed",
    metricVal: "+35%",
    roas: "42% Open Rate",
    chartData: [45, 55, 65, 80, 95, 110, 125],
  },
  {
    id: "07",
    icon: MapPin,
    title: "Local SEO",
    tag: "HYPER-LOCAL LEADS",
    desc: "Dominate local map packs and location searches to capture foot traffic and phone calls from customers in your exact target geography.",
    benefits: [
      "Google Business Profile Geo-Tagging",
      "Local Citation & NAP Building",
      "Automated Review Generation",
      "Local Service Ads Integration",
    ],
    metricLabel: "Call Leads Growth",
    metricVal: "+210%",
    roas: "Map Pack #1",
    chartData: [30, 40, 55, 70, 85, 100, 115],
  },
  {
    id: "08",
    icon: Video,
    title: "YouTube Marketing",
    tag: "VIDEO PERFORMANCE",
    desc: "Engaging pre-roll and in-feed video ad campaigns built for high view-through rates, brand recall, and direct-response conversions.",
    benefits: [
      "Scriptwriting & UGC Video Direction",
      "In-Feed & Pre-Roll Video Ads",
      "Intent Keyword Video Targeting",
      "Direct Conversion Action Setup",
    ],
    metricLabel: "View-Through Rate",
    metricVal: "72%",
    roas: "High Recall",
    chartData: [25, 40, 60, 75, 90, 105, 120],
  },
  {
    id: "09",
    icon: Cpu,
    title: "Marketing Automation",
    tag: "AUTOMATION ENGINE",
    desc: "Seamless lead scoring, automated CRM workflows, and multi-channel drip sequences powered by HubSpot, ActiveCampaign, or custom tools.",
    benefits: [
      "HubSpot & CRM Funnel Setup",
      "Automated Lead Scoring Rules",
      "Multi-Channel Drips & SMS Sync",
      "Zero Sales Leakage Workflows",
    ],
    metricLabel: "Sales Efficiency",
    metricVal: "+320%",
    roas: "Instant Follow-Up",
    chartData: [40, 50, 65, 80, 95, 110, 130],
  },
  {
    id: "10",
    icon: BarChart2,
    title: "Analytics & Reporting",
    tag: "ATTRIBUTION & GA4",
    desc: "Server-side tracking, GTM container setup, and custom Looker Studio dashboards giving you 100% accurate marketing ROI attribution.",
    benefits: [
      "GA4 Custom Event Setup",
      "GTM Server-Side Container",
      "Looker Studio Real-Time Dashboard",
      "iOS-Proof CAPI Data Sync",
    ],
    metricLabel: "Attribution Accuracy",
    metricVal: "99.4%",
    roas: "100% Truth",
    chartData: [50, 60, 75, 90, 105, 120, 140],
  },
];

export default function DMServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);
  const activeService = SERVICES[activeIdx];

  return (
    <section
      id="services"
      className="w-full bg-white text-[#111111] py-24 md:py-32 border-b border-[#EBEBEB]"
      aria-label="Digital Marketing Services"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="homepage-section-tag inline-block mb-3"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="text-[2.5rem] md:text-[3.5rem] font-bold font-heading text-[#111111] tracking-tight leading-[1.08] mb-4"
          >
            Digital Marketing <br />
            That Delivers <span className="text-[#D62020]">Results.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body"
          >
            From SEO to paid advertising, we build data-driven marketing strategies that increase traffic, generate qualified leads, and maximize business growth.
          </motion.p>
        </div>

        {/* ── DESKTOP & TABLET INTERACTIVE SPLIT-SCREEN LAYOUT ────────── */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE (5 Cols): Vertical Service Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {SERVICES.map((service, idx) => {
              const isActive = idx === activeIdx;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group text-left px-5 py-4.5 rounded-[16px] transition-all duration-300 relative flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? "bg-[#F8F9FA] border-[#EBEBEB] text-[#D62020] shadow-sm"
                      : "bg-white border-transparent text-[#111111] hover:bg-[#F8F9FA]/60 hover:text-[#D62020]"
                  }`}
                >
                  {/* Left Red Accent Bar for Active State */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLeftAccentBar"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-[#D62020] rounded-r-full"
                    />
                  )}

                  <div className="flex items-center gap-3.5 pl-2">
                    <span className={`text-[12px] font-mono font-bold ${isActive ? "text-[#D62020]" : "text-[#888888]"}`}>
                      {service.id}
                    </span>
                    <h3 className={`text-[17px] font-bold font-heading leading-tight transition-colors ${
                      isActive ? "text-[#D62020]" : "text-[#111111] group-hover:text-[#D62020]"
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                    isActive ? "text-[#D62020] translate-x-0.5 -translate-y-0.5" : "text-[#888888] opacity-0 group-hover:opacity-100"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE (7 Cols): Interactive Preview Panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="p-8 md:p-10 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] shadow-[0_16px_40px_rgba(0,0,0,0.05)] relative overflow-hidden"
              >
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D62020] text-white flex items-center justify-center shadow-lg shadow-[#D62020]/25">
                    {React.createElement(activeService.icon, { className: "w-7 h-7" })}
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#D62020] bg-[#D62020]/10 px-3 py-1 rounded-full uppercase">
                    {activeService.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#111111] font-heading leading-tight mb-4">
                  {activeService.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#555555] font-body leading-relaxed mb-8">
                  {activeService.desc}
                </p>

                {/* Key Benefits Checklist */}
                <div className="mb-8">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#888888] uppercase block mb-3">
                    KEY BENEFITS & DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EBEBEB] shadow-2xs">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#D62020] shrink-0" />
                        <span className="text-[13px] font-bold text-[#222222] font-heading">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Analytics & KPI Preview Panel */}
                <div className="p-6 rounded-2xl bg-white border border-[#EBEBEB] mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] font-mono text-[#888888] uppercase">{activeService.metricLabel}</span>
                      <p className="text-[24px] font-bold text-[#111111] font-heading">{activeService.metricVal}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-[#888888] uppercase">Target Benchmark</span>
                      <p className="text-[16px] font-bold text-[#27C93F] font-mono">{activeService.roas}</p>
                    </div>
                  </div>

                  {/* Growth Bar Chart */}
                  <div className="h-16 flex items-end gap-2 pt-2">
                    {activeService.chartData.map((val, idx) => (
                      <div key={idx} className="flex-1 bg-[#F8F9FA] rounded-t-md overflow-hidden h-full flex items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${(val / 150) * 100}%` }}
                          transition={{ duration: 0.5, delay: idx * 0.04, ease: EASE }}
                          className={`w-full ${idx >= 5 ? "bg-[#D62020]" : "bg-[#111111]/20"}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D62020] hover:bg-[#BF1A1A] text-white text-[13px] font-black uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_10px_28px_rgba(214,32,32,0.25)] hover:shadow-[0_15px_35px_rgba(214,32,32,0.38)] transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  START YOUR CAMPAIGN
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                </Link>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── MOBILE ACCORDION LAYOUT (For Screen Sizes < 768px) ────────── */}
        <div className="flex md:hidden flex-col gap-4">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedMobile === idx;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="rounded-[20px] bg-[#F8F9FA] border border-[#EBEBEB] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-heading font-bold text-[17px] text-[#111111]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-mono font-bold text-[#D62020]">{service.id}</span>
                    <span>{service.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#888888] transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#D62020]" : ""}`} />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="px-5 pb-6 border-t border-[#EBEBEB] pt-4"
                    >
                      <p className="text-[14px] text-[#555555] font-body mb-4">{service.desc}</p>
                      
                      <div className="space-y-2 mb-5">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-[13px] font-bold text-[#222222]">
                            <CheckCircle2 className="w-4 h-4 text-[#D62020] shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D62020] text-white text-[12px] font-bold uppercase tracking-wider"
                      >
                        Start Campaign <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
