import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './globals.css';


  const handleGoogleLogin = async () => {
    try {
      const { auth } = await import("@/lib/firebase").catch(() => import("../lib/firebase"));
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google Auth Error:", err);
    }
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic Footer & Admin Settings State
  const [phoneText, setPhoneText] = useState('+92 300 1234567');
  const [emailText, setEmailText] = useState('support@virelio.com');
  const [locationText, setLocationText] = useState('Lahore, Pakistan');
  const [ytLink, setYtLink] = useState('https://youtube.com');
  const [igLink, setIgLink] = useState('https://instagram.com');
  const [fbLink, setFbLink] = useState('https://facebook.com');
  const [tkLink, setTkLink] = useState('https://tiktok.com');

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      setPhoneText(localStorage.getItem('admin_phone') || '+92 300 1234567');
      setEmailText(localStorage.getItem('admin_email') || 'support@virelio.com');
      setLocationText(localStorage.getItem('admin_location') || 'Lahore, Pakistan');
      setYtLink(localStorage.getItem('admin_youtube') || 'https://youtube.com');
      setIgLink(localStorage.getItem('admin_instagram') || 'https://instagram.com');
      setFbLink(localStorage.getItem('admin_facebook') || 'https://facebook.com');
      setTkLink(localStorage.getItem('admin_tiktok') || 'https://tiktok.com');
    }
  }, [pathname]);

  const isAdminPage = isMounted ? pathname?.startsWith('/admin') : false;

  // WhatsApp Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adminNum = typeof window !== 'undefined' ? (localStorage.getItem('admin_whatsapp') || '923001234567') : '923001234567';
    const text = `Hello VIRELIO Support,%0A*Name:* ${encodeURIComponent(fullName)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Message:* ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${adminNum}?text=${text}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-yellow-400 selection:text-slate-950 relative">
        
        {/* Global Header with All Navigation Links */}
        {!isAdminPage && (
          <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-500 via-blue-600 to-cyan-400 p-[2px] shadow-lg shadow-yellow-500/10">
                  <div className="h-full w-full bg-slate-950 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center font-black text-yellow-400 text-base tracking-tighter">
                      V
                    </div>
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-yellow-400 shadow-sm"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black bg-gradient-to-r from-yellow-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
                    VIRELIO
                  </span>
                  <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-blue-500 to-transparent rounded-full -mt-0.5"></div>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden xl:flex items-center space-x-4 text-xs font-semibold text-slate-300">
                <Link href="/" className={`hover:text-yellow-400 transition ${pathname === '/' ? 'text-yellow-400' : ''}`}>Home</Link>
                <Link href="/tasks" className={`hover:text-yellow-400 transition ${pathname === '/tasks' ? 'text-yellow-400' : ''}`}>Tasks</Link>
                <Link href="/articles" className={`hover:text-yellow-400 transition ${pathname === '/articles' ? 'text-yellow-400' : ''}`}>Articles</Link>
                <Link href="/blogs" className={`hover:text-yellow-400 transition ${pathname === '/blogs' ? 'text-yellow-400' : ''}`}>Blogs</Link>
                <Link href="/wallet" className={`hover:text-yellow-400 transition ${pathname === '/wallet' ? 'text-yellow-400' : ''}`}>Wallet</Link>
                <Link href="/withdraw" className={`hover:text-yellow-400 transition ${pathname === '/withdraw' ? 'text-yellow-400' : ''}`}>Withdraw</Link>
                <Link href="/faq" className={`hover:text-yellow-400 transition ${pathname === '/faq' ? 'text-yellow-400' : ''}`}>FAQ</Link>
                <Link href="/about" className={`hover:text-yellow-400 transition ${pathname === '/about' ? 'text-yellow-400' : ''}`}>About Us</Link>
                <Link href="/contact" className={`hover:text-yellow-400 transition ${pathname === '/contact' ? 'text-yellow-400' : ''}`}>Contact Us</Link>
                <Link href="/terms" className={`hover:text-yellow-400 transition ${pathname === '/terms' ? 'text-yellow-400' : ''}`}>Terms</Link>
                <Link href="/privacy" className={`hover:text-yellow-400 transition ${pathname === '/privacy' ? 'text-yellow-400' : ''}`}>Privacy</Link>
              </nav>

              <div className="flex items-center space-x-3">
                <Link href="/wallet" className="px-3.5 py-1.5 bg-yellow-400 text-slate-950 rounded-xl text-xs font-bold shadow-md hover:bg-yellow-300 transition">
                  Wallet
                </Link>
                <Link href="/admin" className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-semibold text-cyan-400 hover:bg-slate-800 transition">
                  Admin
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold"
                >
                  {mobileMenuOpen ? '✕ Close' : '☰ Menu'}
                </button>
              </div>
            </div>

            {/* Expanded Mobile / Tablet Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="xl:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 grid grid-cols-3 sm:grid-cols-4 gap-2 text-center text-xs font-semibold text-slate-300">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Home</Link>
                <Link href="/tasks" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Tasks</Link>
                <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Articles</Link>
                <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Blogs</Link>
                <Link href="/wallet" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Wallet</Link>
                <Link href="/withdraw" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Withdraw</Link>
                <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">FAQ</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">About Us</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Contact Us</Link>
                <Link href="/terms" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Terms</Link>
                <Link href="/privacy" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-yellow-400">Privacy</Link>
              </div>
            )}
          </header>
        )}

        {/* Main Content Area */}
        <main className="flex-1">
          {children}
        </main>

        {/* Floating WhatsApp Button */}
        {!isAdminPage && isMounted && (
          <>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/50 transition transform hover:scale-105"
              title="Chat with us on WhatsApp"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </button>

            {/* Modal Popup */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                <div className="w-full max-w-md p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-2xl relative">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-black text-white">Chat via WhatsApp</h3>
                    <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
                  </div>
                  <form onSubmit={handleWhatsAppSubmit} className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Full Name</label>
                      <input required type="text" placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Email Address</label>
                      <input required type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                      <input required type="text" placeholder="+92 300 1234567" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Message</label>
                      <textarea required rows={3} placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-yellow-400"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition">
                      Send to WhatsApp Chat
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        )}

        {/* Global Footer */}
        {!isAdminPage && (
          <footer className="bg-slate-900/60 border-t border-slate-800/80 pt-12 pb-8 mt-16 text-slate-400 text-xs">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              
              <div className="space-y-3">
                <span className="text-lg font-black bg-gradient-to-r from-yellow-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  VIRELIO
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  #1 Micro Tasking & Cash Rewards Platform. Complete simple tasks and earn cash instantly.
                </p>
                <div className="space-y-1.5 text-[11px] text-slate-300 pt-1">
                  <p>📞 Phone: {phoneText}</p>
                  <p>📧 Email: {emailText}</p>
                  <p>📍 Location: {locationText}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Explore</h4>
                <ul className="space-y-2 text-[11px]">
                  <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
                  <li><Link href="/tasks" className="hover:text-yellow-400 transition">Available Tasks</Link></li>
                  <li><Link href="/wallet" className="hover:text-yellow-400 transition">My Wallet</Link></li>
                  <li><Link href="/withdraw" className="hover:text-yellow-400 transition">Withdraw Funds</Link></li>
                  <li><Link href="/articles" className="hover:text-yellow-400 transition">Articles & Guides</Link></li>
                  <li><Link href="/blogs" className="hover:text-yellow-400 transition">Latest Blogs</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Support & Legal</h4>
                <ul className="space-y-2 text-[11px]">
                  <li><Link href="/faq" className="hover:text-yellow-400 transition">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
                  <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-yellow-400 transition">Terms of Service</Link></li>
                  <li><Link href="/admin" className="text-yellow-400/80 hover:text-yellow-400 font-semibold transition">Admin Dashboard</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Platform Status</h4>
                <div className="inline-flex items-center space-x-2 px-3 py-2 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-emerald-400 text-[11px] font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>All Systems Operational</span>
                </div>
              </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800/80 text-center text-[10px] text-slate-500">
              © 2026 VIRELIO. All rights reserved.
            </div>
          </footer>
        )}

      </body>
    </html>
  );
}
