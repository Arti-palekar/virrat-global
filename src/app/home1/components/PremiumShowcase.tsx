"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const services: ServiceItem[] = [
  { 
    id: "01", 
    category: "Branding", 
    title: "Logo Design", 
    description: "Create memorable brand identities that leave lasting impressions.", 
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "02", 
    category: "Branding", 
    title: "Brand Identity", 
    description: "Complete visual branding systems for modern businesses.", 
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "03", 
    category: "Printing", 
    title: "Business Cards", 
    description: "Premium business cards with luxury finishes.", 
    imageUrl: "https://images.unsplash.com/photo-1616781296181-4247509d73d2?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "04", 
    category: "Design", 
    title: "Brochure Design", 
    description: "Professional company profile and brochure designs.", 
    imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "05", 
    category: "Printing", 
    title: "Flyers & Pamphlets", 
    description: "Creative promotional print materials.", 
    imageUrl: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "06", 
    category: "Design", 
    title: "Packaging Design", 
    description: "Modern packaging that attracts customers instantly.", 
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "07", 
    category: "Design", 
    title: "Billboard Design", 
    description: "Large-format advertising with maximum visibility.", 
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "08", 
    category: "Printing", 
    title: "Standee & Flex", 
    description: "High-quality event branding and promotional displays.", 
    imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "09", 
    category: "Branding", 
    title: "Corporate Stationery", 
    description: "Letterheads, envelopes, folders and office branding.", 
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "10", 
    category: "Printing", 
    title: "Corporate Gifts", 
    description: "Customized promotional gifts for businesses.", 
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "11", 
    category: "Branding", 
    title: "Uniform Branding", 
    description: "Branded uniforms for professional teams.", 
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "12", 
    category: "Printing", 
    title: "ID Cards & Badges", 
    description: "Professional employee identity solutions.", 
    imageUrl: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=600&q=80" 
  },
];

function Card({ item, isHovered, onHover, onLeave }: { item: ServiceItem; isHovered: boolean; onHover: () => void; onLeave: () => void }) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        width: "100%",
        height: "320px", // Strict fixed card height (no layout shift)
        borderRadius: "20px",
        background: "#FFFFFF",
        border: "1px solid #EFEFEF",
        position: "relative",
        overflow: "hidden",
        boxShadow: isHovered ? "0 20px 40px rgba(214,32,32,0.1)" : "0 4px 12px rgba(0,0,0,0.01)",
        cursor: "pointer",
        transition: "box-shadow 0.45s cubic-bezier(0.25, 0.8, 0.25, 1)",
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          zIndex: 10,
          background: "#D62020",
          color: "#FFFFFF",
          fontSize: "1rem", fontWeight: 400,
          textTransform: "uppercase",
          padding: "3px 8px",
          borderRadius: "100px",
        }}
      >
        {item.category}
      </div>

      {/* Image (Visible ~60% of total height) */}
      <div
        style={{
          width: "100%",
          height: "190px",
          position: "relative",
          overflow: "hidden",
          background: "#FFF7F7",
        }}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Content Area */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#FFFFFF",
          padding: "16px 20px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          borderTop: "1px solid #EFEFEF",
          zIndex: 5,
        }}
        animate={{
          y: isHovered ? 0 : 48, // Slide up slightly on hover to reveal button
        }}
        transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.75rem", fontWeight: 400,
            color: "#313131",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            color: "#666666",
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "44px", // Ensures consistent height for 2 lines
          }}
        >
          {item.description}
        </p>

        {/* CTA Reveal on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            marginTop: "8px", 
          }}
        >
          <a
            href="https://virratglobal.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#D62020",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "1rem", fontWeight: 400,
              padding: "6px 14px",
              borderRadius: "6px",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              width: "fit-content",
            }}
          >
            Explore <ArrowRight size={10} />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function PremiumShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  // Hook to handle responsive breakpoints dynamically
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1440) setVisibleCount(4);
      else if (w >= 1200) setVisibleCount(3);
      else if (w >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    
    // Calculate card width dynamically including gap spacing
    const containerWidth = scrollRef.current.clientWidth;
    const gap = 24;
    const cardWidth = (containerWidth - (visibleCount - 1) * gap) / visibleCount;
    const scrollStep = cardWidth + gap;

    // Scroll exactly one card at a time (as requested in specifications)
    const amount = direction === "left" ? -scrollStep : scrollStep;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="font-syne" style={{
        background: "#FFFFFF",
        padding: "80px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header with Navigation Arrows */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "40px",
          }}
          className="flex flex-col md:flex-row md:items-end gap-6"
        >
            <h2 className="homepage-section-title">
              Creative.<br />
              <span>Branding & Printing Services.</span>
            </h2>
            <p className="homepage-section-subtitle max-w-[500px]">
              High-impact visual identity, luxury print collateral, packaging, and brand ecosystems engineered to make your business unforgettable.
            </p>

          {/* Navigation Arrows */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => handleScroll("left")}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid #EFEFEF",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#D62020",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#D62020")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#EFEFEF")}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid #EFEFEF",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#D62020",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#D62020")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#EFEFEF")}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div
          ref={scrollRef}
          style={{
            overflowX: "auto",
            padding: "10px 0 30px",
            scrollSnapType: "x mandatory",
            display: "flex",
            width: "100%",
            gap: "24px",
            scrollbarWidth: "none",
          }}
          className="no-scrollbar"
        >
          {services.map((item, idx) => {
            // Calculate responsive width classes cleanly matching requirements
            let widthClass = "w-full"; // mobile (<768px): 1 card
            if (visibleCount === 2) widthClass = "w-[calc(50%-12px)]"; // tablet (768px-1199px): 2 cards
            else if (visibleCount === 3) widthClass = "w-[calc(33.333%-16px)]"; // laptop (1200px-1439px): 3 cards
            else if (visibleCount === 4) widthClass = "w-[calc(25%-18px)]"; // desktop (1440px+): 4 cards

            return (
              <div
                key={idx}
                style={{
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                }}
                className={widthClass}
              >
                <Card
                  item={item}
                  isHovered={hoveredIdx === idx}
                  onHover={() => setHoveredIdx(idx)}
                  onLeave={() => setHoveredIdx(null)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
