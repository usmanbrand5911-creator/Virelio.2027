import React from 'react';
import { ShoppingCart, Star, Tag } from 'lucide-react';

export default function ShopPage() {
  const sampleProducts = [
    {
      id: '1',
      name: 'Pro Editing & Preset Bundle',
      category: 'Digital Assets',
      price: 'Rs. 1,499',
      discount: 'Rs. 2,999',
      tag: 'HOT',
    },
    {
      id: '2',
      name: 'Social Growth Starter Kit',
      category: 'Marketing',
      price: 'Rs. 999',
      discount: 'Rs. 1,999',
      tag: 'POPULAR',
    },
    {
      id: '3',
      name: 'Premium SEO & Guest Post Slot',
      category: 'Services',
      price: 'Rs. 2,499',
      discount: 'Rs. 4,000',
      tag: 'VERIFIED',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">Digital Store</h1>
        <p className="text-xs text-slate-400 mt-1">Browse and purchase instant-access digital goods.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((p) => (
          <div key={p.id} className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-violet-500/20 border border-violet-500/30 text-violet-300">
                  {p.tag}
                </span>
                <span className="text-xs text-slate-400">{p.category}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{p.name}</h3>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-lg font-black text-emerald-400">{p.price}</span>
                <span className="text-xs text-slate-500 line-through ml-2">{p.discount}</span>
              </div>
              <button className="px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all">
                <ShoppingCart className="w-3.5 h-3.5" />
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
