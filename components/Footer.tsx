"use client";

import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Footer() {
  const [config, setConfig] = useState({
    email: "support@virelio.app",
    phone: "+92 300 1234567",
    address: "Tech Hub, Lahore, Pakistan",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    instagram: "https://instagram.com"
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const docRef = doc(db, "settings", "footerConfig");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setConfig((prev) => ({ ...prev, ...docSnap.data() }));
        }
      } catch (err) {
        console.error("Error loading footer config:", err);
      }
    };
    fetchConfig();
  }, []);

  return (
    <footer className="border-t border-slate-800 bg-slate-900/90 backdrop-blur py-12 px-6 mt-16 text-slate-300 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & About */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-black px-2.5 py-0.5 rounded-full font-black text-sm">V</span>
            <span className="text-white font-black tracking-wider">VIRELIO</span>
          </div>
          <p className="text-xs text-slate-400">
            Secure, decentralized platform empowering creators with advanced tools and campaigns.
          </p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Virelio. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider text-amber-400">Contact Us</h4>
          <div className="space-y-2 text-xs">
            <p className="flex items-center gap-2">
              <span>📧</span> <a href={`mailto:${config.email}`} className="hover:text-amber-400 transition-colors">{config.email}</a>
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span> <a href={`tel:${config.phone}`} className="hover:text-amber-400 transition-colors">{config.phone}</a>
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span> <span>{config.address}</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider text-amber-400">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-xs">
            <a href="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="/support" className="hover:text-amber-400 transition-colors">Customer Support</a>
            <a href="/articles" className="hover:text-amber-400 transition-colors">Articles & Blogs</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider text-amber-400">Connect With Us</h4>
          <div className="flex items-center gap-3 pt-1">
            <a href={config.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-red-600 text-white rounded-xl flex items-center justify-center transition-all shadow" title="YouTube">
              <span className="text-xs font-bold">YT</span>
            </a>
            <a href={config.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all shadow" title="Facebook">
              <span className="text-xs font-bold">FB</span>
            </a>
            <a href={config.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-black border border-slate-700 text-white rounded-xl flex items-center justify-center transition-all shadow" title="TikTok">
              <span className="text-xs font-bold">TK</span>
            </a>
            <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-pink-600 text-white rounded-xl flex items-center justify-center transition-all shadow" title="Instagram">
              <span className="text-xs font-bold">IG</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
