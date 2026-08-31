"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone, Calendar } from "lucide-react";

export default function CtaH1() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      style={{
        background: "#FFFFFF",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="flex flex-col lg:grid"
        >
          {/* Left Column Information */}
          <div>
            <span className="homepage-section-tag">
              GET IN TOUCH
            </span>

            <h2 className="homepage-section-title mb-5">
              Let&apos;s build something <span>amazing.</span>
            </h2>

            <p className="homepage-section-subtitle">
              Ready to transform your business? Get in touch with our team to discuss your project, request a quote, or explore how we can help you achieve your goals.
            </p>

            {/* Direct details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
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
                  }}
                >
                  <Mail size={20} color="#D62020" />
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#666666", display: "block", fontWeight: 400 }}>EMAIL US</span>
                  <a href="mailto:info@virratglobal.com" style={{ fontSize: "1rem", fontWeight: 400, color: "#1F1F1F", textDecoration: "none" }}>
                    info@virratglobal.com
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
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
                  }}
                >
                  <Phone size={20} color="#D62020" />
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#666666", display: "block", fontWeight: 400 }}>CALL OR WHATSAPP</span>
                  <a href="tel:+91" style={{ fontSize: "1rem", fontWeight: 400, color: "#1F1F1F", textDecoration: "none" }}>
                    +91 (Direct Inquiry)
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
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
                  }}
                >
                  <MapPin size={20} color="#D62020" />
                </div>
                <div>
                  <span style={{ fontSize: "1rem", color: "#666666", display: "block", fontWeight: 400 }}>OFFICE LOCATION</span>
                  <span style={{ fontSize: "1rem", fontWeight: 400, color: "#1F1F1F" }}>
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div
            style={{
              background: "#FFF5F5",
              border: "1px solid #F1D6D6",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            <h3 style={{ fontSize: "1.75rem", fontWeight: 400, color: "#1F1F1F", marginBottom: "24px", letterSpacing: "-0.02em" }}>
              Request a Strategy Call
            </h3>

            {submitted ? (
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid #D62020",
                  color: "#D62020",
                  padding: "20px",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                ✓ Message received! We will coordinate shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label htmlFor="form-name" style={{ display: "block", fontSize: "1rem", fontWeight: 400, color: "#1F1F1F", marginBottom: "6px" }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "1px solid #F1D6D6",
                      background: "#FFFFFF",
                      fontSize: "1rem",
                      color: "#1F1F1F",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="form-email" style={{ display: "block", fontSize: "1rem", fontWeight: 400, color: "#1F1F1F", marginBottom: "6px" }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "1px solid #F1D6D6",
                      background: "#FFFFFF",
                      fontSize: "1rem",
                      color: "#1F1F1F",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="form-msg" style={{ display: "block", fontSize: "1rem", fontWeight: 400, color: "#1F1F1F", marginBottom: "6px" }}>
                    TELL US ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    id="form-msg"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "1px solid #F1D6D6",
                      background: "#FFFFFF",
                      fontSize: "1rem",
                      color: "#1F1F1F",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#D62020",
                    color: "white",
                    border: "none",
                    padding: "14px",
                    borderRadius: "12px",
                    fontWeight: 400,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.2s",
                    marginTop: "8px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#B71C1C")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#D62020")}
                >
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
