/**
 * Shared services data — single source of truth for navigation & Services section cards.
 * Images: AI-generated (local /services/...) + premium curated Unsplash for remaining slots.
 * Update here to keep navigation and cards in sync automatically.
 */

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  /** 5 images — one per sub-service chip in the fan stack */
  images: [string, string, string, string, string];
  alts: [string, string, string, string, string];
  /** 3 service highlights shown below the title */
  highlights: [string, string, string];
}

export const SERVICE_CARDS: ServiceCard[] = [
  // ── Branding + Printing ─────────────────────────────────────────────────────
  {
    title: "Branding + Printing",
    description: "Logo, identity, packaging & print.",
    href: "/branding-printing",
    images: [
      "/services/branding-logo.png",       // AI: Modern Logo Design
      "/services/branding-card.png",        // AI: Luxury Business Card Mockup
      "/services/branding-packaging.png",   // AI: Premium Packaging Design
      // Premium Unsplash for remaining 2 slots:
      "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=400&q=80&auto=format&fit=crop",  // Corporate Brand Identity Kit
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80&auto=format&fit=crop",  // Brochure / Stationery
    ],
    alts: [
      "Modern logo design on MacBook",
      "Luxury matte black business card mockup",
      "Premium packaging design on marble surface",
      "Corporate brand identity kit and stationery",
      "Brochure and brand collateral design",
    ],
    highlights: ['Logo Design', 'Packaging', 'Print Solutions'],
  },

  // ── Digital Marketing ────────────────────────────────────────────────────────
  {
    title: "Digital Marketing",
    description: "SEO, ads, social & analytics.",
    href: "/digital-marketing",
    images: [
      "/services/marketing-seo.png",        // AI: SEO Analytics Dashboard
      "/services/marketing-social.png",     // AI: Social Media Marketing
      "/services/marketing-ads.png",        // AI: Google Ads Campaign
      // Premium Unsplash for remaining 2 slots:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80&auto=format&fit=crop",  // Meta Ads / Social Dashboard
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&auto=format&fit=crop",     // Marketing Performance Analytics
    ],
    alts: [
      "SEO analytics dashboard on MacBook",
      "Social media marketing content workspace",
      "Google Ads campaign management dashboard",
      "Meta Ads and social media dashboard",
      "Marketing performance analytics report",
    ],
    highlights: ['SEO', 'Google Ads', 'Social Media'],
  },

  // ── Web + Software ───────────────────────────────────────────────────────────
  {
    title: "Web + Software",
    description: "Websites, apps & custom software.",
    href: "/web-software",
    images: [
      "/services/web-website.png",          // AI: Premium Corporate Website
      "/services/web-ecommerce.png",        // AI: E-commerce Store UI
      "/services/web-dashboard.png",        // AI: Enterprise SaaS Dashboard
      // Premium Unsplash for remaining 2 slots:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80&auto=format&fit=crop",  // CRM / ERP Dashboard
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&auto=format&fit=crop",  // Custom Software Development
    ],
    alts: [
      "Premium corporate website on MacBook",
      "E-commerce store UI with product grid",
      "Enterprise SaaS platform dashboard dark mode",
      "CRM and ERP management dashboard",
      "Custom software development and code",
    ],
    highlights: ['Web Apps', 'E-Commerce', 'CRM / ERP'],
  },

  // ── AI + Automation ──────────────────────────────────────────────────────────
  {
    title: "AI + Automation",
    description: "Chatbots, workflows & AI agents.",
    href: "/ai-automation",
    images: [
      "/services/ai-chatbot.png",           // AI: Futuristic AI Chatbot Interface
      "/services/ai-workflow.png",          // AI: Workflow Automation Dashboard
      // Premium Unsplash for remaining 3 slots (quota was hit):
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80&auto=format&fit=crop",  // AI Analytics / ML Dashboard
      "https://images.unsplash.com/photo-1611746872915-64bbc8a60a76?w=400&q=80&auto=format&fit=crop",  // WhatsApp Automation Platform
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80&auto=format&fit=crop",  // Machine Learning / AI Business
    ],
    alts: [
      "AI chatbot interface with neural network",
      "Enterprise workflow automation flowchart",
      "AI machine learning analytics dashboard",
      "WhatsApp business automation platform",
      "Machine learning and AI business assistant",
    ],
    highlights: ['AI Agents', 'Automation', 'Integrations'],
  },

  // ── Compliance ───────────────────────────────────────────────────────────────
  {
    title: "Compliance",
    description: "Registration, GST, trademark & more.",
    href: "/compliance",
    images: [
      "/services/compliance-dashboard.png", // AI: Business Compliance Dashboard
      "/services/compliance-legal.png",     // AI: Legal Documentation Desk
      // Premium Unsplash for remaining 3 slots (quota was hit):
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80&auto=format&fit=crop",   // ISO Certification
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80&auto=format&fit=crop", // Legal Documentation
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80&auto=format&fit=crop", // Audit & Risk Management
    ],
    alts: [
      "Business compliance dashboard with metrics",
      "Professional legal documents on clean desk",
      "ISO certification and compliance process",
      "Legal documentation and contract management",
      "Audit and risk management professional",
    ],
    highlights: ['ISO Certification', 'Legal', 'Registration'],
  },
];
