"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Briefcase, 
  FileText, 
  Building2, 
  Users, 
  UserCircle, 
  Handshake, 
  Store, 
  Key, 
  Landmark, 
  Receipt, 
  Calculator, 
  Stamp 
} from "lucide-react";

type ServiceCategory = "All Services" | "Business Registration" | "Licences & Permits" | "Tax & Returns" | "Legal Compliance" | "Digital Compliance";

const categories: ServiceCategory[] = [
  "All Services",
  "Business Registration",
  "Licences & Permits",
  "Tax & Returns",
  "Legal Compliance",
  "Digital Compliance"
];

const servicesData = [
  {
    title: "Startup / DPIIT Registration",
    desc: "Startup recognition and government registration support for eligible businesses.",
    category: "Business Registration",
    icon: Briefcase,
    timeline: "2-4 Weeks"
  },
  {
    title: "GST Registration",
    desc: "GST registration support for businesses, service providers, online sellers and eligible traders.",
    category: "Tax & Returns",
    icon: FileText,
    timeline: "3-7 Days"
  },
  {
    title: "Private Limited Company Registration",
    desc: "End-to-end company incorporation support including required registration documentation.",
    category: "Business Registration",
    icon: Building2,
    timeline: "10-15 Days"
  },
  {
    title: "LLP Registration",
    desc: "LLP formation support including agreement preparation and registration process.",
    category: "Business Registration",
    icon: Handshake,
    timeline: "10-15 Days"
  },
  {
    title: "One Person Company (OPC) Registration",
    desc: "Business incorporation support for solo entrepreneurs seeking a structured company setup.",
    category: "Business Registration",
    icon: UserCircle,
    timeline: "10-15 Days"
  },
  {
    title: "Partnership Firm Registration",
    desc: "Partnership deed preparation and registration support for partnership businesses.",
    category: "Business Registration",
    icon: Users,
    timeline: "5-7 Days"
  },
  {
    title: "Proprietorship Registration",
    desc: "Business registration support including applicable shop/business and tax registrations.",
    category: "Business Registration",
    icon: Store,
    timeline: "5-7 Days"
  },
  {
    title: "Digital Signature Certificate (DSC)",
    desc: "Digital signature solutions for MCA filing, tax filing, e-tendering and other online compliance requirements.",
    category: "Digital Compliance",
    icon: Key,
    timeline: "1-2 Days"
  },
  {
    title: "Income Tax Return (ITR) Filing",
    desc: "ITR filing support for individuals, freelancers, professionals and business owners.",
    category: "Tax & Returns",
    icon: Landmark,
    timeline: "Ongoing"
  },
  {
    title: "TDS Return Filing",
    desc: "Periodic TDS return filing and applicable compliance documentation.",
    category: "Tax & Returns",
    icon: Calculator,
    timeline: "Quarterly"
  },
  {
    title: "GST Return Filing",
    desc: "Regular GST return filing support including applicable monthly or quarterly returns.",
    category: "Tax & Returns",
    icon: Receipt,
    timeline: "Monthly/Quarterly"
  },
  {
    title: "Business Licences & Government Approvals",
    desc: "Guidance for identifying and applying for licences and approvals relevant to your business.",
    category: "Licences & Permits",
    icon: Stamp,
    timeline: "Varies"
  }
];

export default function ComplianceServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("All Services");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === "All Services" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="relative w-full bg-[#FAF9F6] py-16 md:py-24">
      <div className="max-w-[1450px] mx-auto px-6 md:px-8 lg:px-10">
        
        {/* Header & Search */}
        <div className="flex flex-col items-center text-center mb-12">

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight mb-8"
          >
            Explore Our Compliance Services
          </motion.h2>

          {/* Search Input */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-2xl relative"
          >
            <input 
              type="text" 
              placeholder="Search GST, company registration, licences, ITR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white border border-[#E8E8E8] text-[#111111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[#FAF9F6] rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar pb-6 mb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-[#111111] text-white shadow-md" 
                  : "bg-white text-[#666666] border border-[#E8E8E8] hover:border-[#E31E24]/50 hover:text-[#E31E24]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#E8E8E8]">
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, idx) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group/feature flex flex-col bg-white border-r border-b border-[#E8E8E8] p-6 md:p-[30px] lg:p-10 relative overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover/feature:opacity-100 bg-gradient-to-t from-[#E31E24]/5 to-transparent z-0" />

                  {/* Icon */}
                  <div className="relative z-10 mb-8 text-[#111111] group-hover/feature:text-[#E31E24] transition-colors duration-200">
                    <service.icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                  </div>

                  {/* Title & Category Wrapper */}
                  <div className="relative z-10 mb-4">
                    {/* Vertical Hover Indicator */}
                    <div className="absolute -left-6 md:-left-[30px] lg:-left-10 top-1/2 -translate-y-1/2 h-8 w-1 opacity-0 group-hover/feature:opacity-100 transition-all duration-200 origin-center rounded-tr-full rounded-br-full bg-[#E31E24]" />
                    
                    <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-hover/feature:text-[#E31E24]/80 transition-colors duration-200">
                      {service.category}
                    </div>
                    
                    <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#111111] leading-tight transition-transform duration-200 group-hover/feature:translate-x-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-[15px] md:text-[16px] text-gray-500 leading-relaxed max-w-[320px] flex-grow mb-6">
                    {service.desc}
                  </p>

                  {/* Bottom: Timeline & View Details */}
                  <div className="relative z-10 mt-auto flex items-center justify-between w-full pt-4">
                    <span className="text-[12px] md:text-[13px] font-medium text-gray-400 flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {service.timeline}
                    </span>
                    <Link href="/contact" className="text-[13px] md:text-[14px] font-semibold text-[#111111] flex items-center gap-1 group-hover/feature:text-[#E31E24] transition-colors duration-200">
                      View Details 
                      <span className="transition-transform duration-200 group-hover/feature:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border-r border-b border-[#E8E8E8]">
                <p className="text-lg text-gray-500">No services found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All Services"); }}
                  className="mt-4 text-[#E31E24] font-semibold hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        <style dangerouslySetInnerHTML={{ __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </div>
    </section>
  );
}
