"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const categories = [
  {
    id: "logo-design",
    tabTitle: "Logo Design",
    label: "PROFESSIONAL LOGO DESIGN",
    heading: "Build a Strong Identity That Stands Out",
    description: "We create memorable branding systems that communicate your business values and leave lasting impressions.",
    features: ["Custom Logo Concepts", "Brand Identity Systems", "Multiple Revisions", "Print & Digital Ready Files"],
    buttonText: "Explore Logo Design →",
    image: "https://images.unsplash.com/photo-1626785776965-b4618e404b86?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "visiting-cards",
    tabTitle: "Visiting Cards",
    label: "LUXURY VISITING CARDS",
    heading: "Leave a Lasting Impression in Every Meeting",
    description: "Ultra-premium visiting cards crafted with world-class printing techniques to elevate your personal and corporate brand.",
    features: ["Premium GSM Paper", "UV Spot Finish", "Gold Foil", "Matte Finish"],
    buttonText: "Explore Visiting Cards →",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "brochure-design",
    tabTitle: "Brochure Design",
    label: "CORPORATE BROCHURE DESIGN",
    heading: "Communicate Your Vision with Clarity",
    description: "Professionally designed, high-conversion corporate brochures that perfectly articulate your products and services.",
    features: ["Company Profiles", "Product Catalogs", "Premium Printing", "Modern Layout"],
    buttonText: "Explore Brochures →",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "flyers-pamphlets",
    tabTitle: "Flyers & Pamphlets",
    label: "FLYERS & PAMPHLETS PRINTING",
    heading: "Drive Massive Local Engagement",
    description: "Vibrant, high-quality flyers and pamphlets designed for maximum impact and reach for your local marketing campaigns.",
    features: ["Promotional Flyers", "Event Marketing", "Fold Options", "Offset Printing"],
    buttonText: "Explore Flyers →",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "packaging-design",
    tabTitle: "Packaging Design",
    label: "LUXURY PACKAGING DESIGN",
    heading: "Enhance Your Product's Shelf Value",
    description: "Structural and visually stunning packaging design that protects your product while elevating its premium feel.",
    features: ["Luxury Packaging", "Product Labels", "Retail Boxes", "Premium Finishes"],
    buttonText: "Explore Packaging →",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "billboard-printing",
    tabTitle: "Billboard Printing",
    label: "OUTDOOR BILLBOARD PRINTING",
    heading: "Dominate the Skyline with Large Formats",
    description: "Ultra-large format, weather-resistant billboard printing designed for extreme outdoor durability and visibility.",
    features: ["Outdoor Branding", "Large Format", "Weather Resistant", "Premium Color Print"],
    buttonText: "Explore Billboards →",
    image: "https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "standee-flex",
    tabTitle: "Standee & Flex",
    label: "ROLL-UP STANDEES & FLEX",
    heading: "Command Attention at Every Event",
    description: "Portable, high-tension roll-up standees and displays perfect for exhibitions, tradeshows, and corporate events.",
    features: ["Roll-up Standee", "Exhibition Branding", "Event Display", "Flex Banner Printing"],
    buttonText: "Explore Standees →",
    image: "https://images.unsplash.com/photo-1588523363412-2a54992dc7a7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "corporate-stationery",
    tabTitle: "Corporate Stationery",
    label: "PREMIUM CORPORATE STATIONERY",
    heading: "Reflect Professional Standards Internally",
    description: "Ensure every internal and external communication reflects your brand's authority with bespoke corporate stationery.",
    features: ["Letterheads", "Envelopes", "Notebooks", "Office Branding"],
    buttonText: "Explore Stationery →",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "corporate-gifting",
    tabTitle: "Corporate Gifting",
    label: "PREMIUM CORPORATE GIFTING",
    heading: "Build Deeper Client Relationships",
    description: "Carefully curated, premium branded corporate gift hampers designed to delight your employees and VIP clients.",
    features: ["Premium Gifts", "Welcome Kits", "Custom Branding", "Employee Gifts"],
    buttonText: "Explore Gifting →",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "uniforms",
    tabTitle: "Uniforms",
    label: "CORPORATE UNIFORMS",
    heading: "Unite Your Team with Professional Attire",
    description: "Project professional authority and unity with high-quality, custom-embroidered corporate uniforms and apparel.",
    features: ["Corporate Uniforms", "T-Shirts", "Jackets", "Embroidery"],
    buttonText: "Explore Uniforms →",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "id-cards",
    tabTitle: "ID Cards",
    label: "PROFESSIONAL ID CARDS",
    heading: "Secure Your Premises Professionally",
    description: "High-security, ultra-durable PVC employee ID cards and custom branded lanyards for your entire workforce.",
    features: ["PVC Cards", "RFID Cards", "Security Print", "Custom Lanyards"],
    buttonText: "Explore ID Cards →",
    image: "https://images.unsplash.com/photo-1633421715423-b1d615bd06c3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "badges",
    tabTitle: "Badges",
    label: "METAL CORPORATE BADGES",
    heading: "Add Elegance to Your Team's Attire",
    description: "Premium die-cast metal badges and lapel pins featuring your exact brand logo for a touch of refined professionalism.",
    features: ["Metal Badges", "Acrylic Badges", "Name Badges", "Event Badges"],
    buttonText: "Explore Badges →",
    image: "https://images.unsplash.com/photo-1621840889241-17796d11f6c7?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function AllInOneBranding() {
  const [activeTab, setActiveTab] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressTween = useRef<gsap.core.Tween | null>(null);

  // Viewport Awareness
  const isInView = useInView(sectionRef, { amount: 0.4 });
  const isInViewRef = useRef(isInView);

  // Sync ref and toggle play/pause immediately upon visibility change
  React.useEffect(() => {
    isInViewRef.current = isInView;
    if (progressTween.current) {
      if (isInView) {
        progressTween.current.play();
      } else {
        progressTween.current.pause();
      }
    }
  }, [isInView]);

  // 1. Unstoppable GSAP Auto-Play Logic (viewport-aware)
  useGSAP(() => {
    if (progressTween.current) {
      progressTween.current.kill();
    }
    
    // Instantly reset all progress lines to 0 width
    gsap.set(progressRefs.current, { width: "0%" });

    const activeBar = progressRefs.current[activeTab];
    if (activeBar) {
      
      // Auto-scroll active tab into view for horizontal lists (Tablet/Mobile)
      if (tabsContainerRef.current) {
        const activeTabElement = tabsContainerRef.current.children[activeTab] as HTMLElement;
        if (activeTabElement) {
          activeTabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }

      // Linear GSAP tween animating width for the progress bar
      progressTween.current = gsap.to(activeBar, {
        width: "100%",
        duration: 5,
        ease: "none", // Perfectly smooth linear progression
        paused: !isInViewRef.current, // Start paused if out of view
        onComplete: () => {
          setActiveTab((prev) => (prev + 1) % categories.length);
        }
      });
    }
  }, { dependencies: [activeTab], scope: sectionRef });

  const activeData = categories[activeTab];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 lg:py-24 font-syne bg-[#D62020] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-[16px] md:px-[24px] lg:px-[40px]">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-[44px] font-[700] !text-white leading-[1.15] mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Creative. <br />
            All-in-One Branding &amp; Printing Solution
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] max-w-2xl mx-auto">
            Everything you need to build, print and promote your brand all in one place.
          </p>
        </div>

        {/* ── TOP PROGRESS NAVIGATION ── */}
        <div 
          ref={tabsContainerRef} 
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6 mb-8"
        >
          {categories.map((cat, i) => {
            const isActive = i === activeTab;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(i)}
                className="w-[150px] shrink-0 flex flex-col justify-end px-3 snap-start relative group outline-none"
              >
                <div className="w-full min-h-[2.8em] flex items-center justify-center mb-3">
                  <p className={`service-title transition-all duration-300 w-full ${isActive ? 'active' : ''}`}>
                    {cat.tabTitle}
                  </p>
                </div>
                
                {/* Unified-looking Track Line under the text */}
                <div className="w-full h-[2px] bg-[rgba(255,255,255,0.25)] relative">
                  {/* The filling progress bar */}
                  <div 
                    ref={(el) => { progressRefs.current[i] = el; }}
                    className="absolute top-0 left-0 h-full bg-white flex items-center justify-end"
                    style={{ width: "0%" }}
                  >
                     {/* The white circle thumb indicator (only visible if the width is > 0, handled natively by clipping or absolute right) */}
                     <div className={`absolute -right-[4px] w-[8px] h-[8px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── MAIN CONTENT CARD ── */}
        <div className="w-full bg-white rounded-[24px] p-6 md:p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              
              {/* Left Column (45%) */}
              <div className="w-full lg:w-[45%] flex flex-col items-start justify-center">
                <span className="inline-block text-[#D62020] text-[12px] md:text-[13px] font-bold tracking-[0.1em] uppercase mb-4">
                  {activeData.label}
                </span>
                
                <h3 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#1A1A1A] leading-[1.1] mb-5">
                  {activeData.heading}
                </h3>
                
                <p className="text-[#666666] text-[16px] md:text-[18px] leading-[1.6] mb-8">
                  {activeData.description}
                </p>
                
                <div className="space-y-4 mb-10 w-full">
                  {activeData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[#D62020] flex items-center justify-center text-white shadow-[0_4px_10px_rgba(214,32,32,0.3)]">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-[#333333] text-[16px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-[#D62020] text-white px-8 py-4 rounded-[12px] font-bold text-[16px] hover:bg-[#B71C1C] transition-all shadow-[0_8px_20px_rgba(214,32,32,0.25)] hover:shadow-[0_12px_25px_rgba(214,32,32,0.35)] hover:-translate-y-1">
                  {activeData.buttonText}
                </button>
              </div>

              {/* Right Column (55%) */}
              <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[600px] aspect-square rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 bg-gray-50">
                  <motion.img 
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    src={activeData.image} 
                    alt={activeData.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
          
        </div>
      </div>
      
      {/* Hide Scrollbar & Custom CSS Utility */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .service-title {
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: -0.02em;
            color: rgba(255,255,255,0.75);
            text-align: center;
            margin: 0;
        }
        .service-title.active {
            color: #FFFFFF;
            font-weight: 700;
        }
      `}} />
    </section>
  );
}
