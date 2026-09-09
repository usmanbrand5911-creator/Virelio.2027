'use client';

import React from 'react';

export default function WhatsAppButton() {
  const waUrl = "https://wa.me/923107306812?text=Hello%20VIRELIO%20Support";

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-all"
    >
      <span className="font-bold text-xs">WhatsApp Support</span>
    </a>
  );
}
