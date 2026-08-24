import React from 'react';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
});

export const metadata: Metadata = {
  title: "Jack -- 3D Creator",
};

export default function About2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${kanit.variable} about-2-container font-sans bg-[#0C0C0C] min-h-screen w-full text-[#D7E2EA] overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{__html: `
        .about-2-container {
          font-family: var(--font-kanit), sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .about-2-container *, .about-2-container *::before, .about-2-container *::after {
          box-sizing: inherit;
        }

        .about-2-container .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
        }

        /* Reset defaults for internal elements if needed */
        .about-2-container body {
          background-color: #0C0C0C;
          margin: 0;
          padding: 0;
        }
      `}} />
      <div className="w-full overflow-x-clip">
        {children}
      </div>
    </div>
  );
}
