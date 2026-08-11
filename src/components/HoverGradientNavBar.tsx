'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Search, Menu, X, 
  House, Palette, TrendingUp, Code, Bot, ShieldCheck, Briefcase, Phone,
  Layers, Mail, Package, ShoppingBag
} from 'lucide-react';

/* ─── 5 main services ─────────────────────────── */
const navItems = [
  { name: 'Branding',          href: '/branding-printing' },
  { name: 'Digital Marketing', href: '/digital-marketing' },
  { name: 'Portfolio',         href: '/portfolio'         },
  { name: 'Services',          href: '/services'          },
  { name: 'Web + Software',    href: '/web-software'      },
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
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
  </svg>
);

/* ─── Spring config ───────────────────────────── */
const spring = { type: 'spring' as const, stiffness: 400, damping: 30 };

const mobileNavItems = [
  { name: 'Home', href: '/', Icon: House },
  { name: 'Branding + Printing', href: '/branding-printing', Icon: Palette },
  { name: 'Digital Marketing', href: '/digital-marketing', Icon: TrendingUp },
  { name: 'Services', href: '/services', Icon: Layers },
  { name: 'Packaging Design', href: '/services/packaging-design', Icon: Package },
  { name: 'Merchandise', href: '/services/merchandise', Icon: ShoppingBag },
  { name: 'Web + Software', href: '/web-software', Icon: Code },
  { name: 'AI + Automation', href: '/ai-automation', Icon: Bot },
  { name: 'Compliance', href: '/compliance', Icon: ShieldCheck },
  { name: 'Portfolio', href: '/portfolio', Icon: Briefcase },
  { name: 'Contact', href: '/contact', Icon: Phone },
];

const IgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

