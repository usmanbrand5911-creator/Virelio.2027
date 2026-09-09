'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminSettings() {
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [youtube, setYoutube] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWhatsapp(localStorage.getItem('settings_whatsapp') || '+923001234567');
      setEmail(localStorage.getItem('settings_email') || 'support@virelio.com');
      setAddress(localStorage.getItem('settings_address') || 'Office #12, Tech Park, Lahore');
      setPhone(localStorage.getItem('settings_phone') || '+92 300 9876543');
      setYoutube(localStorage.getItem('settings_youtube') || 'https://youtube.com');
      setFacebook(localStorage.getItem('settings_facebook') || 'https://facebook.com');
      setInstagram(localStorage.getItem('settings_instagram') || 'https://instagram.com');
      setTwitter(localStorage.getItem('settings_twitter') || 'https://twitter.com');
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('settings_whatsapp', whatsapp);
    localStorage.setItem('settings_email', email);
    localStorage.setItem('settings_address', address);
    localStorage.setItem('settings_phone', phone);
    localStorage.setItem('settings_youtube', youtube);
    localStorage.setItem('settings_facebook', facebook);
    localStorage.setItem('settings_instagram', instagram);
    localStorage.setItem('settings_twitter', twitter);
    alert('Platform settings saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Platform Settings</h1>
          <p className="text-slate-400 text-xs">Configure WhatsApp floating button, footer contact info, and social links.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back
        </Link>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* WhatsApp Floating Button Settings */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-emerald-400">WhatsApp Floating Button</h2>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">WhatsApp Phone Number (with country code)</label>
            <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+923001234567" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
          </div>
        </div>

        {/* Footer Contact Details */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-yellow-400">Footer Contact Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Support Email (Gmail)</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="support@domain.com" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Contact Phone Number</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+92 300 0000000" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Office Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter office or business address..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <h2 className="text-base font-bold text-cyan-400">Social Media Links (Footer Icons)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">YouTube Link</label>
              <input type="text" value={youtube} onChange={(e) => setYoutube(e.target.value)} placeholder="https://youtube.com/..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Facebook Link</label>
              <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} placeholder="https://facebook.com/..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Instagram Link</label>
              <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="https://instagram.com/..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Twitter / X Link</label>
              <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="https://twitter.com/..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full py-4 bg-gradient-to-r from-yellow-400 to-cyan-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl hover:opacity-90 transition">
          Save All Settings
        </button>
      </form>
    </div>
  );
}
