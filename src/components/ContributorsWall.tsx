'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ─── 26 individually extracted client logos ─────────────── */
const clientLogos = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  src: `/client-logos/${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

/* ─── Animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Single Logo Card ────────────────────────────────────── */
function LogoCard({ logo }: { logo: { id: number; src: string; alt: string } }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -5,
        boxShadow:
          '0 12px 36px -4px rgba(0,0,0,0.12), 0 4px 16px -2px rgba(0,0,0,0.06)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #ECECEC',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px -2px rgba(0,0,0,0.06)',
        cursor: 'default',
        transition: 'box-shadow 0.3s ease',
        aspectRatio: '3/2',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={160}
          height={70}
          style={{
            maxHeight: '70px',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            userSelect: 'none',
          }}
          draggable={false}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export function ContributorsWall() {
  return (
    <section
      style={{
        width: '100%',
        background: '#FAF9F6',
        padding: '96px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <h2
            style={{
              fontSize: '17px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: '#111111',
              whiteSpace: 'nowrap',
              margin: 0,
            }}
          >
            Trusted by Leading Businesses
          </h2>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'rgba(0,0,0,0.1)',
            }}
          />
        </div>

        <p
          style={{
            fontSize: '14px',
            color: '#6B7280',
            marginBottom: '48px',
            lineHeight: '1.6',
            maxWidth: '520px',
          }}
        >
          Trusted by hospitals, healthcare organizations, startups, SMEs and enterprises across India.
        </p>

        {/* ── Logo Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            gap: '16px',
          }}
          className="client-logo-grid"
        >
          {clientLogos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}
        </motion.div>
      </div>

      {/* ── Responsive Grid CSS ── */}
      <style>{`
        @media (max-width: 1023px) {
          .client-logo-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 639px) {
          .client-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ContributorsWall;
