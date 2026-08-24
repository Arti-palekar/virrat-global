"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function About2Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = ['Story', 'Jobs', 'Message'];
  const socialLinks = ['Instagram', 'TikTok', 'YouTube'];

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-black text-cream select-none">
      {/* Background Image (full-bleed, behind everything) */}
      <div className="absolute inset-0 h-full w-full z-0 anim-fade-in pointer-events-none">
        <img 
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85" 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Marquee Name (z-10) */}
      <div 
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee-track flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
          <span className="pr-[6vw]">Marcus &mdash; Bennet</span>
          <span className="pr-[6vw]">Marcus &mdash; Bennet</span>
        </div>
      </div>

      {/* Horizontal Cream Rule (z-10) */}
      <div 
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-[2px] bg-cream origin-left anim-line"
        style={{ animationDelay: '1200ms' }}
      />

      {/* Desktop Footer (sm:z-10) */}
      <footer className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn">
        {/* Footer Left */}
        <div 
          className="flex flex-col items-start anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <span>Visuals Composer</span>
          <span>Digital Crafter</span>
          <span>Obsessed by The Office</span>
        </div>

        {/* Footer Right */}
        <div 
          className="flex flex-col items-end text-right anim-fade-up"
          style={{ animationDelay: '1550ms' }}
        >
          <span>A homage to</span>
          <span>Marcus Holloway</span>
        </div>
      </footer>

      {/* Front Portrait Cutout (z-20) */}
      <div 
        className="absolute inset-0 h-full w-full z-20 pointer-events-none anim-rise-in"
        style={{ animationDelay: '300ms' }}
      >
        <img 
          src="https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png" 
          alt="Portrait" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Header + Mobile trigger (z-30 / z-50) */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        {/* Brand/Logo */}
        <a 
          href="#" 
          className="font-hn text-lg tracking-wide text-cream hover:opacity-75 transition-opacity anim-fade-up"
          style={{ animationDelay: '800ms' }}
        >
          Marcus
        </a>

        {/* Desktop Nav columns */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          {/* Year */}
          <span 
            className="text-sm font-hn text-cream anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2025
          </span>

          {/* Nav list */}
          <nav className="flex flex-col gap-0.5 text-sm font-hn text-cream">
            {navLinks.map((link, idx) => (
              <a 
                key={link} 
                href="#" 
                className="hover:opacity-60 transition-opacity duration-300 anim-fade-up"
                style={{ animationDelay: `${1000 + idx * 80}ms` }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social list */}
          <div className="flex flex-col gap-0.5 text-sm font-hn text-cream">
            {socialLinks.map((link, idx) => (
              <a 
                key={link} 
                href="#" 
                className="hover:opacity-60 transition-opacity duration-300 anim-fade-up"
                style={{ animationDelay: `${1150 + idx * 80}ms` }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Trigger (z-50) */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden z-50 h-10 w-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer focus:outline-none anim-fade-up"
          style={{ animationDelay: '900ms' }}
          aria-label="Toggle Menu"
        >
          <span 
            className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              mobileOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`} 
          />
          <span 
            className={`h-[2px] w-6 bg-cream transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`} 
          />
        </button>
      </header>

      {/* Mobile Drawer (z-40) */}
      <div 
        className={`sm:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div 
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 shadow-2xl flex flex-col justify-between transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button with Lucide X */}
          <button 
            onClick={() => setMobileOpen(false)}
            className={`absolute right-6 top-6 cursor-pointer focus:outline-none transition-all duration-300 ease-out ${
              mobileOpen ? 'rotate-0 opacity-100 delay-300' : 'rotate-90 opacity-0'
            }`}
          >
            <X size={26} strokeWidth={1.5} className="text-cream" />
          </button>

          {/* Top content: Site Index */}
          <div className="mt-16 flex flex-col gap-6">
            <span 
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${
                mobileOpen ? 'translate-y-0 opacity-100 delay-250' : 'translate-y-4 opacity-0'
              }`}
            >
              Site Index
            </span>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a 
                  key={link} 
                  href="#" 
                  className={`text-4xl text-cream font-hn hover:opacity-60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                  style={{ 
                    transitionDelay: mobileOpen ? `${300 + idx * 80}ms` : '0ms',
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(24px)',
                    opacity: mobileOpen ? 1 : 0
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom content: Find Me */}
          <div className="flex flex-col gap-4 mb-6">
            <span 
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${
                mobileOpen ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-4 opacity-0'
              }`}
            >
              Find Me
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link, idx) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-sm text-cream font-hn hover:opacity-60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ 
                    transitionDelay: mobileOpen ? `${550 + idx * 60}ms` : '0ms',
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                    opacity: mobileOpen ? 1 : 0
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
