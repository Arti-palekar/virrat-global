"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Compass, Pencil, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery Audit",
    description: "Analyzing your target industry space, competitor footprints, and user friction points.",
  },
  {
    step: "02",
    icon: Compass,
    title: "Strategic Roadmap",
    description: "Developing custom brand positioning, wireframe structures, and clear ROI targets.",
  },
  {
    step: "03",
    icon: Pencil,
    title: "High-End Design",
    description: "Creating premium user interfaces, cohesive typography structures, and packaging mockups.",
  },
  {
    step: "04",
    icon: Code,
    title: "Agile Development",
    description: "Writing lightweight, highly performant Next.js structures with robust backend security.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Precision Launch",
    description: "Deploying to cloud instances with page speed optimization and strict technical SEO.",
  },
  {
    step: "06",
    icon: TrendingUp,
    title: "Scale Optimization",
    description: "Managing live A/B tests, lead flows, monthly search audits, and performance Ads.",
  },
];

export default function ProcessH1() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      style={{
        background: "#FFF5F5",
        borderTop: "1px solid #F1D6D6",
        borderBottom: "1px solid #F1D6D6",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{
              color: "#D62020",
              fontSize: "1rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            OUR METHODOLOGY
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
              marginBottom: "16px",
            }}
          >
            Our Strategic 6-Step Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "1rem",
              color: "#666666",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            A cohesive process optimized for fast, reliable project execution.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, borderColor: "#D62020", boxShadow: "0 10px 24px rgba(214,32,32,0.04)" }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #F1D6D6",
                  borderRadius: "16px",
                  padding: "32px",
                  position: "relative",
                  transition: "all 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Step indicator */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "#FFF5F5",
                      border: "1px solid #F1D6D6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={18} color="#D62020" />
                  </div>
                  <span style={{ fontSize: "1rem", fontWeight: 400, color: "#FF4D4D" }}>STEP {step.step}</span>
                </div>

                {/* Text Content */}
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#1F1F1F",
                      marginBottom: "8px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#666666",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
