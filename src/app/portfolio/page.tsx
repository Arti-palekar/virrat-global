'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Grid2X2, X, ExternalLink, ArrowUpRight } from 'lucide-react';
import { HoverGradientNavBar } from '@/components/HoverGradientNavBar';
import CinematicFooter from '@/components/CinematicFooter';
import { PortfolioHero } from '@/components/PortfolioHero';

// ----------------------------------------------------------------------
// Mock Data for Portfolio Projects Grouped by Service
// ----------------------------------------------------------------------

const servicesData = [
  {
    title: "Branding + Printing",
    slug: "branding-printing",
    href: "/branding-printing",
    description: "Brand identities, marketing collateral and print experiences.",
    projects: [
      { id: "b1", title: "Zenith Corporate", category: "Branding", image: "/images/portfolio/logo.png", description: "Complete visual identity overhaul.", services: ["Logo Design"], technologies: ["Figma"], url: "" },
      { id: "b2", title: "Brand Identity", category: "Branding", image: "/images/portfolio/business_cards.png", description: "Business cards and stationery.", services: ["Print Design"], technologies: ["Illustrator"], url: "" },
      { id: "b3", title: "Editorial Design", category: "Branding", image: "/images/portfolio/editorial_brochure.png", description: "Premium editorial brochure design.", services: ["Editorial Design"], technologies: ["InDesign"], url: "" },
      { id: "b4", title: "Corporate Brochure", category: "Branding", image: "/images/portfolio/brochure.png", description: "B2B corporate brochure design.", services: ["Print Design"], technologies: ["Illustrator"], url: "" }
    ]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    href: "/digital-marketing",
    description: "Data-driven performance marketing and social media campaigns.",
    projects: [
      { id: "dm1", title: "Social Campaign", category: "Marketing", image: "/images/portfolio/portfolio_social_media.png", description: "Instagram and LinkedIn campaigns.", services: ["Social Media"], technologies: ["Meta Ads"], url: "" },
      { id: "dm2", title: "OOH Advertising", category: "Marketing", image: "/images/portfolio/billboard.png", description: "Billboard and outdoor campaign.", services: ["OOH"], technologies: ["Photoshop"], url: "" },
      { id: "dm3", title: "Event Standee", category: "Marketing", image: "/images/portfolio/standee.png", description: "Trade show standee design.", services: ["Event Marketing"], technologies: ["Illustrator"], url: "" },
      { id: "dm4", title: "Corporate Standee", category: "Marketing", image: "/images/portfolio/portfolio_standee.png", description: "Corporate promotional standees.", services: ["Event Marketing"], technologies: ["Illustrator"], url: "" }
    ]
  },
  {
    title: "Packaging Design",
    slug: "packaging-design",
    href: "/services/packaging-design",
    description: "Premium packaging design and visual identity for products.",
    projects: [
      { id: "p1", title: "Product Packaging", category: "Packaging", image: "/images/portfolio/packaging.png", description: "FMCG product packaging.", services: ["Packaging Design"], technologies: ["Illustrator"], url: "" },
      { id: "p2", title: "Box Design", category: "Packaging", image: "/images/portfolio/packaging_box.png", description: "Corrugated box structural design.", services: ["Structural Design"], technologies: ["AutoCAD"], url: "" },
      { id: "p3", title: "Aura Botanica", category: "Packaging", image: "/portfolio/graphic_portfolio_1785996589317.png", description: "Luxury skincare packaging.", services: ["Packaging Design"], technologies: ["Cinema 4D"], url: "" },
      { id: "p4", title: "Premium Retail", category: "Packaging", image: "/portfolio/branding_portfolio_1785996535101.png", description: "Retail brand packaging solutions.", services: ["Retail Design"], technologies: ["Figma"], url: "" }
    ]
  },
  {
    title: "Web + Software",
    slug: "web-software",
    href: "/web-software",
    description: "Selected websites, web applications, and digital experiences.",
    projects: [
      { id: "ws1", title: "Corporate Portal", category: "Web + Software", image: "/portfolio/web_corporate_1785998922454.png", description: "B2B corporate website development.", services: ["Web Development"], technologies: ["Next.js"], url: "" },
      { id: "ws2", title: "Business Website", category: "Web + Software", image: "/portfolio/web_business_1785998932231.png", description: "Professional business consulting site.", services: ["Web Design"], technologies: ["React"], url: "" },
      { id: "ws3", title: "Tech Startup", category: "Web + Software", image: "/portfolio/web_startup_1785998942843.png", description: "Modern SaaS startup landing page.", services: ["Landing Page"], technologies: ["TailwindCSS"], url: "" },
      { id: "ws4", title: "Navi Arthkranti", category: "Web + Software", image: "/portfolio/web_dev_portfolio_1785996523746.png", description: "Digital transformation for fintech.", services: ["Web App"], technologies: ["Node.js"], url: "" }
    ]
  },
  {
    title: "AI + Automation",
    slug: "ai-automation",
    href: "/ai-automation",
    description: "Intelligent automation workflows and AI-driven dashboards.",
    projects: [
      { id: "ai1", title: "AI Dashboard", category: "AI + Automation", image: "/portfolio/ai_dashboard_1785998954435.png", description: "Analytics dashboard with AI insights.", services: ["AI Integration"], technologies: ["Python"], url: "" },
      { id: "ai2", title: "Logic Builder", category: "AI + Automation", image: "/portfolio/ai_robotics_1785998975398.png", description: "Visual logic builder for automation.", services: ["Workflow Automation"], technologies: ["React Flow"], url: "" },
      { id: "ai3", title: "Workflow UI", category: "AI + Automation", image: "/images/workflow/workflow-uiux.webp", description: "User interface for automated systems.", services: ["UI/UX Design"], technologies: ["Figma"], url: "" },
      { id: "ai4", title: "Development Tools", category: "AI + Automation", image: "/images/workflow/workflow-development.webp", description: "Custom developer tooling integrations.", services: ["Custom Software"], technologies: ["Go"], url: "" }
    ]
  },
  {
    title: "Compliance",
    slug: "compliance",
    href: "/compliance",
    description: "Secure, trustworthy compliance and audit management systems.",
    projects: [
      { id: "c1", title: "Audit Portal", category: "Compliance", image: "/portfolio/custom_dev_portfolio_1785996602151.png", description: "Enterprise audit management portal.", services: ["Security App"], technologies: ["Next.js"], url: "" },
      { id: "c2", title: "Security Dashboard", category: "Compliance", image: "/portfolio/wordpress_portfolio_1785996567005.png", description: "Real-time security monitoring.", services: ["Dashboard"], technologies: ["Vue"], url: "" },
      { id: "c3", title: "Policy Manager", category: "Compliance", image: "/portfolio/uiux_portfolio_1785996578067.png", description: "Corporate policy compliance tool.", services: ["Web App"], technologies: ["React"], url: "" },
      { id: "c4", title: "Testing Suite", category: "Compliance", image: "/images/workflow/workflow-testing.webp", description: "Automated compliance testing suite.", services: ["Automation"], technologies: ["Cypress"], url: "" }
    ]
  }
];

