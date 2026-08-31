"use client";

import React from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import { Step } from "@/components/ui/how-it-works";

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
    <ProcessSection
      eyebrow="OUR PROCESS"
      title={"Our Step-by-Step\nPackaging Process"}
      description="From discovery to print-ready delivery, we turn your ideas into packaging built to stand out."
      steps={steps}
      className="-mb-24 md:-mb-[220px]"
    />
  );
}
