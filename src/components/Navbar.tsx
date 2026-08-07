"use client";

import MegaMenu from './MegaMenu';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

/*
  Navbar total height = banner (32px) + nav row (58px) = 90px
  Hero uses: height: calc(100vh - 90px)
  So the layout fits perfectly with no overflow/gap.
*/

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 w-full z-[100] bg-white"
      style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.08)" }}
    >

      {/* ── MAIN NAV ROW ────────────────────────────────── */}
      {/* Height: 58px */}
      <div
        className="max-w-[1240px] mx-auto px-6 lg:px-10"
        style={{ borderBottom: "1px solid #f0f2f5" }}
      >
        <div
          className="flex justify-between items-center"
          style={{ height: "58px" }}
        >

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a data-magnetic href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Virrat Global Pvt. Ltd."
                width={150}
                height={40}
                className="object-contain"
                style={{ height: "32px", width: "auto" }}
                priority
              />
            </a>
          </div>

          {/* Desktop Mega Menu */}
          <nav className="hidden lg:flex flex-1 justify-center h-full">
            <MegaMenu />
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Login: outlined */}
            <a data-magnetic
              href="#"
              className="font-semibold rounded border transition-all hover:border-[#fd2e35] hover:text-[#fd2e35]"
              style={{
                padding: "7px 18px",
                fontSize: "1rem",
                border: "1.5px solid #d1d5db",
                color: "#313131",
                background: "white",
              }}
            >
              Login
            </a>
            {/* Start a Project: solid red + arrow */}
            <a data-magnetic
              href="#"
              className="font-semibold rounded flex items-center gap-1.5 transition-opacity hover:opacity-90 !text-[#FFFFFF] hover:!text-[#FFFFFF] focus:!text-[#FFFFFF] active:!text-[#FFFFFF]"
              style={{
                padding: "7px 18px",
                fontSize: "1rem",
                background: "#fd2e35",
              }}
            >
              Start a Project
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center lg:hidden">
            <button data-magnetic
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-slate-500 hover:text-slate-700 p-2 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-5 pt-3 pb-6 space-y-1">
            {["Branding + Printing", "Digital Marketing", "Web + Software", "AI + Automation", "Compliance"].map(item => (
              <a data-magnetic
                key={item}
                href="#"
                className="block px-3 py-2.5 rounded-md font-medium text-slate-700 hover:text-[#fd2e35] hover:bg-red-50 transition-colors"
                style={{ fontSize: "1rem" }}
              >
                {item}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a data-magnetic
                href="#"
                className="w-full py-2.5 text-center rounded border font-semibold text-slate-700"
                style={{ border: "1.5px solid #d1d5db", fontSize: "1rem" }}
              >
                Login
              </a>
              <a data-magnetic
                href="#"
                className="w-full py-2.5 text-center rounded font-semibold !text-[#FFFFFF] hover:!text-[#FFFFFF] focus:!text-[#FFFFFF] active:!text-[#FFFFFF]"
                style={{ background: "#fd2e35", fontSize: "1rem" }}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
