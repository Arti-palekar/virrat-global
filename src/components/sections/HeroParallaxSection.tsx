"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const SERVICES_DATA = [
  {
    title: "Branding + Printing",
    description: "• Logo Design\n• Brand Identity\n• Print Collateral\n• Packaging Design",
    link: "/services#branding",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
  {
    title: "Digital Marketing",
    description: "• SEO\n• Google Ads\n• Meta Ads\n• Social Media Marketing",
    link: "/services#marketing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "Web + Software",
    description: "• Website Development\n• Custom Software\n• ERP / CRM\n• Mobile Applications",
    link: "/services#web-software",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
  {
    title: "AI + Automation",
    description: "• AI Chatbots\n• Workflow Automation\n• Business Intelligence\n• AI Integrations",
    link: "/services#ai-automation",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
  },
  {
    title: "Compliance",
    description: "• Company Registration\n• GST\n• Trademark\n• ISO & Legal Compliance",
    link: "/services#compliance",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
];

export const HeroParallaxSection = () => {
  // Use the 5 navigation services
  const featuredServices = SERVICES_DATA;
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Smooth transition as it comes into full view
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 1], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-700, 0]),
    springConfig
  );

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
      <div className="max-w-[1600px] mx-auto px-6">
        <Header style={{ rotateX, rotateZ, translateY, opacity }} />

        {/* Responsive Grid Layout wrapped in 3D animation */}
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8"
        >
          {featuredServices.map((product, idx) => (
            <ProductCard product={product} key={product.title} delay={idx * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Header = ({ style }: { style?: any }) => {
  return (
    <div className="w-full mb-16 md:mb-20 [perspective:1000px] [transform-style:preserve-3d]">
      <motion.div style={style} className="[transform-style:preserve-3d]">
        <h2 className="text-sm font-medium tracking-widest text-[#d62020] uppercase mb-6">
          Our Services
        </h2>
        <h2 className="homepage-section-title">
          Solutions built <br />
          <span>for every business.</span>
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-[#555555] leading-relaxed mt-8">
          Showcase our premium services through an immersive interactive gallery that highlights our expertise across branding, marketing, software, AI, and business solutions.
        </p>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  delay
}: {
  product: {
    title: string;
    description: string;
    link: string;
    thumbnail: string;
  };
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -16 }}
      className="group/product aspect-[3/4] w-full relative rounded-[32px] overflow-hidden bg-white shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100 cursor-pointer"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-[0_40px_70px_rgba(0,0,0,0.15)] h-full w-full transition-shadow duration-500"
      >
        <img
          src={product.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 group-hover/product:scale-110 transition-transform duration-700 ease-out"
          alt={product.title}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent opacity-80 group-hover/product:opacity-95 transition-opacity duration-500"></div>

        {/* Hover Content */}
        <div className="absolute bottom-0 left-0 w-full p-7 md:p-8 flex flex-col justify-end">
          <p className="card-title text-white font-heading transition-transform duration-500">
            {product.title}
          </p>
          <div className="grid grid-rows-[0fr] group-hover/product:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
            <div className="overflow-hidden">
              <div className="pt-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 delay-[50ms]">
                <p className="text-white/85 text-[15px] lg:text-[16px] font-medium mb-6 leading-[1.6] whitespace-pre-line">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                  Explore Service <ArrowUpRight className="w-5 h-5 text-[#d62020]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
