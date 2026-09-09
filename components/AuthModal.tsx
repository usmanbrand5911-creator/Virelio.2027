"use client";

import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function AuthModal() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [dpBase64, setDpBase64] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError("Image size must be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setDpBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: user.displayName || "Google User",
        email: user.email,
        phone: user.phoneNumber || "",
        photoURL: user.photoURL || "",
        createdAt: new Date().toISOString()
      }, { merge: true });

    } catch (err: any) {
      setError(err.message || "Failed to sign in with Google.");
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match!");
        }
        if (!fullName || !phone) {
          throw new Error("Please fill in all fields.");
        }

        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        if (fullName || dpBase64) {
          await updateProfile(user, {
            displayName: fullName,
            photoURL: dpBase64 || ""
          });
        }

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          fullName,
          email,
          phone,
          photoURL: dpBase64 || "",
          createdAt: new Date().toISOString()
        });
      }
    } catch (err: any) {
      setError(err.message || "Authentication error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl my-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-amber-400 tracking-wider">VIRELIO</h1>
          <p className="text-slate-400 text-sm mt-1">Please login or register to access the platform.</p>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-xl mb-6 border border-slate-800">
          <button
            type="button"
            onClick={() => { setIsLogin(true); setError(""); }}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${isLogin ? "bg-amber-500 text-black shadow" : "text-slate-400 hover:text-white"}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => { setIsLogin(false); setError(""); }}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${!isLogin ? "bg-amber-500 text-black shadow" : "text-slate-400 hover:text-white"}`}
          >
            Register
          </button>
        </div>

        {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs text-center">{error}</div>}

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <>
              <div className="flex flex-col items-center justify-center mb-2">
                <label className="cursor-pointer group relative">
                  <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-dashed border-amber-500/50 flex items-center justify-center overflow-hidden">
                    {dpBase64 ? (
                      <img src={dpBase64} alt="DP" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs text-amber-400 text-center px-1">Upload DP Photo</span>
                    )}
                  </div>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>

              <div>
                <label className="text-xs text-slate-300 mb-1 block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
                />
              </div>
            </>
          )}

          <div>
            <label className="text-xs text-slate-300 mb-1 block">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 mb-1 block">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="text-xs text-slate-300 mb-1 block">Confirm Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all text-sm mt-2 disabled:opacity-50"
          >
            {loading ? "Processing..." : isLogin ? "Login to Platform" : "Create Account"}
          </button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-2 text-slate-500">Or Continue With</span></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full py-2.5 px-4 bg-white text-gray-900 font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all text-sm shadow disabled:opacity-50"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
