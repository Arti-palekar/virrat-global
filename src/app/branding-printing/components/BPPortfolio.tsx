"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

// Types
interface Project {
  title: string;
  category: string;
  src: string;
}

interface CategoryGroup {
  id: string;
  label: string;
  emoji: string;
  projects: Project[];
}

// 6 Categories, each containing exactly 6 premium mockups
const PORTFOLIO_GROUPS: CategoryGroup[] = [
  {
    id: "brand-identity",
    label: "Brand Identity",
    emoji: "🎨",
    projects: [
      {
        title: "Logo Design",
        category: "Identity Design",
        src: "/images/services/logo-design.webp"
      },
      {
        title: "Brand Guidelines",
        category: "Brand Manual",
        src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&q=80"
      },
      {
        title: "Business Cards",
        category: "Corporate Stationery",
        src: "/images/services/business-cards.webp"
      },
      {
        title: "Stationery",
        category: "Corporate Suite",
        src: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=600&q=80"
      },
      {
        title: "Visual Identity",
        category: "Brand System",
        src: "/images/services/brand-identity.webp"
      },
      {
        title: "Brand Manual",
        category: "Identity Guidelines",
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
      }
    ]
  },
  {
    id: "packaging",
    label: "Packaging",
    emoji: "📦",
    projects: [
      {
        title: "Food Packaging",
        category: "Box & Tub Prints",
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
      },
      {
        title: "Cosmetic Packaging",
        category: "Apothecary Labelling",
        src: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&q=80"
      },
      {
        title: "Jewellery Box",
        category: "Luxury Gift Chest",
        src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80"
      },
      {
        title: "Product Box",
        category: "Folding Carton Box",
        src: "/images/services/packaging.webp"
      },
      {
        title: "Paper Bag",
        category: "Kraft Paper Carrier",
        src: "/images/services/shop-signage.webp"
      },
      {
        title: "Luxury Packaging",
        category: "Rigid Luxury Box",
        src: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&q=80"
      }
    ]
  },
  {
    id: "print-design",
    label: "Print Design",
    emoji: "🖨",
    projects: [
      {
        title: "Brochure",
        category: "Marketing Booklet",
        src: "/images/services/brochure.webp"
      },
      {
        title: "Catalogue",
        category: "Product Directory",
        src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80"
      },
      {
        title: "Flyer",
        category: "Direct Mailer",
        src: "/images/services/flyer-poster.webp"
      },
      {
        title: "Poster",
        category: "Large Format Print",
        src: "https://images.unsplash.com/photo-1561070791-26c113006238?w=600&q=80"
      },
      {
        title: "Company Profile",
        category: "Corporate Booklet",
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
      },
      {
        title: "Menu Card",
        category: "Restaurant Print",
        src: "https://images.unsplash.com/photo-1546198632-9ef6368bef12?w=600&q=80"
      }
    ]
  },
  {
    id: "corporate-branding",
    label: "Corporate Branding",
    emoji: "🏢",
    projects: [
      {
        title: "Letterhead",
        category: "Official Stationery",
        src: "/images/services/corporate-stationery.webp"
      },
      {
        title: "Envelope",
        category: "Branded Mailers",
        src: "/images/services/id-cards.webp"
      },
      {
        title: "Folder",
        category: "Document pockets",
        src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&q=80"
      },
      {
        title: "ID Card",
        category: "PVC badge sets",
        src: "/images/services/id-cards.webp"
      },
      {
        title: "Lanyard",
        category: "Branded lanyard straps",
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
      },
      {
        title: "Notebook",
        category: "Debossed notebooks",
        src: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80"
      }
    ]
  },
  {
    id: "outdoor-branding",
    label: "Outdoor Branding",
    emoji: "📢",
    projects: [
      {
        title: "Billboard",
        category: "Large format outdoor",
        src: "/images/services/billboard.webp"
      },
      {
        title: "Shop Signage",
        category: "Projecting Store sign",
        src: "/images/services/shop-signage.webp"
      },
      {
        title: "Vehicle Branding",
        category: "Custom Van Wrap",
        src: "/images/services/vehicle-branding.webp"
      },
      {
        title: "Standee",
        category: "Event roll-ups",
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
      },
      {
        title: "Wall Graphics",
        category: "Interior Vinyl Wrap",
        src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80"
      },
      {
        title: "Exhibition Stall",
        category: "Event Trade stall",
        src: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80"
      }
    ]
  },
  {
    id: "merchandise",
    label: "Merchandise",
    emoji: "🎁",
    projects: [
      {
        title: "T-shirt",
        category: "Screenprinted apparel",
        src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80"
      },
      {
        title: "Cap",
        category: "Corporate headwear",
        src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80"
      },
      {
        title: "Mug",
        category: "Ceramic drinkware",
        src: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80"
      },
      {
        title: "Corporate Gifts",
        category: "Executive Hampers",
        src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
      },
      {
        title: "Welcome Kit",
        category: "Onboarding bundle",
        src: "/images/services/corporate-merchandise.webp"
      },
      {
        title: "Promotional Merchandise",
        category: "Trade giveaways",
        src: "https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?w=600&q=80"
      }
    ]
  }
];

