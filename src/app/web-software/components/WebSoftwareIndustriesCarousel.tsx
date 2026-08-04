"use client";

import React from "react";
import { CoverflowCarousel, CoverflowSlide } from "@/components/ui/coverflow-carousel";

const SLIDES: CoverflowSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&h=640&fit=crop&q=70&auto=format",
    alt: "Healthcare clinic tablet displaying medical application and user interface",
    title: "Healthcare & MedTech",
    subtitle: "Telemedicine & EHR Platforms",
    meta: [
      { label: "Compliance", value: "HIPAA / GDPR" },
      { label: "Focus", value: "EHR, Telemedicine, Diagnostics" },
      { label: "Technology", value: "Next.js, HL7 FHIR APIs" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=640&h=640&fit=crop&q=70&auto=format",
    alt: "Financial analyst viewing analytics dashboard on modern computer monitor",
    title: "Finance & FinTech",
    subtitle: "Secure Core Banking & Portals",
    meta: [
      { label: "Compliance", value: "PCI-DSS / SOC2" },
      { label: "Focus", value: "Payment Gateways & Ledger Engines" },
      { label: "Technology", value: "NodeJS, PostgreSQL, AWS KMS" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=640&fit=crop&q=70&auto=format",
    alt: "Laptops showing e-commerce store layout and analytical graphs",
    title: "Retail & E-Commerce",
    subtitle: "High-Volume Marketplaces",
    meta: [
      { label: "Performance", value: "Lighthouse 98+" },
      { label: "Focus", value: "POS Integration, Dynamic Pricing" },
      { label: "Technology", value: "GraphQL, Next.js ISR, Shopify headless" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&h=640&fit=crop&q=70&auto=format",
    alt: "Automated robotic arm operating in clean manufacturing facility",
    title: "Manufacturing & Logistics",
    subtitle: "IoT ERP & Supply Chain",
    meta: [
      { label: "Integrations", value: "IoT Hub, MQTT" },
      { label: "Focus", value: "Real-time dispatch, Inventory automation" },
      { label: "Technology", value: "React Native, Node, WebSockets" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&h=640&fit=crop&q=70&auto=format",
    alt: "Close up of architectural model and home keys representing PropTech",
    title: "Real Estate & PropTech",
    subtitle: "Property Management & CRM",
    meta: [
      { label: "Capability", value: "Interactive 3D tours" },
      { label: "Focus", value: "Tenant portals, Payment gateways" },
      { label: "Technology", value: "Three.js, Stripe Connect" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&h=640&fit=crop&q=70&auto=format",
    alt: "Student working on school assignment using digital tablet interface",
    title: "Education & EdTech",
    subtitle: "Scalable Learning Ecosystems",
    meta: [
      { label: "Capability", value: "10k+ concurrent streams" },
      { label: "Focus", value: "LMS Systems, Online classrooms" },
      { label: "Technology", value: "WebRTC, Redis, Next.js" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=640&fit=crop&q=70&auto=format",
    alt: "Young developers collaborating around high tech workstations",
    title: "Startups & Scaleups",
    subtitle: "MVP & SaaS Engineering",
    meta: [
      { label: "Speed to Market", value: "4-6 weeks MVP launch" },
      { label: "Focus", value: "Scalable product-led growth systems" },
      { label: "Technology", value: "Vercel, Supabase, Tailwind" },
    ],
  },
];

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
              Global Sectors
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
            We deliver tailored web applications and software solutions designed to solve regulatory, operational, and scale challenges in every major industry.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative mt-8">
          <CoverflowCarousel
            slides={SLIDES}
            showCaption
            showPagination={false}
            showNavigation={false}
            cardWidth="clamp(200px, 28vw, 300px)"
            className="py-4"
          />
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareIndustriesCarousel;
