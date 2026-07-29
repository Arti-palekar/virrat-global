'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

/* ─── 5 main services ─────────────────────────── */
const navItems = [
  { name: 'Branding',          href: '/branding-printing' },
  { name: 'Digital Marketing', href: '/digital-marketing' },
  { name: 'Web + Software',    href: '/web-software'      },
  { name: 'AI + Automation',   href: '/ai-automation'     },
  { name: 'Compliance',        href: '/compliance'        },
];

/* ─── Instagram SVG ───────────────────────────── */
const IgSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

/* ─── LinkedIn SVG ────────────────────────────── */
const LiSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ─── Spring config ───────────────────────────── */
const spring = { type: 'spring' as const, stiffness: 400, damping: 30 };

/* ═══════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════ */
export function HoverGradientNavBar(): React.JSX.Element {
  const pathname  = usePathname();
  const [hovered, setHovered]     = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── 3 right-side icon circles ── */
  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/virratglobal/', Icon: IgSVG },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/virrat-global/', Icon: LiSVG },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP  (≥ 1024 px)
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' as const, stiffness: 220, damping: 24, delay: 0.06 }}
        /* Absolutely centred — same "floating" feel as reference */
        className="hidden lg:flex fixed top-[18px] left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[980px]"
      >
        {/*
         * ┌──────────────────────────────────────────┐
         * │  Pill shell                               │
         * │  White · 1 px #D8D8D8 border             │
         * │  Height exactly matches reference (~50 px)│
         * └──────────────────────────────────────────┘
         */}
        <div
          style={{
            display:       'flex',
            alignItems:    'center',
            justifyContent: 'space-between',
            width:         '100%',
            height:        '50px',
            borderRadius:  '9999px',
            background:    '#ffffff',
            border:        '1px solid #D8D8D8',
            boxShadow:     '0 1px 12px rgba(0,0,0,0.07)',
            padding:       '0 24px 0 16px',
            userSelect:    'none',
            whiteSpace:    'nowrap',
          }}
        >
          {/* ── GROUP 1 (LEFT SECTION): Logo + Divider + Navigation Links ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {/* Logo */}
            <Link
              href="/"
              style={{
                display:    'flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="Virrat Global"
                width={100}
                height={25}
                style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Divider */}
            <div style={{ width: '1px', height: '20px', background: '#D8D8D8', flexShrink: 0 }} />

            {/* Navigation links (grouped together with 30px equal spacing) */}
            <nav style={{ display: 'flex', alignItems: 'center' }}>
              <ul style={{ display: 'flex', alignItems: 'center', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item, idx) => {
                  const active  = pathname === item.href;
                  const isHover = hovered === idx;

                  return (
                    <li
                      key={item.name}
                      style={{ position: 'relative' }}
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* sliding pill */}
                      <AnimatePresence>
                        {isHover && !active && (
                          <motion.span
                            layoutId="navPill"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={spring}
                            style={{
                              position:     'absolute',
                              inset:        '-3px -8px',
                              borderRadius: '9999px',
                              background:   '#F5F5F5',
                              zIndex:       0,
                            }}
                          />
                        )}
                      </AnimatePresence>

                      <motion.a
                        href={item.href}
                        animate={{ scale: isHover ? 1.02 : 1 }}
                        transition={spring}
                        style={{
                          position:       'relative',
                          zIndex:         1,
                          display:        'block',
                          padding:        '3px 6px',
                          borderRadius:   '9999px',
                          fontSize:       '13px',
                          fontWeight:     active ? 600 : 500,
                          color:          active ? '#D62020' : isHover ? '#D62020' : '#555555',
                          textDecoration: 'none',
                          cursor:         'pointer',
                          transition:     'color 0.18s',
                        }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* ── GROUP 2 (RIGHT SECTION): Social Icons (Instagram, LinkedIn, Search) ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            {socials.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{
                  scale:           1.08,
                  backgroundColor: '#D62020',
                  borderColor:     '#D62020',
                  color:           '#ffffff',
                  boxShadow:       '0 4px 14px rgba(214,32,32,0.3)',
                }}
                transition={{ type: 'spring' as const, stiffness: 400, damping: 24 }}
                style={{
                  width:          '32px',
                  height:         '32px',
                  borderRadius:   '50%',
                  border:         '1.5px solid #222222',
                  background:     '#ffffff',
                  color:          '#111111',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  cursor:         'pointer',
                  flexShrink:     0,
                  textDecoration: 'none',
                  transition:     'box-shadow 0.2s, background-color 0.2s, border-color 0.2s',
                }}
              >
                <Icon />
              </motion.a>
            ))}

            {/* Search */}
            <motion.button
              aria-label="Search"
              whileHover={{
                scale:           1.08,
                backgroundColor: '#D62020',
                borderColor:     '#D62020',
                color:           '#ffffff',
                boxShadow:       '0 4px 14px rgba(214,32,32,0.3)',
              }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 24 }}
              style={{
                width:          '32px',
                height:         '32px',
                borderRadius:   '50%',
                border:         '1.5px solid #222222',
                background:     '#ffffff',
                color:          '#111111',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                cursor:         'pointer',
                flexShrink:     0,
                outline:        'none',
                transition:     'box-shadow 0.2s, background-color 0.2s, border-color 0.2s',
              }}
            >
              <Search style={{ width: '13px', height: '13px' }} strokeWidth={2} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          MOBILE  (< 1024 px)   slim pill + hamburger
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' as const, stiffness: 220, damping: 24, delay: 0.06 }}
        className="flex lg:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[360px]"
      >
        <div
          style={{
            display:       'flex',
            alignItems:    'center',
            justifyContent:'space-between',
            width:         '100%',
            height:        '50px',
            borderRadius:  '9999px',
            background:    '#ffffff',
            border:        '1px solid #D8D8D8',
            boxShadow:     '0 1px 12px rgba(0,0,0,0.07)',
            padding:       '0 10px 0 16px',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="Virrat Global"
              width={88}
              height={22}
              style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              width:          '32px',
              height:         '32px',
              borderRadius:   '50%',
              border:         '1.5px solid #222222',
              background:     '#ffffff',
              color:          '#111111',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              cursor:         'pointer',
              outline:        'none',
              flexShrink:     0,
            }}
          >
            {mobileOpen
              ? <X  style={{ width: '14px', height: '14px', color: '#D62020' }} strokeWidth={2.5} />
              : <Menu style={{ width: '14px', height: '14px' }} strokeWidth={2.5} />
            }
          </button>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          MOBILE MENU OVERLAY
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-[90] bg-white flex flex-col justify-between overflow-y-auto"
            style={{ paddingTop: '80px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '40px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {navItems.map((item, idx) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, type: 'spring' as const, stiffness: 220, damping: 22 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display:        'block',
                        padding:        '16px 0',
                        borderBottom:   '1px solid #F0F0F0',
                        fontSize:       '22px',
                        fontWeight:     500,
                        color:          active ? '#D62020' : '#222222',
                        textDecoration: 'none',
                        letterSpacing:  '-0.3px',
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
              <div style={{ height: '1px', background: '#F0F0F0' }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AAAAAA' }}>
                  Follow Us
                </span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width:          '36px',
                        height:         '36px',
                        borderRadius:   '50%',
                        border:         '1.5px solid #222222',
                        background:     '#ffffff',
                        color:          '#111111',
                        display:        'flex',
                        alignItems:     'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                      }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HoverGradientNavBar;
