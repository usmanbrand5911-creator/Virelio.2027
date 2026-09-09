'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminTaskProofsPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('virelio_task_submissions') || '[]');
    if (saved.length === 0) {
      setSubmissions([
        { id: 1, taskTitle: 'Follow TikTok Account', userEmail: 'user123@gmail.com', proofText: 'Completed and followed account. Screenshot attached.', time: '10 mins ago', status: 'Pending' }
      ]);
    } else {
      setSubmissions(saved);
    }
  }, []);

  const handleApprove = (id: number) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('virelio_task_submissions', JSON.stringify(updated));
    alert('Task proof approved and user wallet credited!');
  };

  const handleReject = (id: number) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('virelio_task_submissions', JSON.stringify(updated));
    alert('Task proof rejected.');
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold screenshot-gradient">Task Proofs Review</h1>
            <p className="text-xs text-gray-400 mt-1">Review user screenshot submissions and approve earnings</p>
          </div>
          <Link href="/admin" className="px-4 py-2 bg-gray-900 border border-gray-800 text-xs font-bold rounded-xl hover:bg-gray-800 transition">
            ← Back to Admin Dashboard
          </Link>
        </div>

        {submissions.length === 0 ? (
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-12 text-center text-gray-400">
            <p className="text-sm">No pending task proofs submitted by users.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold rounded-lg">{sub.taskTitle}</span>
                    <span className="text-xs text-gray-400">{sub.time}</span>
                  </div>
                  <p className="text-sm font-semibold text-white pt-1">User: <span className="text-emerald-400">{sub.userEmail}</span></p>
                  <p className="text-xs text-gray-300 bg-gray-950 p-3 rounded-xl border border-gray-800/60 mt-2">Proof: {sub.proofText}</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <button 
                    onClick={() => handleApprove(sub.id)}
                    className="px-4 py-2 bg-emerald-500 text-gray-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition"
                  >
                    Approve & Pay
                  </button>
                  <button 
                    onClick={() => handleReject(sub.id)}
                    className="px-4 py-2 bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold text-xs rounded-xl hover:bg-rose-500/20 transition"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
