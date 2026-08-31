"use client";

import React from "react";
import HowItWorks, { Step } from "@/components/ui/how-it-works";

export default function MerchandiseProcess() {
  const steps: Step[] = [
    {
      title: "Discovery & Sourcing",
      description: "Understand your branding goals, welcome kit curation, event timelines, and product budget.",
      colorTheme: "orange"
    },
    {
      title: "Concept & Mockups",
      description: "Create high-fidelity virtual designs and logo placement layouts across the selected items.",
      colorTheme: "blue"
    },
    {
      title: "Design & Dielines",
      description: "Lock in color standards, printing specifications, fabric weights, and outer box layouts.",
      colorTheme: "purple"
    },
    {
      title: "Pre-production Sampling",
      description: "Produce digital proofs or physical product samples to check print accuracy and texture.",
      colorTheme: "orange"
    },
    {
      title: "Batch Production",
      description: "Launch production across custom screen printing, embroidery, engraving, or box printing.",
      colorTheme: "blue"
    },
    {
      title: "QC & Kitting",
      description: "Perform strict quality checks and assemble custom employee onboarding boxes or event packs.",
      colorTheme: "purple"
    },
    {
      title: "Global Fulfillment",
      description: "Dispatch secure shipments directly to corporate hubs, office locations, or employee home addresses.",
      colorTheme: "orange"
    }
  ];

  return (
    <section className="relative w-full bg-white text-[#111111] overflow-hidden py-16 md:py-24">
      
      {/* Centered Editorial Heading Area */}
      <div className="w-full pb-8 px-6 md:px-12 text-center relative z-20 bg-white">
        <span className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase mb-3">
          OUR PROCESS
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-none uppercase max-w-[20ch] mx-auto mb-5">
          Our Step-by-Step<br />Merchandise Process
        </h2>
        <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[48ch] mx-auto mt-4">
          From concept creation to doorstep fulfillment, we handle the design and logistics of your brand swag.
        </p>
      </div>

      {/* Integrated Interactive HowItWorks Component */}
      <HowItWorks features={steps} className="pt-0 md:pt-4" />

    </section>
  );
}
