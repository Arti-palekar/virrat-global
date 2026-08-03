"use client";

import React from "react";
import HowItWorks, { Step } from "@/components/ui/how-it-works";

export default function DMProcess() {
  const steps: Step[] = [
    {
      title: "Discovery & Goals",
      description: "Understand the business, audience, objectives and current digital presence.",
      colorTheme: "orange"
    },
    {
      title: "Research & Strategy",
      description: "Analyze competitors, keywords, audiences and market opportunities.",
      colorTheme: "blue"
    },
    {
      title: "Campaign Planning",
      description: "Build the channel, content, targeting and advertising strategy.",
      colorTheme: "purple"
    },
    {
      title: "Launch & Execution",
      description: "Launch SEO, advertising and digital marketing campaigns.",
      colorTheme: "orange"
    },
    {
      title: "Optimize & Scale",
      description: "Improve campaigns using performance and conversion data.",
      colorTheme: "blue"
    },
    {
      title: "Reporting & Growth",
      description: "Track results, report key metrics and identify new growth opportunities.",
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
          Our Step-by-Step<br />Digital Marketing Process
        </h2>
        <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[48ch] mx-auto mt-4">
          From discovery to growth optimization, we build and run campaigns structured to convert.
        </p>
      </div>

      {/* Integrated Interactive HowItWorks Component */}
      <HowItWorks features={steps} className="pt-0 md:pt-4" />

    </section>
  );
}
