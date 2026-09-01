'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export interface Image {
  src: string;
  alt?: string;
  title?: string;
}

export interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images?: Image[];
}

const defaultImages: Image[] = [
  {
    src: '/images/gallery/service_branding_1788235190042.jpg',
    alt: 'Branding',
    title: 'Branding'
  },
  {
    src: '/images/gallery/service_printing_1788235201793.jpg',
    alt: 'Printing',
    title: 'Printing'
  },
  {
    src: '/images/gallery/service_marketing_1788235242785.jpg',
    alt: 'Marketing',
    title: 'Marketing'
  },
  {
    src: '/images/gallery/service_web_development_1788235258909.jpg',
    alt: 'Web Development',
    title: 'Web Development'
  },
  {
    src: '/images/gallery/service_packaging_1788235275320.jpg',
    alt: 'Packaging Design',
    title: 'Packaging Design'
  },
  {
    src: '/images/gallery/service_ai_automation_1788235288194.jpg',
    alt: 'AI + Automation',
    title: 'AI + Automation'
  },
  {
    src: '/images/gallery/service_compliance_1788235298395.jpg',
    alt: 'Compliance',
    title: 'Compliance'
  }
];

export function ZoomParallax({ images = defaultImages }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh] bg-[#FAF9F6] z-10">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt, title }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center pointer-events-none ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
            >
              <div className="relative h-[25vh] w-[25vw] group overflow-hidden rounded-lg shadow-2xl pointer-events-auto">
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                {title && (
                  <div 
                    className="absolute left-0 right-0 bottom-0 p-[24px] opacity-0 translate-y-[10px] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))' }}
                  >
                    <span className="text-white font-semibold text-[18px] inline-block">
                      {title}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ZoomParallax;
