'use client';
import React from 'react';
import Link from 'next/link';

export default function WalletPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-white">My Wallet</h1>
          <p className="text-sm text-slate-400">Manage your earnings and transaction history.</p>
        </div>
        <Link href="/withdraw" className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-yellow-400 via-lime-400 to-cyan-400 text-slate-950 font-bold text-xs shadow-lg hover:opacity-90 transition">
          Withdraw Funds
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-2">
          <p className="text-xs text-slate-400">Available Balance</p>
          <h3 className="text-3xl font-black text-emerald-400">Rs. 3,450</h3>
        </div>
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-2">
          <p className="text-xs text-slate-400">Total Earned</p>
          <h3 className="text-3xl font-black text-yellow-400">Rs. 12,800</h3>
        </div>
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-2">
          <p className="text-xs text-slate-400">Pending Verification</p>
          <h3 className="text-3xl font-black text-cyan-400">Rs. 250</h3>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-white">Task Reward: YouTube Subscription</h4>
              <p className="text-[11px] text-slate-400">June 27, 2026 • JazzCash</p>
            </div>
            <span className="text-sm font-black text-emerald-400">+Rs. 50</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-white">Withdrawal Transfer</h4>
              <p className="text-[11px] text-slate-400">June 22, 2026 • EasyPaisa</p>
            </div>
            <span className="text-sm font-black text-red-400">-Rs. 1,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
