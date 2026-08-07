"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight, Star, Sparkles, Smartphone, Layers, Palette, ShieldCheck, Globe, Code, Megaphone, Target, Cpu, HardDrive, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface SubItem {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
  description: string;
}

interface MenuCategory {
  title: string;
  promoText: string;
  columns: SubItem[][];
}

const brandingMega: MenuCategory = {
  title: "Branding Solutions",
  promoText: "Looking for premium corporate merchandise or high-quality printing? Explore custom gifting options.",
  columns: [
    [
      { icon: Palette, title: "Logo Design", description: "Top brand identity & guideline layouts" },
      { icon: Layers, title: "Visiting Cards", description: "Standard, classic, glossy, & spot UV cards" },
      { icon: Sparkles, title: "Bruchures & Booklets", description: "Bi-fold, tri-fold, and catalog styles" },
    ],
    [
      { icon: Smartphone, title: "Packaging Line", description: "Premium pouches, boxes, bottles, & bags" },
      { icon: Target, title: "Stationery Design", description: "Corporate notebooks, diaries, letterheads" },
      { icon: ShieldCheck, title: "ID Cards & Badges", description: "Secure PVC, RFID, and magnet badge sets" },
    ],
    [
      { icon: Star, title: "Corporate Gifting", description: "Curated premium hamper sets & custom pens" },
      { icon: Megaphone, title: "Bill Boards & Flex", description: "High-resolution outdoor banner print assets" },
      { icon: Layers, title: "Branded Apparel", description: "Custom corporate t-shirts, caps, and shirts" },
    ]
  ]
};

const digitalMega: MenuCategory = {
  title: "Digital Growth Solutions",
  promoText: "Want to launch a conversion campaign? Book a free audit session with our experts.",
  columns: [
    [
      { icon: Megaphone, title: "Meta Advertising", description: "Targeted campaigns on FB & Instagram" },
      { icon: Target, title: "Google AdWords", description: "Intent-based search & display campaigns" },
    ],
    [
      { icon: Globe, title: "Organic SEO", description: "Technical audits, keyword ranking strategy" },
      { icon: Smartphone, title: "Social Marketing", description: "Platform strategy, layout calendars, reels" },
    ],
    [
      { icon: Sparkles, title: "WhatsApp Marketing", description: "Automated broadcast alerts & bot setup" },
      { icon: Star, title: "Lead Generation", description: "Conversion-optimized acquisition funnels" },
    ]
  ]
};

const techMega: MenuCategory = {
  title: "Web & Software Architecture",
  promoText: "Powering modern enterprises with secure cloud structures and headless APIs.",
  columns: [
    [
      { icon: Code, title: "Next.js Web Apps", description: "Modern React setups built for extreme speed" },
      { icon: Globe, title: "Ecommerce Portals", description: "Shopify experts & custom API checkouts" },
    ],
    [
      { icon: Cpu, title: "AI Automation", description: "Custom LLM integrations and workflow scripts" },
      { icon: HardDrive, title: "Cloud Deployment", description: "AWS servers, cloud management & optimization" },
    ]
  ]
};

