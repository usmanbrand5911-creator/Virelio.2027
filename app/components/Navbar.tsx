'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem("virelio_current_user");
    if (user) {
      try { setCurrentUser(JSON.parse(user)); } catch (e) {}
    }
  }, []);

  const navLinks = [
    { name: "🏠 Home", href: "/" },
    { name: "⚡ Earn Tasks", href: "/tasks" },
    { name: "📊 My Earnings & History", href: "/earnings" },
    { name: "💰 Wallet & Withdrawal", href: "/wallet" },
    { name: "🛒 Shop Products", href: "/shop" },
    { name: "📰 Articles", href: "/articles" },
    { name: "🔥 Latest Articles", href: "/latest-articles" },
    { name: "📝 Blogs & Guest Posts", href: "/blogs" },
    { name: "📜 Terms & Conditions", href: "/terms" },
    { name: "🔒 Privacy Policy", href: "/privacy" },
    { name: "📞 Contact Us", href: "/contact" },
    { name: "🛡️ Admin Panel", href: "/admin" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 glass-panel border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-xl glass-panel text-gray-200 hover:text-emerald-400 transition"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
          
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center font-black text-black text-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              V
            </div>
            <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-300 to-cyan-300">
              VIRELIO
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          {currentUser ? (
            <div className="glass-panel px-3.5 py-1.5 rounded-2xl flex items-center space-x-2 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-300">Rs. {currentUser.balance || 100}</span>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link href="/login" className="px-3.5 py-1.5 text-xs font-bold glass-panel rounded-xl text-gray-300 hover:text-white transition">
                Login
              </Link>
              <Link href="/register" className="px-3.5 py-1.5 text-xs font-bold bg-emerald-500 text-black rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition">
                Register
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Slide-out Sidebar Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <div className="relative w-80 max-w-full glass-panel h-full shadow-2xl flex flex-col z-10 border-r border-emerald-500/30 bg-[#070b14]/95">
            <div className="p-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-400 text-black flex items-center justify-center font-black">V</div>
                <span className="font-black text-white text-base tracking-wider">VIRELIO MENU</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-lg font-bold">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1.5 no-scrollbar">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-2xl text-xs font-bold transition ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "text-gray-300 hover:text-emerald-300 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
