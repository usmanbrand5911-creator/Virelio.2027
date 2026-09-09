'use client';
import React, { useState, useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASSCODE || 'admin123';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authState = sessionStorage.getItem('admin_authenticated');
      if (authState === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-yellow-400 text-slate-950 font-black rounded-2xl mx-auto flex items-center justify-center text-xl shadow-lg">
              🔐
            </div>
            <h1 className="text-2xl font-black text-white">Admin Security</h1>
            <p className="text-slate-400 text-xs">Enter your passcode to access the admin management panel.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Admin Passcode</label>
              <input 
                autoFocus
                type="password" 
                placeholder="Enter passcode " 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-yellow-400" 
              />
            </div>

            {error && (
              <p className="text-[11px] text-rose-400 font-semibold text-center">❌ Incorrect passcode! Please try again.</p>
            )}

            <button type="submit" className="w-full py-4 bg-yellow-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg hover:opacity-90 transition">
              Unlock Admin Panel
            </button>
          </form>
          
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
