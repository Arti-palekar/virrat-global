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
  Globe,
  Users,
  Eye,
  Star,
  PhoneCall,
  Play,
  Activity,
  Layers,
  Sparkles,
  MousePointer,
  PieChart,
  MessageSquare,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ServiceConfig {
  id: string;
  icon: React.ElementType;
  title: string;
  tag: string;
  brandColor: string;
  accentBg: string;
  desc: string;
  benefits: string[];
  ctaText: string;
  kpis: { label: string; value: string; change: string }[];
  renderDashboard: () => React.ReactNode;
}

const SERVICES: ServiceConfig[] = [
  // 01. SEO
  {
    id: "01",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    tag: "ORGANIC RANKINGS",
    brandColor: "#D62020",
    accentBg: "bg-red-500/10 text-[#D62020]",
    desc: "Dominate Google search results with technical SEO audits, high-intent keyword targeting, and high-authority link building that delivers sustainable organic growth.",
    benefits: [
      "Technical Audit & Schema Architecture",
      "High-Intent Buyer Keyword Mapping",
      "Page 1 Google Ranking Focus",
      "Core Web Vitals & Speed Optimization",
    ],
    ctaText: "DOMINATE GOOGLE SEARCH",
    kpis: [
      { label: "Organic Traffic", value: "+450%", change: "↑ 3.5x YoY" },
      { label: "Page 1 Keywords", value: "184+", change: "↑ +42 Rank #1" },
      { label: "Domain Rating", value: "78 / 100", change: "Top 5% Niche" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* SERP Rank Cards */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-[#888888] font-mono border-b border-[#F0F0F0] pb-2">
            <span className="flex items-center gap-1.5 font-bold text-[#111111]">
              <Globe className="w-3.5 h-3.5 text-[#D62020]" /> Google Search Console Live Keywords
            </span>
            <span className="text-[#27C93F] font-bold">Updated Live</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#D62020] text-white flex items-center justify-center font-bold text-[10px]">1</span>
                <span className="font-bold text-[#111111]">best branding agency Pune</span>
              </div>
              <span className="text-[#27C93F] font-bold font-mono">Position #1 (↑ +8)</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#D62020] text-white flex items-center justify-center font-bold text-[10px]">1</span>
                <span className="font-bold text-[#111111]">digital marketing services Pune</span>
              </div>
              <span className="text-[#27C93F] font-bold font-mono">Position #1 (↑ +5)</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-[10px]">2</span>
                <span className="font-bold text-[#111111]">performance marketing agency</span>
              </div>
              <span className="text-[#27C93F] font-bold font-mono">Position #2 (↑ +4)</span>
            </div>
          </div>
        </div>

        {/* Traffic Curve Visual */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono text-[#888888] uppercase">Monthly Organic Impressions</span>
            <span className="text-xs font-bold text-[#D62020] font-mono">1.2M Monthly Impressions</span>
          </div>
          <div className="h-20 flex items-end gap-1.5 pt-2">
            {[20, 35, 45, 55, 70, 85, 100, 125, 150].map((h, i) => (
              <div key={i} className="flex-1 bg-[#F8F9FA] rounded-t-md h-full flex items-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(h / 150) * 100}%` }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className={`w-full ${i >= 6 ? "bg-[#D62020]" : "bg-[#111111]/25"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 02. Google Ads
  {
    id: "02",
    icon: Target,
    title: "Google Ads (PPC)",
    tag: "HIGH INTENT BUYERS",
    brandColor: "#4285F4",
    accentBg: "bg-blue-500/10 text-[#4285F4]",
    desc: "High-yield Search, Shopping, and Performance Max campaigns structured to convert ready-to-buy users at the lowest Cost Per Acquisition (CPA).",
    benefits: [
      "Search & Performance Max Funnel Architecture",
      "Negative Keyword & Waste Suppression",
      "Dynamic Keyword Insertion Ads",
      "Smart Bidding & Conversion Optimization",
    ],
    ctaText: "SCALE GOOGLE ADS REVENUE",
    kpis: [
      { label: "Average ROAS", value: "8.4x", change: "↑ +140% Return" },
      { label: "Cost Per Lead", value: "₹185", change: "↓ 38% Reduction" },
      { label: "Quality Score", value: "9.2 / 10", change: "Top Tier Ad Rank" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* Google Ad Unit Live Preview */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold text-white bg-[#4285F4] px-2 py-0.5 rounded">Ad</span>
            <span className="text-xs text-[#555555]">https://www.virratglobal.com/digital-marketing</span>
          </div>
          <h4 className="text-sm font-bold text-[#1A0DAB] hover:underline cursor-pointer">
            #1 Digital Marketing Agency Pune | 8.4x ROAS Campaigns
          </h4>
          <p className="text-xs text-[#4D5156] mt-1 leading-normal">
            Scale your business with high-converting Google Search & Performance Max campaigns. Data-driven PPC strategy tailored for maximum ROI.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-[#F0F0F0] text-xs font-medium text-[#1A0DAB]">
            <span>• Free PPC Account Audit</span>
            <span>• Case Studies & Proof</span>
          </div>
        </div>

        {/* Campaign Metrics Display */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3.5 rounded-xl border border-[#EBEBEB] shadow-xs">
            <span className="text-[11px] text-[#888888] font-mono block mb-1">PMax ROAS</span>
            <span className="text-xl font-bold text-[#4285F4]">8.45x</span>
            <div className="w-full bg-[#F0F0F0] h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#4285F4] h-full w-[85%]" />
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-[#EBEBEB] shadow-xs">
            <span className="text-[11px] text-[#888888] font-mono block mb-1">Conversion Rate</span>
            <span className="text-xl font-bold text-[#27C93F]">14.8%</span>
            <div className="w-full bg-[#F0F0F0] h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#27C93F] h-full w-[78%]" />
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 03. Meta Ads
  {
    id: "03",
    icon: Share2,
    title: "Meta Ads (FB & IG)",
    tag: "PAID SOCIAL SCALE",
    brandColor: "#0668E1",
    accentBg: "bg-blue-600/10 text-[#0668E1]",
    desc: "High-stopping video hooks, UGC ad creatives, and dynamic retargeting funnels that convert social scrollers into high-LTV customers.",
    benefits: [
      "UGC & High-Hook Creative Production",
      "Lookalike & Interest Audience Stacking",
      "Dynamic Product Catalog Ads",
      "Multi-Touch Retargeting Funnels",
    ],
    ctaText: "LAUNCH META AD FUNNEL",
    kpis: [
      { label: "Click-Through Rate", value: "4.8%", change: "↑ 3x Industry Avg" },
      { label: "ROAS (Return on Ad Spend)", value: "5.8x", change: "High Return" },
      { label: "Cost Per Click (CPC)", value: "₹4.20", change: "↓ 42% Optimization" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* Instagram / FB Feed Mockup */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-[11px] text-[#111]">VG</div>
              </div>
              <div>
                <span className="text-xs font-bold text-[#111111] block leading-none">virratglobal.official</span>
                <span className="text-[10px] text-[#888888]">Sponsored</span>
              </div>
            </div>
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>

          {/* Ad Visual Mockup */}
          <div className="w-full h-36 rounded-xl bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 p-4 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
            <span className="text-[10px] font-mono tracking-widest bg-white/20 px-2 py-0.5 rounded w-fit">10X GROWTH ENGINE</span>
            <div>
              <h5 className="font-bold text-sm leading-tight">Scale Your Brand to 8-Figures</h5>
              <p className="text-[11px] opacity-80 mt-0.5">Get our proven Meta Ad blueprint.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 text-xs">
            <span className="text-[#888888] font-mono">❤️ 4.2k Likes • 348 Comments</span>
            <span className="font-bold text-[#0668E1] cursor-pointer hover:underline">Learn More →</span>
          </div>
        </div>
      </div>
    ),
  },

  // 04. Social Media Marketing
  {
    id: "04",
    icon: Megaphone,
    title: "Social Media Marketing",
    tag: "BRAND VIRALITY",
    brandColor: "#E1306C",
    accentBg: "bg-rose-500/10 text-[#E1306C]",
    desc: "End-to-end content creation, short-form video production (Reels/Shorts), and proactive community management that builds an active brand cult.",
    benefits: [
      "Monthly Content Calendar & Reels Production",
      "Viral Trend-Jacked Short Form Videos",
      "24/7 Community Engagement & DMs",
      "Influencer Outreach & Strategic Collabs",
    ],
    ctaText: "BUILD SOCIAL PRESENCE",
    kpis: [
      { label: "Monthly Reach", value: "2.4M+", change: "↑ +310% Virality" },
      { label: "Engagement Rate", value: "8.6%", change: "Industry Lead" },
      { label: "Reels Play Views", value: "850K+", change: "Viral Reach" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* Social Feed Grid */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-[#111111]">
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#E1306C]" /> Instagram Content Feed</span>
            <span className="text-[#E1306C] font-mono">14.8k Followers</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { likes: "4.2k", label: "Brand Reel" },
              { likes: "1.8k", label: "Carousel" },
              { likes: "8.5k", label: "Viral Tip" },
              { likes: "3.1k", label: "Case Study" },
              { likes: "6.4k", label: "Behind Scenes" },
              { likes: "9.2k", label: "Launch Video" },
            ].map((item, idx) => (
              <div key={idx} className="aspect-square rounded-xl bg-gradient-to-tr from-slate-100 to-slate-200 p-2 flex flex-col justify-end text-[10px] font-bold text-[#111] shadow-2xs border border-[#EBEBEB]">
                <span className="text-[#E1306C]">❤️ {item.likes}</span>
                <span className="truncate opacity-75">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 05. Content Marketing
  {
    id: "05",
    icon: FileText,
    title: "Content Marketing",
    tag: "AUTHORITY & LEADS",
    brandColor: "#10B981",
    accentBg: "bg-emerald-500/10 text-[#10B981]",
    desc: "Search-engineered longform articles, thought-leadership whitepapers, and sales copywriting engineered to turn readers into qualified leads.",
    benefits: [
      "EEAT-Compliant Technical Blog Posts",
      "High-Converting Landing Page Copy",
      "Downloadable E-books & Lead Magnets",
      "SEO Content Clusters & Hub Architecture",
    ],
    ctaText: "GENERATE CONTENT LEADS",
    kpis: [
      { label: "Lead Conversion", value: "+180%", change: "High Intent" },
      { label: "Avg. Time on Page", value: "4m 12s", change: "Deep Engagement" },
      { label: "Organic Inbound", value: "420 / Mo", change: "Qualified Leads" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* Article Preview Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="flex items-center gap-2 text-[11px] text-[#10B981] font-mono mb-2">
            <span className="px-2 py-0.5 rounded bg-[#10B981]/10 font-bold">BLOG STRATEGY</span>
            <span>• 5 Min Read</span>
          </div>
          <h4 className="text-sm font-bold text-[#111111] mb-1">
            "The 2026 Brand Scaling Framework: How Modern Businesses Capture 10x Market Share"
          </h4>
          <p className="text-xs text-[#666666]">
            Comprehensive breakdown of consumer acquisition channels, conversion optimization, and visual identity...
          </p>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F0F0F0] text-xs text-[#888888]">
            <span>1,842 Readers</span>
            <span className="font-bold text-[#10B981]">+142 Leads Generated</span>
          </div>
        </div>
      </div>
    ),
  },

  // 06. Email Marketing
  {
    id: "06",
    icon: Mail,
    title: "Email Marketing & Flows",
    tag: "RETENTION & LTV",
    brandColor: "#8B5CF6",
    accentBg: "bg-purple-500/10 text-[#8B5CF6]",
    desc: "Automated Klaviyo welcome series, abandoned cart recovery, and hyper-segmented promotional broadcasts designed to maximize repeat purchase revenue.",
    benefits: [
      "Klaviyo Automation Flow Architecture",
      "Cart & Checkout Abandonment Recovery",
      "VIP Loyalty & Repeat Buyer Campaigns",
      "Dynamic A/B Subject Line Testing",
    ],
    ctaText: "MAXIMIZE EMAIL REVENUE",
    kpis: [
      { label: "Open Rate", value: "42.5%", change: "↑ 2.2x Benchmark" },
      { label: "Click-to-Open", value: "14.2%", change: "High Click Interest" },
      { label: "Revenue Attributed", value: "35% Total", change: "Automated Profit" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* Automation Flow Blueprint */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm space-y-2.5">
          <span className="text-xs font-mono font-bold text-[#8B5CF6] block uppercase">
            ⚡ Live Klaviyo Flow Automation
          </span>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB] text-xs">
            <Zap className="w-4 h-4 text-purple-600 shrink-0" />
            <div>
              <span className="font-bold text-[#111]">Trigger: Cart Abandoned</span>
              <p className="text-[10px] text-[#888]">1,420 Active Users In Flow</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB] text-xs">
            <Mail className="w-4 h-4 text-purple-600 shrink-0" />
            <div>
              <span className="font-bold text-[#111]">Email #1: 15-Min Reminder (48% Open Rate)</span>
              <p className="text-[10px] text-[#27C93F] font-bold">+₹4,20,000 Recovered This Month</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 07. Local SEO
  {
    id: "07",
    icon: MapPin,
    title: "Local SEO & Map Pack",
    tag: "HYPER-LOCAL LEADS",
    brandColor: "#F59E0B",
    accentBg: "bg-amber-500/10 text-[#F59E0B]",
    desc: "Dominate local Google Map Packs and geography-based searches to capture high-intent phone calls, store visits, and local service leads.",
    benefits: [
      "Google Business Profile Geo-Tagging",
      "Local Citation & NAP Synchronization",
      "Automated Review Generation System",
      "Local Service Ads (LSA) Integration",
    ],
    ctaText: "DOMINATE LOCAL MAP PACK",
    kpis: [
      { label: "Call Leads", value: "+210%", change: "Direct Phone Calls" },
      { label: "Map Pack Rank", value: "Top #1-3", change: "Local Dominance" },
      { label: "Review Score", value: "4.9 ★", change: "180+ 5-Star Reviews" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* Google Maps Card Preview */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold text-white bg-[#F59E0B] px-2 py-0.5 rounded">Google Map Pack #1</span>
              <h4 className="text-sm font-bold text-[#111111] mt-1.5">Virrat Global - Branding & Marketing Agency</h4>
              <div className="flex items-center gap-1 text-xs text-[#F59E0B] mt-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-[#111]">5.0</span>
                <span className="text-[#888]">(148 Google Reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <button className="flex-1 py-2 bg-[#F8F9FA] border border-[#EBEBEB] rounded-xl text-xs font-bold text-[#111] flex items-center justify-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#F59E0B]" /> Call Now
            </button>
            <button className="flex-1 py-2 bg-[#F8F9FA] border border-[#EBEBEB] rounded-xl text-xs font-bold text-[#111] flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" /> Directions
            </button>
          </div>
        </div>
      </div>
    ),
  },

  // 08. YouTube Marketing
  {
    id: "08",
    icon: Video,
    title: "YouTube Video Marketing",
    tag: "VIDEO PERFORMANCE",
    brandColor: "#FF0000",
    accentBg: "bg-red-600/10 text-[#FF0000]",
    desc: "High-retention video ad campaigns, in-feed video promotions, and YouTube SEO strategies built for high view-through rates and direct conversions.",
    benefits: [
      "Scriptwriting & UGC Video Direction",
      "In-Feed & Pre-Roll Video Ad Campaigns",
      "YouTube Channel SEO & Thumbnail Design",
      "Direct Conversion Action Link Tracking",
    ],
    ctaText: "SCALE YOUTUBE VIDEO ADS",
    kpis: [
      { label: "View-Through Rate", value: "72%", change: "High Retention" },
      { label: "Brand Recall", value: "+85%", change: "Top of Mind" },
      { label: "Cost Per View", value: "₹0.35", change: "Low CPV Scale" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* YouTube Video Player Preview */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="relative w-full h-36 rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg shadow-red-600/40 cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded font-mono">
              342K Views • 72% Completion
            </div>
          </div>
          <h4 className="text-xs font-bold text-[#111111] mt-2.5">
            How 8-Figure SaaS Brands Build High-ROI Marketing Engines
          </h4>
        </div>
      </div>
    ),
  },

  // 09. Marketing Automation
  {
    id: "09",
    icon: Cpu,
    title: "Marketing & CRM Automation",
    tag: "ZERO LEAD LEAKAGE",
    brandColor: "#6366F1",
    accentBg: "bg-indigo-500/10 text-[#6366F1]",
    desc: "Seamless lead scoring, automated CRM workflows, and instant multi-channel lead follow-ups powered by HubSpot, ActiveCampaign, or custom tools.",
    benefits: [
      "HubSpot & CRM Funnel Architecture",
      "Automated Instant WhatsApp & SMS Drips",
      "Lead Scoring & Qualification Rules",
      "Zero Sales Leakage Workflows",
    ],
    ctaText: "AUTOMATE SALES WORKFLOW",
    kpis: [
      { label: "Sales Efficiency", value: "+320%", change: "Instant Response" },
      { label: "Lead Response Time", value: "< 30 Sec", change: "Immediate SLA" },
      { label: "Lead Drop Rate", value: "0%", change: "100% Tracked" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* Workflow Nodes Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm space-y-2">
          <span className="text-xs font-mono font-bold text-[#6366F1] block uppercase">
            🤖 Automated CRM Workflow Node
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB] font-bold text-[#111]">
              1. Web Form Filled
            </div>
            <div className="p-2.5 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 font-bold text-[#6366F1]">
              2. Score &gt; 80 (High Intent)
            </div>
            <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB] font-bold text-[#111]">
              3. Instant WhatsApp Sent
            </div>
            <div className="p-2.5 rounded-xl bg-[#27C93F]/10 border border-[#27C93F]/30 font-bold text-[#27C93F]">
              4. Sales Rep Notified
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 10. Analytics & Reporting
  {
    id: "10",
    icon: BarChart2,
    title: "Analytics & GA4 Attribution",
    tag: "ATTRIBUTION TRUTH",
    brandColor: "#000000",
    accentBg: "bg-slate-900/10 text-slate-900",
    desc: "Server-side GTM tracking, GA4 event configuration, and custom Looker Studio dashboards providing 100% accurate marketing revenue attribution.",
    benefits: [
      "GA4 Custom Event & Conversion Setup",
      "GTM Server-Side Container Deployment",
      "Looker Studio Real-Time ROI Dashboards",
      "iOS-Proof Meta Conversions API (CAPI)",
    ],
    ctaText: "GET ACCURATE MARKETING DATA",
    kpis: [
      { label: "Attribution Accuracy", value: "99.4%", change: "Zero Data Loss" },
      { label: "Tracked Revenue", value: "100%", change: "Full Visibility" },
      { label: "Server-Side Sync", value: "Active", change: "CAPI Enabled" },
    ],
    renderDashboard: () => (
      <div className="space-y-4">
        {/* GA4 Realtime Analytics */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBEBEB] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-[#111111] flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#27C93F] animate-pulse" /> GA4 Realtime Active Visitors
            </span>
            <span className="text-xs font-mono font-bold text-[#27C93F] bg-[#27C93F]/10 px-2 py-0.5 rounded">
              1,482 Active Now
            </span>
          </div>

          {/* Traffic Channel Split */}
          <div className="space-y-1.5 text-xs font-medium text-[#555555]">
            <div className="flex justify-between">
              <span>Organic Search</span>
              <span className="font-bold text-[#111]">42% (622 users)</span>
            </div>
            <div className="w-full bg-[#F0F0F0] h-2 rounded-full overflow-hidden">
              <div className="bg-[#D62020] h-full w-[42%]" />
            </div>

            <div className="flex justify-between pt-1">
              <span>Paid Google Ads</span>
              <span className="font-bold text-[#111]">28% (415 users)</span>
            </div>
            <div className="w-full bg-[#F0F0F0] h-2 rounded-full overflow-hidden">
              <div className="bg-[#4285F4] h-full w-[28%]" />
            </div>

            <div className="flex justify-between pt-1">
              <span>Meta Social Ads</span>
              <span className="font-bold text-[#111]">18% (266 users)</span>
            </div>
            <div className="w-full bg-[#F0F0F0] h-2 rounded-full overflow-hidden">
              <div className="bg-[#0668E1] h-full w-[18%]" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function DMServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);
  const activeService = SERVICES[activeIdx];

  return (
    <section
      id="services"
      className="w-full bg-[#F8F9FA] text-[#111111] py-24 md:py-32 border-b border-[#EBEBEB]"
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
            OUR DIGITAL MARKETING SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="text-[2.5rem] md:text-[3.5rem] font-bold font-heading text-[#111111] tracking-tight leading-[1.08] mb-4"
          >
            Data-Driven Marketing <br />
            Built For <span className="text-[#D62020]">Scalable Revenue.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body"
          >
            Explore our complete suite of performance marketing services. Click or hover any service below to view its live campaign dashboard preview and metrics.
          </motion.p>
        </div>

        {/* ── DESKTOP & TABLET INTERACTIVE SPLIT-SCREEN LAYOUT ────────── */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE (5 Cols): Vertical Service Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {SERVICES.map((service, idx) => {
              const isActive = idx === activeIdx;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group text-left px-5 py-4 rounded-[16px] transition-all duration-300 relative flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? "bg-white border-[#EBEBEB] text-[#D62020] shadow-md shadow-black/5"
                      : "bg-white/60 border-transparent text-[#111111] hover:bg-white hover:border-[#EBEBEB] hover:text-[#D62020]"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLeftAccentBar"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#D62020] rounded-r-full"
                    />
                  )}

                  <div className="flex items-center gap-3.5 pl-2">
                    <span className={`text-[12px] font-mono font-bold ${isActive ? "text-[#D62020]" : "text-[#888888]"}`}>
                      {service.id}
                    </span>
                    <h3 className={`text-[16px] font-bold font-heading leading-tight transition-colors ${
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

          {/* RIGHT SIDE (7 Cols): Interactive Service Dashboard Preview Panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="p-8 md:p-10 rounded-[28px] bg-white border border-[#EBEBEB] shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D62020] text-white flex items-center justify-center shadow-lg shadow-[#D62020]/25">
                    {React.createElement(activeService.icon, { className: "w-7 h-7" })}
                  </div>
                  <span className={`text-[11px] font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase ${activeService.accentBg}`}>
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

                {/* Key Deliverables & Benefits */}
                <div className="mb-8">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#888888] uppercase block mb-3">
                    STRATEGIC DELIVERABLES & KEY BENEFITS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8F9FA] border border-[#EBEBEB]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#D62020] shrink-0" />
                        <span className="text-[13px] font-bold text-[#222222] font-heading">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Dashboard Preview Box */}
                <div className="mb-8">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#888888] uppercase block mb-3">
                    LIVE CAMPAIGN DASHBOARD & METRICS
                  </span>
                  {activeService.renderDashboard()}
                </div>

                {/* KPI Metrics Row */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F8F9FA] border border-[#EBEBEB] mb-8">
                  {activeService.kpis.map((kpi, idx) => (
                    <div key={idx} className="text-center sm:text-left">
                      <span className="text-[10px] font-mono text-[#888888] uppercase block truncate">{kpi.label}</span>
                      <p className="text-lg md:text-xl font-bold text-[#111111] font-heading">{kpi.value}</p>
                      <span className="text-[10px] font-mono text-[#27C93F] font-bold block">{kpi.change}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D62020] hover:bg-[#BF1A1A] text-white text-[13px] font-black uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_10px_28px_rgba(214,32,32,0.25)] hover:shadow-[0_15px_35px_rgba(214,32,32,0.38)] transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  {activeService.ctaText}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                </Link>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── MOBILE ACCORDION LAYOUT (< 768px) ────────── */}
        <div className="flex md:hidden flex-col gap-4">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedMobile === idx;

            return (
              <div
                key={service.id}
                className="rounded-[20px] bg-white border border-[#EBEBEB] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setExpandedMobile(isExpanded ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-heading font-bold text-[16px] text-[#111111]"
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

                      <div className="mb-5">
                        {service.renderDashboard()}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#D62020] text-white text-[12px] font-bold uppercase tracking-wider"
                      >
                        {service.ctaText} <ArrowUpRight className="w-3.5 h-3.5" />
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
