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
    <section className="w-full bg-white text-[#111111] py-24 border-b border-[#ECECEC] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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

          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 400,
              color: "#222222",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Domain Expertise Across{" "}
            <span style={{ fontWeight: 700 }} className="text-[#D62020]">
              Every Industry
            </span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#666666",
              marginTop: "16px",
              lineHeight: 1.6,
            }}
          >
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
