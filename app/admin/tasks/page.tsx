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

export default function AdminTasks() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [amount, setAmount] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_tasks');
      if (saved) {
        setTasks(JSON.parse(saved));
      } else {
        setTasks([]);
      }
    }
  }, []);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return alert('Please enter task title and amount.');

    const newTask: TaskItem = {
      id: Date.now().toString(),
      title,
      link: link || '#',
      amount: Number(amount) || 0,
      photo: photo || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60'
    };

    const updated = [newTask, ...tasks];
    setTasks(updated);
    localStorage.setItem('admin_tasks', JSON.stringify(updated));
    localStorage.setItem('tasks', JSON.stringify(updated));

    setTitle('');
    setLink('');
    setAmount('');
    setPhoto('');
    alert('Task added successfully!');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this task?')) {
      const updated = tasks.filter(t => t.id !== id);
      setTasks(updated);
      localStorage.setItem('admin_tasks', JSON.stringify(updated));
      localStorage.setItem('tasks', JSON.stringify(updated));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Task Management</h1>
          <p className="text-slate-400 text-xs">Create and manage micro-tasks. No dummy tasks will show unless you add them.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back
        </Link>
      </div>

      <form onSubmit={handleAddTask} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <h2 className="text-base font-bold text-white">Add New Task</h2>
        
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Task Title / Description</label>
          <input required type="text" placeholder="e.g., Follow our channel & watch video" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Task Link / URL</label>
            <input type="text" placeholder="https://youtube.com/..." value={link} onChange={(e) => setLink(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Reward Amount (Rs.)</label>
            <input required type="number" placeholder="50" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Task Photo / Image URL</label>
          <input type="text" placeholder="https://example.com/image.jpg" value={photo} onChange={(e) => setPhoto(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>

        <button type="submit" className="w-full py-3.5 bg-yellow-400 text-slate-950 font-bold text-xs rounded-2xl shadow-lg">
          Add Task
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Existing Tasks ({tasks.length})</h2>
        {tasks.length === 0 ? (
          <p className="text-slate-500 text-xs italic">No tasks added yet. Add a task above to display it on the public panel.</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center gap-4 shadow-lg">
              <div className="flex items-center space-x-4">
                <img src={task.photo} alt={task.title} className="w-14 h-14 rounded-xl object-cover border border-slate-700" />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{task.title}</h4>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">Rs. {task.amount}</span>
                  </div>
                  {task.link && <a href={task.link} target="_blank" rel="noreferrer" className="text-[11px] text-cyan-400 underline truncate block max-w-xs">{task.link}</a>}
                </div>
              </div>
              <button onClick={() => handleDelete(task.id)} className="px-3 py-1.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 text-xs font-semibold rounded-xl">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
