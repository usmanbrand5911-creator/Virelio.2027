import React from 'react';
import { CheckSquare, DollarSign, Clock, ExternalLink } from 'lucide-react';

export default function TasksPage() {
  const sampleTasks = [
    {
      id: 't1',
      title: 'Follow Official TikTok & Like Last 3 Videos',
      reward: 'Rs. 45.00',
      timeLimit: '2 Hours',
      category: 'Social Media',
    },
    {
      id: 't2',
      title: 'Subscribe to YouTube Channel & Take Screenshot',
      reward: 'Rs. 60.00',
      timeLimit: '4 Hours',
      category: 'YouTube',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">Micro Earn Tasks</h1>
        <p className="text-xs text-slate-400 mt-1">Complete tasks to earn money directly into your Virelio wallet.</p>
      </div>

      <div className="space-y-4">
        {sampleTasks.map((task) => (
          <div key={task.id} className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {task.category}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{task.title}</h3>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-500" /> {task.timeLimit}</span>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-4 border-t md:border-t-0 border-slate-800 pt-3 md:pt-0">
              <span className="text-lg font-black text-emerald-400">{task.reward}</span>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 text-white text-xs font-semibold flex items-center gap-1.5 transition-all">
                Start Task
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
