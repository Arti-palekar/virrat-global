"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const showcaseImages = [
  { title: "CUSTOM WEB APPS", image: "/images/services/web_app_mockup.png" },
  { title: "WEBSITE DEVELOPMENT", image: "/images/services/website_mockup.png" },
  { title: "SAAS PLATFORMS", image: "/images/services/saas_mockup.png" },
  { title: "MOBILE APPS", image: "/images/services/mobile_mockup.png" },
  { title: "ERP & CRM SYSTEMS", image: "/images/services/erp_crm_mockup.png" },
  { title: "E-COMMERCE", image: "/images/services/ecommerce_mockup.png" },
  { title: "AI WORKFLOW AUTOMATION", image: "/images/services/ai_automation_mockup.png" },
  { title: "CUSTOM SOFTWARE", image: "/images/services/web_1.png" },
  { title: "ENTERPRISE APPLICATIONS", image: "/images/services/web_2.png" },
  { title: "ANALYTICS DASHBOARDS", image: "/images/services/marketing_1.png" },
  { title: "ADMIN PORTALS", image: "/images/services/marketing_2.png" },
  { title: "CLIENT DATABASE PORTALS", image: "/images/services/marketing_3.png" },
];

export function WebSoftwareServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedServices = [
    {
      title: "Website Development",
      description: "High-performance digital experiences",
      image: showcaseImages.find((img) => img.title === "WEBSITE DEVELOPMENT")?.image || "/images/services/website_mockup.png",
      href: "/services",
    },
    {
      title: "eCommerce Development",
      description: "Modern online store & checkout systems",
      image: showcaseImages.find((img) => img.title === "E-COMMERCE")?.image || "/images/services/ecommerce_mockup.png",
      href: "/services",
    },
    {
      title: "Custom Software",
      description: "Tailored business logic & automation",
      image: showcaseImages.find((img) => img.title === "CUSTOM SOFTWARE")?.image || "/images/services/web_1.png",
      href: "/services",
    },
    {
      title: "Mobile App Development",
      description: "Premium iOS & Android applications",
      image: showcaseImages.find((img) => img.title === "MOBILE APPS")?.image || "/images/services/mobile_mockup.png",
      href: "/services",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#ffffff] text-[#111111] pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 md:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[#111111] text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] max-w-xl text-left"
            >
              Solutions built for
              <br />
              modern businesses
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-2.5 self-start md:self-end"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider !text-white shadow-sm hover:bg-zinc-800 transition-colors duration-300"
            >
              Explore All Services
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-950 !text-white shadow-sm hover:bg-zinc-800 transition-colors duration-300"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop & Tablet Layout (md and up) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {selectedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                href={service.href}
                className="group block relative w-full overflow-hidden rounded-[20px] md:rounded-[24px] bg-zinc-900"
                style={{ aspectRatio: "0.72 / 1" }}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] select-none"
                  draggable={false}
                />

                {/* Subtle dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Micro hover darkening layer */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15 pointer-events-none" />

                {/* Top-Right Circular Button */}
                <div className="absolute top-[18px] right-[18px] z-20 flex items-center justify-center w-[42px] h-[42px] md:w-[46px] md:h-[46px] rounded-full bg-white group-hover:bg-zinc-950 text-zinc-950 group-hover:text-white shadow-sm transition-all duration-500 ease-out">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bottom-Left Content */}
                <div className="absolute bottom-[20px] left-[20px] z-20 pr-4">
                  <h3 
                    className="text-white !text-white font-black uppercase tracking-tight text-lg md:text-xl mb-1 leading-tight"
                    style={{ color: "#ffffff" }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-white/80 !text-white/80 text-xs md:text-sm font-medium leading-snug"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Layout (< md) */}
        <div 
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {selectedServices.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] snap-center">
              <Link
                href={service.href}
                className="group block relative w-full overflow-hidden rounded-[20px] bg-zinc-900"
                style={{ aspectRatio: "0.72 / 1" }}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] select-none"
                  draggable={false}
                />

                {/* Subtle dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Micro hover darkening layer */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15 pointer-events-none" />

                {/* Top-Right Circular Button */}
                <div className="absolute top-[18px] right-[18px] z-20 flex items-center justify-center w-[42px] h-[42px] rounded-full bg-white group-hover:bg-zinc-950 text-zinc-950 group-hover:text-white shadow-sm transition-all duration-500 ease-out">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bottom-Left Content */}
                <div className="absolute bottom-[20px] left-[20px] z-20 pr-4">
                  <h3 
                    className="text-white !text-white font-black uppercase tracking-tight text-lg mb-1 leading-tight"
                    style={{ color: "#ffffff" }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-white/80 !text-white/80 text-xs font-medium leading-snug"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareServicesShowcase;
