"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    title: "STARTING A BUSINESS",
    desc: "For new ventures needing their first registrations.",
    features: [
      "Business registration",
      "Applicable licences",
      "GST/tax registration",
      "Digital compliance setup"
    ]
  },
  {
    title: "GROWING A BUSINESS",
    desc: "For expanding operations requiring new permits.",
    features: [
      "Additional licences",
      "Tax & return support",
      "Regulatory documentation",
      "Compliance review"
    ]
  },
  {
    title: "ONGOING COMPLIANCE",
    desc: "For established companies needing regular filing.",
    features: [
      "Periodic filings",
      "Compliance monitoring",
      "Documentation support",
      "Renewal reminders"
    ]
  }
];

export default function CompliancePackages() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
                CUSTOM COMPLIANCE PACKAGE
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight mb-6"
            >
              Need Multiple Licences or Ongoing Compliance Support?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#666666] leading-relaxed"
            >
              Whether you're starting a new business, expanding operations or managing multiple compliance requirements, we can help identify the registrations, licences and filings relevant to your business.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111111] text-white font-semibold hover:bg-black/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Compliance Consultation &rarr;
            </Link>
          </motion.div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col bg-[#FAF9F6] border border-[#E8E8E8] rounded-2xl p-8 hover:-translate-y-2 hover:border-[#E31E24]/30 hover:shadow-xl hover:shadow-[#E31E24]/5 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-[#111111] mb-6">{pkg.title}</h3>
              <p className="text-sm text-[#666666] pb-8 border-b border-[#E8E8E8] mb-6">
                {pkg.desc}
              </p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E31E24]/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-[#E31E24]" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-medium text-[#111111]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full py-3 rounded-xl border-2 border-[#111111] text-[#111111] font-bold text-center hover:bg-[#111111] hover:text-white transition-colors duration-300"
              >
                Inquire Now
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
