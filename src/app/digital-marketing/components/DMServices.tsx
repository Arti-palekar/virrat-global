"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Image zoom variants for hover animation
const imageHoverVariants: Variants = {
  initial: { scale: 1.04 },
  visible: { scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  hover: { scale: 1.035, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } },
};

// Floating content translation on card hover
const contentHoverVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -4, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] as const } },
};

// Staggered reveal for chips/tags
const chipHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02, 
    borderColor: "rgba(214, 32, 32, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" as const } 
  },
};

/*
 * Card types:
 *   type 1 — full-bleed image card with floating white info panel at bottom (dark text on light panel)
 *   type 2 — light bg card (F3F6F2) with text on top and image at bottom (dark text on light bg)
 *   type 3 — full-bleed image card with text directly over the image (white text + gradient overlay)
 */

const servicesData = [
  {
    type: 3,
    title: "SEO & Organic Growth",
    desc: "Build long-term search visibility and attract customers actively looking for your services.",
    tags: ['Strategy', 'Organic Traffic', 'Rankings'],
    image: "/images/services/dm_seo_organic.png"
  },
  {
    type: 1,
    title: "Technical SEO",
    desc: "Optimize website architecture, speed, and indexing for better search engine performance.",
    tags: ['Core Web Vitals', 'Crawlability', 'Site Speed'],
    image: "/images/services/dm_technical_seo.png"
  },
  {
    type: 3,
    title: "On-Page SEO",
    desc: "Data-driven optimization of content, meta tags, and internal linking structures.",
    tags: ['Keywords', 'Content', 'HTML tags'],
    image: "/images/services/dm_onpage_seo.png"
  },
  {
    type: 2,
    title: "Local SEO",
    desc: "Dominate local search results and connect with customers in your geographic area.",
    tags: ['Google Business', 'Local Citations', 'Maps'],
    image: "/images/services/dm_local_seo.png"
  },
  {
    type: 3,
    title: "Performance Marketing / PPC",
    desc: "High-converting paid campaigns built to generate qualified leads and sales.",
    tags: ['ROI', 'Paid Ads', 'Lead Generation'],
    image: "/images/services/dm_ppc.png"
  },
  {
    type: 1,
    title: "Google Ads",
    desc: "Target high-intent users actively searching for your products and services.",
    tags: ['Search', 'Display', 'Shopping'],
    image: "/images/services/dm_google_ads.png"
  },
  {
    type: 3,
    title: "Meta Ads",
    desc: "Reach targeted demographics through Facebook and Instagram advertising.",
    tags: ['Facebook', 'Instagram', 'Targeting'],
    image: "/images/services/dm_meta_ads.png"
  },
  {
    type: 3,
    title: "Social Media Marketing",
    desc: "Content and campaigns designed to build attention, engagement and brand authority.",
    tags: ['Brand Awareness', 'Community', 'Engagement'],
    image: "/images/services/dm_social_media.png"
  },
  {
    type: 1,
    title: "Social Media Management",
    desc: "End-to-end management of your social profiles, content calendars, and audience interaction.",
    tags: ['Scheduling', 'Community', 'Analytics'],
    image: "/images/services/dm_social_mgmt.png"
  },
  {
    type: 2,
    title: "Content Marketing",
    desc: "High-quality content that educates your audience and drives organic engagement.",
    tags: ['Blog Posts', 'Copywriting', 'Video'],
    image: "/images/services/dm_content_marketing.png"
  },
  {
    type: 3,
    title: "Content Strategy",
    desc: "Comprehensive planning of topics, channels, and formats to align with business goals.",
    tags: ['Planning', 'Audience', 'Distribution'],
    image: "/images/services/dm_content_strategy.png"
  },
  {
    type: 1,
    title: "Email Marketing",
    desc: "Personalized email campaigns that nurture leads and drive repeat purchases.",
    tags: ['Newsletters', 'Automation', 'Retention'],
    image: "/images/services/dm_email_marketing.png"
  },
  {
    type: 2,
    title: "Influencer Marketing",
    desc: "Partner with industry voices to expand your reach and build trust rapidly.",
    tags: ['Partnerships', 'Brand Trust', 'Reach'],
    image: "/images/services/dm_influencer.png"
  },
  {
    type: 3,
    title: "Lead Generation",
    desc: "Targeted strategies focused on capturing high-quality prospect information.",
    tags: ['B2B', 'B2C', 'Funnels'],
    image: "/images/services/dm_ppc.png"
  },
  {
    type: 1,
    title: "Conversion Rate Optimization",
    desc: "A/B testing and user experience enhancements to turn more visitors into buyers.",
    tags: ['A/B Testing', 'UX', 'Analytics'],
    image: "/images/services/dm_google_ads.png"
  },
  {
    type: 2,
    title: "Remarketing / Retargeting",
    desc: "Re-engage past visitors and abandoned carts to maximize your marketing ROI.",
    tags: ['Ads', 'Recovery', 'Conversions'],
    image: "/images/services/dm_meta_ads.png"
  },
  {
    type: 3,
    title: "Online Reputation Management",
    desc: "Monitor, protect, and enhance how your brand is perceived across the internet.",
    tags: ['Reviews', 'PR', 'Monitoring'],
    image: "/images/services/dm_social_media.png"
  },
  {
    type: 1,
    title: "Analytics & Reporting",
    desc: "Deep insights into user behavior, campaign performance, and ROI tracking.",
    tags: ['Google Analytics', 'Data', 'Dashboards'],
    image: "/images/services/dm_seo_organic.png"
  },
  {
    type: 2,
    title: "Marketing Automation",
    desc: "Streamline workflows and nurture leads automatically across multiple channels.",
    tags: ['Workflows', 'CRM', 'Efficiency'],
    image: "/images/services/dm_email_marketing.png"
  },
  {
    type: 3,
    title: "E-commerce Marketing",
    desc: "Specialized strategies to increase product visibility and drive online sales.",
    tags: ['Shopify', 'Amazon', 'Sales'],
    image: "/images/services/dm_content_marketing.png"
  }
];