export default function NavbarH1() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
  };

  const renderMegaMenu = (menuData: MenuCategory) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1200px, 94vw)",
          background: "#FFFFFF",
          border: "1px solid #EFEFEF",
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
          padding: "36px",
          marginTop: "12px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Title category */}
        <div style={{ paddingBottom: "12px", borderBottom: "1px solid #EFEFEF" }}>
          <span style={{ fontSize: "1rem", fontWeight: 400, color: "#D62020", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {menuData.title}
          </span>
        </div>

        {/* Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${menuData.columns.length}, 1fr)`,
            gap: "24px",
          }}
        >
          {menuData.columns.map((column, colIdx) => (
            <div key={colIdx} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {column.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={itemIdx}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                      cursor: "pointer",
                      padding: "4px",
                    }}
                  >
                    {/* Circle red icon */}
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "#FFF7F7",
                        border: "1.5px solid #EFEFEF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color="#D62020" />
                    </div>

                    <div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "1rem",
                          fontWeight: 400,
                          color: "#313131",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ margin: "2px 0 0 0", fontSize: "1rem", color: "#666666", lineHeight: 1.4 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer division */}
        <div
          style={{
            borderTop: "1px solid #EFEFEF",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ margin: 0, fontSize: "12.5px", color: "#666666" }}>
            {menuData.promoText}
          </p>
          <a data-magnetic
            href="https://virratglobal.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12.5px",
              fontWeight: 400,
              color: "#D62020",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Learn more <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
    );
  };

  const renderMobileCategoryList = (menuData: MenuCategory) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px 8px", background: "#FFF7F7", borderRadius: "12px" }}>
        {menuData.columns.flat().map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1px solid #EFEFEF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={12} color="#D62020" />
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 400, color: "#313131" }}>{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <header
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#FFFFFF",
      }}
    >
      {/* ── Main Navigation Bar ── */}
      <div
        style={{
          borderBottom: "1px solid #EFEFEF",
          background: "#FFFFFF",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Logo */}
          <a data-magnetic href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image src="/logo.png" alt="Virrat Global" width={160} height={40} style={{ objectFit: "contain", height: "32px", width: "auto" }} priority />
          </a>

          {/* Navigation Links with Mega Dropdowns */}
          <nav className="hidden lg:flex" style={{ gap: "28px", alignItems: "center" }}>
            {/* Branding Dropdown */}
            <div style={{ position: "static" }}>
              <a data-magnetic
                href="/branding-printing"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#313131",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  position: "relative",
                  textDecoration: "none"
                }}
              >
                Branding & Printing
              </a>
            </div>

            {/* Digital Dropdown */}
            <div style={{ position: "static" }}>
              <button data-magnetic
                onClick={() => toggleDropdown("digital")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: activeDropdown === "digital" ? "#D62020" : "#1F2937",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  position: "relative",
                }}
              >
                Digital Marketing <ChevronDown size={14} />
                {activeDropdown === "digital" && (
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "#D62020" }} />
                )}
              </button>
              <AnimatePresence>
                {activeDropdown === "digital" && renderMegaMenu(digitalMega)}
              </AnimatePresence>
            </div>

            {/* Tech Dropdown */}
            <div style={{ position: "static" }}>
              <button data-magnetic
                onClick={() => toggleDropdown("tech")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: activeDropdown === "tech" ? "#D62020" : "#1F2937",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 0",
                  position: "relative",
                }}
              >
                Web & Software <ChevronDown size={14} />
                {activeDropdown === "tech" && (
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "#D62020" }} />
                )}
              </button>
              <AnimatePresence>
                {activeDropdown === "tech" && renderMegaMenu(techMega)}
              </AnimatePresence>
            </div>

            <a data-magnetic href="#features" style={{ fontSize: "1rem", fontWeight: 400, color: "#313131", textDecoration: "none" }}>
              Core Features
            </a>

            <a data-magnetic href="#faq" style={{ fontSize: "1rem", fontWeight: 400, color: "#313131", textDecoration: "none" }}>
              FAQs
            </a>
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex" style={{ gap: "12px", alignItems: "center" }}>
            <a data-magnetic
              href="https://virratglobal.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#FFFFFF",
                color: "#D62020",
                border: "1.5px solid #D62020",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 400,
                padding: "8px 20px",
                borderRadius: "10px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FFF7F7")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
            >
              Login
            </a>
            <a data-magnetic
              href="https://virratglobal.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-[#FFFFFF] hover:!text-[#FFFFFF] focus:!text-[#FFFFFF] active:!text-[#FFFFFF]"
              style={{
                background: "#D62020",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 400,
                padding: "9px 22px",
                borderRadius: "10px",
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(214,32,32,0.12)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#B71C1C")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#D62020")}
            >
              Start a Project
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <button data-magnetic
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#313131",
              padding: "4px",
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "#FFFFFF",
              borderBottom: "1px solid #EFEFEF",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            className="lg:hidden"
          >
            <div>
              <button data-magnetic
                onClick={() => toggleMobileDropdown("branding")}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#313131",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                }}
              >
                Branding & Printing <ChevronDown size={16} />
              </button>
              {mobileDropdownOpen === "branding" && renderMobileCategoryList(brandingMega)}
            </div>

            <div>
              <button data-magnetic
                onClick={() => toggleMobileDropdown("digital")}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#313131",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                }}
              >
                Digital Marketing <ChevronDown size={16} />
              </button>
              {mobileDropdownOpen === "digital" && renderMobileCategoryList(digitalMega)}
            </div>

            <div>
              <button data-magnetic
                onClick={() => toggleMobileDropdown("tech")}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#313131",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                }}
              >
                Web & Software <ChevronDown size={16} />
              </button>
              {mobileDropdownOpen === "tech" && renderMobileCategoryList(techMega)}
            </div>

            <a data-magnetic
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 400, color: "#313131", textDecoration: "none", padding: "8px 0" }}
            >
              Core Features
            </a>

            <a data-magnetic
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 400, color: "#313131", textDecoration: "none", padding: "8px 0" }}
            >
              FAQs
            </a>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <a data-magnetic
                href="https://virratglobal.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#FFFFFF",
                  color: "#D62020",
                  border: "1.5px solid #D62020",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: 400,
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Login
              </a>
              <a data-magnetic
                href="https://virratglobal.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-[#FFFFFF] hover:!text-[#FFFFFF] focus:!text-[#FFFFFF] active:!text-[#FFFFFF]"
                style={{
                  background: "#D62020",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: 400,
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
