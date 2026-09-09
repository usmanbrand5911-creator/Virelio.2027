'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tasks', href: '/tasks' },
    { name: 'Submit Proof', href: '/submit-proof' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Articles', href: '/articles' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Wallet', href: '/wallet' },
    { name: 'Withdraw', href: '/withdraw' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <nav className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-4 py-3 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Logo className="h-9 sm:h-11 w-auto" />
        </Link>

        <div className="hidden xl:flex items-center space-x-3.5 text-xs font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-yellow-400 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/register" className="hidden sm:inline-block px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-yellow-400 via-lime-400 to-cyan-400 rounded-lg shadow-md hover:opacity-90 transition">
            Get Started
          </Link>

          <Link href="/profile" aria-label="Profile" className="flex items-center justify-center h-9 w-9 rounded-full bg-slate-800 border border-slate-700 hover:border-yellow-400 transition overflow-hidden">
            <span className="text-sm font-bold text-yellow-400">U</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden border-t border-slate-800 mt-3 pt-3 pb-4 space-y-1.5 px-2 bg-slate-950 max-h-[75vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <Link href="/login" onClick={() => setIsOpen(false)} className="text-center py-2 text-slate-300 hover:text-white text-sm">
              Login
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)} className="text-center py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-yellow-400 via-lime-400 to-cyan-400 rounded-lg">
              Register →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
