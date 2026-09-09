import React from 'react';
import Link from 'next/link';
import FirebaseGoogleButton from '@/components/auth/FirebaseGoogleButton';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="glass-card w-full max-w-md p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black text-white">Welcome Back</h1>
          <p className="text-xs text-slate-400">Sign in to manage your Virelio account and wallet.</p>
        </div>

        {/* Firebase OAuth Button */}
        <FirebaseGoogleButton />

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800" /></div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-midnight-900 px-2 text-slate-500">Or credentials</span>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="user@virelio.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs shadow-lg hover:opacity-90 transition-all"
          >
            Sign In with Credentials
          </button>
        </form>

        <p className="text-center text-xs text-slate-500">
          Don't have an account?{' '}
          <Link href="/register" className="text-cyan-400 font-semibold hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}
