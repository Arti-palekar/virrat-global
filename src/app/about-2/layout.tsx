import React from 'react';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
});

export default function About2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${kanit.variable} about-2-container font-sans bg-[var(--about-off-white)] min-h-screen w-full text-[var(--about-main-text)] overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{__html: `
        .about-2-container {
          --about-primary-red: #C62828;
          --about-dark-red: #8E1B1B;
          --about-bright-red: #E53935;
          --about-light-red: #FDECEC;
          --about-white: #FFFFFF;
          --about-off-white: #FAFAFA;
          --about-main-text: #1F1F1F;
          --about-secondary-text: #666666;
          --about-border: #E5E5E5;
        }
        .about-2-container .hero-heading {
          background: linear-gradient(180deg, #E53935 0%, #8E1B1B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}} />
      {children}
    </div>
  );
}
