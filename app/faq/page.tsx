'use client';
import React from 'react';

export default function FAQPage() {
  const faqs = [
    { q: 'How do I start earning on VIRELIO?', a: 'Simply sign in, browse available tasks on your dashboard, complete the required social interaction, and submit proof to earn instant cash.' },
    { q: 'What is the minimum withdrawal limit?', a: 'The minimum withdrawal limit is Rs. 500 across all supported payment gateways like JazzCash and EasyPaisa.' },
    { q: 'How long do withdrawals take?', a: 'Most withdrawal requests are processed instantly within 1 to 24 hours.' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-black text-white">Frequently Asked Questions</h1>
        <p className="text-sm text-slate-400">Got questions? We have answers.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="text-base font-bold text-white">{f.q}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