const categories = ["All", ...servicesData.map(s => s.title)];

// ----------------------------------------------------------------------
// Animations
// ----------------------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
};

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    setMounted(true);
    // Lock body scroll when modal is open
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  useEffect(() => {
    // Handle hash scrolling on load or category change
    if (activeCategory !== "All") {
      const slug = servicesData.find(s => s.title === activeCategory)?.slug;
      if (slug) {
        const el = document.getElementById(slug);
        if (el) {
          const yOffset = -100; 
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  }, [activeCategory]);

  const flattenedProjects = useMemo(() => {
    if (activeCategory !== "All") return [];
    
    const searchLower = searchQuery.toLowerCase();
    const allProj: any[] = [];
    servicesData.forEach(service => {
      service.projects.forEach(project => {
        const matchesSearch = 
          project.title.toLowerCase().includes(searchLower) ||
          project.category.toLowerCase().includes(searchLower) ||
          project.services.some(s => s.toLowerCase().includes(searchLower)) ||
          project.technologies.some(t => t.toLowerCase().includes(searchLower));
          
        if (matchesSearch) {
          allProj.push(project);
        }
      });
    });
    return allProj;
  }, [activeCategory, searchQuery]);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return [];
    return servicesData.map(service => {
      if (service.title !== activeCategory) {
        return { ...service, projects: [] };
      }
      
      const searchLower = searchQuery.toLowerCase();
      const matchedProjects = service.projects.filter(project => {
        return project.title.toLowerCase().includes(searchLower) ||
               project.category.toLowerCase().includes(searchLower) ||
               project.services.some(s => s.toLowerCase().includes(searchLower)) ||
               project.technologies.some(t => t.toLowerCase().includes(searchLower));
      });
      
      return { ...service, projects: matchedProjects };
    }).filter(service => service.projects.length > 0);
  }, [activeCategory, searchQuery]);

  const handleClearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    window.scrollTo({ top: document.getElementById('portfolio-grid')?.offsetTop || 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[var(--color-background)] font-body text-[var(--color-foreground)] overflow-x-hidden">
      <HoverGradientNavBar />
      
      <PortfolioHero />
      
      <div className="pb-24 md:pb-32 px-4 md:px-8 max-w-[1600px] mx-auto">

        {/* CONTROLS ROW */}
        <motion.div
          className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 mb-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* BROWSE ALL LINK */}
          <motion.div variants={fadeInUp}>
            <button 
              onClick={handleClearFilters}
              className="flex items-center gap-2 text-[var(--color-primary)] font-medium hover:text-[var(--color-secondary)] transition-colors group"
            >
              <Grid2X2 className="w-5 h-5" />
              <span>Browse all projects &rarr;</span>
            </button>
          </motion.div>

          {/* SEARCH FIELD */}
          <motion.div variants={fadeInUp} className="relative w-full md:w-[480px]">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-14 pr-6 py-5 bg-white border border-gray-200 rounded-full text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              placeholder="Search projects or services"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </motion.div>

        {/* FILTERS */}
        <div id="portfolio-grid" className="mb-16">
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap gap-3 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  if(category === "All") {
                    window.scrollTo({ top: document.getElementById('portfolio-grid')?.offsetTop || 0, behavior: 'smooth' });
                  } else {
                    window.location.hash = servicesData.find(s => s.title === category)?.slug || "";
                  }
                }}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                    : 'bg-white text-[var(--color-primary)] border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PORTFOLIO GRID BY SERVICE */}
        {activeCategory === "All" ? (
          flattenedProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              <AnimatePresence>
                {flattenedProjects.map((project: any, index: number) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    key={project.id}
                    className="group relative cursor-pointer w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-gray-100"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[450ms] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Subtle dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-[450ms] pointer-events-none" />
                    
                    {/* Top-Right Arrow Button */}
                    <div className="absolute top-4 right-4 w-[44px] h-[44px] bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 transition-all duration-[400ms] group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 shadow-sm">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                    
                    {/* Bottom-Left Category Pill */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[13px] font-semibold text-gray-900 shadow-sm pointer-events-none">
                      {project.category}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-[var(--color-primary)]">No matching projects found.</h3>
              <p className="text-[var(--color-secondary)] mb-8">Try adjusting your search or category filters.</p>
              <button 
                onClick={handleClearFilters}
                className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )
        ) : (
          filteredServices.length > 0 ? (
            <div className="flex flex-col gap-24">
              {filteredServices.map((service) => (
                <motion.section 
                  key={service.slug}
                  id={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-32"
                >
                  <div className="flex justify-end mb-6">
                    <Link 
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors whitespace-nowrap"
                    >
                      Explore Service &rarr;
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <AnimatePresence>
                      {service.projects.map((project: any, index: number) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          key={project.id}
                          className="group relative cursor-pointer w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-gray-100"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-[450ms] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                          {/* Subtle dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-[450ms] pointer-events-none" />
                          
                          {/* Top-Right Arrow Button */}
                          <div className="absolute top-4 right-4 w-[44px] h-[44px] bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 transition-all duration-[400ms] group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 shadow-sm">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                          
                          {/* Bottom-Left Category Pill */}
                          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[13px] font-semibold text-gray-900 shadow-sm pointer-events-none">
                            {project.category}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.section>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4 text-[var(--color-primary)]">No matching projects found.</h3>
              <p className="text-[var(--color-secondary)] mb-8">Try adjusting your search or category filters.</p>
              <button 
                onClick={handleClearFilters}
                className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )
        )}
      </div>

      <CinematicFooter />

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:p-6 md:p-12 pointer-events-none">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] pointer-events-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md hover:bg-white rounded-full text-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image Side */}
              <div className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-auto bg-gray-100 flex-shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-2/5 p-8 md:p-12 overflow-y-auto hide-scrollbar flex flex-col">
                <p className="text-[var(--color-secondary)] font-medium mb-3 tracking-wide uppercase text-sm">
                  {selectedProject.category}
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-primary)] mb-6">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((s: string) => (
                      <span key={s} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-12">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t: string) => (
                      <span key={t} className="px-3 py-1 border border-gray-200 text-gray-600 rounded-md text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  {selectedProject.url ? (
                    <a 
                      href={selectedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-opacity-90 transition-all hover:pr-6"
                    >
                      <span>View Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-medium inline-block cursor-not-allowed">
                      Website Not Available
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Hide Scrollbar for modal internal scroll & filters */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
