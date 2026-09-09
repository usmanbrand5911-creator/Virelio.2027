'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [footerData, setFooterData] = useState({
    brandName: "VIRELIO",
    tagline: "The Ultimate Next-Gen Earning & Multi-Tasking Hub.",
    email: "alifarazmalik07@gmail.com",
    phone: "03107306812",
    address: "Lahore, Pakistan",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    copyright: "© 2026 VIRELIO. All rights reserved."
  });

  useEffect(() => {
    const saved = localStorage.getItem("virelio_footer_settings");
    if (saved) {
      try { setFooterData(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  return (
    <footer className="glass-panel border-t border-amber-500/30 mt-12 py-10 px-4 sm:px-8 bg-[#050811]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300">
            {footerData.brandName}
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">{footerData.tagline}</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-1.5 text-xs text-gray-300">
            <li><Link href="/articles" className="hover:text-amber-300 transition">Articles</Link></li>
            <li><Link href="/latest-articles" className="hover:text-amber-300 transition">Latest Articles</Link></li>
            <li><Link href="/blogs" className="hover:text-amber-300 transition">Blogs & Guest Posts</Link></li>
            <li><Link href="/tasks" className="hover:text-amber-300 transition">Earn Tasks</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">Legal & Support</h4>
          <ul className="space-y-1.5 text-xs text-gray-300">
            <li><Link href="/terms" className="hover:text-amber-300 transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-amber-300 transition">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300 transition">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">Contact Info</h4>
          <p className="text-xs text-gray-400">📧 {footerData.email}</p>
          <p className="text-xs text-gray-400">📞 {footerData.phone}</p>
          <p className="text-xs text-gray-400">📍 {footerData.address}</p>
          <div className="flex space-x-3 pt-2">
            <a href={footerData.facebook} target="_blank" className="text-xs text-amber-300 hover:underline">Facebook</a>
            <a href={footerData.instagram} target="_blank" className="text-xs text-amber-300 hover:underline">Instagram</a>
            <a href={footerData.youtube} target="_blank" className="text-xs text-amber-300 hover:underline">YouTube</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
        {footerData.copyright}
      </div>
    </footer>
  );
}
