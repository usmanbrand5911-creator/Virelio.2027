import React from 'react';
import { DollarSign, Users, ShoppingBag, CheckSquare } from 'lucide-react';

export default function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 rounded-2xl border border-slate-800">
        <h1 className="text-2xl font-extrabold text-white">System Dashboard</h1>
        <p className="text-xs text-slate-400 mt-1">Real-time stats across payments, tasks, and users.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <span className="text-xs font-semibold text-slate-400">Total Revenue</span>
            <DollarSign className="w-4 h-4" />
          </div>
          <p className="text-xl font-black text-white">Rs. 148,500</p>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-violet-400 mb-2">
            <span className="text-xs font-semibold text-slate-400">Active Tasks</span>
            <CheckSquare className="w-4 h-4" />
          </div>
          <p className="text-xl font-black text-white">34</p>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-cyan-400 mb-2">
            <span className="text-xs font-semibold text-slate-400">Products Sold</span>
            <ShoppingBag className="w-4 h-4" />
          </div>
          <p className="text-xl font-black text-white">182</p>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between text-pink-400 mb-2">
            <span className="text-xs font-semibold text-slate-400">Users Registered</span>
            <Users className="w-4 h-4" />
          </div>
          <p className="text-xl font-black text-white">1,240</p>
        </div>

      </div>
    </div>
  );
}
