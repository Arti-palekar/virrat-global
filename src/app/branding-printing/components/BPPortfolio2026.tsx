"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* ─── TYPES ─────────────────────────────────────────────── */

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
}

interface CategoryGroup {
  id: string;
  label: string;
  number: string;
  projects: PortfolioProject[];
}

/* ─── PORTFOLIO DATA ─────────────────────────────────────── */

const CATEGORIES: CategoryGroup[] = [
  {
    id: "brand-identity",
    label: "Brand Identity",
    number: "01",
    projects: [
      { id: "bi-01", title: "Novara Coffee Roasters", category: "Logo Design", client: "F&B Industry", year: "2025", description: "Complete brand identity for a specialty coffee roastery — wordmark, icon, color palette, and brand guidelines book.", tags: ["Logo", "Brand Manual", "Typography"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" },
      { id: "bi-02", title: "Lumière Cosmetics", category: "Brand Identity", client: "Beauty & Wellness", year: "2025", description: "Luxury cosmetic brand identity with bespoke serif logotype, gold foil system, and premium packaging extensions.", tags: ["Brand Identity", "Luxury", "Guidelines"], image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" },
      { id: "bi-03", title: "Vertex Realty Group", category: "Corporate Branding", client: "Real Estate", year: "2024", description: "Modern real estate brand with geometric crest mark, authoritative typography, and navy-charcoal palette.", tags: ["Logo", "Stationery", "Brand System"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
      { id: "bi-04", title: "Meridian Medical Clinic", category: "Medical Branding", client: "Healthcare", year: "2024", description: "Trustworthy clinical identity — clean logotype, accessible color system, and full patient-facing print suite.", tags: ["Medical", "Logo", "Color System"], image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" }
    ]
  },
  {
    id: "packaging",
    label: "Packaging Design",
    number: "02",
    projects: [
      { id: "pk-01", title: "Aura Skincare Range", category: "Packaging Design", client: "Beauty & Wellness", year: "2025", description: "Minimal glass bottle and box packaging for a luxury skincare line — spot UV, embossed logo, matte substrate.", tags: ["Packaging", "Luxury", "Spot UV"], image: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=800&q=80" },
      { id: "pk-02", title: "Terra Organic Snacks", category: "Product Label", client: "FMCG", year: "2025", description: "Earthy, illustrated labels for a range of organic snack pouches — die-cut shapes, matte lamination, vivid inks.", tags: ["Label", "FMCG", "Illustration"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
      { id: "pk-03", title: "Velour Gift Collection", category: "Packaging Design", client: "Retail & Gifting", year: "2024", description: "Premium rigid gift box set with magnetic closure, ribbon inlay, and custom tissue paper for a fashion gifting brand.", tags: ["Rigid Box", "Gift Packaging", "Luxury"], image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&q=80" },
      { id: "pk-04", title: "Crest Coffee Pods", category: "Product Label", client: "F&B Industry", year: "2024", description: "Individual-portion coffee pod sleeve labels — 6 flavour variants with distinct color-coded band system and metallic foil.", tags: ["Label", "Variants", "Metallic Foil"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" }
    ]
  },
  {
    id: "print-collateral",
    label: "Print Collateral",
    number: "03",
    projects: [
      { id: "pc-01", title: "Oasis Hospitality Brochure", category: "Brochure Design", client: "Hospitality", year: "2025", description: "Landscape trifold brochure for a boutique resort chain — full-bleed imagery, editorial layout, premium coated stock.", tags: ["Brochure", "Hospitality", "Editorial"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" },
      { id: "pc-02", title: "Prestige Real Estate Catalogue", category: "Catalogue Design", client: "Real Estate", year: "2025", description: "40-page property catalogue with full-spread project renders, data tables, and gold-foil embossed cover.", tags: ["Catalogue", "Real Estate", "Gold Foil"], image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80" },
      { id: "pc-03", title: "Zenith Event Flyer Series", category: "Flyer Design", client: "Events", year: "2024", description: "Bold DL flyer series for a nightlife events brand — full-bleed dark imagery, neon accent type, UV spot finish.", tags: ["Flyer", "Events", "Neon Accents"], image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80" },
      { id: "pc-04", title: "Botanica Restaurant Menu", category: "Menu Design", client: "F&B Industry", year: "2024", description: "Botanical-illustrated A4 menu with linen textured paper, hand-lettered section headers, and stitched binding.", tags: ["Menu", "Restaurant", "Illustration"], image: "https://images.unsplash.com/photo-1546198632-9ef6368bef12?w=800&q=80" }
    ]
  },
  {
    id: "stationery",
    label: "Stationery Design",
    number: "04",
    projects: [
      { id: "st-01", title: "Pinnacle Law Associates", category: "Business Cards", client: "Legal", year: "2025", description: "Heavyweight 600gsm duplex cotton business cards with letterpress embossing and black-edged staining.", tags: ["Business Cards", "Letterpress", "Premium"], image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80" },
      { id: "st-02", title: "Atelier Architecture", category: "Stationery Kit", client: "Architecture & Design", year: "2025", description: "Full stationery suite — letterhead, envelope, compliment slip, folder, and business card in matte white and gold.", tags: ["Stationery", "Architecture", "Full Suite"], image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80" },
      { id: "st-03", title: "Bloom Florist Studio", category: "Business Cards", client: "Retail", year: "2024", description: "Soft-touch laminated round-corner business cards with botanical illustration inset and rose-gold foil stamp.", tags: ["Business Cards", "Rose Gold", "Soft Touch"], image: "https://images.unsplash.com/photo-1518982380512-5a3c6f1f9922?w=800&q=80" },
      { id: "st-04", title: "NovaTech Startup Kit", category: "Stationery Design", client: "Technology", year: "2024", description: "Startup brand stationery kit — notebook, pen, tote bag, and welcome card pack with matte black UV print.", tags: ["Startup Kit", "Tech", "Merchandise"], image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80" }
    ]
  },
  {
    id: "outdoor-branding",
    label: "Outdoor & Signage",
    number: "05",
    projects: [
      { id: "ob-01", title: "Horizon Auto Showroom", category: "Standee Design", client: "Automotive", year: "2025", description: "Premium X-frame and roll-up standees for an automobile showroom launch — backlit vinyl, reinforced frame.", tags: ["Standee", "Roll-Up", "Automotive"], image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
      { id: "ob-02", title: "Solaris City Mall", category: "Banner & Flex Printing", client: "Retail Mall", year: "2025", description: "Large-format flex banners and festoon lighting banners for a seasonal mall campaign — 20x8ft prints.", tags: ["Flex Banner", "Large Format", "Retail"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
      { id: "ob-03", title: "Falcon Fleet Wraps", category: "Vehicle Branding", client: "Logistics", year: "2024", description: "Full vehicle wrap design for a 12-truck logistics fleet — cast vinyl, UV-stable inks, 5-year outdoor durability.", tags: ["Vehicle Wrap", "Fleet", "Logistics"], image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80" },
      { id: "ob-04", title: "Greystone Towers Billboard", category: "Poster Design", client: "Real Estate", year: "2024", description: "Hoarding and billboard design for a luxury residential tower launch — 40x20ft full-bleed lifestyle imagery.", tags: ["Billboard", "Hoarding", "Real Estate"], image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" }
    ]
  },
  {
    id: "social-merchandise",
    label: "Social & Merchandise",
    number: "06",
    projects: [
      { id: "sm-01", title: "Pulse Fitness Brand Kit", category: "Social Media Creatives", client: "Health & Fitness", year: "2025", description: "Instagram post, reel cover, and story template set for a fitness studio — motion-ready Figma system, 12 templates.", tags: ["Social Media", "Instagram", "Templates"], image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80" },
      { id: "sm-02", title: "Summit Events Merch", category: "Merchandise Design", client: "Events", year: "2025", description: "Event merchandise package — t-shirt, cap, tote bag, lanyard, and notebook for a 2000-person corporate summit.", tags: ["Merchandise", "Event", "Corporate"], image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80" },
      { id: "sm-03", title: "Elara Fashion House", category: "Marketing Collateral", client: "Fashion", year: "2024", description: "Complete seasonal campaign collateral — lookbook, hang tags, tissue paper, ribbon, and shopping bag design.", tags: ["Lookbook", "Fashion", "Campaign"], image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80" },
      { id: "sm-04", title: "GreenLeaf FMCG Campaign", category: "Marketing Collateral", client: "FMCG", year: "2024", description: "360-degree marketing collateral for an FMCG product launch — shelf talker, wobbler, POS display, and sampling card.", tags: ["POS", "FMCG", "In-Store"], image: "https://images.unsplash.com/photo-1542838687-e86bd38a9a9e?w=800&q=80" }
    ]
  }
];

const TOTAL_PROJECTS = CATEGORIES.reduce((acc, c) => acc + c.projects.length, 0);

/* ─── PROJECT CARD ───────────────────────────────────────── */

function ProjectCard({ project, index, groupNumber }: { project: PortfolioProject; index: number; groupNumber: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative rounded-[20px] overflow-hidden bg-[#F7F7F7] border border-[#E8E8E8]"
        animate={{
          rotateX: hovered ? mousePos.y * -3 : 0,
          rotateY: hovered ? mousePos.x * 3 : 0,
          boxShadow: hovered ? "0 30px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(214,32,32,0.15)" : "0 2px 8px rgba(0,0,0,0.05)",
          y: hovered ? -6 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <motion.div className="absolute inset-0" animate={{ scale: hovered ? 1.06 : 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-700 ease-out ${hovered ? "" : "grayscale brightness-90"}`}
            />
          </motion.div>
          <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
          <motion.div className="absolute bottom-0 left-0 right-0 p-5" animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-white/80 text-xs leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-white/15 backdrop-blur-sm text-white text-[9px] font-bold tracking-wide uppercase rounded-full border border-white/20">{tag}</span>
              ))}
            </div>
          </motion.div>
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black text-[#111] tabular-nums shadow-sm">{groupNumber}.{String(index + 1).padStart(2, "0")}</span>
          </div>
          <motion.div className="absolute top-4 right-4" animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }} transition={{ duration: 0.3 }}>
            <div className="w-8 h-8 bg-[#D62020] rounded-full flex items-center justify-center shadow-md">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </motion.div>
        </div>
        <div className="p-5 bg-white">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-black tracking-[0.15em] uppercase text-[#D62020] font-mono .5 mb-6">{project.category}</p>
              <h4 className="text-[15px] font-bold text-[#111] leading-tight tracking-tight group-hover:text-[#D62020] transition-colors duration-300 truncate">{project.title}</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-[#999] font-medium">{project.client}</span>
                <span className="w-1 h-1 rounded-full bg-[#DDD]" />
                <span className="text-[10px] font-mono text-[#BBB]">{project.year}</span>
              </div>
            </div>
            <motion.div animate={{ backgroundColor: hovered ? "#D62020" : "#F3F3F3", rotate: hovered ? 45 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ stroke: hovered ? "white" : "#999" }}><path d="M2 10L10 2M10 2H4M10 2V8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── FEATURED ROW ───────────────────────────────────────── */

function FeaturedRow({ project, groupNumber, reversed }: { project: PortfolioProject; groupNumber: string; reversed: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: rowRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reversed ? "lg:grid-flow-dense" : ""}`}
    >
      <div className={`relative overflow-hidden rounded-[24px] aspect-[16/10] ${reversed ? "lg:col-start-2" : ""}`}>
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D62020] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
      <div className={`flex flex-col gap-6 ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] font-bold text-[#D62020] tracking-[0.15em] uppercase">{groupNumber}.01</span>
          <div className="h-px flex-1 bg-[#EBEBEB]" />
          <span className="font-mono text-[10px] text-[#BBB] tracking-widest">{project.year}</span>
        </div>
        <div>
          <p className="text-[9px] font-black tracking-[0.18em] uppercase text-[#D62020] font-mono mb-6">{project.category}</p>
          <h3 className="text-[28px] sm:text-[36px] font-black text-[#111] leading-[1.05] tracking-tighter mb-6">{project.title}</h3>
          <p className="text-[15px] text-[#666] leading-relaxed">{project.description}</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[11px] font-bold text-[#444] tracking-wide uppercase">{project.client}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D62020]" />
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-[#F5F5F5] text-[#555] text-[9px] font-bold tracking-[0.1em] uppercase rounded-full border border-[#EBEBEB]">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN SECTION ───────────────────────────────────────── */

export default function BPPortfolio2026() {
  const [activeCategory, setActiveCategory] = useState("brand-identity");
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});


  const updateActiveOnScroll = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight * 0.35;
    let current = CATEGORIES[0].id;
    for (const cat of CATEGORIES) {
      const el = categoryRefs.current[cat.id];
      if (el && el.offsetTop <= scrollY) current = cat.id;
    }
    setActiveCategory(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveOnScroll);
  }, [updateActiveOnScroll]);

  const scrollToCategory = (id: string) => {
    const el = categoryRefs.current[id];
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
      setActiveCategory(id);
    }
  };

  return (
    <section id="bp-portfolio-2026" aria-label="Portfolio showcase" className="relative w-full bg-white overflow-hidden py-16 md:py-24">


      {/* STICKY TAB BAR */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-[#EBEBEB] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 py-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map(group => (
              <button
                key={group.id}
                onClick={() => scrollToCategory(group.id)}
                aria-pressed={activeCategory === group.id}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-[12px] text-[11px] font-bold tracking-[0.08em] uppercase whitespace-nowrap transition-all duration-300 select-none flex-shrink-0 outline-none ${activeCategory === group.id ? "bg-[#111111] text-white shadow-lg scale-[1.03]" : "bg-white text-[#555] hover:bg-[#F5F5F5] hover:text-[#111]"}`}
              >
                <span className="font-mono text-[9px] opacity-60">{group.number}</span>
                <span>{group.label}</span>
                {activeCategory === group.id && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D62020] text-white text-[9px] font-black">{group.projects.length}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-32 relative z-10">
        {CATEGORIES.map((cat, catIdx) => (
          <div key={cat.id} id={cat.id} ref={el => { categoryRefs.current[cat.id] = el; }} className="pt-20 md:pt-28 scroll-mt-40">
            <div className="flex items-baseline justify-between mb-10 pb-5 border-b border-[#EBEBEB]">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] font-bold text-[#D62020] tracking-[0.2em] uppercase">{cat.number}</span>
                <h2 className="text-[22px] sm:text-[28px] font-black text-[#111] tracking-tight mb-5">{cat.label}</h2>
              </div>
              <span className="font-mono text-[10px] text-[#BBB] tracking-widest uppercase hidden sm:block">{String(cat.projects.length).padStart(2, "0")} Works</span>
            </div>
            <div className="mb-16 md:mb-20">
              <FeaturedRow project={cat.projects[0]} groupNumber={cat.number} reversed={catIdx % 2 !== 0} />
            </div>
            {cat.projects.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cat.projects.slice(1).map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} groupNumber={cat.number} />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 pt-12 border-t border-[#EBEBEB] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-[#BBB] mb-6">READY TO CREATE SOMETHING ICONIC?</p>
            <h3 className="text-[28px] sm:text-[36px] font-black text-[#111] tracking-tighter leading-tight">Let's build your brand.</h3>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#D62020] hover:bg-[#BF1A1A] text-white rounded-full text-[12px] font-black tracking-[0.12em] uppercase transition-all duration-300 shadow-[0_8px_24px_rgba(214,32,32,0.35)] hover:shadow-[0_12px_32px_rgba(214,32,32,0.45)] hover:-translate-y-0.5 transform">
            Get a Free Consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
