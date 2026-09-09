"use client";

import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import "./globals.css";
import AuthModal from "@/components/AuthModal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <html lang="en">
        <body className="bg-slate-950 text-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-amber-400 font-semibold">Loading Virelio Platform...</p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col justify-between">
        {!user ? (
          <AuthModal />
        ) : (
          <div className="flex flex-col min-h-screen">
            <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-40">
              <Link href="/" className="text-2xl font-black text-amber-400 flex items-center gap-2">
                <span className="bg-amber-400 text-black px-2 py-0.5 rounded-full text-lg">V</span> VIRELIO
              </Link>
              <div className="flex items-center gap-3">
                <Link href="/" className="text-sm text-slate-300 hover:text-amber-400 font-medium px-2">Home</Link>
                <Link href="/wallet" className="bg-amber-500 text-black font-semibold px-4 py-1.5 rounded-lg text-sm hover:bg-amber-400">Wallet</Link>
                <Link href="/admin" className="bg-slate-800 text-amber-400 font-semibold px-4 py-1.5 rounded-lg text-sm border border-slate-700">Admin</Link>
                <button 
                  onClick={() => signOut(auth)} 
                  className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1.5 rounded-lg text-sm hover:bg-red-500/30 font-semibold"
                >
                  Logout
                </button>
              </div>
            </header>

            <main className="flex-grow">
              {children}
            </main>

            <Footer />
            <WhatsAppButton />
          </div>
        )}
      </body>
    </html>
  );
}
