"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

// Defines the masonry structure: columns with either 1 tall card or 2 short cards
const columnsData = [
  {
    id: "col-1",
    type: "tall",
    width: 266,
    items: [
      { id: "c1", title: "Logo Design", desc: "Complete visual identity", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    id: "col-2",
    type: "split",
    width: 224,
    items: [
      { id: "c2", title: "Visiting Cards", desc: "Premium custom cards", img: "https://images.unsplash.com/photo-1616781296181-4247509d73d2?auto=format&fit=crop&w=400&q=80" },
      { id: "c3", title: "Brochure Design", desc: "Corporate multi-page designs", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80" },
    ],
  },
  {
    id: "col-3",
    type: "tall",
    width: 308,
    items: [
      { id: "c4", title: "Flyers & Pamphlets", desc: "High-impact marketing", img: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    id: "col-4",
    type: "split",
    width: 238,
    items: [
      { id: "c5", title: "Packaging Design", desc: "Custom box layouts", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80" },
      { id: "c6", title: "Billboard Printing", desc: "Large-format advertising", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" },
    ],
  },
  {
    id: "col-5",
    type: "tall",
    width: 266,
    items: [
      { id: "c7", title: "Standee & Flex", desc: "Portable event displays", img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    id: "col-6",
    type: "split",
    width: 224,
    items: [
      { id: "c8", title: "ID Cards", desc: "Professional access cards", img: "https://images.unsplash.com/photo-1579389082947-e54d8e911928?auto=format&fit=crop&w=400&q=80" },
      { id: "c9", title: "Badges", desc: "Custom pin badges", img: "https://images.unsplash.com/photo-1618513847270-1c05d7616c68?auto=format&fit=crop&w=400&q=80" },
    ],
  },
];

function Card({ item, height }: { item: any; height: string | number }) {
  return (
    <div
      className="group relative rounded-[24px] overflow-hidden bg-[#FFF7F7] cursor-grab active:cursor-grabbing w-full"
      style={{ height }}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-105"
        draggable="false" // Prevent native image dragging
      />
      {/* Default Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-[450ms] group-hover:opacity-100" />
      
      {/* Content */}
      <div className="absolute bottom-5 right-6 md:bottom-6 md:right-6 text-right transition-transform duration-[450ms] ease-out group-hover:-translate-y-2">
        <h3
          className="text-white font-syne font-semibold whitespace-nowrap"
          style={{
            fontSize: "1rem",
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
            textShadow: "0px 2px 4px rgba(0,0,0,0.5)", // Extra readability
          }}
        >
          {item.title}
        </h3>
        {item.desc && (
          <p 
            className="text-white/80 font-syne text-[0.8rem] whitespace-nowrap mt-0.5"
            style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}
          >
            {item.desc}
          </p>
        )}
      </div>
    </div>
  );
}

export default function FeaturesSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Height configurations
  const TALL_HEIGHT = 420;
  const GAP = 16;
  const SHORT_HEIGHT = (TALL_HEIGHT - GAP) / 2; // 202px

  // Multiply columns to guarantee seamless infinite scrolling
  const duplicatedColumns = [...columnsData, ...columnsData, ...columnsData];

  useEffect(() => {
    // Calculate total width of a single set
    let singleSetWidth = 0;
    columnsData.forEach((col) => {
      singleSetWidth += col.width + GAP;
    });

    const animateSlider = async () => {
      if (isHovered) {
        controls.stop();
        return;
      }

      // Smooth infinite loop trick
      const currentX = x.get();
      // If we've scrolled past one full set, silently snap back by one set width
      if (currentX <= -singleSetWidth) {
        x.set(currentX + singleSetWidth);
      } else if (currentX > 0) {
        // If dragged right past the start, wrap backwards
        x.set(currentX - singleSetWidth);
      }

      // Time remaining for animation depends on current position
      const distanceToNextLoop = singleSetWidth + (x.get() % singleSetWidth);
      const speed = 50; // pixels per second
      const duration = distanceToNextLoop / speed;

      await controls.start({
        x: x.get() - distanceToNextLoop,
        transition: {
          duration,
          ease: "linear",
        },
      });

      // Loop animation
      x.set(0);
      animateSlider();
    };

    animateSlider();

    return () => controls.stop();
  }, [isHovered, controls, x]);

  return (
    <section className="w-full bg-white py-16 overflow-hidden relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Responsive adjustments: scale the overall track down on mobile/tablet if needed, 
          but horizontal drag works fine with fixed sizes too. 
          We'll keep fixed pixel widths for cards to maintain the premium masonry feel, 
          and let the container just scroll infinitely. */}
      
      <div className="w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex"
          style={{ gap: `${GAP}px`, x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }} // Allow infinite drag, we handle wrapping manually
          dragElastic={0}
          dragMomentum={true}
          onDragStart={() => setIsHovered(true)}
          onDragEnd={() => setIsHovered(false)}
        >
          {duplicatedColumns.map((col, idx) => (
            <div
              key={`${col.id}-${idx}`}
              className="flex flex-col shrink-0"
              style={{ width: col.width, gap: `${GAP}px` }}
            >
              {col.type === "tall" ? (
                <Card item={col.items[0]} height={TALL_HEIGHT} />
              ) : (
                <>
                  <Card item={col.items[0]} height={SHORT_HEIGHT} />
                  <Card item={col.items[1]} height={SHORT_HEIGHT} />
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
