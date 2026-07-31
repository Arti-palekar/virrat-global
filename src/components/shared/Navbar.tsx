"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Branding + Printing", href: "/branding-printing" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Services", href: "/services" },
  { name: "Web + Software", href: "/web-software" },
  { name: "AI + Automation", href: "/ai-automation" },
  { name: "Compliance", href: "/compliance" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 ease-out mx-auto",
          scrolled 
            ? "top-4 w-[96%] md:w-[96%] max-w-7xl rounded-[18px] bg-white/95 backdrop-blur-[20px] border border-black/[0.06] shadow-[0_10px_35px_rgba(0,0,0,0.08)] py-2" 
            : "top-0 w-full bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Virrat Global" 
              width={160} 
              height={40} 
              className={cn("object-contain transition-transform duration-300 ease-out origin-left", scrolled && "scale-95")} 
              priority 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={cn("hidden md:flex items-center transition-all duration-300 ease-out", scrolled ? "gap-6" : "gap-8")}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[15px] font-medium transition-colors relative group py-1",
                    isActive ? "text-[var(--color-accent)]" : "text-[#111111] hover:text-[var(--color-accent)]"
                  )}
                >
                  {link.name}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} 
                  />
                </Link>
              )
            })}
            <Button 
              href="/contact" 
              variant="primary" 
              className={cn(
                "!text-[#FFFFFF] transition-all duration-300 ease-out ml-2",
                scrolled ? "py-1.5 px-4 shadow-[0_8px_20px_rgba(214,32,32,0.25)] text-sm" : "py-2 px-5 text-sm"
              )}
              style={{ color: "#FFFFFF !important" }}
            >
              Start a Project
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 text-[var(--color-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="font-heading text-4xl font-semibold hover:text-[var(--color-accent)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.1 }}
            >
              <Button href="/contact" size="lg" variant="primary" onClick={() => setMobileMenuOpen(false)}>
                Start a Project
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
