"use client";

import React from "react";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import FAQ1 from "@/components/FAQ1";

import ComplianceHero from "./components/ComplianceHero";
import ComplianceValueStrip from "./components/ComplianceValueStrip";
import ComplianceServicesGrid from "./components/ComplianceServicesGrid";
import ComplianceWhy from "./components/ComplianceWhy";
import ComplianceProcess from "./components/ComplianceProcess";
import ComplianceFrameworks from "./components/ComplianceFrameworks";
import ComplianceIndustries from "./components/ComplianceIndustries";
import ComplianceTechWorkflow from "./components/ComplianceTechWorkflow";
import ComplianceCTA from "./components/ComplianceCTA";

const complianceFaqs = [
  {
    question: "What is compliance and why does it matter?",
    answer: "Compliance means ensuring your business follows applicable laws, regulations, and industry standards. It matters because it protects sensitive data, avoids legal penalties, builds customer trust, and creates stronger internal processes.",
    meta: "Overview"
  },
  {
    question: "Which compliance requirements apply to my business?",
    answer: "The requirements depend on your industry, location, and the type of data you handle. For example, healthcare businesses need HIPAA, companies handling European data need GDPR, and B2B SaaS companies often need SOC 2.",
    meta: "Requirements"
  },
  {
    question: "Can you help us identify compliance gaps?",
    answer: "Yes, our first step is typically a comprehensive risk and gap assessment to identify where your current processes fall short of regulatory or security standards.",
    meta: "Assessment"
  },
  {
    question: "Do you help prepare businesses for audits?",
    answer: "Absolutely. We help you build the necessary policies, implement security controls, gather evidence, and conduct readiness assessments so you can confidently face internal or external audits.",
    meta: "Audits"
  },
  {
    question: "Can compliance processes be automated?",
    answer: "Yes. We specialize in blending compliance with technology. By integrating automated monitoring, alerts, and reporting workflows, we can significantly reduce the manual burden of maintaining compliance.",
    meta: "Automation"
  },
  {
    question: "How do you monitor compliance over time?",
    answer: "We help establish continuous monitoring practices, regular reviews, and automated check-ins to ensure your organization remains compliant as regulations and your business evolve.",
    meta: "Monitoring"
  }
];

export default function ComplianceClient() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-[#111111] overflow-x-hidden font-body selection:bg-[#E31E24]/10 selection:text-[#E31E24]">
      {/* Shared Navbar */}
      <HoverGradientNavBar />

      <div className="relative w-full z-10">
        <ComplianceHero />
        <ComplianceValueStrip />
        <ComplianceServicesGrid />
        <ComplianceWhy />
        <ComplianceProcess />
        <ComplianceFrameworks />
        <ComplianceIndustries />
        <ComplianceTechWorkflow />
        <FAQ1 items={complianceFaqs} />
        <ComplianceCTA />
      </div>

      <CinematicFooter />
    </main>
  );
}
