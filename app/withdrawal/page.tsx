'use client';
import { useState } from "react";
import Footer from "../components/Footer";

export default function WithdrawalPage() {
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [method, setMethod] = useState("Easypaisa");

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Withdrawal Request Submitted Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-6 max-w-md mx-auto w-full my-auto space-y-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center">
          Withdraw Funds
        </h1>

        <div className="glass-card p-6 rounded-2xl space-y-4">
          <form onSubmit={handleWithdraw} className="space-y-3">
            <div>
              <label className="block text-xs text-gray-300 mb-1">Select Payment Method</label>
              <select 
                value={method} 
                onChange={(e) => setMethod(e.target.value)}
                className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white outline-none"
              >
                <option value="Easypaisa" className="bg-slate-900">Easypaisa</option>
                <option value="JazzCash" className="bg-slate-900">JazzCash</option>
                <option value="Bank" className="bg-slate-900">Bank Transfer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">Account Number / IBAN</label>
              <input 
                type="text" 
                required
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="03001234567"
                className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">Amount (PKR)</label>
              <input 
                type="number" 
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Min 500 PKR"
                className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white outline-none"
              />
            </div>

            <button type="submit" className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs rounded-xl shadow-lg">
              Submit Withdrawal Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
