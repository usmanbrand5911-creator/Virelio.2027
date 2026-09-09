'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear login cookie
    document.cookie = "virelio_logged_in=; path=/; max-age=0";
    router.push('/login');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pb-6 border-b border-slate-800">
          <div className="h-20 w-20 rounded-full bg-slate-800 border-2 border-yellow-400 flex items-center justify-center text-2xl font-bold text-yellow-400 overflow-hidden">
            U
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold">User Account</h1>
            <p className="text-xs text-slate-400">user@example.com</p>
            <span className="inline-block mt-2 px-3 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs rounded-full font-medium">
              Verified Member
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <p className="text-xs text-slate-400 mb-1">Total Balance</p>
            <h3 className="text-lg font-bold text-yellow-400">$0.00</h3>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <p className="text-xs text-slate-400 mb-1">Completed Tasks</p>
            <h3 className="text-lg font-bold text-lime-400">0</h3>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <p className="text-xs text-slate-400 mb-1">Pending Proofs</p>
            <h3 className="text-lg font-bold text-cyan-400">0</h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Link href="/wallet" className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-xs font-medium rounded-xl border border-slate-700 transition">
            Go to Wallet
          </Link>
          <Link href="/withdraw" className="px-4 py-2 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl hover:opacity-90 transition">
            Withdraw Funds
          </Link>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-950/80 text-red-400 border border-red-500/30 text-xs font-medium rounded-xl hover:bg-red-900 transition ml-auto">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
