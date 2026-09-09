'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ArticleItem {
  id: string;
  title: string;
  coverPhoto: string;
  websiteLink: string;
  body: string;
  date: string;
}

export default function AdminArticles() {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [title, setTitle] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_articles');
      if (saved) {
        setArticles(JSON.parse(saved));
      } else {
        setArticles([]);
      }
    }
  }, []);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return alert('Please enter article title and body content.');

    const newArticle: ArticleItem = {
      id: Date.now().toString(),
      title,
      coverPhoto: coverPhoto || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
      websiteLink: websiteLink || '#',
      body,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newArticle, ...articles];
    setArticles(updated);
    localStorage.setItem('admin_articles', JSON.stringify(updated));

    setTitle('');
    setCoverPhoto('');
    setWebsiteLink('');
    setBody('');
    alert('Article published successfully!');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      const updated = articles.filter(a => a.id !== id);
      setArticles(updated);
      localStorage.setItem('admin_articles', JSON.stringify(updated));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white">Articles Management</h1>
          <p className="text-slate-400 text-xs">Publish articles. No dummy articles will show unless published here.</p>
        </div>
        <Link href="/admin" className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>

      <form onSubmit={handlePublish} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <h2 className="text-base font-bold text-white">Add New Article</h2>
        
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Article Title</label>
          <input required type="text" placeholder="Enter article title..." value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Cover Photo Image URL</label>
          <input type="text" placeholder="https://example.com/image.jpg" value={coverPhoto} onChange={(e) => setCoverPhoto(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Contributor Website Link (Optional)</label>
          <input type="text" placeholder="https://contributorwebsite.com" value={websiteLink} onChange={(e) => setWebsiteLink(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Article Body Content</label>
          <textarea required rows={5} placeholder="Write article content here..." value={body} onChange={(e) => setBody(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200" />
        </div>

        <button type="submit" className="w-full py-4 bg-yellow-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg hover:opacity-90 transition">
          Publish Article
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Published Articles ({articles.length})</h2>
        {articles.length === 0 ? (
          <p className="text-slate-500 text-xs italic">No articles published yet. Publish an article above to display it on the public panel.</p>
        ) : (
          articles.map(article => (
            <div key={article.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
              <div className="flex items-center space-x-4">
                <img src={article.coverPhoto} alt={article.title} className="w-16 h-16 rounded-xl object-cover border border-slate-700" />
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm">{article.title}</h4>
                  {article.websiteLink && article.websiteLink !== '#' && (
                    <a href={article.websiteLink} target="_blank" rel="noreferrer" className="text-[11px] text-cyan-400 underline block truncate max-w-xs">{article.websiteLink}</a>
                  )}
                  <p className="text-[10px] text-slate-500">Published: {article.date}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(article.id)} className="px-3 py-1.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 text-xs font-semibold rounded-xl border border-rose-500/20 transition self-end sm:self-center">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
