import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-midnight-950/80 backdrop-blur-lg pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <span className="text-2xl font-extrabold text-aurora">VIRELIO</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premium digital solutions, task earning ecosystem, and authentic e-commerce services wrapped in next-gen liquid glass design.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Platform</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/shop" className="hover:text-cyan-400 transition-colors">Digital Store</Link></li>
              <li><Link href="/tasks" className="hover:text-cyan-400 transition-colors">Micro Tasks</Link></li>
              <li><Link href="/wallet" className="hover:text-cyan-400 transition-colors">User Wallet</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Support</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Payments</h4>
            <p className="text-xs text-slate-400 mb-2">Supported local payout gateways:</p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-emerald-400">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">JazzCash</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">EasyPaisa</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Bank Transfer</span>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800/60 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Virelio Platform. All rights reserved. Built with Next.js & Firebase.
        </div>
      </div>
    </footer>
  );
}
