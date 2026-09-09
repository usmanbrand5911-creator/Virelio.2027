"use client";

import React, { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const inputPass = password.trim();
    if (inputPass === "Usman80456" || inputPass === "usman80456" || inputPass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect passcode! Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
        <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔐</span>
            </div>
            <h2 className="text-xl font-bold text-amber-400">Admin Security</h2>
            <p className="text-xs text-slate-400 mt-1">Enter your passcode to access the admin management panel.</p>
          </div>
          
          {error && <div className="mb-4 p-2.5 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs text-center">{error}</div>}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="text-xs text-slate-300 mb-1 block">Admin Passcode</label>
              <input
                type="password"
                required
                placeholder="Enter passcode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 text-sm transition-all shadow"
            >
              Unlock Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-amber-400">Admin Control Panel</h1>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded text-xs hover:bg-red-500/30"
        >
          Lock Admin
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <p className="text-xs text-slate-400">Total Users</p>
          <p className="text-2xl font-bold text-amber-400 mt-1">Active</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <p className="text-xs text-slate-400">Pending Withdrawals</p>
          <p className="text-2xl font-bold text-green-400 mt-1">0 Requests</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <p className="text-xs text-slate-400">System Status</p>
          <p className="text-2xl font-bold text-blue-400 mt-1">Online</p>
        </div>
      </div>
    </div>
  );
}
