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

interface PostItem {
  id: string;
  title: string;
  coverPhoto: string;
  websiteLink: string;
  body: string;
  date: string;
}

export default function PublicHome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // Auth Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Dashboard Data State
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [terms, setTerms] = useState('');
  const [privacy, setPrivacy] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [emailSupport, setEmailSupport] = useState('');
  const [phoneSupport, setPhoneSupport] = useState('');
  const [location, setLocation] = useState('');
  const [iconLinks, setIconLinks] = useState({ icon1: '', icon2: '', icon3: '', icon4: '' });
  
  const [activeTab, setActiveTab] = useState<'tasks' | 'posts' | 'terms' | 'privacy' | 'support'>('tasks');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAuth = localStorage.getItem('user_auth');
      if (userAuth === 'true') setIsLoggedIn(true);

      const savedTasks = localStorage.getItem('admin_tasks');
      if (savedTasks) setTasks(JSON.parse(savedTasks));

      const savedPosts = localStorage.getItem('admin_posts');
      if (savedPosts) setPosts(JSON.parse(savedPosts));

      setTerms(localStorage.getItem('admin_terms') || 'No terms & conditions added yet.');
      setPrivacy(localStorage.getItem('admin_privacy') || 'No privacy policy added yet.');
      setWhatsapp(localStorage.getItem('admin_whatsapp') || '');
      setEmailSupport(localStorage.getItem('admin_email') || 'support@virelio.com');
      setPhoneSupport(localStorage.getItem('admin_phone') || '');
      setLocation(localStorage.getItem('admin_location') || '');

      setIconLinks({
        icon1: localStorage.getItem('admin_icon1') || '#',
        icon2: localStorage.getItem('admin_icon2') || '#',
        icon3: localStorage.getItem('admin_icon3') || '#',
        icon4: localStorage.getItem('admin_icon4') || '#'
      });
    }
  }, []);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (authMode === 'register' && !name)) {
      alert('Please fill all required fields');
      return;
    }
    setIsLoggedIn(true);
    localStorage.setItem('user_auth', 'true');
    alert(authMode === 'login' ? 'Logged in successfully!' : 'Account registered successfully!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user_auth');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">VIRELIO</h1>
            <p className="text-slate-400 text-xs">Please login or register to access the platform.</p>
          </div>

          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button onClick={() => setAuthMode('login')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${authMode === 'login' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
              Login
            </button>
            <button onClick={() => setAuthMode('register')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${authMode === 'register' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
              Register
            </button>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {authMode === 'register' && (
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-yellow-400" 
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-300">Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="name@example.com" 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-yellow-400" 
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-300">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="••••••••" 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-yellow-400" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg hover:opacity-90 transition"
            >
              {authMode === 'login' ? 'Login to Platform' : 'Create Account'}
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/admin" className="text-[11px] text-slate-500 hover:text-slate-300 underline">
              Admin Panel Access →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24">
      <div className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center border-b border-slate-900">
        <h1 className="font-black text-lg bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">VIRELIO</h1>
        <div className="flex items-center gap-2">
          <Link href="/admin" className="px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 font-bold text-xs rounded-xl">
            Admin
          </Link>
          <button onClick={handleLogout} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold text-xs rounded-xl">
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-6 space-y-6">
        {/* 4 Main Action Icons with Custom Links */}
        <div className="grid grid-cols-4 gap-3">
          <a href={iconLinks.icon1} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center space-y-1 hover:border-yellow-400 transition">
            <span className="text-xl">🔥</span>
            <span className="text-[10px] font-bold text-slate-300">Action 1</span>
          </a>
          <a href={iconLinks.icon2} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center space-y-1 hover:border-yellow-400 transition">
            <span className="text-xl">⭐</span>
            <span className="text-[10px] font-bold text-slate-300">Action 2</span>
          </a>
          <a href={iconLinks.icon3} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center space-y-1 hover:border-yellow-400 transition">
            <span className="text-xl">💎</span>
            <span className="text-[10px] font-bold text-slate-300">Action 3</span>
          </a>
          <a href={iconLinks.icon4} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center space-y-1 hover:border-yellow-400 transition">
            <span className="text-xl">🚀</span>
            <span className="text-[10px] font-bold text-slate-300">Action 4</span>
          </a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 gap-1 overflow-x-auto">
          <button onClick={() => setActiveTab('tasks')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'tasks' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Tasks
          </button>
          <button onClick={() => setActiveTab('posts')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'posts' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Articles/Blogs
          </button>
          <button onClick={() => setActiveTab('terms')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'terms' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Terms
          </button>
          <button onClick={() => setActiveTab('privacy')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'privacy' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Privacy
          </button>
          <button onClick={() => setActiveTab('support')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'support' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Support
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'tasks' && (
          <div className="space-y-3">
            <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Available Tasks</h3>
            {tasks.length === 0 ? (
              <p className="text-slate-500 text-xs italic text-center py-8">No tasks available right now.</p>
            ) : (
              tasks.map(t => (
                <div key={t.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img src={t.photo} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-bold text-xs text-white">{t.title}</h4>
                      <span className="text-[10px] text-emerald-400 font-bold">Reward: Rs. {t.amount}</span>
                    </div>
                  </div>
                  <a href={t.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl">
                    Start Task
                  </a>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="space-y-3">
            <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Articles & Blogs</h3>
            {posts.length === 0 ? (
              <p className="text-slate-500 text-xs italic text-center py-8">No posts published yet.</p>
            ) : (
              posts.map(p => (
                <div key={p.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-3">
                    <img src={p.coverPhoto} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-xs text-white">{p.title}</h4>
                      <span className="text-[10px] text-slate-500">{p.date}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 pt-1">{p.body}</p>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="font-black text-sm text-white">Terms & Conditions</h3>
            <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">{terms}</p>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="font-black text-sm text-white">Privacy Policy</h3>
            <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">{privacy}</p>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="font-black text-sm text-white">Support & Contact Information</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <p><strong>Email:</strong> {emailSupport}</p>
              {phoneSupport && <p><strong>Phone:</strong> {phoneSupport}</p>}
              {location && <p><strong>Location:</strong> {location}</p>}
            </div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp Button */}
      {whatsapp && (
        <a 
          href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-5 right-5 w-12 h-12 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition text-2xl z-50"
        >
          💬
        </a>
      )}
    </div>
  );
}
