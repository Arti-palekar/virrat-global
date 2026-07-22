"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PreFooterCta() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FFF5F5",
        borderTop: "1px solid #F1D6D6",
        borderBottom: "1px solid #F1D6D6",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#FFFFFF",
            border: "1px solid #F1D6D6",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#D62020", fontSize: "1rem", fontWeight: 400 }}>
            🚀 READY TO ACCELERATE GROWTH?
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: 400,
            color: "#1F1F1F",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Build Your Next Big Project with{" "}
          <span style={{ color: "#D62020" }}>Virrat Global.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          style={{
            fontSize: "1rem",
            color: "#666666",
            lineHeight: 1.8,
            maxWidth: "540px",
            margin: "0 auto 36px",
          }}
        >
          Partner with our creative and software engineering team to realize premium websites,
          branding pipelines, and digital campaigns.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://virratglobal.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#D62020",
              color: "white",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: "14px",
              fontWeight: 400,
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.25s",
              boxShadow: "0 6px 20px rgba(214,32,32,0.18)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#B71C1C";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(214,32,32,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#D62020";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(214,32,32,0.18)";
            }}
          >
            Coordinate Strategy Call <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
