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
    <div className={`${kanit.variable} font-sans bg-[#0C0C0C] min-h-screen w-full text-white overflow-x-hidden`}>
      <style dangerouslySetInnerHTML={{__html: `
        .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}} />
      {children}
    </div>
  );
}