export default function BPPortfolio() {
  const [activeTab, setActiveTab] = useState("brand-identity");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Scroll spy to automatically track and update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = PORTFOLIO_GROUPS[0].id;
      for (const group of PORTFOLIO_GROUPS) {
        const el = sectionRefs.current[group.id];
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = group.id;
          }
        }
      }
      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = el.offsetTop - 150; // Calculate offset for sticky header
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
      setActiveTab(id);
    }
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] border-t border-gray-100/50 z-10 py-16 md:py-24">
      
      {/* Subtle Noise Paper Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Top Header Area */}
      <div className="text-center max-w-2xl px-6 mx-auto relative z-10 flex flex-col items-center mb-12">
        <span className="homepage-section-tag">
          OUR PORTFOLIO
        </span>
        <h2 className="homepage-section-title text-center mb-5">
          Explore Our<br /><span>Creative Work.</span>
        </h2>
        <p className="homepage-section-subtitle text-center max-w-xl">
          Browse our branding and printing portfolio by category and instantly jump to the relevant showcase.
        </p>
      </div>

      {/* Sticky Segmented Floating Tab Bar */}
      <div className="sticky top-[79px] w-full flex justify-center px-4 mb-20 z-40">
        <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-[18px] border border-[#EAEAEA] shadow-md max-w-4xl overflow-x-auto scrollbar-none w-full sm:w-auto flex-nowrap scroll-smooth">
          {PORTFOLIO_GROUPS.map((group) => {
            const isActive = activeTab === group.id;
            return (
              <button
                key={group.id}
                onClick={() => handleTabClick(group.id)}
                className={cn(
                  "px-5 py-2.5 rounded-[14px] text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap select-none flex-shrink-0 flex items-center gap-2",
                  isActive
                    ? "bg-[#D62020] text-white shadow-sm scale-105"
                    : "text-[#111111] bg-white hover:bg-gray-100/50"
                )}
              >
                <span>{group.emoji}</span>
                <span>{group.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Categories Grid Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-28 md:gap-36">
          {PORTFOLIO_GROUPS.map((group) => (
            <div
              key={group.id}
              id={group.id}
              ref={(el) => {
                sectionRefs.current[group.id] = el;
              }}
              className="scroll-mt-44"
            >
              {/* Category Anchor Label */}
              <div className="mb-10 border-b border-[#EEEEEE] pb-4 flex items-baseline justify-between">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] font-heading uppercase flex items-center gap-2.5">
                  <span className="text-lg">{group.emoji}</span>
                  <span>{group.label}</span>
                </h3>
                <span className="text-xs font-mono text-[#D62020] font-bold">
                  (06 PROJECTS)
                </span>
              </div>

              {/* Projects Grid (Desktop 3cols, Tablet 2cols, Mobile 1col) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.projects.map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Interactive Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-[24px] overflow-hidden border border-[#EEEEEE] shadow-sm hover:shadow-[0_20px_45px_rgba(214,32,32,0.12)] hover:border-[#D62020]/25 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:scale-[1.05] cursor-pointer"
    >
      {/* Image Container with aspect ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50/50 rounded-t-[24px]">
        
        {/* Grayscale image with hover full-color scaling */}
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover filter grayscale brightness-[0.85] blur-[0.2px] group-hover:grayscale-0 group-hover:brightness-100 group-hover:blur-0 group-hover:scale-104 transition-all duration-700 ease-out pointer-events-none"
        />

        {/* Shine Sweep glare hover effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[#D62020]/0 group-hover:bg-[#D62020]/3 transition-colors duration-500 pointer-events-none z-10" />

      </div>

      {/* Info details panel - permanently visible project title at the bottom */}
      <div className="p-6 flex flex-col justify-center items-start bg-white border-t border-[#EEEEEE]/30">
        <span className="text-[9px] font-bold tracking-[0.2em] text-[#D62020] uppercase font-mono mb-2">
          {project.category}
        </span>
        <h4 className="text-base sm:text-lg font-bold text-[#111111] font-heading tracking-tight leading-tight group-hover:text-[#D62020] transition-colors duration-300">
          {project.title}
        </h4>
      </div>
    </motion.div>
  );
}
