"use client";

import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [activeAdminTab, setActiveAdminTab] = useState("overview");

  // Data states
  const [users, setUsers] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [withdrawals, setWithdrawals] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // Form inputs for new task/article
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskReward, setNewTaskReward] = useState("");
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleContent, setNewArticleContent] = useState("");

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const inputPass = password.trim();
    if (inputPass === "Usman80456" || inputPass === "usman80456" || inputPass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchAdminData();
    } else {
      setError("Incorrect passcode! Please try again.");
    }
  };

  const fetchAdminData = async () => {
    setLoadingData(true);
    try {
      // Fetch Users
      const usersSnap = await getDocs(collection(db, "users"));
      const usersList = usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);

      // Fetch Tasks if collection exists
      try {
        const tasksSnap = await getDocs(collection(db, "tasks"));
        setTasks(tasksSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        setTasks([
          { id: "1", title: "Follow on TikTok & Earn", reward: "$5.00", status: "Active" },
          { id: "2", title: "Join Telegram Channel", reward: "$2.50", status: "Active" }
        ]);
      }

      // Fetch Articles
      try {
        const articlesSnap = await getDocs(collection(db, "articles"));
        setArticles(articlesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        setArticles([
          { id: "1", title: "How to Maximize Your Reach in 2026", date: "Sep 9, 2026" }
        ]);
      }

      // Withdrawals mock or firestore
      setWithdrawals([
        { id: "w1", user: "John Doe", amount: "$50.00", status: "Pending" }
      ]);

    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle || !newTaskReward) return;
    try {
      const newTask = { title: newTaskTitle, reward: newTaskReward, status: "Active", createdAt: new Date().toISOString() };
      const docRef = await addDoc(collection(db, "tasks"), newTask);
      setTasks([...tasks, { id: docRef.id, ...newTask }]);
      setNewTaskTitle("");
      setNewTaskReward("");
      alert("Task added successfully!");
    } catch (err) {
      alert("Failed to add task.");
    }
  };

  const handleAddArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticleTitle || !newArticleContent) return;
    try {
      const newArt = { title: newArticleTitle, content: newArticleContent, date: new Date().toLocaleDateString() };
      const docRef = await addDoc(collection(db, "articles"), newArt);
      setArticles([...articles, { id: docRef.id, ...newArt }]);
      setNewArticleTitle("");
      setNewArticleContent("");
      alert("Article published successfully!");
    } catch (err) {
      alert("Failed to publish article.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
        <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔐</span>
            </div>
            <h2 className="text-xl font-bold text-amber-400">Master Admin Security</h2>
            <p className="text-xs text-slate-400 mt-1">Enter passcode to access full platform control.</p>
          </div>
          
          {error && <div className="mb-4 p-2.5 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs text-center">{error}</div>}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="text-xs text-slate-300 mb-1 block">Passcode</label>
              <input
                type="password"
                required
                placeholder="Enter passcode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 text-sm transition-all shadow"
            >
              Unlock Admin Hub
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <div>
          <h1 className="text-2xl font-black text-amber-400">Virelio Master Admin Control</h1>
          <p className="text-xs text-slate-400 mt-1">Full administrative access to all public panels, tasks, actions, users, and content.</p>
        </div>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-xs font-semibold hover:bg-red-500/30 transition-all"
        >
          Lock Admin Panel
        </button>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex flex-wrap gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
        {[
          { id: "overview", label: "📊 Overview" },
          { id: "users", label: "👥 Users Management" },
          { id: "tasks", label: "📋 Tasks Manager" },
          { id: "actions", label: "🔥 Actions (1-4)" },
          { id: "articles", label: "📝 Articles & Blogs" },
          { id: "content", label: "📄 Pages (Terms/Privacy)" },
          { id: "wallet", label: "💰 Wallet & Withdrawals" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeAdminTab === tab.id ? "bg-amber-500 text-black shadow" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {loadingData ? (
        <div className="p-12 text-center text-amber-400">Loading data from Firebase...</div>
      ) : (
        <div className="space-y-6">
          {/* 1. OVERVIEW TAB */}
          {activeAdminTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <p className="text-xs text-slate-400">Total Registered Users</p>
                  <p className="text-3xl font-black text-amber-400 mt-2">{users.length}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <p className="text-xs text-slate-400">Active Tasks</p>
                  <p className="text-3xl font-black text-blue-400 mt-2">{tasks.length}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <p className="text-xs text-slate-400">Published Articles</p>
                  <p className="text-3xl font-black text-purple-400 mt-2">{articles.length}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <p className="text-xs text-slate-400">Pending Withdrawals</p>
                  <p className="text-3xl font-black text-green-400 mt-2">{withdrawals.length}</p>
                </div>
              </div>
            </div>
          )}

          {/* 2. USERS MANAGEMENT TAB */}
          {activeAdminTab === "users" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-amber-400">Registered Users ({users.length})</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase">
                    <tr>
                      <th className="p-3">User</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Phone</th>
                      <th className="p-3">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {users.map((u: any) => (
                      <tr key={u.id} className="hover:bg-slate-800/50">
                        <td className="p-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden flex items-center justify-center font-bold text-amber-400">
                            {u.photoURL ? <img src={u.photoURL} className="w-full h-full object-cover" /> : u.fullName?.[0] || "U"}
                          </div>
                          <span className="font-semibold text-white">{u.fullName || "N/A"}</span>
                        </td>
                        <td className="p-3">{u.email}</td>
                        <td className="p-3">{u.phone || "N/A"}</td>
                        <td className="p-3">{new Date(u.createdAt || Date.now()).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. TASKS MANAGER TAB */}
          {activeAdminTab === "tasks" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-amber-400">Create New Task</h3>
                <form onSubmit={handleAddTask} className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-300 mb-1 block">Task Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Watch video & subscribe"
                      value={newTaskTitle}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 mb-1 block">Reward Amount</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., $3.00"
                      value={newTaskReward}
                      onChange={(e) => setNewTaskReward(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 text-sm transition-all shadow">
                    Publish Task to Public Panel
                  </button>
                </form>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-amber-400">Existing Tasks ({tasks.length})</h3>
                <div className="space-y-3">
                  {tasks.map((t: any) => (
                    <div key={t.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-white text-sm">{t.title}</h4>
                        <p className="text-xs text-amber-400 mt-1">Reward: {t.reward}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-lg border border-green-500/20">{t.status || "Active"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. ACTIONS (1-4) MANAGER TAB */}
          {activeAdminTab === "actions" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-amber-400">Configure Action Campaigns (Action 1 to Action 4)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-white text-sm">Action {num} Campaign</h4>
                      <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Active</span>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Campaign Target Link / Action URL</label>
                      <input type="text" placeholder="https://..." className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:border-amber-500 outline-none" defaultValue={`https://virelio.app/action-${num}`} />
                    </div>
                    <button className="px-4 py-1.5 bg-amber-500 text-black text-xs font-bold rounded hover:bg-amber-400">Save Changes</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. ARTICLES & BLOGS TAB */}
          {activeAdminTab === "articles" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-amber-400">Publish Article / Blog</h3>
                <form onSubmit={handleAddArticle} className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-300 mb-1 block">Article Title</label>
                    <input
                      type="text"
                      required
                      placeholder="Article heading..."
                      value={newArticleTitle}
                      onChange={(e) => setNewArticleTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 mb-1 block">Content Summary</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write article content here..."
                      value={newArticleContent}
                      onChange={(e) => setNewArticleContent(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 text-sm transition-all shadow">
                    Publish Article
                  </button>
                </form>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-amber-400">Published Articles ({articles.length})</h3>
                <div className="space-y-3">
                  {articles.map((art: any) => (
                    <div key={art.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <h4 className="font-bold text-white text-sm">{art.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{art.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 6. PAGES CONTENT (TERMS/PRIVACY/SUPPORT) TAB */}
          {activeAdminTab === "content" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-amber-400">Public Pages Content Editor</h3>
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-sm">Terms & Conditions Page Text</h4>
                  <textarea rows={3} className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-300" defaultValue="Welcome to Virelio. By accessing our platform, you agree to comply with our community guidelines." />
                  <button className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded">Update Terms</button>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-sm">Privacy Policy Page Text</h4>
                  <textarea rows={3} className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-300" defaultValue="Your privacy is important to us. All data stored in Firebase Firestore is encrypted." />
                  <button className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded">Update Privacy</button>
                </div>
              </div>
            </div>
          )}

          {/* 7. WALLET & WITHDRAWALS TAB */}
          {activeAdminTab === "wallet" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-amber-400">Withdrawal Requests</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase">
                    <tr>
                      <th className="p-3">User</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {withdrawals.map((w: any) => (
                      <tr key={w.id}>
                        <td className="p-3 font-semibold text-white">{w.user}</td>
                        <td className="p-3 text-amber-400 font-bold">{w.amount}</td>
                        <td className="p-3"><span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 rounded">{w.status}</span></td>
                        <td className="p-3 flex gap-2">
                          <button className="px-2.5 py-1 bg-green-500/20 text-green-400 rounded font-semibold">Approve</button>
                          <button className="px-2.5 py-1 bg-red-500/20 text-red-400 rounded font-semibold">Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
