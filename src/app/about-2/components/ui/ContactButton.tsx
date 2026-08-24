import React from 'react';

export default function ContactButton() {
  return (
    <button 
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest relative hover:opacity-90 transition-opacity duration-200"
      style={{
        background: 'linear-gradient(135deg, #E10600 0%, #B00000 100%)',
        boxShadow: '0px 4px 12px rgba(225, 6, 0, 0.25)',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px'
      }}
    >
      Contact Me
    </button>
  );
}
