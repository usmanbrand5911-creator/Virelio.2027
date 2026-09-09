import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="glass-card w-full max-w-md p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black text-white">Create Account</h1>
          <p className="text-xs text-slate-400">Join Virelio to start purchasing or completing tasks.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Username</label>
            <input
              type="text"
              placeholder="vireliouser"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="user@virelio.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold text-xs shadow-lg hover:opacity-90 transition-all"
          >
            Create Free Account
          </button>
        </form>

        <p className="text-center text-xs text-slate-500">
          Already registered?{' '}
          <Link href="/login" className="text-violet-400 font-semibold hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
