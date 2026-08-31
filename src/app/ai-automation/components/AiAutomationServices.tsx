"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCard {
  num: string;
  title: string;
  desc: string;
  img: string;
  spanClass: string;
  heightClass: string;
}

const servicesList: ServiceCard[] = [
  {
    num: "01",
    title: "AI Strategy & Consulting",
    desc: "Identify where AI can create real business value and define a practical implementation roadmap.",
    img: "/images/ai/ai_hero_image_1786340622810.png",
    spanClass: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[400px]"
  },
  {
    num: "02",
    title: "Business Process Automation",
    desc: "Automate repetitive workflows and connect the tools your team already uses.",
    img: "/images/ai/ai_workflow_1786340682075.png",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px] sm:h-[400px]"
  },
  {
    num: "03",
    title: "Custom AI Solutions",
    desc: "Build AI-powered applications, assistants and internal tools tailored to your business.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px] sm:h-[500px]"
  },
  {
    num: "04",
    title: "AI Chatbots & Assistants",
    desc: "Create intelligent customer and internal assistants that provide fast, useful responses.",
    img: "/images/ai/ai_use_case_support_1786340644841.png",
    spanClass: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[500px]"
  },
  {
    num: "05",
    title: "Workflow & System Integration",
    desc: "Connect CRM, ERP, communication, marketing and business systems into seamless workflows.",
    img: "/images/ai/ai_document_1786340700092.png",
    spanClass: "md:col-span-2",
    heightClass: "h-[300px]"
  },
  {
    num: "06",
    title: "AI-Powered Analytics",
    desc: "Turn business data into actionable insights using intelligent reporting and automation.",
    img: "/images/ai/ai_analytics_1786340664774.png",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px]"
  }
];

export default function AiAutomationServices() {
  return (
    <section id="solutions" className="relative w-full px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="text-[#E32620] text-[10px] font-bold tracking-[0.3em] uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mt-4 leading-[1.1] uppercase mb-5">
            AI & AUTOMATION<br />
            BUILT AROUND YOUR BUSINESS
          </h2>
          <p className="mt-6 text-[#555555] font-medium text-lg max-w-2xl">
            From intelligent workflows to custom AI systems, we design automation solutions that reduce manual work, improve efficiency and help teams scale.
          </p>
        </div>

        {/* Asymmetric Bento Grid from Packaging UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white border border-zinc-200/50 shadow-sm flex flex-col justify-end p-8 ${service.spanClass} ${service.heightClass} cursor-pointer`}
            >
              {/* Background Image inside card */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  whileHover={{ scale: 1.04 }}
                />
                {/* Dark Vignette Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-300" />
              </div>

              {/* Text content overlays visual */}
              <div className="relative z-10 text-white flex flex-col items-start justify-end w-full h-full">
                {/* Number Card */}
                <span className="text-xs font-mono font-bold text-white/50 mb-auto">{service.num}</span>

                {/* Service Details */}
                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight group-hover:text-[#E32620] transition-colors duration-300 mb-6">
                    {service.title}
                  </h3>
                  
                  {/* Expandable info on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
                    <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors mt-2"
                  >
                    EXPLORE SOLUTION <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
