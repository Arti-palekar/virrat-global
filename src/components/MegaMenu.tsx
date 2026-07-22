"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const MENU_DATA = [
  {
    title: 'Branding + Printing',
    items: [
      'Logo Design', 'Visiting Cards', 'Boucher', 'Flyer', 'Packaging', 
      'Bill Board', 'Standy flex', 'Stationery', 'Corporate Gifting', 
      'Uniforms', 'ID Cards', 'Badges'
    ],
    featured: {
      title: 'Complete Brand Identity',
      desc: 'Build a brand that speaks for itself with our comprehensive design suite.'
    }
  },
  {
    title: 'Digital Marketing',
    items: [
      'Social Media', 'Content', 'LinkedIn', 'SEO', 'Email', 'Influencer', 
      'Meta Ads', 'WhatsApp', 'Analytics', 'Performance', 'YouTube', 'Google Ads'
    ],
    featured: {
      title: 'Data-Driven Growth',
      desc: 'Accelerate your growth with targeted marketing campaigns.'
    }
  },
  {
    title: 'Web + Software',
    items: [
      'Business Website', 'CRM', 'Cloud', 'E-Commerce', 'ERP', 'API Integration', 
      'Custom Web Apps', 'UI/UX', 'CMS', 'Mobile App', 'Maintenance', 'Software Consulting'
    ],
    featured: {
      title: 'Enterprise Tech',
      desc: 'Scalable and secure software development tailored to your needs.'
    }
  },
  {
    title: 'AI + Automation',
    items: [
      'AI Chatbots', 'CRM Automation', 'Document Automation', 'AI Voice Agents', 
      'WhatsApp AI', 'AI Analytics', 'Workflow Automation', 'Email Automation', 
      'Custom AI', 'Business Process', 'AI Content', 'RPA'
    ],
    featured: {
      title: 'Future-Proof Operations',
      desc: 'Leverage AI to automate tasks and increase operational efficiency.'
    }
  },
  {
    title: 'Compliance',
    items: [
      'Company Registration', 'Trademark', 'ROC', 'GST', 'ISO', 'Accounting', 
      'MSME', 'IEC', 'Payroll', 'FSSAI', 'Shop & Establishment', 'Income Tax'
    ],
    featured: {
      title: 'Hassle-Free Legal',
      desc: 'Stay compliant and focus on your business while we handle the paperwork.'
    }
  }
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <nav className="hidden lg:flex items-center space-x-6 relative h-full">
      {MENU_DATA.map((menu, index) => (
        <div
          key={menu.title}
          className="h-full flex items-center"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="flex items-center space-x-1 text-sm font-medium text-slate-700 hover:text-primary transition-colors py-6">
            <span>{menu.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                activeMenu === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {activeMenu === index && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
              >
                <div className="flex">
                  {/* Left Column: Links */}
                  <div className="w-2/3 p-8 grid grid-cols-2 gap-y-4 gap-x-8">
                    {menu.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="text-sm text-slate-600 hover:text-primary hover:font-medium transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>

                  {/* Right Column: Featured */}
                  <div className="w-1/3 bg-slate-50 p-8 flex flex-col justify-center">
                    <h4 className="font-semibold text-slate-900 mb-2">{menu.featured.title}</h4>
                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                      {menu.featured.desc}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover group"
                    >
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
