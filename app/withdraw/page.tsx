'use client';
import React from 'react';
import Link from 'next/link';

export default function WithdrawPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
      <h1 className="text-4xl font-black text-white">Withdraw Funds</h1>
      <p className="text-slate-400 text-sm">Withdraw your earnings directly to your Easypaisa, JazzCash, or Bank Account.</p>
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <p className="text-sm text-yellow-400 font-semibold">Manage and withdraw your funds from your Wallet page.</p>
        <Link href="/wallet" className="inline-block px-6 py-3 bg-yellow-400 text-slate-950 font-bold rounded-xl text-sm">Go to Wallet</Link>
      </div>
    </div>
  );
}
