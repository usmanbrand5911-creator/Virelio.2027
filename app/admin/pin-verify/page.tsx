'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPinVerify() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Invalid Secret Security PIN.');
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-sm glass-panel p-6 rounded-2xl text-center space-y-4">
        <h2 className="text-xl font-bold text-champagne-300">Secret Admin Gate</h2>
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <form onSubmit={handleVerify} className="space-y-3">
          <input
            type="password"
            placeholder="Enter Secret PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full px-4 py-2 text-center rounded-xl glass-input text-lg tracking-widest"
          />
          <button type="submit" className="w-full py-2 bg-gold-gradient text-obsidian-950 font-bold rounded-xl text-xs">
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
