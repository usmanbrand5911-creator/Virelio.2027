'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminTermsPrivacy() {
  const [terms, setTerms] = useState('');
  const [privacy, setPrivacy] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTerms(localStorage.getItem('admin_terms') || 'By accessing and using VIRELIO, you agree to comply with our community guidelines, task verification policies, and payout terms.');
      setPrivacy(localStorage.getItem('admin_privacy') || 'Your privacy is important to us. VIRELIO collects only necessary account details and transaction data to process rewards.');
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('admin_terms', terms);
    localStorage.setItem('admin_privacy', privacy);
    alert('Terms & Conditions and Privacy Policy updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Terms & Privacy Management</h1>
          <p className="text-slate-400 text-xs">Update your website legal policies which display on public pages.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>

      <form onSubmit={handleSave} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Terms & Conditions Content</label>
          <textarea rows={6} value={terms} onChange={(e) => setTerms(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-yellow-400"></textarea>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Privacy Policy Content</label>
          <textarea rows={6} value={privacy} onChange={(e) => setPrivacy(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"></textarea>
        </div>

        <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-yellow-400 to-cyan-400 text-slate-950 font-bold text-xs rounded-2xl shadow-lg">
          Save Legal Policies
        </button>
      </form>
    </div>
  );
}
