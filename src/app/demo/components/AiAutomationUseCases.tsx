"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, FileText, Database } from "lucide-react";

export default function AiAutomationUseCases() {
  const useCases = [
    {
      title: "Customer Support Automation",
      description: "AI chatbots that can instantly resolve common queries, route complex issues to human agents, and sync seamlessly with your ticketing system.",
      icon: Bot,
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Document Processing Pipeline",
      description: "Automatically extract data from PDFs, invoices, and emails using computer vision and LLMs, and push the data directly into your ERP.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Sales & CRM Synchronization",
      description: "Automate lead qualification, trigger personalized email sequences, and update CRM records without manual data entry.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-white text-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[#E32620] text-[10px] font-bold tracking-[0.3em] uppercase">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mt-4 leading-[1.1] uppercase">
              AUTOMATION IN <span className="text-[#E32620]">ACTION</span>
            </h2>
          </div>
          <p className="text-[#555555] font-medium text-base md:text-lg max-w-md">
            Real examples of how we connect tools, build AI logic, and remove friction from daily operations.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase, idx) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col bg-[#FAF9F6] border border-zinc-200/60 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Top Image */}
                <div className="w-full h-[220px] sm:h-[260px] overflow-hidden relative">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    <IconComponent className="w-5 h-5 text-[#E32620]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 pt-6 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 tracking-tight group-hover:text-[#E32620] transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[#555555] font-medium leading-relaxed mb-8 flex-1">
                    {useCase.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#111111] group-hover:text-[#E32620] transition-colors cursor-pointer">
                      LEARN MORE <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
