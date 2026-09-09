'use client';

import { useState } from 'react';

export default function SubmitTaskPage() {
  const [taskTitle, setTaskTitle] = useState('Follow TikTok Account & Like Video');
  const [userEmail, setUserEmail] = useState('');
  const [proofText, setProofText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('virelio_task_submissions') || '[]');
    const newSub = {
      id: Date.now(),
      taskTitle,
      userEmail: userEmail || 'user@virelio.com',
      proofText,
      time: new Date().toLocaleTimeString(),
      status: 'Pending'
    };
    localStorage.setItem('virelio_task_submissions', JSON.stringify([newSub, ...submissions]));
    setSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] py-12 px-4 max-w-2xl mx-auto text-white">
      <h1 className="text-3xl font-extrabold mb-2 screenshot-gradient">Submit Task Proof</h1>
      <p className="text-xs text-gray-400 mb-8">Upload your task completion details or screenshot link for admin verification.</p>

      {submitted ? (
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center shadow-xl">
          <div className="text-emerald-400 text-4xl mb-4 font-bold">✓</div>
          <h2 className="text-xl font-bold mb-2">Proof Submitted Successfully!</h2>
          <p className="text-xs text-gray-400 mb-6">Your task submission is pending admin approval. Balance will be added once verified.</p>
          <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 bg-cyan-500 text-gray-950 font-bold text-xs rounded-xl shadow-lg">Submit Another Task</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-2">Select Task</label>
            <select 
              value={taskTitle} 
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              <option>Follow TikTok Account & Like Video</option>
              <option>Subscribe YouTube Channel & Comment</option>
              <option>Read Article & Share on WhatsApp</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-2">Your Email / Username</label>
            <input 
              type="text" 
              value={userEmail} 
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="e.g. ali@gmail.com" 
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-2">Screenshot Link / Proof Details</label>
            <textarea 
              value={proofText} 
              onChange={(e) => setProofText(e.target.value)}
              placeholder="Paste your image screenshot link (Imgur/Postimages) or describe proof..." 
              className="w-full bg-gray-950 border border-gray-800 rounded-xl p-4 text-sm text-white h-32 focus:outline-none focus:border-cyan-500"
              required 
            />
          </div>

          <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-[#a3e635] to-[#38bdf8] text-gray-950 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/10">
            Submit Task Proof for Review
          </button>
        </form>
      )}
    </div>
  );
}
