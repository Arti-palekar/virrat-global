"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Sparkles, Target, Layers, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Modern Premium UI/UX",
    description: "Highly interactive layouts aligned with modern design standards to make your brand look enterprise-grade.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Speeds",
    description: "We optimize codebases using Next.js static generation to ensure immediate loading times and SEO dominance.",
  },
  {
    icon: Target,
    title: "Conversion-Focused",
    description: "Every button placement, typographic hierarchy, and visual flow is structured to guide visitors into leads.",
  },
  {
    icon: Shield,
    title: "Enterprise Reliability",
    description: "Clean codebase architectures, robust cloud deployments, and compliance standards built for scale.",
  },
  {
    icon: Layers,
    title: "Unified Creative Flow",
    description: "Branding, websites, legal licenses, and marketing strategy managed seamlessly under one expert team.",
  },
];

export default function WhyUsH1() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-85px" });

  return (
    <section
      id="features"
      ref={ref}
      style={{
        background: "#FFF5F5",
        borderTop: "1px solid #F1D6D6",
        borderBottom: "1px solid #F1D6D6",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="flex flex-col lg:grid"
        >
          {/* Left Column Text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              style={{
                color: "#D62020",
                fontSize: "1rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              CORE CAPABILITIES
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: "2.5rem",
                fontWeight: 400,
                color: "#1F1F1F",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Engineered for conversion. Built for <span style={{ color: "#D62020" }}>Scale.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              style={{
                fontSize: "1rem",
                color: "#666666",
                lineHeight: 1.8,
                marginBottom: "36px",
              }}
            >
              We don&apos;t just build generic layouts. We design strategic systems that tell your
              brand story, captivate visitors, and drive high-performance conversion funnels.
            </motion.p>

            {/* Quick stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                borderTop: "1px solid #F1D6D6",
                paddingTop: "32px",
              }}
            >
              <div>
                <span style={{ fontSize: "2.2rem", fontWeight: 400, color: "#D62020" }}>600+</span>
                <span style={{ display: "block", fontSize: "1rem", color: "#666666", marginTop: "4px" }}>
                  Brands Served Nationally
                </span>
              </div>
              <div>
                <span style={{ fontSize: "2.2rem", fontWeight: 400, color: "#D62020" }}>5+ Yrs</span>
                <span style={{ display: "block", fontSize: "1rem", color: "#666666", marginTop: "4px" }}>
                  Design & Code Authority
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column Capabilities Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: 25 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.01, borderColor: "#D62020" }}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #F1D6D6",
                    borderRadius: "16px",
                    padding: "20px 24px",
                    display: "flex",
                    gap: "18px",
                    alignItems: "flex-start",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.01)",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      background: "#FFF5F5",
                      border: "1px solid #F1D6D6",
                      borderRadius: "10px",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#D62020" />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "#1F1F1F",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#666666",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
