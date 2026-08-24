import React from 'react';

export default function LiveProjectButton() {
  return (
    <button className="rounded-full border-2 border-[var(--about-primary-red)] text-[var(--about-primary-red)] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[var(--about-light-red)] transition-colors">
      Live Project
    </button>
  );
}
