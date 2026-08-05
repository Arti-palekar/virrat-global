"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import type { CoverflowSlide } from "@/components/ui/coverflow-carousel";

/* ─── Service data ────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: "website-dev",
    src: "/images/services/website-dev.webp",
    alt: "Website Development — premium corporate website on large monitor",
    name: "WEBSITE DEVELOPMENT",
    tagline: "Corporate • Business • Responsive",
    description: "High-performance websites built for growth.",
  },
  {
    id: "webapp-dev",
    src: "/images/services/webapp-dev.webp",
    alt: "Web Application Development — analytics dashboard on laptop",
    name: "WEB APP DEVELOPMENT",
    tagline: "Dashboards • Portals • Platforms",
    description: "Scalable web applications built around your workflow.",
  },
  {
    id: "custom-software",
    src: "/images/services/custom-software.webp",
    alt: "Custom Software Development — developer workstation with code editor",
    name: "CUSTOM SOFTWARE",
    tagline: "Business • Workflow • Operations",
    description: "Bespoke software engineered to fit your exact business logic.",
  },
  {
    id: "erp",
    src: "/images/services/erp.webp",
    alt: "ERP Solutions — unified enterprise business management dashboard",
    name: "ERP SOLUTIONS",
    tagline: "Finance • Inventory • Operations",
    description: "Connected business operations in one powerful platform.",
  },
  {
    id: "crm",
    src: "/images/services/erp_crm_mockup.png",
    alt: "CRM Solutions — sales pipeline and customer management dashboard",
    name: "CRM SOLUTIONS",
    tagline: "Leads • Sales • Customers",
    description: "Manage leads, customers and sales more efficiently.",
  },
  {
    id: "saas",
    src: "/images/services/saas_mockup.png",
    alt: "SaaS Platform Development — modern SaaS analytics dashboard on tablet",
    name: "SAAS PLATFORMS",
    tagline: "Multi-Tenant • Subscription • Cloud",
    description: "Scalable SaaS products from MVP to enterprise-grade.",
  },
  {
    id: "ecommerce",
    src: "/images/services/ecommerce_mockup.png",
    alt: "E-Commerce Development — luxury online store on laptop",
    name: "E-COMMERCE",
    tagline: "Stores • Marketplace • Payments",
    description: "Premium online stores and marketplace platforms that convert.",
  },
  {
    id: "mobile",
    src: "/images/services/mobile_mockup.png",
    alt: "Mobile App Development — premium smartphone application interface",
    name: "MOBILE APPS",
    tagline: "Flutter • Android • iOS",
    description: "Native and cross-platform mobile apps for any industry.",
  },
  {
    id: "api",
    src: "/images/services/ai_automation_mockup.png",
    alt: "API & System Integrations — connected workflow automation interface",
    name: "API & INTEGRATIONS",
    tagline: "REST API • Payments • Systems",
    description: "Seamlessly connect your platforms, payment systems and tools.",
  },
  {
    id: "cloud",
    src: "/images/services/web_app_mockup.png",
    alt: "Cloud & DevOps Solutions — infrastructure and analytics dashboard",
    name: "CLOUD & DEVOPS",
    tagline: "Deployment • CI/CD • Infrastructure",
    description: "Reliable cloud infrastructure, CI/CD pipelines and DevOps.",
  },
];

/* ─── Card overlay ────────────────────────────────────────────────────────── */

function CardOverlay({ name, tagline }: { name: string; tagline: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(to top, rgba(0,0,0,0.76) 0%, rgba(0,0,0,0.22) 42%, transparent 65%)",
        borderRadius: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "14px 16px",
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: "9.5px",
          fontWeight: 700,
          letterSpacing: "0.13em",
          color: "#ffffff",
          textTransform: "uppercase",
          lineHeight: 1,
          marginBottom: "4px",
        }}
      >
        {name}
      </span>
      <span
        style={{
          display: "block",
          fontSize: "8.5px",
          fontWeight: 400,
          letterSpacing: "0.03em",
          color: "rgba(255,255,255,0.68)",
          lineHeight: 1.4,
        }}
      >
        {tagline}
      </span>
    </div>
  );
}

/* ─── Build slides ────────────────────────────────────────────────────────── */

const SLIDES: CoverflowSlide[] = SERVICES.map((svc) => ({
  src: svc.src,
  alt: svc.alt,
  title: svc.name,
  subtitle: svc.tagline,
  overlay: <CardOverlay name={svc.name} tagline={svc.tagline} />,
}));

/* ─── Active label ────────────────────────────────────────────────────────── */

function ActiveLabel({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
        style={{ textAlign: "center" }}
      >
        <span
          style={{
            display: "block",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#d62020",
            marginBottom: "6px",
          }}
        >
          {name}
        </span>
        <span
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: 400,
            color: "#666666",
            lineHeight: 1.5,
          }}
        >
          {description}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Auto-advancing carousel ─────────────────────────────────────────────── */

function AutoCoverflowCarousel() {
  const [active, setActive] = useState(0);
  const count = SERVICES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 3500);
    return () => clearInterval(id);
  }, [count]);

  const handleSelect = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <>
      <CoverflowCarousel
        slides={SLIDES}
        showCaption={false}
        showPagination={false}
        showNavigation={false}
        cardWidth="clamp(160px, 20vw, 300px)"
        className="py-4"
        activeIndex={active}
        onSelect={handleSelect}
      />
    </>
  );
}

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

        {/* Carousel */}
        <div
          className="relative mt-8 mx-auto"
          style={{
            width: "min(96vw, 1500px)",
            paddingLeft: "clamp(40px, 6vw, 110px)",
            paddingRight: "clamp(40px, 6vw, 110px)",
          }}
        >
          <AutoCoverflowCarousel />
        </div>

      </div>
    </section>
  );
}

export default WebSoftwareIndustriesCarousel;
