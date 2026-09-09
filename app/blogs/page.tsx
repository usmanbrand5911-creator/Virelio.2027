'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogItem {
  id: string;
  title: string;
  coverPhoto: string;
  websiteLink: string;
  body: string;
  date: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_blogs') || localStorage.getItem('blogs');
      if (saved) {
        setBlogs(JSON.parse(saved));
      }
    }
  }, []);

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-slate-950 text-white pb-20">
        <div className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center border-b border-slate-900">
          <button onClick={() => setSelectedBlog(null)} className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-cyan-400 font-bold text-xs rounded-xl">
            ← Back to Blogs
          </button>
          <Link href="/" className="font-black text-lg bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            VIRELIO
          </Link>
        </div>

        <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
          <img src={selectedBlog.coverPhoto} alt={selectedBlog.title} className="w-full h-64 rounded-3xl object-cover border border-slate-800 shadow-xl" />
          
          <div className="space-y-2">
            <span className="text-[10px] text-slate-500 block">Published on {selectedBlog.date}</span>
            <h1 className="text-2xl font-black text-white">{selectedBlog.title}</h1>
            {selectedBlog.websiteLink && selectedBlog.websiteLink !== '#' && (
              <a href={selectedBlog.websiteLink} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 underline block font-semibold">
                Visit Contributor Website ↗
              </a>
            )}
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 text-xs leading-relaxed whitespace-pre-wrap shadow-lg">
            {selectedBlog.body}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      <div className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center border-b border-slate-900">
        <Link href="/" className="font-black text-lg bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          VIRELIO
        </Link>
        <Link href="/wallet" className="px-3 py-1.5 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl shadow">
          Wallet
        </Link>
      </div>

      <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-black">Guest Blogs</h1>
          <p className="text-slate-400 text-xs">Explore guest blog posts and community stories.</p>
        </div>

        <div className="space-y-4">
          {blogs.length === 0 ? (
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
              <p className="text-slate-400 text-xs italic">No blogs published yet. Check back soon!</p>
              <Link href="/admin" className="inline-block px-4 py-2 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl">
                Open Admin Panel
              </Link>
            </div>
          ) : (
            blogs.map(blog => (
              <div key={blog.id} onClick={() => setSelectedBlog(blog)} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 shadow-lg cursor-pointer hover:border-yellow-400/50 transition">
                <img src={blog.coverPhoto} alt={blog.title} className="w-16 h-16 rounded-xl object-cover border border-slate-700 flex-shrink-0" />
                <div className="space-y-1 overflow-hidden">
                  <h4 className="font-bold text-sm text-white truncate">{blog.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{blog.body}</p>
                  <span className="text-[10px] text-yellow-400 font-semibold block">Click to read full blog →</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
