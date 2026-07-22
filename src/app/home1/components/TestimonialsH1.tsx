"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Virrat Global completely re-engineered our digital platform. Their conversion-focused UI design directly increased our lead acquisition metrics by 42% in the first quarter alone.",
    name: "Rohit Sharma",
    role: "CEO",
    company: "Empire Industries",
    initial: "R",
  },
  {
    quote:
      "Their execution speed and adherence to pixel-perfect layouts is remarkable. We scaled our digital Ads ROI by 3.5x under their search marketing supervision.",
    name: "Priya Nair",
    role: "Director of Marketing",
    company: "Saffron Developers",
    initial: "P",
  },
  {
    quote:
      "From clean packaging lines to our high-performance SaaS frontend, Virrat delivered outstanding craftsmanship. A highly reliable business partner.",
    name: "Arjun Mehta",
    role: "Founder",
    company: "Arcscape",
    initial: "A",
  },
];

export default function TestimonialsH1() {
  const [current, setCurrent] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      style={{
        background: "#FFFFFF",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Header */}
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: "52px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            style={{
              color: "#D62020",
              fontSize: "1rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            CLIENT OUTCOMES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "2.5rem",
              fontWeight: 400,
              color: "#1F1F1F",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Trusted by Leaders
          </motion.h2>
        </div>

        {/* Active Testimonial Card */}
        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              style={{
                background: "#FFF5F5",
                border: "1px solid #F1D6D6",
                borderRadius: "24px",
                padding: "48px 40px",
                boxShadow: "0 10px 32px rgba(214,32,32,0.02)",
              }}
            >
              {/* Star rating */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "24px" }}>
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="#D62020" color="#D62020" />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "1.75rem",
                  color: "#1F1F1F",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  marginBottom: "32px",
                  fontWeight: 500,
                }}
              >
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              {/* Author info */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#D62020",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 400,
                    fontSize: "1rem",
                  }}
                >
                  {testimonials[current].initial}
                </div>
                <div>
                  <div style={{ fontWeight: 400, color: "#1F1F1F", fontSize: "1rem" }}>{testimonials[current].name}</div>
                  <div style={{ color: "#666666", fontSize: "1rem", marginTop: "2px" }}>
                    {testimonials[current].role} &middot; {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation layout */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginTop: "32px",
            }}
          >
            <button
              onClick={prev}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid #F1D6D6",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#D62020",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFF5F5";
                e.currentTarget.style.borderColor = "#D62020";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#F1D6D6";
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  style={{
                    width: idx === current ? "20px" : "8px",
                    height: "8px",
                    borderRadius: "100px",
                    background: idx === current ? "#D62020" : "#F1D6D6",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid #F1D6D6",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#D62020",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFF5F5";
                e.currentTarget.style.borderColor = "#D62020";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#F1D6D6";
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
