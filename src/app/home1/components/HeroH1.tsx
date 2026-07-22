"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Activity, Globe, Compass } from "lucide-react";

export default function HeroH1() {
  return (
    <section
      id="hero"
      style={{
        background: "radial-gradient(circle at 90% 10%, #FFF5F5 0%, #FFFFFF 60%)",
        padding: "160px 24px 100px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Visual subtle accents */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,77,77,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="flex flex-col lg:grid"
      >
        {/* Left Text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFF5F5",
              border: "1px solid #F1D6D6",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                background: "#D62020",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#D62020", fontSize: "1rem", fontWeight: 400, letterSpacing: "0.02em" }}>
              ENTERPRISE B2B CREATIVE AGENCY
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontSize: "2.5rem",
              fontWeight: 400,
              color: "#1F1F1F",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              marginBottom: "20px",
            }}
          >
            Empowering Brands with{" "}
            <span style={{ color: "#D62020" }}>Strategic Design</span> & Technology.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "1rem",
              color: "#666666",
              lineHeight: 1.8,
              marginBottom: "36px",
              maxWidth: "540px",
            }}
          >
            We align high-end creativity with modern technology to build conversion-focused
            websites, packaging, branding, and performance campaigns that drive measurable growth.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="https://virratglobal.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#D62020",
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 400,
                padding: "15px 32px",
                borderRadius: "14px",
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
              Start Your Project <ArrowRight size={16} />
            </a>

            <a
              href="#services"
              style={{
                background: "#FFFFFF",
                color: "#D62020",
                border: "1.5px solid #D62020",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 400,
                padding: "15px 32px",
                borderRadius: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFF5F5";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right Illustration Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          style={{
            background: "#FFFFFF",
            border: "1px solid #F1D6D6",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 20px 48px rgba(214,32,32,0.06)",
            position: "relative",
          }}
        >
          {/* Header dots */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D62020" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF4D4D" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F1D6D6" }} />
          </div>

          {/* Modern outline graphics representation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                border: "1px solid #F1D6D6",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#FFF5F5",
              }}
            >
              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "#FFFFFF",
                    border: "1px solid #F1D6D6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Activity color="#D62020" size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "1rem", color: "#1F1F1F", fontWeight: 400 }}>Conversion Optimization</h4>
                  <p style={{ margin: 0, fontSize: "1rem", color: "#666666" }}>Performance Analytics</p>
                </div>
              </div>
              <span style={{ fontSize: "1rem", fontWeight: 400, color: "#D62020" }}>+42.5%</span>
            </div>

            {/* Simulated graph outline */}
            <div
              style={{
                border: "1px solid #F1D6D6",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "1rem", fontWeight: 400, color: "#666666", letterSpacing: "0.05em" }}>PROJECT STATUS</span>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "80px", paddingTop: "10px" }}>
                {[30, 45, 35, 60, 50, 75, 95, 80].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background: i === 6 ? "#D62020" : "#FFF5F5",
                      border: i === 6 ? "none" : "1px solid #F1D6D6",
                      height: `${h}%`,
                      borderRadius: "6px 6px 0 0",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom inline details */}
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #F1D6D6",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                  background: "#FFFFFF",
                }}
              >
                <span style={{ fontSize: "1rem", color: "#666666", display: "block" }}>Brands Launched</span>
                <span style={{ fontSize: "1rem", fontWeight: 400, color: "#D62020" }}>600+</span>
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #F1D6D6",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                  background: "#FFFFFF",
                }}
              >
                <span style={{ fontSize: "1rem", color: "#666666", display: "block" }}>Satisfaction</span>
                <span style={{ fontSize: "1rem", fontWeight: 400, color: "#D62020" }}>98%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
