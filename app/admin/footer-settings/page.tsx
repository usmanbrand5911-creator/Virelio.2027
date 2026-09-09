'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminFooterSettings() {
  const [email, setEmail] = useState('usmanbrand5911@gmail.com');
  const [phone, setPhone] = useState('+92 3217351168');
  const [address, setAddress] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [youtube, setYoutube] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('site_footer_settings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.phone) setPhone(parsed.phone);
        if (parsed.address) setAddress(parsed.address);
        if (parsed.tiktok) setTiktok(parsed.tiktok);
        if (parsed.youtube) setYoutube(parsed.youtube);
        if (parsed.facebook) setFacebook(parsed.facebook);
        if (parsed.instagram) setInstagram(parsed.instagram);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const settings = { email, phone, address, tiktok, youtube, facebook, instagram };
    localStorage.setItem('site_footer_settings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-4 sm:p-8">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400">
            Footer & Contact Settings
          </h1>
          <Link href="/admin/dashboard" className="text-xs text-cyan-400 hover:underline">
            ← Dashboard
          </Link>
        </div>

        <form onSubmit={handleSave} className="bg-gray-900/90 border border-gray-800 rounded-2xl p-5 space-y-4 shadow-xl">
          {saved && (
            <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs rounded-xl font-medium">
              ✓ Settings Saved Successfully!
            </div>
          )}

          {/* Support Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Support Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="usmanbrand5911@gmail.com" 
              className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500" 
            />
          </div>

          {/* Contact Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Contact Phone Number</label>
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="+92 3217351168" 
              className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500" 
            />
          </div>

          {/* Office Address */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Office / Location Address</label>
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              placeholder="Lahore, Punjab, Pakistan" 
              className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500" 
            />
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-800 pt-4 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Social Media Links</h2>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">TikTok Link</label>
              <input 
                type="url" 
                value={tiktok} 
                onChange={(e) => setTiktok(e.target.value)} 
                placeholder="https://tiktok.com/@yourusername" 
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">YouTube Link</label>
              <input 
                type="url" 
                value={youtube} 
                onChange={(e) => setYoutube(e.target.value)} 
                placeholder="https://youtube.com/@yourchannel" 
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Facebook Link</label>
              <input 
                type="url" 
                value={facebook} 
                onChange={(e) => setFacebook(e.target.value)} 
                placeholder="https://facebook.com/yourpage" 
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500" 
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Instagram Link</label>
              <input 
                type="url" 
                value={instagram} 
                onChange={(e) => setInstagram(e.target.value)} 
                placeholder="https://instagram.com/yourprofile" 
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 bg-gradient-to-r from-yellow-400 via-lime-400 to-cyan-400 text-gray-950 font-bold rounded-xl text-sm shadow-lg hover:opacity-95 transition mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
