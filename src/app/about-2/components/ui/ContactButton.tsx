import React from 'react';

export default function ContactButton() {
  return (
    <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer">
      Contact Me
    </button>
  );
}
