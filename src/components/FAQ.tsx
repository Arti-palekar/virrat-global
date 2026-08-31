"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const categories = {
  branding: "Branding & Printing",
  website: "Website & Software",
  marketing: "Digital Marketing",
  ai: "AI Automation",
  legal: "Legal Compliance",
  growth: "Business Growth",
};

type CategoryKey = keyof typeof categories;

const faqData: Record<CategoryKey, { question: string; answer: string }[]> = {
  branding: [
    {
      question: "Why is branding important for my business?",
      answer: "A strong brand builds trust, improves recognition, and helps customers remember your business."
    },
    {
      question: "Do you design logos?",
      answer: "Yes. We create premium logo identities, brand guidelines, and complete branding systems."
    },
    {
      question: "Can you design packaging?",
      answer: "Yes. We provide packaging, labels, and product branding."
    },
    {
      question: "Do you print business stationery?",
      answer: "Yes. We provide premium printing for business cards, brochures, letterheads, ID cards, and more."
    },
    {
      question: "Can you handle complete branding?",
      answer: "Yes. From concept to printing, we manage the complete branding process."
    }
  ],
  website: [
    {
      question: "How long does a website take?",
      answer: "Depending on the project, websites usually take between 2–8 weeks."
    },
    {
      question: "Do you build ERP software?",
      answer: "Yes. We build ERP, CRM, and custom business software."
    },
    {
      question: "Is the website mobile responsive?",
      answer: "Every website is fully responsive across desktop, tablet, and mobile."
    },
    {
      question: "Which technologies do you use?",
      answer: "React, Next.js, Laravel, Node.js, WordPress, and modern technologies."
    },
    {
      question: "Do you provide maintenance?",
      answer: "Yes. We offer monthly maintenance and support."
    }
  ],
  marketing: [
    {
      question: "Do you manage Google Ads?",
      answer: "Yes. We manage Search, Display, Shopping, and Performance Max campaigns."
    },
    {
      question: "Do you provide SEO?",
      answer: "Yes. We provide technical SEO, local SEO, and organic growth strategies."
    },
    {
      question: "Can you manage social media?",
      answer: "Yes. We handle Meta, Instagram, LinkedIn, and complete social media marketing."
    },
    {
      question: "How soon will I see results?",
      answer: "Paid campaigns generate faster results while SEO provides long-term growth."
    },
    {
      question: "Do you provide reports?",
      answer: "Yes. Monthly reports include leads, ROI, traffic, and campaign performance."
    }
  ],
  ai: [
    {
      question: "Can AI automate customer support?",
      answer: "Yes. We develop AI chatbots and automation workflows."
    },
    {
      question: "Do you integrate AI with CRM?",
      answer: "Yes. We integrate AI with CRM and business applications."
    },
    {
      question: "Can AI automate repetitive work?",
      answer: "Yes. AI can automate emails, workflows, reporting, and customer interactions."
    },
    {
      question: "Which AI tools do you use?",
      answer: "OpenAI, Gemini, Claude, automation APIs, and custom AI solutions."
    },
    {
      question: "Do you build AI assistants?",
      answer: "Yes. We build intelligent AI assistants for businesses."
    }
  ],
  legal: [
    {
      question: "Do you provide company registration?",
      answer: "Yes. We assist with company registration and legal compliance."
    },
    {
      question: "Can you register trademarks?",
      answer: "Yes. We provide trademark registration support."
    },
    {
      question: "Do you provide GST services?",
      answer: "Yes. GST registration, filing, and compliance support."
    },
    {
      question: "Can you help with annual filings?",
      answer: "Yes. We manage annual compliance and documentation."
    },
    {
      question: "Do you provide legal consultation?",
      answer: "Yes. We connect businesses with experienced legal professionals."
    }
  ],
  growth: [
    {
      question: "How do you help businesses grow?",
      answer: "Through branding, websites, AI, marketing, and business strategy."
    },
    {
      question: "Can you improve lead generation?",
      answer: "Yes. We focus on increasing quality leads and conversion rates."
    },
    {
      question: "Do you provide growth consulting?",
      answer: "Yes. We create customized business growth strategies."
    },
    {
      question: "Can you improve conversions?",
      answer: "Yes. Through UX improvements and digital optimization."
    },
    {
      question: "Do you provide long-term support?",
      answer: "Yes. We become your long-term digital growth partner."
    }
  ]
};

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`cursor-pointer border border-[#DCDCDC] rounded-[18px] mb-4 overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${isOpen ? 'bg-[#FFF5F5]' : 'bg-white'}`}
    >
      <div className="px-6 py-5 flex items-center justify-between">
        <p className={`m-0 font-semibold text-[1rem] leading-[1.5] transition-colors duration-300 ${isOpen ? 'text-[#E32222]' : 'text-[#111111]'}`}>
          {question}
        </p>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-4 ${isOpen ? 'text-[#E32222]' : 'text-[#666666]'}`}
        >
          <Plus size={22} />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-[#666666] text-[15px] md:text-[16px] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("branding");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // When changing category, reset the open accordion to the first item (or none)
  const handleCategoryChange = (key: CategoryKey) => {
    setActiveCategory(key);
    setOpenIndex(0);
  };

  return (
    <section className="w-full bg-[#FFFFFF] font-syne overflow-hidden py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="homepage-section-tag">
            Frequently Asked Questions
          </span>
          <h2 className="homepage-section-title mb-5">
            Everything You Need <br />
            <span>To Know.</span>
          </h2>
          <p className="homepage-section-subtitle text-center max-w-[760px] mx-auto">
            Find answers to the most common questions about our branding, website development, digital marketing, AI automation, legal compliance, and business growth services.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="w-full flex justify-center items-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center items-center gap-[14px] w-fit max-w-[95%] mx-auto px-[20px] overflow-visible flex-nowrap"
          >
          {(Object.entries(categories) as [CategoryKey, string][]).map(([key, label]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`relative min-w-max h-[44px] px-[22px] rounded-[10px] text-[15px] font-medium transition-all duration-[350ms] ease flex-shrink-0 whitespace-nowrap overflow-visible flex items-center justify-center border ${isActive ? 'text-white border-transparent' : 'text-[#666666] bg-[#FFFFFF] border-[#E5E5E5] hover:bg-[#F5F5F5] hover:border-[#D5D5D5] hover:text-[#111111]'}`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="faqActiveTabIndicator"
                    className="absolute inset-0 bg-[#222222] rounded-[10px] shadow-[0_10px_24px_rgba(0,0,0,0.1)] z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
          </motion.div>
        </div>

        {/* Accordions */}
        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {faqData[activeCategory].map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
