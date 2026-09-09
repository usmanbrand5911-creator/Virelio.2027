'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-champagne-400/20 bg-obsidian-950 text-gray-400 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="text-base font-bold text-champagne-400">VIRELIO</h3>
          <p className="leading-relaxed">
            Empower your story, amplify your influence. Premium obsidian luxury interface for growth & earning.
          </p>
          <p className="text-champagne-300">03107306812</p>
        </div>

        <div>
          <h4 className="font-bold text-champagne-300 uppercase mb-3">Product</h4>
          <ul className="space-y-2">
            <li><Link href="/shop">Shop Feed</Link></li>
            <li><Link href="/tasks">Earning Tasks</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-champagne-300 uppercase mb-3">Earning</h4>
          <ul className="space-y-2">
            <li><Link href="/wallet">My Wallet</Link></li>
            <li><Link href="/withdrawal">Withdrawal (Min Rs. 300)</Link></li>
            <li><Link href="/tasks">Task History</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-champagne-300 uppercase mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 mt-8 pt-4 text-center text-gray-500">
        © 2026 VIRELIO Platform. All rights reserved.
      </div>
    </footer>
  );
}
