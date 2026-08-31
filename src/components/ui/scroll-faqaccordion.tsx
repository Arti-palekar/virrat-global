"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface ScrollFAQAccordionProps {
  data?: FAQItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export default function ScrollFAQAccordion({
  data = [],
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  // Register GSAP plugins
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // Set up GSAP animations
  useGSAP(() => {
    if (!containerRef.current || data.length === 0) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${data.length * 120}`, // reduced spacing to eliminate large gaps
        scrub: 0.3,
        pin: true,
        markers: false,
      },
    });

    data.forEach((item, index) => {
      const contentRef = contentRefs.current.get(item.id.toString());
      if (contentRef) {
        tl.add(() => {
          setOpenItem(item.id.toString());
        }, index * 2); // spacing between triggers
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  return (
    <div
      ref={containerRef}
      className={cn("max-w-4xl mx-auto text-center py-16", className)}
    >
      <h2 className="text-[40px] md:text-[56px] font-syne font-bold text-[#111111] leading-tight tracking-[-0.03em] mb-5">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        Find answers to common questions about our branding and printing services.
      </p>

      <Accordion.Root type="single" collapsible value={openItem || ""} onValueChange={setOpenItem}>
        {data.map((item) => (
          <Accordion.Item value={item.id.toString()} key={item.id} className="mb-6">
            <Accordion.Header>
              <Accordion.Trigger className="flex items-center justify-start gap-x-6 cursor-pointer outline-none group mb-2">
                <div
                  className={cn(
                    "relative flex items-center justify-center rounded-full px-6 py-3 transition-all duration-300",
                    "bg-[#E5E7EB] text-[#111111] font-medium text-[16px] md:text-[18px]",
                    questionClassName
                  )}
                >
                  <span className="text-left">
                    {item.question}
                  </span>
                </div>

                <span
                  className={cn(
                    "text-gray-500 flex-shrink-0 transition-colors duration-300",
                    openItem === item.id.toString() && "text-black"
                  )}
                >
                  {openItem === item.id.toString() ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                ref={(el) => {
                  if (el) contentRefs.current.set(item.id.toString(), el);
                }}
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex justify-end mt-3 mb-6">
                  <div
                    className={cn(
                      "relative max-w-[90%] md:max-w-[75%] rounded-[24px] rounded-tr-[8px] px-7 py-5 text-white text-[16px] md:text-lg bg-[#4FA0FF] text-left leading-relaxed",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
