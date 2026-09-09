"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("tasks");

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Action Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center hover:border-amber-500/50 transition-all cursor-pointer shadow-lg">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl font-bold">🔥</div>
          <h3 className="font-bold text-white text-sm">Action 1</h3>
          <p className="text-xs text-slate-400 mt-1">Boost & Earn</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center hover:border-amber-500/50 transition-all cursor-pointer shadow-lg">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl font-bold">⭐</div>
          <h3 className="font-bold text-white text-sm">Action 2</h3>
          <p className="text-xs text-slate-400 mt-1">Daily Reward</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center hover:border-amber-500/50 transition-all cursor-pointer shadow-lg">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl font-bold">💎</div>
          <h3 className="font-bold text-white text-sm">Action 3</h3>
          <p className="text-xs text-slate-400 mt-1">VIP Tier</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center hover:border-amber-500/50 transition-all cursor-pointer shadow-lg">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl font-bold">🚀</div>
          <h3 className="font-bold text-white text-sm">Action 4</h3>
          <p className="text-xs text-slate-400 mt-1">Quick Viral</p>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex flex-wrap gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
        <button
          onClick={() => setActiveTab("tasks")}
          className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === "tasks" ? "bg-amber-500 text-black shadow" : "text-slate-400 hover:text-white"}`}
        >
          Tasks
        </button>
        <Link href="/articles" className="px-5 py-2 text-sm font-semibold rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
          Articles/Blogs
        </Link>
        <Link href="/terms" className="px-5 py-2 text-sm font-semibold rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
          Terms
        </Link>
        <Link href="/privacy" className="px-5 py-2 text-sm font-semibold rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
          Privacy
        </Link>
        <Link href="/support" className="px-5 py-2 text-sm font-semibold rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
          Support
        </Link>
      </div>

      {/* Tab Content */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center shadow-xl">
        <h3 className="text-lg font-bold text-amber-400 mb-2">AVAILABLE TASKS</h3>
        <p className="text-slate-400 text-sm">No tasks available right now. Please check back later or try Action campaigns.</p>
      </div>
    </div>
  );
}
