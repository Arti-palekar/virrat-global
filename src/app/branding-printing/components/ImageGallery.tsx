"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      title: "Modern Monogram Identity",
      description: "A clean, geometric monogram system designed for a luxury tech brand, focusing on simplicity and versatility.",
      deliverables: ["Custom Icon", "Monogram", "Typography", "Color Palette"]
    },
    {
      category: "Brochure Design",
      src: "/images/services/brochure.webp",
      ratio: 16 / 11,
      title: "Premium Corporate Brochure",
      description: "A high-end, editorial-style corporate brochure featuring minimalist typography, custom grids, and textured paper selection.",
      deliverables: ["Layout Design", "Custom Grids", "Print Setup", "Paper Spec Selection"]
    },
    {
      category: "Shop Signage",
      src: "/images/services/shop-signage.webp",
      ratio: 3 / 4,
      title: "Boutique Retail Signage",
      description: "Custom backlit exterior signage and indoor navigation board designed for a high-end fashion boutique.",
      deliverables: ["Backlit 3D Sign", "Facade Design", "Directional Signage", "Material Spec"]
    },
    {
      category: "ID Cards & Lanyards",
      src: "/images/services/id-cards.webp",
      ratio: 16 / 11,
      title: "Corporate Identification Kit",
      description: "Secure, clean identification cards and branded lanyards matching the new corporate visual guidelines.",
      deliverables: ["RFID Card Layout", "Custom Lanyards", "Typography System", "Templates"]
    }
  ],
  [
    {
      category: "Brand Identity",
      src: "/images/services/brand-identity.webp",
      ratio: 16 / 11,
      title: "Luxury Brand Identity",
      description: "Complete visual identity including logo system, typography, color palette, stationery and packaging.",
      deliverables: ["Logo", "Brand Guidelines", "Business Cards", "Packaging", "Print Files"]
    },
    {
      category: "Packaging Design",
      src: "/images/services/packaging.webp",
      ratio: 3 / 4,
      title: "Sustainable Cosmetics Box",
      description: "Eco-friendly packaging design for an organic skincare line, using biodegradable materials and minimal ink layouts.",
      deliverables: ["Die-cut Box Template", "Label Design", "Sustainable Ink Spec", "Production Files"]
    },
    {
      category: "Vehicle Branding",
      src: "/images/services/vehicle-branding.webp",
      ratio: 16 / 11,
      title: "Corporate Delivery Fleet Wrap",
      description: "High-impact full and partial vehicle wraps designed for corporate logistics fleets, ensuring high brand visibility on roads.",
      deliverables: ["Van Wrap Design", "Mockups", "Vector Files", "Installation Specs"]
    },
    {
      category: "Corporate Merchandise",
      src: "/images/services/corporate-merchandise.webp",
      ratio: 3 / 4,
      title: "Premium Executive Gift Set",
      description: "Curated selection of branded corporate merchandise including custom notebooks, bottles, and tech organizers.",
      deliverables: ["Merchandise Curation", "Custom Swag Designs", "Packaging Boxes", "Supplier Spec"]
    }
  ],
  [
    {
      category: "Business Cards",
      src: "/images/services/business-cards.webp",
      ratio: 3 / 4,
      title: "Luxury Business Cards",
      description: "Minimalist, heavy-cardstock business cards featuring gold foil stamp accents and letterpress finish.",
      deliverables: ["Letterpress Spec", "Foil Stamping Template", "Custom Paper Spec", "Double-sided Design"]
    },
    {
      category: "Flyer & Poster Design",
      src: "/images/services/flyer-poster.webp",
      ratio: 16 / 11,
      title: "Event Promo Poster",
      description: "Dynamic, high-contrast poster and digital flyer templates designed to drive attendance for a creative industry summit.",
      deliverables: ["Poster Design", "Social Media Flyer", "Print Ready File", "Digital Graphics"]
    },
    {
      category: "Corporate Stationery",
      src: "/images/services/corporate-stationery.webp",
      ratio: 3 / 4,
      title: "Executive Letterhead & Kit",
      description: "Cohesive executive stationery system including custom letterheads, presentation folders, and branded envelopes.",
      deliverables: ["Letterhead Template", "Envelope Layouts", "Folder Design", "Digital Assets"]
    },
    {
      category: "Billboard Design",
      src: "/images/services/billboard.webp",
      ratio: 16 / 11,
      title: "Large-Format Roadside Billboard",
      description: "Clear, high-visibility large-format outdoor advertisement featuring bold typography and strong call-to-actions.",
      deliverables: ["Billboard Artwork", "Copywriting Support", "Print Files", "Placement Specs"]
    }
  ]
];

