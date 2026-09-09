'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  cover: string;
  authorUrl: string;
  body: string;
  date: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [authorUrl, setAuthorUrl] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_blogs');
      if (saved) setBlogs(JSON.parse(saved));
    }
  }, []);

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return alert('Please enter title and body.');

    const newBlog: Blog = {
      id: Date.now().toString(),
      title,
      cover: cover || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
      authorUrl,
      body,
      date: new Date().toLocaleDateString()
    };

    const updated = [newBlog, ...blogs];
    setBlogs(updated);
    localStorage.setItem('admin_blogs', JSON.stringify(updated));

    setTitle('');
    setCover('');
    setAuthorUrl('');
    setBody('');
    alert('Blog posted successfully!');
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this blog post?')) {
      const updated = blogs.filter(b => b.id !== id);
      setBlogs(updated);
      localStorage.setItem('admin_blogs', JSON.stringify(updated));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Blogs Management</h1>
          <p className="text-slate-400 text-xs">Publish guest blogs with Cover Photo, Title, Contributor Website Link, and Body.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>

      <form onSubmit={handleAddBlog} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <h2 className="text-base font-bold text-white">Add New Blog Post</h2>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Blog Title</label>
          <input required type="text" placeholder="Enter title..." value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Cover Photo Image URL</label>
          <input type="text" placeholder="https://example.com/image.jpg" value={cover} onChange={(e) => setCover(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Guest Contributor Website Link (Optional)</label>
          <input type="text" placeholder="https://contributorwebsite.com" value={authorUrl} onChange={(e) => setAuthorUrl(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Blog Body Content</label>
          <textarea required rows={4} placeholder="Write blog content..." value={body} onChange={(e) => setBody(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200"></textarea>
        </div>
        <button type="submit" className="w-full py-3.5 bg-yellow-400 text-slate-950 font-bold text-xs rounded-2xl shadow-lg">Publish Blog Post</button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Published Blogs ({blogs.length})</h2>
        {blogs.map(b => (
          <div key={b.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <img src={b.cover} alt={b.title} className="w-14 h-14 rounded-xl object-cover border border-slate-700" />
              <div>
                <h4 className="font-bold text-white text-sm">{b.title}</h4>
                {b.authorUrl && <a href={b.authorUrl} target="_blank" rel="noreferrer" className="text-[11px] text-cyan-400 underline">Website: {b.authorUrl}</a>}
                <p className="text-xs text-slate-400 line-clamp-1">{b.body}</p>
              </div>
            </div>
            <button onClick={() => handleDelete(b.id)} className="px-3 py-1.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 text-xs font-semibold rounded-xl">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
