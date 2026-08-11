"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ShieldAlert, FileEdit, Send, RefreshCw } from "lucide-react";

const processSteps = [
  {
    num: "1",
    title: "Meet & Understand",
    description: "We meet and learn about your business, your purpose, and set clear compliance goals for the project.",
    icon: Search
  },
  {
    num: "2",
    title: "Identify",
    description: "We review the regulations and identify applicable registrations, licences, and compliance obligations.",
    icon: ShieldAlert
  },
  {
    num: "3",
    title: "Prepare",
    description: "We prepare all necessary documents, forms, and required information to ensure a smooth application.",
    icon: FileEdit
  },
  {
    num: "4",
    title: "File & Present",
    description: "We submit applications, registrations, or returns accurately to the respective government authorities.",
    icon: Send
  },
  {
    num: "5",
    title: "Maintain",
    description: "Once approved, we track renewals, filings, and ongoing compliance requirements for your business.",
    icon: RefreshCw
  }
];

export default function ComplianceProcess() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#E8E8E8]">
      {/* Header section */}
      <div className="w-full bg-[#FAF9F6] py-20 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight"
            >
              A Streamlined Path to Compliance
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        {processSteps.map((step, idx) => {
          const isLeft = idx % 2 === 0;
          const bgClass = isLeft ? "bg-white" : "bg-[#FAF9F6]";

          return (
            <div key={idx} className={`w-full py-16 ${bgClass}`}>
              <div className="max-w-[900px] mx-auto px-6">
                
                {/* Mobile Layout (Visible only on < md) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="flex flex-col items-center text-center md:hidden space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] tracking-tight">{step.title}</h3>
                  <div className="w-[104px] h-[104px] bg-white border-2 border-[#111111] shadow-[4px_4px_0px_0px_rgba(17,17,17,0.06)] flex items-center justify-center relative">
                    <step.icon className="w-10 h-10 text-[#E31E24]" strokeWidth={2} />
                  </div>
                  <p className="text-[#666666] leading-relaxed max-w-[300px]">
                    {step.description}
                  </p>
                </motion.div>

                {/* Desktop Layout (Visible only on >= md) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="hidden md:grid w-full gap-0"
                  style={{ gridTemplateColumns: isLeft ? "150px 1fr" : "1fr 150px" }}
                >
                  {isLeft ? (
                    <>
                      {/* LEFT COLUMN: Number & Icon */}
                      <div className="flex flex-col items-center relative">
                        {/* Horizontal line extending into right column */}
                        <div className="absolute top-7 left-1/2 w-[calc(50%+3rem)] h-0 border-t-2 border-dashed border-[#111111]/30 z-0"></div>
                        
                        {/* Number */}
                        <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                          {step.num}
                        </div>

                        {/* Vertical Dashed Line */}
                        <div className="w-0 h-12 border-l-2 border-dashed border-[#111111]/30 z-0 relative"></div>

                        {/* Icon Box */}
                        <div className="w-[104px] h-[104px] bg-white border-2 border-[#111111] shadow-[4px_4px_0px_0px_rgba(17,17,17,0.06)] flex items-center justify-center relative z-10">
                          {/* Pointer */}
                          <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-[#111111] rotate-45"></div>
                          <step.icon className="w-10 h-10 text-[#E31E24]" strokeWidth={2} />
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Title & Description */}
                      <div className="flex flex-col justify-start pt-[14px]">
                        <h3 className="text-[32px] font-bold text-[#111111] pl-[3rem] ml-4 tracking-tight leading-none mb-6">
                          {step.title}
                        </h3>
                        <p className="text-base text-[#666666] leading-relaxed pl-[3rem] ml-4 max-w-md">
                          {step.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* LEFT COLUMN: Title & Description */}
                      <div className="flex flex-col justify-start pt-[14px] items-end text-right">
                        <h3 className="text-[32px] font-bold text-[#111111] pr-[3rem] mr-4 tracking-tight leading-none mb-6">
                          {step.title}
                        </h3>
                        <p className="text-base text-[#666666] leading-relaxed pr-[3rem] mr-4 max-w-md">
                          {step.description}
                        </p>
                      </div>

                      {/* RIGHT COLUMN: Number & Icon */}
                      <div className="flex flex-col items-center relative">
                        {/* Horizontal line extending into left column */}
                        <div className="absolute top-7 right-1/2 w-[calc(50%+3rem)] h-0 border-t-2 border-dashed border-[#111111]/30 z-0"></div>
                        
                        {/* Number */}
                        <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                          {step.num}
                        </div>

                        {/* Vertical Dashed Line */}
                        <div className="w-0 h-12 border-l-2 border-dashed border-[#111111]/30 z-0 relative"></div>

                        {/* Icon Box */}
                        <div className="w-[104px] h-[104px] bg-white border-2 border-[#111111] shadow-[4px_4px_0px_0px_rgba(17,17,17,0.06)] flex items-center justify-center relative z-10">
                          {/* Pointer */}
                          <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-[#111111] rotate-45"></div>
                          <step.icon className="w-10 h-10 text-[#E31E24]" strokeWidth={2} />
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