const cardList = Array(30).fill(servicesData).flat();

export default function DMServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="services-section w-full py-16 lg:py-20 bg-[#ffffff] text-[#111111] overflow-hidden border-b border-black/[0.04]">
      <style>{`
        /* ── Carousel card sizing ── */
        .services-section {
          --card-width: calc(100vw - 3rem);
        }
        @media (min-width: 768px) {
          .services-section {
            --card-width: calc((100vw - 6rem - 1.5rem) / 2);
          }
        }
        @media (min-width: 1024px) {
          .services-section {
            --card-width: calc((min(100vw, 1400px) - 12rem - 4.5rem) / 4);
          }
        }
        .carousel-card {
          width: var(--card-width);
          flex-shrink: 0;
        }

        /* ── Image-based service cards (type 3) ── */
        .service-card--image {
          position: relative;
          overflow: hidden;
        }
        .service-card--image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15) 0%,
            rgba(0, 0, 0, 0.35) 45%,
            rgba(0, 0, 0, 0.75) 100%
          );
          z-index: 1;
          pointer-events: none;
          border-radius: inherit;
        }
        .service-card--image .service-card-content {
          position: relative;
          z-index: 2;
          color: #fff;
        }
        .service-card--image h3,
        .service-card--image p {
          color: #fff;
        }
        .service-card--image .service-card-tags {
          position: relative;
          z-index: 2;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              OUR DIGITAL MARKETING SERVICES
            </span>
            <h2 
              className="text-4xl md:text-[54px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-[20px]"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Marketing for<br />
              <span className="text-[#d62020]">measurable growth</span>
            </h2>
            <p 
              className="text-[18px] text-[#666666] leading-[1.67] mb-[24px] max-w-[720px]"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              We build data-driven marketing systems that attract, engage, and convert the right audience.
            </p>
          </div>
          <div className="shrink-0 select-none">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-[#111111] hover:text-[#d62020] transition-colors duration-300 group"
            >
              Explore Services 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── AUTO-SLIDING STEP-BY-STEP CAROUSEL ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-6 shrink-0" 
            animate={{ 
              x: `calc(-${currentIndex} * (var(--card-width) + 1.5rem))` 
            }}
            transition={{ 
              duration: 0.9, 
              ease: "easeInOut" 
            }}
          >
            {cardList.map((card, idx) => (
              <Card key={`card-${idx}`} data={card} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── EXTRACTED CARD COMPONENT ──
function Card({ data }: { data: typeof servicesData[number] }) {

  /* ─── TYPE 1: Full-bleed image + floating white info panel ─── */
  if (data.type === 1) {
    return (
      <motion.div 
        whileHover="hover"
        className="carousel-card relative flex flex-col items-center group cursor-pointer h-[400px]"
      >
        <div className="relative w-full h-full rounded-[24px] overflow-hidden">
          <motion.img 
            src={data.image}
            alt={data.title}
            initial="initial"
            animate="visible"
            variants={imageHoverVariants}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
        </div>
        
        {/* White floating panel — dark text for contrast */}
        <motion.div 
          variants={contentHoverVariants}
          className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-[20px] p-5 shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-black/[0.04] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-10"
        >
          <h3 className="text-xl font-heading font-bold text-[#111111] mb-2">{data.title}</h3>
          <p className="text-sm text-[#666666] leading-relaxed mb-4">
            {data.desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {data.tags.map((tag: string) => (
              <motion.span 
                key={tag}
                variants={chipHoverVariants}
                className="text-[11px] font-semibold px-3 py-1 rounded-full bg-zinc-100 text-[#111111] border border-transparent transition-colors duration-300 hover:bg-[#d62020]/10 hover:text-[#d62020]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  /* ─── TYPE 2: Light background card — dark text ─── */
  if (data.type === 2) {
    return (
      <motion.div 
        whileHover="hover"
        className="carousel-card bg-[#F3F6F2] rounded-[24px] p-6 pb-0 flex flex-col justify-between group cursor-pointer h-[400px] border border-black/[0.02] overflow-hidden relative"
      >
        <motion.div variants={contentHoverVariants} className="relative z-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {data.tags.map((tag: string) => (
              <motion.span 
                key={tag}
                variants={chipHoverVariants}
                className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white text-[#111111] shadow-sm transition-colors duration-300 hover:bg-[#d62020]/10 hover:text-[#d62020]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <h3 className="text-xl font-heading font-bold text-[#111111] mb-2">{data.title}</h3>
          <p className="text-sm text-[#666666] leading-relaxed max-w-[280px]">
            {data.desc}
          </p>
        </motion.div>
        
        <div className="relative w-full h-[180px] rounded-t-[20px] overflow-hidden mt-4 shadow-[0_-8px_20px_rgba(0,0,0,0.02)]">
          <motion.img 
            src={data.image}
            alt={data.title}
            initial="initial"
            animate="visible"
            variants={imageHoverVariants}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    );
  }

  /* ─── TYPE 3: Full-bleed image card — white text via CSS pseudo-element overlay ─── */
  if (data.type === 3) {
    return (
      <motion.div 
        whileHover="hover"
        className="service-card--image carousel-card rounded-[24px] group cursor-pointer h-[400px] flex flex-col justify-between p-6 border border-black/[0.02]"
      >
        {/* Background image layer (z-0) — the ::after pseudo-element provides the gradient */}
        <div className="absolute inset-0 z-0 rounded-[24px] overflow-hidden">
          <motion.img 
            src={data.image}
            alt={data.title}
            initial="initial"
            animate="visible"
            variants={imageHoverVariants}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text content — z-2 via .service-card-content CSS */}
        <motion.div variants={contentHoverVariants} className="service-card-content mt-2">
          <h3 className="text-xl font-heading font-bold mb-2">{data.title}</h3>
          <p className="text-sm leading-relaxed max-w-[285px] font-medium">
            {data.desc}
          </p>
        </motion.div>
        
        {/* Tags — z-2 via .service-card-tags CSS */}
        <motion.div variants={contentHoverVariants} className="service-card-tags flex flex-wrap gap-1.5 mb-2">
          {data.tags.map((tag: string) => (
            <motion.span 
              key={tag}
              variants={chipHoverVariants}
              className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/25 text-white backdrop-blur-md border border-white/10 transition-colors duration-300 hover:bg-[#d62020] hover:border-transparent"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    );
  }

  return null;
}
