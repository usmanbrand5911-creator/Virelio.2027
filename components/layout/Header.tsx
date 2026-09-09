'use client';

import React from 'react';
import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-champagne-400/20 bg-obsidian-950/80">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-champagne-400 flex items-center justify-center font-bold text-champagne-400 text-sm">
            V
          </div>
          <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gold-gradient">
            VIRELIO
          </span>
        </Link>

        <div className="flex-1 max-w-sm mx-2">
          <input
            type="text"
            placeholder="Search products, tasks, articles..."
            className="w-full px-4 py-1.5 rounded-full text-xs glass-input focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/wallet"
            className="px-3 py-1 rounded-full glass-panel border border-champagne-400/30 text-xs font-semibold text-champagne-300"
          >
            Rs. 0
          </Link>
          <Link
            href="/login"
            className="px-3 py-1.5 rounded-lg bg-gold-gradient text-obsidian-950 font-bold text-xs"
          >
            Login
          </Link>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
