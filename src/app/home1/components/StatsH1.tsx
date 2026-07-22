"use client";

import { motion } from "framer-motion";

export default function StatsH1() {
  const brands = [
    "Google Ads Partner",
    "Meta Marketing Partner",
    "Figma Enterprise Partner",
    "Shopify Expert Partner",
    "AWS Certified",
    "ISO 9001 Certified",
  ];

  return (
    <section
      id="trusted-by"
      style={{
        background: "#FFF5F5",
        borderTop: "1px solid #F1D6D6",
        borderBottom: "1px solid #F1D6D6",
        padding: "40px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            color: "#666666",
            fontSize: "1rem",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "24px",
          }}
        >
          TRUSTED BY LEADING ENTERPRISES & 600+ BRANDS
        </p>

        {/* Scrolling Partner Logos ticker */}
        <style>{`
          @keyframes smooth-marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
        `}</style>
        <div
          style={{
            overflow: "hidden",
            maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
            style={{
              display: "flex",
              width: "max-content",
              animation: "smooth-marquee 30s linear infinite",
              willChange: "transform",
            }}
          >
            {/* Set 1 */}
            <div style={{ display: "flex", gap: "48px", paddingRight: "48px" }}>
              {brands.map((brand, idx) => (
                <div
                  key={`set1-${idx}`}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#D62020",
                    opacity: 0.7,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>✦</span>
                  {brand}
                </div>
              ))}
            </div>
            {/* Set 2 (Duplicate for seamless loop) */}
            <div aria-hidden="true" style={{ display: "flex", gap: "48px", paddingRight: "48px" }}>
              {brands.map((brand, idx) => (
                <div
                  key={`set2-${idx}`}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#D62020",
                    opacity: 0.7,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>✦</span>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
