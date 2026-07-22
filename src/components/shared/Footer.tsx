"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterX = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const Dribbble = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pillClass = "px-5 py-2.5 rounded-full bg-[#1A1A1A] text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#FF0000]/15 border border-transparent hover:border-[#FF0000]/40 hover:-translate-y-1 transition-all duration-300 text-[12px] font-bold tracking-wider uppercase";

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] pt-8 pb-0 rounded-t-[3rem] mt-12 overflow-hidden relative border-t border-[#222222] flex flex-col font-sans">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-6 lg:gap-x-6 xl:gap-x-8 mb-0">
          
          {/* Left Column - Heading & Description */}
          <div className="lg:col-span-5 md:pr-4 lg:pr-0">
            <p className="text-5xl md:text-6xl lg:text-[76px] font-extrabold font-heading mb-8 leading-[0.82] tracking-tighter text-[#FFFFFF]">
              Helping<br/>start-ups<br/>scale & grow.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-11 h-11 rounded-full border border-[#333333] flex items-center justify-center text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-white/50 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-[#333333] flex items-center justify-center text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-white/50 transition-all duration-300">
                <TwitterX className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-[#333333] flex items-center justify-center text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-white/50 transition-all duration-300">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-[#333333] flex items-center justify-center text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-white/50 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Center Column - Quick Links */}
          <div className="lg:col-span-3 lg:pl-0 xl:pl-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF0000]"></div>
              <p className="text-[17px] font-semibold tracking-wide text-[#FFFFFF] leading-none">Quick links</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/about" className={pillClass}>ABOUT</Link>
              <Link href="/about" className={pillClass}>WHO WE ARE</Link>
              <Link href="/services" className={pillClass}>SERVICES</Link>
              <Link href="/portfolio" className={pillClass}>PROJECTS</Link>
              <Link href="/blog" className={pillClass}>BLOG</Link>
              <Link href="/pricing" className={pillClass}>PRICING</Link>
              <Link href="/contact" className={pillClass}>CONTACT US</Link>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="lg:col-span-4 lg:pl-4 xl:pl-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF0000]"></div>
              <p className="text-[17px] font-semibold tracking-wide text-[#FFFFFF] leading-none">Contact</p>
            </div>
            <div className="flex flex-col">
              
              {/* Email */}
              <div className="flex gap-4 pb-3 border-b border-[#222222]">
                <Mail className="w-[18px] h-[18px] text-[#FF0000] mt-[3px] shrink-0" />
                <div>
                  <span className="block text-[12px] font-bold text-[#FFFFFF] mb-2 uppercase tracking-wider">EMAIL</span>
                  <div className="flex flex-col space-y-1.5">
                    <a href="mailto:namaste@virratglobal.com" className="text-[14px] font-medium text-[#C8C8C8] hover:text-[#FF0000] transition-colors duration-300">namaste@virratglobal.com</a>
                    <a href="mailto:sales@virratglobal.com" className="text-[14px] font-medium text-[#C8C8C8] hover:text-[#FF0000] transition-colors duration-300">sales@virratglobal.com</a>
                    <a href="mailto:careers@virratglobal.com" className="text-[14px] font-medium text-[#C8C8C8] hover:text-[#FF0000] transition-colors duration-300">careers@virratglobal.com</a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 py-3 border-b border-[#222222]">
                <Phone className="w-[18px] h-[18px] text-[#FF0000] mt-[3px] shrink-0" />
                <div>
                  <span className="block text-[12px] font-bold text-[#FFFFFF] mb-2 uppercase tracking-wider">PHONE</span>
                  <div className="flex flex-col space-y-1.5">
                    <a href="tel:+918484042080" className="text-[14px] font-medium text-[#C8C8C8] hover:text-[#FF0000] transition-colors duration-300">+91 8484 04 2080</a>
                    <a href="tel:+918484072080" className="text-[14px] font-medium text-[#C8C8C8] hover:text-[#FF0000] transition-colors duration-300">+91 8484 07 2080</a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 pt-3">
                <MapPin className="w-[18px] h-[18px] text-[#FF0000] mt-[3px] shrink-0" />
                <div>
                  <span className="block text-[12px] font-bold text-[#FFFFFF] mb-2 uppercase tracking-wider">ADDRESS</span>
                  <p className="text-[14px] font-medium text-[#C8C8C8] leading-relaxed max-w-[280px]">
                    312, Maruti Millennium Tower,<br/>
                    Nanaware Chowk,<br/>
                    Mumbai-Pune Expressway,<br/>
                    Baner, Pune,<br/>
                    Maharashtra 411045. 🇮🇳 IND
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>

      {/* Copyright Bar - Moved ABOVE the big branding text with spacing */}
      <div className="w-full relative z-30 mt-6 mb-2">
        <div className="container mx-auto px-6">
          <div className="border-t border-[#222222] pt-4 flex flex-col-reverse md:flex-row items-center justify-between gap-6 relative">
            
            <p className="text-[#C8C8C8] text-[13px] font-medium">
              © {new Date().getFullYear()} Virrat Global Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-[13px] text-[#C8C8C8] font-medium md:pr-14 relative w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-[#FFFFFF] transition-colors duration-300">Privacy Policy</Link>
                <span className="w-px h-3 bg-[#333333]"></span>
                <Link href="/terms" className="hover:text-[#FFFFFF] transition-colors duration-300">Terms & Conditions</Link>
              </div>
              
              {/* Back to top button */}
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-[#FFFFFF] hover:bg-[#FF0000] hover:text-[#FFFFFF] hover:border-[#FF0000] hover:-translate-y-1 shadow-lg shadow-transparent hover:shadow-[#FF0000]/20 transition-all duration-300 focus:outline-none absolute right-0 top-1/2 -translate-y-1/2 bg-[#111111] z-50"
                aria-label="Back to top"
              >
                <ChevronUp className="w-4 h-4 opacity-90" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Big Virrat Global Text - Anchored directly to the bottom */}
      <div className="w-full flex justify-center items-end relative overflow-hidden mt-auto pb-0">
        
        <div className="relative z-10 w-full" style={{ transform: "translateY(18%)" }}>
          <motion.p 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.5vw] font-bold font-heading tracking-tighter text-center w-full leading-none"
            style={{
              color: "#FF0000",
              textShadow: "0px -10px 40px rgba(0, 0, 0, 0.9), 0px 0px 30px rgba(255, 0, 0, 0.4)",
              WebkitTextStroke: "1px rgba(255,0,0,0.1)",
              opacity: 1
            }}
          >
            Virrat Global
          </motion.p>
        </div>

        {/* Ground Shadow Effect - Limited to bottom 25% */}
        <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-[#111111]/90 to-transparent pointer-events-none z-20"></div>

      </div>

    </footer>
  );
}
