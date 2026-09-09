'use client';
import Footer from "../components/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-6 max-w-6xl mx-auto w-full space-y-6">
        
        {/* Header Bar */}
        <div className="glass-card p-5 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Virelio Analytics Dashboard
            </h1>
            <p className="text-xs text-gray-400">Live platform stats & user activities</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold rounded-full">● Live System</span>
            <a href="/login" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl shadow-lg transition">Login / Register</a>
          </div>
        </div>

        {/* 4 Stat Widgets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 rounded-2xl border-l-4 border-l-cyan-400">
            <p className="text-xs text-gray-400">Total Users</p>
            <h3 className="text-2xl font-extrabold text-white mt-1">14,302</h3>
          </div>
          <div className="glass-card p-4 rounded-2xl border-l-4 border-l-purple-500">
            <p className="text-xs text-gray-400">Orders Processed</p>
            <h3 className="text-2xl font-extrabold text-white mt-1">167</h3>
          </div>
          <div className="glass-card p-4 rounded-2xl border-l-4 border-l-amber-400">
            <p className="text-xs text-gray-400">Active Tasks</p>
            <h3 className="text-2xl font-extrabold text-white mt-1">48</h3>
          </div>
          <div className="glass-card p-4 rounded-2xl border-l-4 border-l-emerald-400">
            <p className="text-xs text-gray-400">Total Earnings</p>
            <h3 className="text-2xl font-extrabold text-emerald-400 mt-1">$24,560</h3>
          </div>
        </div>

        {/* Activity & Management Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-5 rounded-2xl md:col-span-2 space-y-4">
            <h3 className="font-bold text-white text-sm">Website Activity & Engagement</h3>
            <div className="h-40 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xs text-purple-300">
              📊 Dynamic Real-Time Graph Visualization Active
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl space-y-4">
            <h3 className="font-bold text-white text-sm">Security Events</h3>
            <ul className="space-y-2 text-xs">
              <li className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between">
                <span className="text-gray-300">Google Auth Sign-In</span>
                <span className="text-emerald-400 font-bold">Passed</span>
              </li>
              <li className="p-2 bg-white/5 rounded-lg border border-white/5 flex justify-between">
                <span className="text-gray-300">Live Photo Upload</span>
                <span className="text-cyan-400 font-bold">Verified</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
