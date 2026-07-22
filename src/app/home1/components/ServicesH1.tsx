"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette, Globe, Layout, TrendingUp, Search, BarChart3,
  Package, ShoppingBag, Gift, Video, Share2, Shield, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Printing",
    description: "Corporate logo designs, premium stationery, brochures, flyers, banners, and signage systems.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance business sites, headless CMS architecture, ecommerce platforms, and custom web apps.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User research, wireframing, interactive prototyping, and pixel-perfect SaaS interface design.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Omni-channel marketing campaigns, performance Ads, social content creation, and search outreach.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "On-page optimization, backlink strategy, structured schema layout, and Google search audits.",
  },
  {
    icon: BarChart3,
    title: "Performance Ads",
    description: "Meta Ads, Google Adwords, retargeting funnels, and programmatic advertising campaigns.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Premium pouch, cardboard box, bottle labels, and container packaging built for premium shelf presence.",
  },
  {
    icon: ShoppingBag,
    title: "Custom Merchandise",
    description: "Branded corporate hoodies, polo shirts, client notebooks, keychains, and promotional sets.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(214,32,32,0.08)", borderColor: "#D62020" }}
      style={{
        background: "#FFFFFF",
        border: "1px solid #F1D6D6",
        borderRadius: "16px",
        padding: "28px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.01)",
      }}
    >
      {/* Icon frame */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "#FFF5F5",
          border: "1px solid #F1D6D6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="#D62020" strokeWidth={2} />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 400,
            color: "#1F1F1F",
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "1rem",
            color: "#666666",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>

      {/* CTA action link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#D62020",
          fontSize: "1rem",
          fontWeight: 400,
          marginTop: "12px",
        }}
      >
        Learn More <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

export default function ServicesH1() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      id="services"
      style={{
        background: "#FFFFFF",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            style={{
              color: "#D62020",
              fontSize: "1rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            OUR EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "2.5rem",
              fontWeight: 400,
              color: "#1F1F1F",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Conversion-Focused Business Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "1rem",
              color: "#666666",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            We build high-performance creative assets that scale businesses, establish strong
            brand footprints, and maximize client acquisition.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
