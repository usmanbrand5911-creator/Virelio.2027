import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingBag, CheckSquare, Wallet, Settings } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 glass-card p-5 rounded-2xl h-fit space-y-2">
        <h2 className="text-xs font-bold uppercase text-slate-400 px-3 mb-3 tracking-wider">Admin Control</h2>
        
        <Link href="/admin" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <LayoutDashboard className="w-4 h-4" /> Overview
        </Link>
        <Link href="/admin/products" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800/80 transition-all">
          <ShoppingBag className="w-4 h-4" /> Products
        </Link>
        <Link href="/admin/tasks" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800/80 transition-all">
          <CheckSquare className="w-4 h-4" /> Tasks
        </Link>
        <Link href="/admin/withdrawals" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800/80 transition-all">
          <Wallet className="w-4 h-4" /> Withdrawals
        </Link>
        <Link href="/admin/settings" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800/80 transition-all">
          <Settings className="w-4 h-4" /> Site Settings
        </Link>
      </aside>

      {/* Main Admin View */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
