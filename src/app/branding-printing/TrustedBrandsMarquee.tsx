"use client";

import React from "react";

const brands = [
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Adobe", url: "https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg" },
  { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Tata", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
];

export default function TrustedBrandsMarquee() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "none",
        borderBottom: "1px solid #EFEFEF",
        padding: "16px 24px 24px 24px",
        overflow: "hidden",
      }}
    >
      <div 
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 min-h-[60px]"
      >
        
        {/* Title */}
        <div className="flex-shrink-0 text-center md:text-left">
          <p style={{ 
            fontSize: "0.75rem", 
            fontWeight: 600, 
            color: "#888888", 
            textTransform: "uppercase", 
            letterSpacing: "0.05em",
            lineHeight: "1.5"
          }}>
            Trusted by companies<br className="hidden md:block" /> of all sizes
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative flex overflow-hidden group flex-1 w-full"
          style={{ 
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
          }}
        >
          {/* Moving Wrapper */}
          <div 
            className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] items-center"
          >
            {/* We duplicate the logo list 4 times to ensure seamless infinite scroll. */}
            {[0, 1, 2, 3].map((groupIndex) => (
              <div 
                key={groupIndex}
                className="flex items-center gap-12 pr-12"
                aria-hidden={groupIndex !== 0}
              >
                {brands.map((brand, idx) => (
                  <img
                    key={`logo-${groupIndex}-${idx}`}
                    src={brand.url}
                    alt={brand.name}
                    className="h-[36px] md:h-[40px] w-auto object-contain transition-all duration-300 flex-shrink-0 hover:scale-105 hover:drop-shadow-md"
                    style={{ minWidth: "120px", maxWidth: "160px" }}
                    onError={(e) => {
                      e.currentTarget.src = "https://logo.clearbit.com/" + brand.name.toLowerCase() + ".com";
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
