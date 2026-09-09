'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface UserItem {
  id: string;
  name: string;
  email: string;
  earnings: number;
  status: 'Active' | 'Banned';
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_users');
      if (saved) {
        setUsers(JSON.parse(saved));
      } else {
        const initialUsers: UserItem[] = [
          { id: '1', name: 'Ali Khan', email: 'alikhan@gmail.com', earnings: 1450, status: 'Active' },
          { id: '2', name: 'Ahmed Raza', email: 'ahmedraza@gmail.com', earnings: 820, status: 'Active' },
          { id: '3', name: 'Bilal Ahmed', email: 'bilal@gmail.com', earnings: 300, status: 'Banned' },
        ];
        setUsers(initialUsers);
        localStorage.setItem('admin_users', JSON.stringify(initialUsers));
      }
    }
  }, []);

  const toggleBan = (id: string) => {
    const updated = users.map(user => {
      if (user.id === id) {
        const newStatus = user.status === 'Active' ? 'Banned' : 'Active';
        return { ...user, status: newStatus };
      }
      return user;
    });
    setUsers(updated);
    localStorage.setItem('admin_users', JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">User Management</h1>
          <p className="text-slate-400 text-xs">Manage active registered users, ban/unban accounts, and check earnings.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">All Registered Users ({users.length})</h2>
        {users.map(user => (
          <div key={user.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-bold text-white text-sm">{user.name}</h4>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {user.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{user.email}</p>
            </div>
            
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Earnings</span>
                <span className="font-bold text-yellow-400 text-sm">Rs. {user.earnings}</span>
              </div>
              <button 
                onClick={() => toggleBan(user.id)} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${user.status === 'Active' ? 'bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20' : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20'}`}
              >
                {user.status === 'Active' ? 'Ban User' : 'Unban'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
