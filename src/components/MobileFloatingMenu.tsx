"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  Menu, X, 
  House as Home, Palette, TrendingUp, Code, Bot, ShieldCheck, Briefcase, Phone,
  Layers, Mail 
} from "lucide-react";

const Code2 = Code;

// Menu items matching the website pages with icons
const menuItems = [
  { label: "Home", href: "/", Icon: Home },
  { label: "Branding + Printing", href: "/branding-printing", Icon: Palette },
  { label: "Digital Marketing", href: "/digital-marketing", Icon: TrendingUp },
  { label: "Services", href: "/services", Icon: Layers },
  { label: "Web + Software", href: "/web-software", Icon: Code2 },
  { label: "AI + Automation", href: "/ai-automation", Icon: Bot },
  { label: "Compliance", href: "/compliance", Icon: ShieldCheck },
  { label: "Portfolio", href: "/portfolio", Icon: Briefcase },
  { label: "Contact", href: "/contact", Icon: Phone },
] as const;

// Custom SVGs for brand/social icons in outline style
const IgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/virratglobal/", Icon: IgIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/virrat-global/", Icon: LiIcon },
  { label: "WhatsApp", href: "https://wa.me/919999999999", Icon: WaIcon },
  { label: "Email", href: "mailto:info@virratglobal.com", Icon: Mail },
];

const buttonVariants = {
  default: {
    y: 0,
    scale: 1,
    boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
  },
  hover: {
    y: -2,
    scale: 1.03,
    boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
  }
};

const iconVariants = {
  default: {
    rotate: 0,
  },
  hover: {
    rotate: 90,
  }
};

export function MobileFloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* ── Closed State Floating Button ── */}
      {!isOpen && (
        <motion.button
          type="button"
          onClick={openMenu}
          aria-label="Open menu"
          initial="default"
          whileHover="hover"
          whileTap="hover"
          variants={buttonVariants}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
          flex items-center justify-between pl-8 pr-6 rounded-full 
          bg-white/18 backdrop-blur-[24px] border border-white/35 text-[#111111]
          font-bold text-[14px] tracking-[0.28em] select-none cursor-pointer uppercase 
          outline-none focus:outline-none shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
          style={{
            bottom: "calc(1.5rem + env(safe-area-inset-bottom))",
            width: "170px",
            height: "58px",
            background: "rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.35)"
          }}
        >
          <span>Menu</span>
          <motion.div variants={iconVariants} className="flex items-center justify-center">
            <Menu className="w-5 h-5 text-[#111111]" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}

      {/* ── Centered Card Mobile Navigation Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6"
            onClick={closeMenu}
          >
            {/* Centered White Card with Rounded Corners */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-[90%] max-w-[350px] rounded-[2.5rem] pt-[40px] px-6 pb-6 shadow-2xl flex flex-col items-center relative max-h-[82vh] overflow-y-auto scrollbar-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Items */}
              <div className="flex flex-col gap-3 w-full font-heading">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center w-full h-[58px] px-[18px] rounded-[14px] transition-all duration-300 select-none cursor-pointer flex-shrink-0 group
                        ${isActive 
                          ? 'bg-[#FFF5F5] text-[#D62020] font-bold' 
                          : 'bg-transparent text-[#1F1F1F] font-medium hover:bg-[#F8F8F8] hover:text-[#D62020]'
                        }`}
                      style={{ fontSize: "16px" }}
                    >
                      <item.Icon 
                        className={`w-5 h-5 transition-colors duration-300 shrink-0 mr-[18px]
                          ${isActive ? '!text-[#D62020]' : '!text-[#6B7280] group-hover:!text-[#D62020]'}`}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span className={`transition-colors duration-300 ${isActive ? '!text-[#D62020] font-bold' : '!text-[#1F1F1F] group-hover:!text-[#D62020]'}`}>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Separator Divider Line */}
              <div className="w-full border-t border-zinc-100 my-4 shrink-0" />

              {/* Bottom Area (CTA + Social Icons) */}
              <div className="flex flex-col items-center w-full shrink-0">
                {/* Start a Project Button */}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="w-full h-[52px] flex items-center justify-center text-white font-semibold text-sm tracking-wide rounded-full transition-all duration-200 active:scale-95 shadow-[0_4px_14px_0_rgba(214,32,32,0.25)] hover:shadow-[0_6px_20px_0_rgba(214,32,32,0.35)] shrink-0 mb-4"
                  style={{ backgroundColor: "#D62020" }}
                >
                  Start a Project
                </Link>

                {/* Contact us Header */}
                <span className="font-bold text-[#111111] text-xs uppercase tracking-wider mb-4 font-heading shrink-0">
                  Contact us
                </span>

                {/* Outline Social Links */}
                <div className="flex items-center gap-4 justify-center pb-2 shrink-0">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 
                      hover:bg-[#FFF5F5] hover:border-[#D62020] hover:text-[#D62020] transition-all duration-300 hover:scale-110 active:scale-90"
                    >
                      <social.Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Dark CLOSE Button below the white card */}
            <motion.button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              initial="default"
              whileHover="hover"
              whileTap="hover"
              variants={buttonVariants}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]
              flex items-center justify-between pl-8 pr-6 rounded-full 
              bg-[#111111] border border-white/10 text-white
              font-bold text-[14px] tracking-[0.28em] select-none cursor-pointer uppercase 
              outline-none focus:outline-none shadow-[0_12px_35px_rgba(0,0,0,0.18)]"
              style={{
                bottom: "calc(1.5rem + env(safe-area-inset-bottom))",
                width: "170px",
                height: "58px",
              }}
            >
              <span>Close</span>
              <motion.div variants={iconVariants} className="flex items-center justify-center">
                <X className="w-5 h-5 text-white" strokeWidth={2.5} />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileFloatingMenu;
