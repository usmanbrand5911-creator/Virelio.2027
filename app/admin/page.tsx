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

interface ApprovalItem {
  id: string;
  user: string;
  taskTitle: string;
  proof: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  date: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<'tasks' | 'posts' | 'policies' | 'approvals' | 'settings'>('tasks');

  // Task form state
  const [taskTitle, setTaskTitle] = useState('');
  const [taskLink, setTaskLink] = useState('');
  const [taskAmount, setTaskAmount] = useState('');
  const [taskPhoto, setTaskPhoto] = useState('');
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  // Post form state (Articles & Blogs)
  const [postType, setPostType] = useState<'article' | 'blog'>('article');
  const [postTitle, setPostTitle] = useState('');
  const [postCover, setPostCover] = useState('');
  const [postLink, setPostLink] = useState('');
  const [postBody, setPostBody] = useState('');
  const [posts, setPosts] = useState<PostItem[]>([]);

  // Policies state
  const [termsText, setTermsText] = useState('');
  const [privacyText, setPrivacyText] = useState('');

  // Approvals / Notifications state
  const [approvals, setApprovals] = useState<ApprovalItem[]>([]);

  // Settings state (WhatsApp, Email, Phone, Location, 4 Icons links)
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [supportPhone, setSupportPhone] = useState('');
  const [locationText, setLocationText] = useState('');
  const [icon1Link, setIcon1Link] = useState('');
  const [icon2Link, setIcon2Link] = useState('');
  const [icon3Link, setIcon3Link] = useState('');
  const [icon4Link, setIcon4Link] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('admin_auth');
      if (auth === 'true') setIsAuthenticated(true);

      const savedTasks = localStorage.getItem('admin_tasks');
      if (savedTasks) setTasks(JSON.parse(savedTasks));

      const savedPosts = localStorage.getItem('admin_posts');
      if (savedPosts) setPosts(JSON.parse(savedPosts));

      const savedTerms = localStorage.getItem('admin_terms');
      if (savedTerms) setTermsText(savedTerms);

      const savedPrivacy = localStorage.getItem('admin_privacy');
      if (savedPrivacy) setPrivacyText(savedPrivacy);

      const savedApprovals = localStorage.getItem('admin_approvals');
      if (savedApprovals) setApprovals(JSON.parse(savedApprovals));

