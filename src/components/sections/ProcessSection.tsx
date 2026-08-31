"use client";

import React from "react";
import HowItWorks, { Step } from "@/components/ui/how-it-works";

interface ProcessSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  steps: Step[];
  className?: string;
}

export function ProcessSection({
  eyebrow,
  title,
  description,
  steps,
  className,
}: ProcessSectionProps) {
  return (
    <section className={`relative w-full bg-white text-[#111111] overflow-hidden pt-20 pb-10 ${className || ""}`}>
      {/* Centered Editorial Heading Area */}
      <div className="w-full pb-8 px-6 md:px-12 text-center relative z-20 bg-white">
        <span className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase mb-3">
          {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-none uppercase max-w-[20ch] mx-auto mb-5">
          {title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        {description && (
          <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[48ch] mx-auto mt-4">
            {description}
          </p>
        )}
      </div>

      {/* Integrated Interactive HowItWorks Component */}
      <HowItWorks features={steps} className="pt-0 md:pt-4" />
    </section>
  );
}

export default ProcessSection;
