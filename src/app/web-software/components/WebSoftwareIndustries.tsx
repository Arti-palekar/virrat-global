"use client";

import React from "react";
import { HeartPulse, GraduationCap, Building2, Factory, Landmark, ShoppingBag, Hotel, Truck, ShieldCheck, Rocket, LucideIcon } from "lucide-react";

interface IndustryItem {
  title: string;
  icon: LucideIcon;
  desc: string;
}

const INDUSTRIES: IndustryItem[] = [
  { title: "Healthcare & MedTech", icon: HeartPulse, desc: "HIPAA-compliant EHR systems, telemedicine portals, and AI diagnostics." },
  { title: "Education & EdTech", icon: GraduationCap, desc: "LMS platforms, virtual classrooms, and automated examination software." },
  { title: "Real Estate & PropTech", icon: Building2, desc: "Property management CRMs, virtual tours, and tenant payment gateways." },
  { title: "Manufacturing & Logistics", icon: Factory, desc: "IoT-enabled ERPs, supply chain tracking, and inventory automation." },
  { title: "Finance & FinTech", icon: Landmark, desc: "PCI-DSS compliant payment processing, fraud AI, and core banking portals." },
  { title: "Retail & E-Commerce", icon: ShoppingBag, desc: "Multi-vendor marketplaces, POS software, and dynamic pricing engines." },
  { title: "Hospitality & Travel", icon: Hotel, desc: "Hotel reservation systems, guest portals, and automated booking engines." },
  { title: "Logistics & Fleet", icon: Truck, desc: "GPS fleet tracking, route optimization, and automated dispatch software." },
  { title: "Government & Public Sector", icon: ShieldCheck, desc: "Secure citizen portals, digital document vaults, and compliance portals." },
  { title: "Startups & Scaleups", icon: Rocket, desc: "Rapid MVP development, cloud architecture, and investor-ready SaaS products." },
];

export function WebSoftwareIndustries() {
  return (
    <section className="w-full bg-[#f8f7f5] text-[#111111] py-24 md:py-32 border-b border-[#ECECEC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="homepage-section-tag inline-block mb-3">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111] font-heading">
            Domain Expertise Across <span className="text-[#D62020]">Global Sectors.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body">
            We deliver tailored web applications and software solutions designed to solve regulatory, operational, and scale challenges in every major industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#ECECEC] hover:border-[#D62020]/40 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D62020]/10 text-[#D62020] flex items-center justify-center font-bold mb-4 group-hover:bg-[#D62020] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111] font-heading mb-2 group-hover:text-[#D62020] transition-colors leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-body leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareIndustries;
