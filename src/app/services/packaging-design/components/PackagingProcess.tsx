"use client";

import React from "react";
import HowItWorks, { Step } from "@/components/ui/how-it-works";

export default function PackagingProcess() {
  const steps: Step[] = [
    {
      title: "Discovery & Brief",
      description: "Understand your brand, product, audience and key packaging requirements.",
      colorTheme: "orange"
    },
    {
      title: "Research & Strategy",
      description: "Study competitors, market trends and packaging styles to define the right direction.",
      colorTheme: "blue"
    },
    {
      title: "Concept Development",
      description: "Create 2–3 creative packaging concepts and select the strongest design direction.",
      colorTheme: "purple"
    },
    {
      title: "Design & Refinement",
      description: "Refine the layout, colors, typography, graphics and product information.",
      colorTheme: "orange"
    },
    {
      title: "Review & Revisions",
      description: "Apply your feedback and fine-tune every detail until the design is ready.",
      colorTheme: "blue"
    },
    {
      title: "Final Delivery",
      description: "Deliver print-ready and source files in AI, PDF, PNG and JPG formats.",
      colorTheme: "purple"
    }
  ];

  return (
    <section className="relative w-full bg-white text-[#111111] overflow-hidden pt-20 pb-10">
      
      {/* Centered Editorial Heading Area */}
      <div className="w-full pb-8 px-6 md:px-12 text-center relative z-20 bg-white">
        <span className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase mb-3">
          OUR PROCESS
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-none uppercase max-w-[20ch] mx-auto">
          Our Step-by-Step<br />Packaging Process
        </h2>
        <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[48ch] mx-auto mt-4">
          From discovery to print-ready delivery, we turn your ideas into packaging built to stand out.
        </p>
      </div>

      {/* Integrated Interactive HowItWorks Component */}
      <HowItWorks features={steps} className="pt-0 md:pt-4" />

    </section>
  );
}
