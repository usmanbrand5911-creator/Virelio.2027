'use client';

import React from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Tasks', href: '/tasks' },
  { label: 'Shop', href: '/shop' },
  { label: 'Orders', href: '/dashboard' },
  { label: 'Wallet', href: '/wallet' },
  { label: 'Withdrawal', href: '/withdrawal' },
];

export default function MobileNav() {
  return (
    <nav className="border-t border-white/10 bg-obsidian-950/90 backdrop-blur-md">
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar px-3 py-2 text-xs font-medium">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-white/5 border border-champagne-400/20 text-champagne-300 hover:bg-champagne-400/20 transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
