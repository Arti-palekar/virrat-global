"use client";

import React from "react";
import HoverRevealCards from "@/components/ui/cards";

/* ─── Service data ────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: "healthcare",
    src: "/images/industries/healthcare.webp",
    name: "Healthcare & Medical",
  },
  {
    id: "realestate",
    src: "/images/industries/realestate.webp",
    name: "Real Estate & Infrastructure",
  },
  {
    id: "education",
    src: "/images/industries/education.webp",
    name: "Education & E-Learning",
  },
  {
    id: "food-beverage",
    src: "/images/industries/food_beverage.png",
    name: "Food & Beverage",
  },
  {
    id: "jewelry",
    src: "/images/industries/jewelry.png",
    name: "Jewelry & Precious Metals",
  },
  {
    id: "fintech",
    src: "/images/industries/fintech.webp",
    name: "Financial Services & FinTech",
  },
  {
    id: "fashion",
    src: "/images/industries/fashion.png",
    name: "Fashion & Apparel",
  },
  {
    id: "sports",
    src: "/images/industries/sports.png",
    name: "Sports & Entertainment",
  },
];

/* ─── Map Services to CardItem format ──────────────────────────────────────── */

const mappedServices = SERVICES.map((svc) => ({
  id: svc.id,
  title: svc.name,
  imageUrl: svc.src,
}));

/* ─── Section ─────────────────────────────────────────────────────────────── */

export function WebSoftwareIndustriesCarousel() {
  return (
    <section className="w-full bg-white text-[#111111] border-b border-[#ECECEC] overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#999999",
              marginBottom: "14px",
            }}
          >
            INDUSTRIES WE SERVE
          </span>

          <h2 className="text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight text-[#111111] mb-5">
            Domain Expertise Across{" "}
            <span className="text-[#D62020]">
              Every Industry
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[720px] mx-auto">
            We build industry-focused web platforms, software, ERP systems and
            automation solutions designed around real business workflows,
            customers and growth.
          </p>
        </div>

        {/* Hover Reveal Cards UI */}
        <div className="flex justify-center w-full">
          <HoverRevealCards items={mappedServices} />
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareIndustriesCarousel;
