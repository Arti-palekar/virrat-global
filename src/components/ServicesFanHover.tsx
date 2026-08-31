'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  href: string;
  images: string[];
}

const services: Service[] = [
  {
    title: "Branding + Printing",
    description: "Creative Branding • Print Design • Packaging",
    href: "/branding-printing",
    images: [
      "/images/services/branding_user_1.png",
      "/images/services/branding_user_2.png",
      "/images/services/branding_user_3.png",
      "/images/services/branding_2.png",
      "/images/services/branding_3.png"
    ]
  },
  {
    title: "Digital Marketing",
    description: "SEO • Google Ads • Social Media Growth",
    href: "/digital-marketing",
    images: [
      "/images/services/marketing_1.png",
      "/images/services/marketing_2.png",
      "/images/services/marketing_3.png",
      "/images/services/marketing_4.png",
      "/images/services/marketing_5.png"
    ]
  },
  {
    title: "Web + Software",
    description: "Web Apps • Ecommerce • Custom Software",
    href: "/web-software",
    images: [
      "/images/services/web_1.png",
      "/images/services/web_2.png",
      "/services/web-dashboard.png",
      "/services/web-ecommerce.png",
      "/services/web-website.png"
    ]
  },
  {
    title: "AI + Automation",
    description: "AI Agents • Automation • Smart Workflows",
    href: "/ai-automation",
    images: [
      "/services/ai-chatbot.png",
      "/services/ai-workflow.png",
      "/portfolio/portfolio_ai_automation_1784618242113.png",
      "/services/compliance-dashboard.png",
      "/images/services/web_1.png"
    ]
  },
  {
    title: "Compliance",
    description: "ISO • Legal • Business Compliance",
    href: "/compliance",
    images: [
      "/services/compliance-legal.png",
      "/images/portfolio/badges.png",
      "/images/portfolio/id_cards.png",
      "/images/services/corporate-stationery.webp",
      "/images/services/corporate-merchandise.webp"
    ]
  }
];

export function ServicesFanHover() {
  return (
    <section className="bg-[#FAF9F6] text-[#09090b] font-sans px-6 sm:px-10 relative z-10 border-t border-black/5 py-16 md:py-24">
      {/* Component Scoped CSS Styles for fan-out animations */}
      <style>{`
        .fan-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 30px;
          overflow: visible;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: transform .35s cubic-bezier(0.22, 1, 0.36, 1), border-color .35s ease, box-shadow .35s ease;
        }
        .fan-card:hover {
          z-index: 20;
          transform: translateY(-4px);
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
        }

        .fan-stack {
          position: relative;
          height: 190px;
          margin-bottom: 25px;
        }

        .fan-chip {
          position: absolute;
          top: 0;
          left: 50%;
          width: 120px;
          height: 165px;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          transition: transform .5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .5s ease;
          will-change: transform;
        }

        /* Default resting state — shallow fan */
        .fan-chip:nth-child(1) { transform: translate(calc(-50% - 68px), 8px)  rotate(-9deg) scale(0.92); z-index: 1; }
        .fan-chip:nth-child(2) { transform: translate(calc(-50% - 35px), 3px)  rotate(-5deg) scale(0.95); z-index: 2; }
        .fan-chip:nth-child(3) { transform: translate(-50%, 0)                 rotate(0deg)  scale(1);    z-index: 4; }
        .fan-chip:nth-child(4) { transform: translate(calc(-50% + 35px), 3px)  rotate(5deg)  scale(0.95); z-index: 2; }
        .fan-chip:nth-child(5) { transform: translate(calc(-50% + 68px), 8px)  rotate(9deg)  scale(0.92); z-index: 1; }

        /* Fan-out on hover */
        .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 194px), -10px) rotate(-18deg) scale(1); z-index: 3; }
        .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 100px),  -5px) rotate(-9deg)  scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(3) { transform: translate(-50%, -15px) rotate(0deg) scale(1.05); z-index: 5; }
        .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 100px),  -5px) rotate(9deg)   scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 194px), -10px) rotate(18deg)  scale(1); z-index: 3; }

        .fan-card:hover .fan-chip { box-shadow: 0 16px 32px rgba(0,0,0,0.45); }

        @media (max-width: 560px) {
          .fan-chip { width: 100px; height: 135px; }
          .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 113px), -8px) rotate(-14deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 56px), -3px) rotate(-7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 56px), -3px) rotate(7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 113px), -8px) rotate(14deg) scale(1); }
        }
      `}</style>

      <div className="max-w-[1360px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">Our Services</h2>
          <p className="text-zinc-500 text-base">
            Hover a service to preview the work behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1360px] mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="fan-card group block">
              <div className="fan-stack">
                {service.images.map((imgUrl, imgIdx) => (
                  <Image
                    key={imgIdx}
                    src={imgUrl}
                    alt={`${service.title} preview ${imgIdx + 1}`}
                    width={120}
                    height={165}
                    className="fan-chip object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="text-[21px] font-semibold mb-2 text-[#111111] font-heading leading-tight group-hover:text-[#D62020] transition-colors">
                {service.title}
              </div>
              <div className="text-[#666666] text-[15px] font-body leading-relaxed">
                {service.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesFanHover;