      // Settings load
      setWhatsappNumber(localStorage.getItem('admin_whatsapp') || '');
      setSupportEmail(localStorage.getItem('admin_email') || '');
      setSupportPhone(localStorage.getItem('admin_phone') || '');
      setLocationText(localStorage.getItem('admin_location') || '');
      setIcon1Link(localStorage.getItem('admin_icon1') || '');
      setIcon2Link(localStorage.getItem('admin_icon2') || '');
      setIcon3Link(localStorage.getItem('admin_icon3') || '');
      setIcon4Link(localStorage.getItem('admin_icon4') || '');
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPass = process.env.NEXT_PUBLIC_ADMIN_PASSCODE || 'admin123';
    if (passcode === correctPass) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      alert('Incorrect passcode!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle || !taskAmount) {
      alert('Please fill required fields');
      return;
    }
    const newTask: TaskItem = {
      id: Date.now().toString(),
      title: taskTitle,
      link: taskLink || '#',
      amount: Number(taskAmount),
      photo: taskPhoto || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop'
    };
    const updated = [newTask, ...tasks];
    setTasks(updated);
    localStorage.setItem('admin_tasks', JSON.stringify(updated));
    setTaskTitle('');
    setTaskLink('');
    setTaskAmount('');
    setTaskPhoto('');
    alert('Task added successfully!');
  };

  const handleDeleteTask = (id: string) => {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    localStorage.setItem('admin_tasks', JSON.stringify(updated));
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle || !postBody) {
      alert('Please fill title and body');
      return;
    }
    const newPost: PostItem = {
      id: Date.now().toString(),
      title: `[${postType.toUpperCase()}] ${postTitle}`,
      coverPhoto: postCover || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=300&auto=format&fit=crop',
      websiteLink: postLink || '#',
      body: postBody,
      date: new Date().toLocaleDateString()
    };
    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem('admin_posts', JSON.stringify(updated));
    setPostTitle('');
    setPostCover('');
    setPostLink('');
    setPostBody('');
    alert('Published successfully!');
  };

  const handleDeletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    localStorage.setItem('admin_posts', JSON.stringify(updated));
  };

  const handleSavePolicies = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('admin_terms', termsText);
    localStorage.setItem('admin_privacy', privacyText);
    alert('Terms & Privacy Policies updated successfully!');
  };

  const handleUpdateApprovalStatus = (id: string, status: 'Approved' | 'Rejected') => {
    const updated = approvals.map(a => a.id === id ? { ...a, status } : a);
    setApprovals(updated);
    localStorage.setItem('admin_approvals', JSON.stringify(updated));
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('admin_whatsapp', whatsappNumber);
    localStorage.setItem('admin_email', supportEmail);
    localStorage.setItem('admin_phone', supportPhone);
    localStorage.setItem('admin_location', locationText);
    localStorage.setItem('admin_icon1', icon1Link);
    localStorage.setItem('admin_icon2', icon2Link);
    localStorage.setItem('admin_icon3', icon3Link);
    localStorage.setItem('admin_icon4', icon4Link);
    alert('Settings & Icon Links saved successfully!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto text-2xl">
              🔐
            </div>
            <h1 className="text-2xl font-black">Admin Security</h1>
            <p className="text-slate-400 text-xs">Enter your passcode to access the admin management panel.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Admin Passcode</label>
              <input 
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Unlock Admin Panel
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-slate-400 hover:text-white underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      <div className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center border-b border-slate-900">
        <Link href="/" className="font-black text-lg bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          VIRELIO ADMIN
        </Link>
        <button onClick={handleLogout} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold text-xs rounded-xl">
          Logout
        </button>
      </div>

      <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
        <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 gap-1 overflow-x-auto">
          <button onClick={() => setActiveTab('tasks')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'tasks' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Tasks
          </button>
          <button onClick={() => setActiveTab('posts')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'posts' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Articles/Blogs
          </button>
          <button onClick={() => setActiveTab('policies')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'policies' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Policies
          </button>
          <button onClick={() => setActiveTab('approvals')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'approvals' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Notifications ({approvals.filter(a => a.status === 'Pending').length})
          </button>
          <button onClick={() => setActiveTab('settings')} className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold whitespace-nowrap transition ${activeTab === 'settings' ? 'bg-yellow-400 text-slate-950' : 'text-slate-400'}`}>
            Settings & Links
          </button>
        </div>

        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <form onSubmit={handleAddTask} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="font-black text-sm text-white">Add New Task</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Task Title</label>
                  <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} placeholder="e.g. Subscribe to YouTube" className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Task Link / URL</label>
                  <input type="text" value={taskLink} onChange={e => setTaskLink(e.target.value)} placeholder="https://..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Reward Amount (Rs.)</label>
                  <input type="number" value={taskAmount} onChange={e => setTaskAmount(e.target.value)} placeholder="50" className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Task Photo URL</label>
                  <input type="text" value={taskPhoto} onChange={e => setTaskPhoto(e.target.value)} placeholder="Image link..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow">
                Publish Task
              </button>
            </form>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Existing Tasks</h4>
              {tasks.length === 0 ? (
                <p className="text-slate-500 text-xs italic text-center py-4">No tasks added yet.</p>
              ) : (
                tasks.map(t => (
                  <div key={t.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={t.photo} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <h5 className="font-bold text-xs text-white">{t.title}</h5>
                        <span className="text-[10px] text-emerald-400 font-bold">Rs. {t.amount}</span>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteTask(t.id)} className="px-3 py-1.5 bg-rose-500/10 text-rose-400 font-bold text-xs rounded-xl">
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="space-y-6">
            <form onSubmit={handleAddPost} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex justify-between items-center">
                <h3 className="font-black text-sm text-white">Publish Article / Blog</h3>
                <select value={postType} onChange={(e: any) => setPostType(e.target.value)} className="bg-slate-950 border border-slate-800 text-xs text-yellow-400 px-2 py-1 rounded-lg">
                  <option value="article">Article</option>
                  <option value="blog">Blog</option>
                </select>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Title</label>
                  <input type="text" value={postTitle} onChange={e => setPostTitle(e.target.value)} placeholder="Title here..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Cover Photo URL</label>
                  <input type="text" value={postCover} onChange={e => setPostCover(e.target.value)} placeholder="Image URL" className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Website Link</label>
                  <input type="text" value={postLink} onChange={e => setPostLink(e.target.value)} placeholder="https://..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Content Body</label>
                  <textarea rows={4} value={postBody} onChange={e => setPostBody(e.target.value)} placeholder="Write content here..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow">
                Publish Post
              </button>
            </form>

            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Published Posts</h4>
              {posts.length === 0 ? (
                <p className="text-slate-500 text-xs italic text-center py-4">No posts published yet.</p>
              ) : (
                posts.map(p => (
                  <div key={p.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={p.coverPhoto} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <h5 className="font-bold text-xs text-white">{p.title}</h5>
                        <span className="text-[10px] text-slate-500">{p.date}</span>
                      </div>
                    </div>
                    <button onClick={() => handleDeletePost(p.id)} className="px-3 py-1.5 bg-rose-500/10 text-rose-400 font-bold text-xs rounded-xl">
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'policies' && (
          <form onSubmit={handleSavePolicies} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-black text-sm text-white">Terms & Conditions & Privacy Policy</h3>
            <p className="text-[11px] text-slate-400">Ye content public pages par show hoga.</p>
            <div className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 font-bold">Terms & Conditions</label>
                <textarea rows={5} value={termsText} onChange={e => setTermsText(e.target.value)} placeholder="Enter terms & conditions..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 font-bold">Privacy Policy</label>
                <textarea rows={5} value={privacyText} onChange={e => setPrivacyText(e.target.value)} placeholder="Enter privacy policy..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow">
              Save Policies
            </button>
          </form>
        )}

        {activeTab === 'approvals' && (
          <div className="space-y-4">
            <h3 className="font-black text-sm text-white">Task Approval Notifications</h3>
            {approvals.length === 0 ? (
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-2">
                <p className="text-slate-400 text-xs italic">No pending task submissions or notifications.</p>
              </div>
            ) : (
              approvals.map(a => (
                <div key={a.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">{a.user}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${a.status === 'Pending' ? 'bg-amber-400/10 text-amber-400' : a.status === 'Approved' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-rose-400/10 text-rose-400'}`}>{a.status}</span>
                  </div>
                  <p className="text-xs text-slate-300">Task: {a.taskTitle}</p>
                  {a.proof && <img src={a.proof} alt="proof" className="w-20 h-20 object-cover rounded-lg" />}
                  {a.status === 'Pending' && (
                    <div className="flex gap-2 pt-1">
                      <button onClick={() => handleUpdateApprovalStatus(a.id, 'Approved')} className="flex-1 py-1.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl">Approve</button>
                      <button onClick={() => handleUpdateApprovalStatus(a.id, 'Rejected')} className="flex-1 py-1.5 bg-rose-500/10 text-rose-400 font-bold text-xs rounded-xl">Reject</button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-black text-sm text-white">General Settings & 4 Icons Links</h3>
            <div className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 font-bold">WhatsApp Floating Button Number / Link</label>
                <input type="text" value={whatsappNumber} onChange={e => setWhatsappNumber(e.target.value)} placeholder="+92..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 font-bold">Support Email</label>
                <input type="email" value={supportEmail} onChange={e => setSupportEmail(e.target.value)} placeholder="support@domain.com" className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 font-bold">Support Phone Number</label>
                <input type="text" value={supportPhone} onChange={e => setSupportPhone(e.target.value)} placeholder="+92..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 font-bold">Location / Address</label>
                <input type="text" value={locationText} onChange={e => setLocationText(e.target.value)} placeholder="City, Country" className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
              </div>
              <div className="pt-2 border-t border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-yellow-400">4 Main Icons Links</h4>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Icon 1 Link</label>
                  <input type="text" value={icon1Link} onChange={e => setIcon1Link(e.target.value)} placeholder="https://..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Icon 2 Link</label>
                  <input type="text" value={icon2Link} onChange={e => setIcon2Link(e.target.value)} placeholder="https://..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Icon 3 Link</label>
                  <input type="text" value={icon3Link} onChange={e => setIcon3Link(e.target.value)} placeholder="https://..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Icon 4 Link</label>
                  <input type="text" value={icon4Link} onChange={e => setIcon4Link(e.target.value)} placeholder="https://..." className="w-full mt-1 px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" />
                </div>
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-yellow-400 text-slate-950 font-black text-xs rounded-xl shadow">
              Save Settings
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