const mobileSocials = [
  { label: 'Instagram', href: 'https://www.instagram.com/virratglobal/', Icon: IgIcon },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/virrat-global/', Icon: LiIcon },
  { label: 'Facebook',  href: 'https://www.facebook.com/virratglobal/', Icon: FbIcon },
  { label: 'WhatsApp',  href: 'https://wa.me/919999999999', Icon: WaIcon },
  { label: 'Email',     href: 'mailto:info@virratglobal.com', Icon: Mail },
];

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */
export function HoverGradientNavBar(): React.JSX.Element {
  const pathname  = usePathname();
  const [hovered, setHovered]     = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return <></>;

  /* ── 3 right-side icon circles ── */
  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/virratglobal/', Icon: IgSVG },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/virrat-global/', Icon: LiSVG },
  ];

  const navBackground = scrolled ? 'rgba(255, 255, 255, 0.28)' : 'rgba(255, 255, 255, 0.18)';
  const navBlur = scrolled ? 'blur(28px) saturate(190%)' : 'blur(24px) saturate(180%)';

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP  (≥ 1024 px)
          ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ 
          opacity: mobileOpen ? 0 : 1, 
          y: mobileOpen ? -50 : 0,
          pointerEvents: mobileOpen ? 'none' : 'auto'
        }}
        transition={{ type: 'spring' as const, stiffness: 220, damping: 24, delay: 0.06 }}
        /* Absolutely centred — same "floating" feel as reference */
        className="hidden lg:flex fixed top-[18px] left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[980px] xl:max-w-[1100px]"
      >
        <div
          style={{
            display:       'flex',
            alignItems:    'center',
            justifyContent: 'space-between',
            width:         '100%',
            height:        '50px',
            borderRadius:  '9999px',
            background:    navBackground,
            border:        '1px solid rgba(255, 255, 255, 0.35)',
            boxShadow:     '0 10px 40px rgba(0,0,0,.08), 0 2px 8px rgba(255,255,255,.35) inset',
            backdropFilter: navBlur,
            WebkitBackdropFilter: navBlur,
            padding:       '0 24px 0 16px',
            userSelect:    'none',
            whiteSpace:    'nowrap',
            transition:    'background-color 300ms ease, backdrop-filter 300ms ease, -webkit-backdrop-filter 300ms ease',
          }}
        >
          {/* Logo (flex-shrink-0) */}
          <Link
            data-magnetic
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

          {/* Navigation links (flex-1 justify-center) */}
          <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ul className="flex items-center gap-[28px] xl:gap-[40px]" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {navItems.map((item, idx) => {
                const active  = pathname === item.href || (item.name === 'Services' && ['/services/packaging-design', '/services/merchandise', '/web-software', '/ai-automation'].includes(pathname));
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
                            background:   'rgba(255, 255, 255, 0.45)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border:       '1px solid rgba(255, 255, 255, 0.25)',
                            zIndex:       0,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <motion.a
                      data-magnetic
                      href={item.href}
                      animate={{ scale: isHover ? 1.03 : 1 }}
                      transition={spring}
                      style={{
                        position:       'relative',
                        zIndex:         1,
                        display:        'block',
                        padding:        '3px 6px',
                        borderRadius:   '9999px',
                        fontSize:       '13px',
                        fontWeight:     active ? 600 : 500,
                        color:          active ? '#D62020' : isHover ? '#D62020' : '#1A1A1A',
                        textDecoration: 'none',
                        cursor:         'pointer',
                        transition:     'color 0.18s',
                      }}
                    >
                      {item.name}
                    </motion.a>

                    <AnimatePresence>
                      {item.name === 'Services' && isHover && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            paddingTop: '8px',
                            zIndex: 150,
                          }}
                        >
                          <div
                            style={{
                              width: '200px',
                              borderRadius: '16px',
                              background: 'rgba(255, 255, 255, 0.98)',
                              border: '1px solid rgba(0, 0, 0, 0.08)',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                              backdropFilter: 'blur(20px)',
                              WebkitBackdropFilter: 'blur(20px)',
                              padding: '6px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '2px',
                            }}
                          >
                            {[
                              { name: 'All Services', href: '/services' },
                              { name: 'Packaging Design', href: '/services/packaging-design' },
                              { name: 'Merchandise', href: '/services/merchandise' },
                              { name: 'Web + Software', href: '/web-software' },
                              { name: 'AI + Automation', href: '/ai-automation' }
                            ].map((sub) => (
                              <Link
                                data-magnetic
                                key={sub.name}
                                href={sub.href}
                                style={{
                                  padding: '8px 12px',
                                  borderRadius: '10px',
                                  fontSize: '13px',
                                  fontWeight: 500,
                                  color: pathname === sub.href ? '#D62020' : '#1A1A1A',
                                  textDecoration: 'none',
                                  textAlign: 'left',
                                  display: 'block',
                                  transition: 'background-color 0.2s, color 0.2s',
                                }}
                                className="hover:bg-zinc-100 hover:text-[#D62020] font-sans"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ── GROUP 2 (RIGHT SECTION): Social Icons (Instagram, LinkedIn, Search) ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {socials.map(({ label, href, Icon }) => (
              <motion.a
                data-magnetic
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
                  boxShadow:       '0 12px 30px rgba(214, 32, 32, 0.25)',
                }}
                transition={{ type: 'spring' as const, stiffness: 400, damping: 24 }}
                style={{
                  width:          '32px',
                  height:         '32px',
                  borderRadius:   '50%',
                  border:         '1px solid rgba(255, 255, 255, 0.45)',
                  background:     'rgba(255, 255, 255, 0.30)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  color:          '#1A1A1A',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  cursor:         'pointer',
                  flexShrink:     0,
                  textDecoration: 'none',
                  transition:     'box-shadow 0.2s, background-color 0.2s, border-color 0.2s, color 0.2s',
                }}
              >
                <Icon />
              </motion.a>
            ))}

            {/* Search */}
            <motion.button
              data-magnetic
              aria-label="Search"
              whileHover={{
                scale:           1.08,
                backgroundColor: '#D62020',
                borderColor:     '#D62020',
                color:           '#ffffff',
                boxShadow:       '0 12px 30px rgba(214, 32, 32, 0.25)',
              }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 24 }}
              style={{
                width:          '32px',
                height:         '32px',
                borderRadius:   '50%',
                border:         '1px solid rgba(255, 255, 255, 0.45)',
                background:     'rgba(255, 255, 255, 0.30)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                color:          '#1A1A1A',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                cursor:         'pointer',
                flexShrink:     0,
                outline:        'none',
                transition:     'box-shadow 0.2s, background-color 0.2s, border-color 0.2s, color 0.2s',
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
        animate={{ 
          opacity: mobileOpen ? 0 : 1, 
          y: mobileOpen ? -50 : 0,
          pointerEvents: mobileOpen ? 'none' : 'auto'
        }}
        transition={{ type: 'spring' as const, stiffness: 220, damping: 24, delay: 0.06 }}
        className="hidden fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[360px]"
      >
        <div
          style={{
            display:       'flex',
            alignItems:    'center',
            justifyContent:'space-between',
            width:         '100%',
            height:        '50px',
            borderRadius:  '9999px',
            background:    navBackground,
            border:        '1px solid rgba(255, 255, 255, 0.35)',
            boxShadow:     '0 10px 40px rgba(0,0,0,.08), 0 2px 8px rgba(255,255,255,.35) inset',
            backdropFilter: navBlur,
            WebkitBackdropFilter: navBlur,
            padding:       '0 10px 0 16px',
            transition:    'background-color 300ms ease, backdrop-filter 300ms ease, -webkit-backdrop-filter 300ms ease',
          }}
        >
          <Link data-magnetic href="/" style={{ display: 'flex', alignItems: 'center' }}>
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
            data-magnetic
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              width:          '32px',
              height:         '32px',
              borderRadius:   '50%',
              border:         '1px solid rgba(255, 255, 255, 0.45)',
              background:     'rgba(255, 255, 255, 0.30)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              color:          '#1A1A1A',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              cursor:         'pointer',
              outline:        'none',
              flexShrink:     0,
              transition:     'background-color 0.2s, border-color 0.2s, color 0.2s',
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed inset-0 z-[110] bg-black/45 backdrop-blur-[8px] flex items-center justify-center p-6"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="bg-white/95 backdrop-blur-[24px] w-full max-w-[340px] rounded-[2.5rem] p-8 shadow-2xl flex flex-col relative overflow-hidden border border-white/35"
              onClick={(e) => e.stopPropagation()}
              style={{ gap: '20px' }}
            >
              {/* Header inside the card */}
              <div className="flex items-center justify-between w-full pb-2 border-b border-zinc-100">
                <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Navigation</span>
                <button 
                  data-magnetic
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <div className="flex flex-col w-full" style={{ gap: '12px' }}>
                {mobileNavItems.map((item, idx) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03, type: "spring", stiffness: 260, damping: 22 }}
                    >
                      <Link
                        data-magnetic
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-4 py-2.5 px-4 rounded-2xl transition-all duration-200 select-none hover:bg-zinc-50 active:scale-[0.98]"
                        style={{ color: active ? '#D62020' : '#1A1A1A' }}
                      >
                        <item.Icon className="w-5 h-5" style={{ color: active ? '#D62020' : '#71717a' }} strokeWidth={2.2} />
                        <span className="font-semibold text-[15px] tracking-tight">{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-zinc-100 my-1" />

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full"
              >
                <Link 
                  data-magnetic
                  href="/contact" 
                  onClick={() => setMobileOpen(false)}
                  className="w-full h-12 flex items-center justify-center text-white font-semibold text-sm tracking-wide rounded-full transition-all duration-200 active:scale-95 shadow-[0_4px_14px_0_rgba(214,32,32,0.3)] hover:shadow-[0_6px_20px_0_rgba(214,32,32,0.4)]"
                  style={{ backgroundColor: '#D62020' }}
                >
                  Start a Project
                </Link>
              </motion.div>

              {/* Social icons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-3 w-full mt-1"
              >
                {mobileSocials.map((social) => (
                  <motion.a
                    data-magnetic
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, backgroundColor: '#D62020', color: '#ffffff', borderColor: '#D62020' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center transition-colors bg-white/50 backdrop-blur-sm"
                    style={{ color: '#1A1A1A' }}
                  >
                    <social.Icon className="w-4 h-4" strokeWidth={2.2} />
                  </motion.a>
                ))}
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HoverGradientNavBar;
