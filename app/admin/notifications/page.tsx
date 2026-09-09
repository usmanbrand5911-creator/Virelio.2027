'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Submission {
  id: string;
  taskTitle: string;
  userName: string;
  proofText: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export default function AdminNotificationsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('task_submissions');
      if (saved) {
        setSubmissions(JSON.parse(saved));
      } else {
        setSubmissions([
          {
            id: '1',
            taskTitle: 'Follow TikTok Page & Like Video',
            userName: 'Ali Khan',
            proofText: 'Submitted screenshot link & username @alikhan',
            amount: 50,
            status: 'Pending'
          }
        ]);
      }
    }
  }, []);

  const handleAction = (id: string, newStatus: 'Approved' | 'Rejected') => {
    const updated = submissions.map(s => s.id === id ? { ...s, status: newStatus } : s);
    setSubmissions(updated);
    localStorage.setItem('task_submissions', JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Task Notifications & Submissions</h1>
          <p className="text-slate-400 text-xs">Review user proofs and approve tasks before reward payout.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="space-y-4">
        {submissions.length === 0 ? (
          <p className="text-slate-400 text-xs">No pending task submissions.</p>
        ) : (
          submissions.map(sub => (
            <div key={sub.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-white text-sm">{sub.taskTitle}</span>
                  <span className="px-2 py-0.5 rounded-lg bg-yellow-400/10 text-yellow-400 text-[10px] font-bold">Rs. {sub.amount}</span>
                </div>
                <p className="text-xs text-slate-300"><strong>User:</strong> {sub.userName}</p>
                <p className="text-xs text-slate-400"><strong>Proof:</strong> {sub.proofText}</p>
                <p className="text-[10px]">Status: <span className={`font-bold ${sub.status === 'Approved' ? 'text-emerald-400' : sub.status === 'Rejected' ? 'text-rose-400' : 'text-yellow-400'}`}>{sub.status}</span></p>
              </div>

              {sub.status === 'Pending' ? (
                <div className="flex space-x-2">
                  <button onClick={() => handleAction(sub.id, 'Approved')} className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-400">Approve</button>
                  <button onClick={() => handleAction(sub.id, 'Rejected')} className="px-4 py-2 bg-rose-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-rose-400">Reject</button>
                </div>
              ) : (
                <span className="text-xs font-bold text-slate-500 uppercase">{sub.status}</span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
