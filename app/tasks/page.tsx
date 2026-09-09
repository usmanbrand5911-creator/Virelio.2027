'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TaskItem {
  id: string;
  title: string;
  link: string;
  amount: number;
  photo: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('admin_tasks') || localStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }

      const savedBal = localStorage.getItem('user_balance');
      if (savedBal) {
        setBalance(Number(savedBal));
      }
    }
  }, []);

  const handleStartTask = (task: TaskItem) => {
    // Open task link if available
    if (task.link && task.link !== '#') {
      window.open(task.link, '_blank');
    }
    
    // Reward user balance
    const newBal = balance + task.amount;
    setBalance(newBal);
    localStorage.setItem('user_balance', newBal.toString());
    
    alert(`Task completed! Earned Rs. ${task.amount}. Added to your wallet.`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      {/* Top Navbar */}
      <div className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center border-b border-slate-900">
        <Link href="/" className="font-black text-lg bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          VIRELIO
        </Link>
        <div className="flex items-center space-x-3">
          <Link href="/wallet" className="px-3 py-1.5 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl shadow">
            Wallet: Rs. {balance}
          </Link>
          <Link href="/admin" className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-cyan-400 font-bold text-xs rounded-xl">
            Admin
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-black">Available Tasks for You</h1>
          <p className="text-slate-400 text-xs">Complete tasks published by admin to earn instant cash rewards.</p>
        </div>

        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
              <p className="text-slate-400 text-xs italic">No tasks available right now. Check back later or add tasks from the admin panel.</p>
              <Link href="/admin" className="inline-block px-4 py-2 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl">
                Go to Admin Panel
              </Link>
            </div>
          ) : (
            tasks.map(task => (
              <div key={task.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <img src={task.photo} alt={task.title} className="w-14 h-14 rounded-xl object-cover border border-slate-700" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-white">{task.title}</h4>
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                      Rs. {task.amount}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => handleStartTask(task)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl shadow hover:opacity-90 transition"
                >
                  Start Task
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