const SERVICE_TAGS = [
  "Logo Design",
  "Brand Identity",
  "Business Cards",
  "Brochures",
  "Flyers",
  "Packaging",
  "Product Labels",
  "Catalog Design",
  "Corporate Stationery",
  "Social Media Creatives",
  "Hoardings",
  "Signage",
  "Standees",
  "Flex Printing",
  "Corporate Profiles",
  "Presentation Design"
];

// Animations
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
} as const;

const pillVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
} as const;

export function ImageGallery() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white flex flex-col items-center justify-center border-t border-gray-100 z-10 overflow-hidden">
      
      {/* Subtle Noise Paper Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Top Header Area: Left aligned, responsive and dynamic */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10 text-left">
        <motion.span 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-[12px] md:text-sm font-bold tracking-[0.35em] text-[#D62020] uppercase mb-4 block"
        >
          OUR SERVICES
        </motion.span>
        
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-[#111111] font-[900] text-[clamp(44px,6vw,72px)] tracking-tight leading-[1.05] mb-6 max-w-[600px]"
        >
          What We Create
        </motion.h2>
        
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed max-w-[620px] mb-8 font-medium"
        >
          We create memorable branding and premium print experiences that help businesses build trust, improve recognition, and leave a lasting impression across every customer touchpoint.
          <br /><br />
          From logo design and brand identity to packaging, marketing collateral, corporate stationery, and large-format printing — every project is crafted with strategy, creativity, and production excellence.
        </motion.p>
        
        {/* Pills container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-wrap gap-2.5 max-w-4xl mt-4"
        >
          {SERVICE_TAGS.map((tag, idx) => (
            <motion.span
              key={idx}
              variants={pillVariants}
              className="bg-white border border-gray-200 text-gray-800 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-sm hover:bg-[#D62020] hover:border-[#D62020] hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
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
                  title={item.title}
                  description={item.description}
                  deliverables={item.deliverables}
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
  title: string;
  description: string;
  deliverables: string[];
}

function AnimatedImage({ alt, src, ratio, category, title, description, deliverables }: AnimatedImageProps) {
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
    <div ref={ref} className="relative w-full overflow-hidden rounded-[20px] group shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500">
      <AspectRatio
        ratio={ratio}
        className="relative size-full overflow-hidden border border-gray-200/30 bg-gray-50/50 hover:cursor-pointer rounded-[20px]"
      >
        {/* Image scales to 1.05 on hover */}
        <img
          alt={alt}
          src={imgSrc}
          className="size-full rounded-[20px] object-cover filter grayscale brightness-[0.85] blur-[0.2px] group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-100 group-hover:blur-0 transition-all duration-500 ease-out"
          loading="lazy"
          onError={handleError}
        />

        {/* Dark overlay fades in on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        {/* Default label overlay: Fades out on hover */}
        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white z-10 shadow-md group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase font-heading select-none">
            {category}
          </span>
        </div>

        {/* Right-side off-canvas panel slides in (width: 320px) */}
        <div className="absolute inset-y-0 right-0 w-[320px] max-w-full bg-black/90 backdrop-blur-md text-white border-l border-white/10 p-6 flex flex-col justify-between z-20 translate-x-full group-hover:translate-x-0 transition-transform duration-[450ms] ease-out">
          <div className="flex flex-col gap-4 text-left">
            {/* Category label */}
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D62020] uppercase">
              {category}
            </span>
            
            {/* Large Title */}
            <h3 className="text-xl font-extrabold tracking-tight leading-tight text-white">
              {title}
            </h3>
            
            {/* Short Description */}
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              {description}
            </p>
            
            {/* Technologies / Deliverables */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                DELIVERABLES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-white/10 border border-white/5 text-gray-200 px-2.5 py-1 rounded-full font-semibold select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Link: View Project → with arrow transition */}
          <div className="group/btn inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#D62020] transition-colors duration-300 mt-4 select-none">
            <span>View Project</span>
            <svg
              className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}
