"use client";

import React from "react";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import FAQ1 from "@/components/FAQ1";
import TestimonialsSection from "@/components/TestimonialsSection";

import ComplianceHero from "./components/ComplianceHero";
import ComplianceValueStrip from "./components/ComplianceValueStrip";
import ComplianceServicesGrid from "./components/ComplianceServicesGrid";

import ComplianceIndustries from "./components/ComplianceIndustries";

import ComplianceProcess from "./components/ComplianceProcess";



const complianceFaqs = [
  {
    question: "What licences does my business need?",
    answer: "The specific licences depend on your business type, industry, and location. For example, food businesses need FSSAI, importers need IEC, and retail shops need Shop & Establishment registration. We help identify exactly what you need.",
    meta: "Licences"
  },
  {
    question: "How do I know which registrations apply to my business?",
    answer: "We conduct a thorough review of your business activities, corporate structure, and operational locations to provide a comprehensive list of all mandatory registrations and applicable regulatory filings.",
    meta: "Registrations"
  },
  {
    question: "Can you help with GST registration and returns?",
    answer: "Yes, we provide end-to-end GST support. This includes initial GST registration, monthly/quarterly return filings (GSTR-1, GSTR-3B), annual returns, and addressing any departmental notices.",
    meta: "GST"
  },
  {
    question: "Can you help with company registration?",
    answer: "Absolutely. We assist with incorporating Private Limited Companies, LLPs, One Person Companies, and Partnership firms, ensuring all initial compliance requirements like PAN, TAN, and DIN are met.",
    meta: "Incorporation"
  },
  {
    question: "Do you provide ongoing compliance support?",
    answer: "Yes, our ongoing support packages cover periodic tax filings, annual MCA compliance, license renewals, and continuous regulatory monitoring so you can focus on running your business.",
    meta: "Ongoing Support"
  },
  {
    question: "How can I get a compliance assessment?",
    answer: "Simply reach out via our consultation form. Our team will schedule a brief call to understand your business and subsequently provide a roadmap outlining your compliance status and required next steps.",
    meta: "Assessment"
  }
];

export default function ComplianceClient() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111111] font-body selection:bg-[#E31E24]/10 selection:text-[#E31E24] compliance-page">
      <style>{`
        .compliance-page h2:not(.compliance-hero *):not(header *):not(nav *) {
          font-size: 32px !important;
          font-weight: 700 !important;
          line-height: 1.1 !important;
          color: #111111 !important;
          font-family: "Sora", sans-serif !important;
          margin: 0 0 20px !important;
        }
        @media (min-width: 768px) {
          .compliance-page h2:not(.compliance-hero *):not(header *):not(nav *) {
            font-size: 54px !important;
            line-height: 1 !important;
          }
        }
        .compliance-page p:not(.compliance-hero *):not(header *):not(nav *) {
          font-size: 16px !important;
          font-weight: 600 !important;
          line-height: 1.2 !important;
          color: #666666 !important;
          font-family: "Sora", sans-serif !important;
          margin: 0 0 24px !important;
          max-width: 720px !important;
        }
        @media (min-width: 768px) {
          .compliance-page p:not(.compliance-hero *):not(header *):not(nav *) {
            font-size: 18px !important;
          }
        }
      `}</style>
      {/* Shared Navbar */}
      <HoverGradientNavBar />

      <div className="relative w-full z-10">
        <ComplianceHero />
        <ComplianceValueStrip />
        <ComplianceServicesGrid />

        <ComplianceProcess />

        <ComplianceIndustries />

      </div>

      <TestimonialsSection />
      
      <FAQ1 items={complianceFaqs} />

      <CinematicFooter />
    </main>
  );
}
