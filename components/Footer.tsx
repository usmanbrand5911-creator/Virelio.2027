'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer({
  socialLinks = {
    youtube: '#',
    instagram: '#',
    facebook: '#',
    tiktok: '#'
  }
}: {
  socialLinks?: { youtube?: string; instagram?: string; facebook?: string; tiktok?: string }
}) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Social Icons */}
        <div>
          <Logo className="h-10 w-auto mb-4" />
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            #1 Micro Tasking & Cash Rewards Platform. Complete simple tasks and earn cash instantly.
          </p>

          <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Follow Us</h5>
          <div className="flex items-center space-x-3">
            {/* YouTube */}
            <a href={socialLinks.youtube || '#'} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-500 hover:border-red-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>

            {/* Instagram */}
            <a href={socialLinks.instagram || '#'} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-500 hover:border-pink-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            {/* Facebook */}
            <a href={socialLinks.facebook || '#'} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-500 hover:border-blue-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            {/* TikTok */}
            <a href={socialLinks.tiktok || '#'} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.26 1.59-1.14 2.57.08.83.58 1.6 1.3 2.02.73.43 1.65.51 2.44.22.95-.33 1.64-1.18 1.83-2.16.03-.31.04-.63.04-.95V.02z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Explore</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/tasks" className="hover:text-yellow-400">Available Tasks</Link></li>
            <li><Link href="/articles" className="hover:text-yellow-400">Articles & News</Link></li>
            <li><Link href="/blogs" className="hover:text-yellow-400">Latest Blogs</Link></li>
            <li><Link href="/wallet" className="hover:text-yellow-400">My Wallet</Link></li>
            <li><Link href="/withdraw" className="hover:text-yellow-400">Withdraw Funds</Link></li>
          </ul>
        </div>

        {/* Support & Pages */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Support & Legal</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/faq" className="hover:text-yellow-400">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-yellow-400">Terms of Service</Link></li>
            <li><Link href="/admin" className="hover:text-yellow-400">Admin Dashboard</Link></li>
          </ul>
        </div>

        {/* Status */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Platform Status</h4>
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs px-3 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Systems Operational</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/80 mt-8 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} VIRELIO. All rights reserved.
      </div>
    </footer>
  );
}
