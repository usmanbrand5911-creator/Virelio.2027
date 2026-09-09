'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface WithdrawalItem {
  id: string;
  userName: string;
  method: string;
  accountNo: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  date: string;
}

export default function AdminWithdrawals() {
  const [withdrawals, setWithdrawals] = useState<WithdrawalItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_withdrawals');
      if (saved) {
        setWithdrawals(JSON.parse(saved));
      } else {
        const initialWithdrawals: WithdrawalItem[] = [
          {
            id: '1',
            userName: 'Ali Khan',
            method: 'Easypaisa',
            accountNo: '03001234567',
            amount: 1500,
            status: 'Pending',
            date: '2026-06-07'
          },
          {
            id: '2',
            userName: 'Ahmed Raza',
            method: 'JazzCash',
            accountNo: '03019876543',
            amount: 800,
            status: 'Pending',
            date: '2026-06-06'
          }
        ];
        setWithdrawals(initialWithdrawals);
        localStorage.setItem('admin_withdrawals', JSON.stringify(initialWithdrawals));
      }
    }
  }, []);

  const handleAction = (id: string, newStatus: 'Approved' | 'Rejected') => {
    const updated = withdrawals.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setWithdrawals(updated);
    localStorage.setItem('admin_withdrawals', JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Withdrawal Requests</h1>
          <p className="text-slate-400 text-xs">Review and process cash payouts submitted by users from the public panel.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Pending & Processed Payouts ({withdrawals.length})</h2>
        {withdrawals.map(item => (
          <div key={item.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-bold text-white text-sm">{item.userName}</h4>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  item.status === 'Pending' ? 'bg-amber-500/10 text-amber-400' :
                  item.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-cyan-400 font-semibold">{item.method} — <span className="text-slate-300">{item.accountNo}</span></p>
              <p className="text-[10px] text-slate-500">Requested on: {item.date}</p>
            </div>
            
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Amount</span>
                <span className="font-bold text-yellow-400 text-sm">Rs. {item.amount}</span>
              </div>
              {item.status === 'Pending' ? (
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleAction(item.id, 'Approved')} 
                    className="px-3 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold rounded-xl border border-emerald-500/20 transition"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleAction(item.id, 'Rejected')} 
                    className="px-3 py-2 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 text-xs font-bold rounded-xl border border-rose-500/20 transition"
                  >
                    Reject
                  </button>
                </div>
              ) : (
                <span className="text-xs text-slate-500 font-semibold italic">Processed</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
