'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-black text-white">Contact Us</h1>
      <p className="text-slate-400 text-sm">Have questions or need assistance? Reach out to our support team anytime.</p>
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 text-sm text-slate-300">
        <p>📧 Email: support@virelio.com</p>
        <p>📞 Phone: +92 300 1234567</p>
        <p>📍 Location: Lahore, Pakistan</p>
      </div>
    </div>
  );
}
