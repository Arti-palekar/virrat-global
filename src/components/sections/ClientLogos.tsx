"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  { src: "/media/clients/client1.png", alt: "Client 1" },
  { src: "/media/clients/client2.png", alt: "Client 2" },
  { src: "/media/clients/client3.png", alt: "Client 3" },
  { src: "/media/clients/client4.png", alt: "Client 4" },
  { src: "/media/clients/client1.png", alt: "Client 5" },
  { src: "/media/clients/client2.png", alt: "Client 6" },
  { src: "/media/clients/client3.png", alt: "Client 7" },
  { src: "/media/clients/client4.png", alt: "Client 8" }
];

export function ClientLogos() {
  return (
    <section className="py-24 overflow-hidden border-t border-black/5 bg-white">
      <style>{`
        @keyframes smooth-marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
      
      <div className="relative overflow-hidden w-full">
        <div 
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          style={{
            display: "flex",
            width: "max-content",
            animation: "smooth-marquee 30s linear infinite",
            willChange: "transform",
          }}
        >
          {/* Set 1 */}
          <div className="flex items-center gap-24 pr-24 py-4">
            {LOGOS.map((logo, i) => (
              <Image
                key={`set1-${i}`}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={64}
                className="h-12 md:h-16 w-auto object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 cursor-default"
                loading="lazy"
              />
            ))}
          </div>
          
          {/* Set 2 (Duplicate for seamless loop) */}
          <div aria-hidden="true" className="flex items-center gap-24 pr-24 py-4">
            {LOGOS.map((logo, i) => (
              <Image
                key={`set2-${i}`}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={64}
                className="h-12 md:h-16 w-auto object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 cursor-default"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
