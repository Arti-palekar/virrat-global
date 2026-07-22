"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

// Custom light-weight AspectRatio component to prevent dependency issues
interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        style={{ paddingBottom: `${100 / ratio}%` }}
        {...props}
      >
        <div className="absolute inset-0 w-full h-full">
          {children}
        </div>
      </div>
    );
  }
);
AspectRatio.displayName = "AspectRatio";

// Statically compiled columns of the 12 core Branding & Printing services to prevent hydration mismatch
const GALLERY_COLUMNS = [
  [
    {
      category: "Logo Design",
      src: "/images/services/logo-design.webp",
      ratio: 3 / 4,
    },
    {
      category: "Brochure Design",
      src: "/images/services/brochure.webp",
      ratio: 16 / 11,
    },
    {
      category: "Shop Signage",
      src: "/images/services/shop-signage.webp",
      ratio: 3 / 4,
    },
    {
      category: "ID Cards & Lanyards",
      src: "/images/services/id-cards.webp",
      ratio: 16 / 11,
    }
  ],
  [
    {
      category: "Brand Identity",
      src: "/images/services/brand-identity.webp",
      ratio: 16 / 11,
    },
    {
      category: "Packaging Design",
      src: "/images/services/packaging.webp",
      ratio: 3 / 4,
    },
    {
      category: "Vehicle Branding",
      src: "/images/services/vehicle-branding.webp",
      ratio: 16 / 11,
    },
    {
      category: "Corporate Merchandise",
      src: "/images/services/corporate-merchandise.webp",
      ratio: 3 / 4,
    }
  ],
  [
    {
      category: "Business Cards",
      src: "/images/services/business-cards.webp",
      ratio: 3 / 4,
    },
    {
      category: "Flyer & Poster Design",
      src: "/images/services/flyer-poster.webp",
      ratio: 16 / 11,
    },
    {
      category: "Corporate Stationery",
      src: "/images/services/corporate-stationery.webp",
      ratio: 3 / 4,
    },
    {
      category: "Billboard Design",
      src: "/images/services/billboard.webp",
      ratio: 16 / 11,
    }
  ]
];

export function ImageGallery() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white flex flex-col items-center justify-center border-t border-gray-100 z-10">
      
      {/* Subtle Noise Paper Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Top Header Area */}
      <div className="text-center mb-16 md:mb-24 max-w-2xl px-6 relative z-10 flex flex-col items-center">
        <span className="homepage-section-tag">
          OUR SERVICES
        </span>
        <h2 className="homepage-section-title text-center">
          Complete Branding &<br /><span>Printing Solutions.</span>
        </h2>
        <p className="homepage-section-subtitle text-center max-w-xl">
          Professional branding and premium print solutions designed to elevate your business identity.
        </p>
      </div>

      {/* 3-Column Masonry Grid */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {GALLERY_COLUMNS.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {column.map((item, index) => (
                <AnimatedImage
                  key={`${colIndex}-${index}`}
                  alt={item.category}
                  src={item.src}
                  ratio={item.ratio}
                  category={item.category}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  ratio: number;
  category: string;
}

function AnimatedImage({ alt, src, ratio, category }: AnimatedImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = React.useState(src);

  // Fallback placeholder
  const placeholder = `https://placehold.co/800x1200/FFFFFF/111111?text=${encodeURIComponent(category)}`;

  const handleError = () => {
    setImgSrc(placeholder);
  };

  // Sync state if src changes
  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden rounded-[20px] group">
      <AspectRatio
        ratio={ratio}
        className="relative size-full overflow-hidden border border-gray-200/30 bg-gray-50/50 shadow-sm transition-all duration-500 ease-out hover:scale-[1.05] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(214,32,32,0.14)] hover:border-[#d62020]/25 hover:cursor-pointer rounded-[20px]"
      >
        {/* Grayscale by default, full color on hover with smooth 500ms transition */}
        <img
          alt={alt}
          src={imgSrc}
          className="size-full rounded-[20px] object-cover filter grayscale brightness-[0.85] blur-[0.2px] group-hover:grayscale-0 group-hover:brightness-100 group-hover:blur-0 transition-all duration-500 ease-out"
          loading="lazy"
          onError={handleError}
        />

        {/* Subtle overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-750 pointer-events-none z-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[#d62020]/0 group-hover:bg-[#d62020]/3 transition-colors duration-500 pointer-events-none z-10" />

        {/* Text Overlay: Always visible, bottom-left corner with dark glassmorphic backing */}
        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white z-20 shadow-md">
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase font-heading select-none">
            {category}
          </span>
        </div>
      </AspectRatio>
    </div>
  );
}
