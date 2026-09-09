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

export default function ArticlesPage() {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_articles') || localStorage.getItem('articles');
      if (saved) {
        setArticles(JSON.parse(saved));
      }
    }
  }, []);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-slate-950 text-white pb-20">
        <div className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center border-b border-slate-900">
          <button onClick={() => setSelectedArticle(null)} className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-cyan-400 font-bold text-xs rounded-xl">
            ← Back to Articles
          </button>
          <Link href="/" className="font-black text-lg bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            VIRELIO
          </Link>
        </div>

        <div className="max-w-xl mx-auto px-4 py-8 space-y-6">
          <img src={selectedArticle.coverPhoto} alt={selectedArticle.title} className="w-full h-64 rounded-3xl object-cover border border-slate-800 shadow-xl" />
          
          <div className="space-y-2">
            <span className="text-[10px] text-slate-500 block">Published on {selectedArticle.date}</span>
            <h1 className="text-2xl font-black text-white">{selectedArticle.title}</h1>
            {selectedArticle.websiteLink && selectedArticle.websiteLink !== '#' && (
              <a href={selectedArticle.websiteLink} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 underline block font-semibold">
                Visit Contributor Website ↗
              </a>
            )}
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 text-xs leading-relaxed whitespace-pre-wrap shadow-lg">
            {selectedArticle.body}
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
          <h1 className="text-2xl font-black">Latest Articles</h1>
          <p className="text-slate-400 text-xs">Read expert articles and insights published by contributors.</p>
        </div>

        <div className="space-y-4">
          {articles.length === 0 ? (
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
              <p className="text-slate-400 text-xs italic">No articles published yet. Check back soon!</p>
              <Link href="/admin" className="inline-block px-4 py-2 bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl">
                Open Admin Panel
              </Link>
            </div>
          ) : (
            articles.map(article => (
              <div key={article.id} onClick={() => setSelectedArticle(article)} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 shadow-lg cursor-pointer hover:border-yellow-400/50 transition">
                <img src={article.coverPhoto} alt={article.title} className="w-16 h-16 rounded-xl object-cover border border-slate-700 flex-shrink-0" />
                <div className="space-y-1 overflow-hidden">
                  <h4 className="font-bold text-sm text-white truncate">{article.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{article.body}</p>
                  <span className="text-[10px] text-yellow-400 font-semibold block">Click to read full article →</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
