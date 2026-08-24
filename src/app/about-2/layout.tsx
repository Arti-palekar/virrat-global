import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marcus — Bennet",
};

export default function About2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="about-2-container bg-black h-[100dvh] w-full overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://db.onlinewebfonts.com/c/95cecf452d3208890088a5b4c19c7ecf?family=Helvetica+Neue+ME');

        .about-2-container {
          --about-cream: #efeee9;
          font-family: 'Helvetica Neue ME', Helvetica, Arial, sans-serif;
        }

        .font-hn {
          font-family: 'Helvetica Neue ME', Helvetica, Arial, sans-serif;
        }

        .text-cream {
          color: #efeee9;
        }

        .bg-cream {
          background-color: #efeee9;
        }

        .border-cream {
          border-color: #efeee9;
        }

        /* Entrance Animations */
        .anim-fade-in {
          animation: fadeIn 1.2s ease-out both;
        }

        .anim-rise-in {
          animation: riseIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .anim-fade-up {
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .anim-line {
          animation: lineGrow 1.1s cubic-bezier(0.76, 0, 0.24, 1) both;
        }

        .marquee-track {
          animation: marqueeScroll 30s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(4vh) scale(1.03);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes marqueeScroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        /* Accessibility: prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .anim-fade-in, .anim-rise-in, .anim-fade-up, .anim-line {
            animation-duration: 0.01ms !important;
            animation-delay: 0s !important;
          }
          .marquee-track {
            animation-duration: 0.01ms !important;
          }
        }
      `}} />
      {children}
    </div>
  );
}
