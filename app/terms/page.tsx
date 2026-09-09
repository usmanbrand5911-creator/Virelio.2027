'use client';
import React, { useState, useEffect } from 'react';

export default function PublicTerms() {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setContent(localStorage.getItem('admin_terms') || 'By accessing and using VIRELIO, you agree to comply with our community guidelines, task verification policies, and payout terms.');
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-black text-white">Terms & Conditions</h1>
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 text-sm leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}
