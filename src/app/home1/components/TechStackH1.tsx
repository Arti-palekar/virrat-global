"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What industries does Virrat Global specialize in?",
    answer: "We support a variety of B2B and consumer sectors including Healthcare, Real Estate, Food & Beverage, Manufacturing, Fintech, and Fashion. Our team tailors branding, regulatory license checks, packaging, and digital solutions for each space.",
  },
  {
    question: "Do you build custom ecommerce and web portals?",
    answer: "Yes, we construct custom web apps, ecommerce integrations (Shopify, WooCommerce, custom headless APIs), and modern landing pages using high-speed frameworks like Next.js and React.",
  },
  {
    question: "How long does a typical corporate branding & website project take?",
    answer: "Standard brand identity projects usually complete in 2-3 weeks. Full website builds including design assets, UX research, code development, and optimization range from 4 to 6 weeks.",
  },
  {
    question: "Do you handle WhatsApp and performance marketing?",
    answer: "Absolutely. We build targeted Meta (Facebook, Instagram) and Google Ads campaigns alongside WhatsApp automation to scale client inquiries and maximize conversion ROI.",
  },
];

function FAQItem({ faq, idx }: { faq: typeof faqs[0]; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #F1D6D6",
        borderRadius: "16px",
        background: "#FFFFFF",
        padding: "24px",
        cursor: "pointer",
        transition: "border-color 0.2s ease",
      }}
      onClick={() => setOpen(!open)}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#D62020")}
      onMouseLeave={(e) => {
        if (!open) e.currentTarget.style.borderColor = "#F1D6D6";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 400, color: "#1F1F1F", letterSpacing: "-0.01em" }}>
          {faq.question}
        </h3>
        <div style={{ color: "#D62020" }}>{open ? <Minus size={18} /> : <Plus size={18} />}</div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ margin: 0, fontSize: "1rem", color: "#666666", lineHeight: 1.8 }}>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TechStackH1() {
  return (
    <section
      id="faq"
      style={{
        background: "#FFF5F5",
        borderTop: "1px solid #F1D6D6",
        borderBottom: "1px solid #F1D6D6",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="homepage-section-tag">
            QUESTIONS
          </span>
          <h2 className="homepage-section-title">
            Frequently Asked <span>Questions.</span>
          </h2>
        </div>

        {/* Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
