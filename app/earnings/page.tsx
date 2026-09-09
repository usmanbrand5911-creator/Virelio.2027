'use client';
import { useState, useEffect } from "react";

export default function EarningsPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [myTasks, setMyTasks] = useState<any[]>([]);
  const [myWithdrawals, setMyWithdrawals] = useState<any[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("virelio_current_user");
    if (user) {
      try { 
        const parsed = JSON.parse(user);
        setCurrentUser(parsed);
        
        // Load user task history
        const allTasks = JSON.parse(localStorage.getItem("virelio_pending_tasks") || "[]");
        const userTasks = allTasks.filter((t: any) => t.email === parsed.email || t.username === parsed.username);
        setMyTasks(userTasks);

        // Load user withdrawals
        const allWd = JSON.parse(localStorage.getItem("virelio_withdrawal_requests") || "[]");
        const userWd = allWd.filter((w: any) => w.email === parsed.email || w.username === parsed.username);
        setMyWithdrawals(userWd);
      } catch (e) {}
    }
  }, []);

  return (
    <div className="space-y-6 max-w-4xl mx-auto py-4">
      <div className="glass-panel p-8 rounded-3xl space-y-3 border-l-4 border-emerald-400">
        <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-300 to-cyan-300">
          My Earnings & Task History
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Track your completed tasks, pending approvals, rejections, and withdrawal logs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-3xl space-y-2 border border-emerald-500/20">
          <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Current Balance</div>
          <div className="text-3xl font-black text-emerald-400">Rs. {currentUser?.balance || 100}</div>
        </div>
        <div className="glass-panel p-6 rounded-3xl space-y-2 border border-cyan-500/20">
          <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Total Tasks Submitted</div>
          <div className="text-3xl font-black text-cyan-400">{myTasks.length}</div>
        </div>
      </div>

      {/* Task Submissions Section */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Submitted Task Status</h2>
        {myTasks.length === 0 ? (
          <div className="glass-panel p-8 text-center text-xs text-gray-400 rounded-2xl">No task submissions found yet. Start earning from the Tasks page!</div>
        ) : (
          <div className="space-y-3">
            {myTasks.map((t) => (
              <div key={t.id} className="glass-panel p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-white">{t.taskTitle}</div>
                  <div className="text-[11px] text-gray-400">Reward: Rs. {t.reward} • Proof: {t.proofText || "Image uploaded"}</div>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase ${
                    t.status === "Approved" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" :
                    t.status === "Rejected" ? "bg-red-500/20 text-red-300 border border-red-500/40" :
                    "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  }`}>
                    {t.status || "Pending Approval"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Withdrawal Requests Section */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Withdrawal Requests</h2>
        {myWithdrawals.length === 0 ? (
          <div className="glass-panel p-8 text-center text-xs text-gray-400 rounded-2xl">No withdrawal requests submitted.</div>
        ) : (
          <div className="space-y-3">
            {myWithdrawals.map((w) => (
              <div key={w.id} className="glass-panel p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-white">Amount: Rs. {w.amount} ({w.method})</div>
                  <div className="text-[11px] text-gray-400">Holder: {w.holderName} | CNIC: {w.cnic} | Phone: {w.phone}</div>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase ${
                    w.status === "Approved" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" :
                    w.status === "Rejected" ? "bg-red-500/20 text-red-300 border border-red-500/40" :
                    "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  }`}>
                    {w.status || "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
