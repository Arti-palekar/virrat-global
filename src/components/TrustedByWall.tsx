'use client';

import React, { useEffect, useRef } from 'react';

const LOGOS = [
  // Row of well-known tech & business brands with SVG-compatible official logos via simple favicon/logo CDN
  { name: 'Google', url: 'https://logo.clearbit.com/google.com', color: '#4285F4' },
  { name: 'Microsoft', url: 'https://logo.clearbit.com/microsoft.com', color: '#00A4EF' },
  { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com', color: '#FF9900' },
  { name: 'Adobe', url: 'https://logo.clearbit.com/adobe.com', color: '#FF0000' },
  { name: 'Shopify', url: 'https://logo.clearbit.com/shopify.com', color: '#96BF48' },
  { name: 'Razorpay', url: 'https://logo.clearbit.com/razorpay.com', color: '#3395FF' },
  { name: 'Zoho', url: 'https://logo.clearbit.com/zoho.com', color: '#E42527' },
  { name: 'Hostinger', url: 'https://logo.clearbit.com/hostinger.com', color: '#673DE6' },
  { name: 'Intel', url: 'https://logo.clearbit.com/intel.com', color: '#0071C5' },
  { name: 'Oracle', url: 'https://logo.clearbit.com/oracle.com', color: '#F80000' },
  { name: 'Dell', url: 'https://logo.clearbit.com/dell.com', color: '#007DB8' },
  { name: 'Salesforce', url: 'https://logo.clearbit.com/salesforce.com', color: '#00A1E0' },
  { name: 'HubSpot', url: 'https://logo.clearbit.com/hubspot.com', color: '#FF7A59' },
  { name: 'Atlassian', url: 'https://logo.clearbit.com/atlassian.com', color: '#0052CC' },
  { name: 'Stripe', url: 'https://logo.clearbit.com/stripe.com', color: '#635BFF' },
  { name: 'Slack', url: 'https://logo.clearbit.com/slack.com', color: '#4A154B' },
  { name: 'GitHub', url: 'https://logo.clearbit.com/github.com', color: '#24292E' },
  { name: 'Figma', url: 'https://logo.clearbit.com/figma.com', color: '#F24E1E' },
  { name: 'DigitalOcean', url: 'https://logo.clearbit.com/digitalocean.com', color: '#0080FF' },
  { name: 'Cloudflare', url: 'https://logo.clearbit.com/cloudflare.com', color: '#F48120' },
  { name: 'Docker', url: 'https://logo.clearbit.com/docker.com', color: '#2496ED' },
  { name: 'NVIDIA', url: 'https://logo.clearbit.com/nvidia.com', color: '#76B900' },
  { name: 'OpenAI', url: 'https://logo.clearbit.com/openai.com', color: '#10A37F' },
  { name: 'Meta', url: 'https://logo.clearbit.com/meta.com', color: '#0082FB' },
  { name: 'HP', url: 'https://logo.clearbit.com/hp.com', color: '#0096D6' },
];

// Duplicate for infinite scroll
const LOGOS_DOUBLED = [...LOGOS, ...LOGOS];

interface LogoCardProps {
  name: string;
  url: string;
  color: string;
  style?: React.CSSProperties;
}

function LogoCard({ name, url, color, style }: LogoCardProps) {
  return (
    <div
      className="logo-card group"
      style={style}
      title={name}
    >
      <div
        className="logo-card-inner"
        style={{ '--accent': color } as React.CSSProperties}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={`${name} logo`}
          width={44}
          height={44}
          className="logo-img"
          onError={(e) => {
            // Fallback: show initials if logo fails
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div
          className="logo-fallback"
          style={{ display: 'none', background: color + '15', color: color }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      </div>
      <span className="logo-name">{name}</span>
    </div>
  );
}

export function TrustedByWall() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let pos1 = 0;
    let pos2 = 0;
    const speed = 0.4;

    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    const totalWidth1 = row1.scrollWidth / 2;
    const totalWidth2 = row2.scrollWidth / 2;

    const animate = () => {
      pos1 -= speed;
      pos2 += speed;
      if (Math.abs(pos1) >= totalWidth1) pos1 = 0;
      if (pos2 >= totalWidth2) pos2 = 0;

      row1.style.transform = `translateX(${pos1}px)`;
      row2.style.transform = `translateX(${-totalWidth2 + pos2}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const row1Logos = LOGOS_DOUBLED.slice(0, LOGOS_DOUBLED.length);
  const row2Logos = [...LOGOS_DOUBLED].reverse();

  return (
    <section className="trusted-wall-section">
      <style>{`
        .trusted-wall-section {
          background: #FFFFFF;
          padding: 80px 0;
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          position: relative;
        }

        /* Fade edges */
        .trusted-wall-section::before,
        .trusted-wall-section::after {
          content: '';
          position: absolute;
          top: 0;
          width: 180px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }
        .trusted-wall-section::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, transparent 100%);
        }
        .trusted-wall-section::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, transparent 100%);
        }

        .trusted-wall-header {
          text-align: center;
          padding: 0 24px;
          margin-bottom: 56px;
        }

        .trusted-wall-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #D62020;
          margin-bottom: 16px;
        }

        .trusted-wall-title {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 800;
          color: #09090b;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .trusted-wall-subtitle {
          font-size: clamp(14px, 1.8vw, 17px);
          color: #71717a;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .trusted-wall-track-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow: hidden;
        }

        .trusted-wall-row {
          display: flex;
          gap: 16px;
          will-change: transform;
        }

        .logo-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: default;
          flex-shrink: 0;
        }

        .logo-card-inner {
          width: 88px;
          height: 88px;
          background: #f9f9f9;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
          overflow: hidden;
          padding: 16px;
        }

        .logo-card:hover .logo-card-inner {
          transform: translateY(-5px) scale(1.06);
          box-shadow: 0 12px 32px rgba(0,0,0,0.10);
          border-color: var(--accent, #D62020);
        }

        .logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          display: block;
          filter: grayscale(20%);
          transition: filter 0.3s ease;
        }

        .logo-card:hover .logo-img {
          filter: grayscale(0%);
        }

        .logo-fallback {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .logo-name {
          font-size: 11px;
          font-weight: 600;
          color: #a1a1aa;
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        .logo-card:hover .logo-name {
          color: #09090b;
        }

        .trusted-wall-cta {
          text-align: center;
          margin-top: 52px;
          padding: 0 24px;
        }

        .trusted-wall-cta p {
          font-size: 15px;
          color: #71717a;
          margin-bottom: 20px;
        }

        .trusted-wall-cta a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #D62020;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.25s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 20px rgba(214,32,32,0.25);
        }

        .trusted-wall-cta a:hover {
          background: #B51A1A;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(214,32,32,0.35);
        }

        .trusted-wall-cta a svg {
          transition: transform 0.25s ease;
        }

        .trusted-wall-cta a:hover svg {
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .trusted-wall-section { padding: 60px 0; }
          .trusted-wall-header { margin-bottom: 40px; }
          .logo-card-inner { width: 72px; height: 72px; border-radius: 16px; padding: 12px; }
          .logo-img { width: 36px; height: 36px; }
          .trusted-wall-track-wrap { gap: 14px; }
          .trusted-wall-section::before,
          .trusted-wall-section::after { width: 80px; }
        }
      `}</style>

      <div className="trusted-wall-header">
        <p className="trusted-wall-eyebrow">Trusted Partners</p>
        <h2 className="trusted-wall-title">
          Trusted by Businesses<br />Across Industries
        </h2>
        <p className="trusted-wall-subtitle">
          Helping startups, SMEs, enterprises, and organizations build, automate, and scale with confidence.
        </p>
      </div>

      <div className="trusted-wall-track-wrap">
        {/* Row 1 — scrolls left */}
        <div
          ref={row1Ref}
          className="trusted-wall-row"
          style={{ transform: 'translateX(0px)' }}
        >
          {row1Logos.map((logo, i) => (
            <LogoCard key={`r1-${i}`} name={logo.name} url={logo.url} color={logo.color} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div
          ref={row2Ref}
          className="trusted-wall-row"
        >
          {row2Logos.map((logo, i) => (
            <LogoCard key={`r2-${i}`} name={logo.name} url={logo.url} color={logo.color} />
          ))}
        </div>
      </div>

      <div className="trusted-wall-cta">
        <p>Join the growing family of businesses that trust Virrat Global.</p>
        <a href="/contact">
          Start a Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default TrustedByWall;
