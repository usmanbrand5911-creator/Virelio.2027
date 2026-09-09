'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminFloatingButton() {
  const [whatsapp, setWhatsapp] = useState('+923217351168');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 sm:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-extrabold screenshot-gradient">Floating Action Button Settings</h1>
          <Link href="/admin/dashboard" className="text-xs text-cyan-400 hover:underline">← Dashboard</Link>
        </div>
        <form onSubmit={handleSave} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
          {saved && <div className="p-3 bg-green-500/20 text-green-400 text-xs rounded-xl">Floating button settings updated!</div>}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-2">WhatsApp Support Number / Link</label>
            <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#facc15] via-[#a3e635] to-[#38bdf8] text-gray-950 font-bold rounded-xl text-sm">Save Button Settings</button>
        </form>
      </div>
    </div>
  );
}
