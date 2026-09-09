'use client';

export default function ShopPage() {
  const products = [
    { id: 1, name: "Premium Social Growth Pack", price: "Rs. 1,200", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop" },
    { id: 2, name: "VIP Viral Article Boost", price: "Rs. 850", image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500&auto=format&fit=crop" },
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
          Shop Feed
        </h1>
        <p className="text-xs text-gray-400">Explore products and boost services</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <div key={p.id} className="glass-panel rounded-2xl overflow-hidden space-y-3 p-4 flex flex-col justify-between">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-xl border border-white/10" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">{p.name}</h3>
              <p className="text-xs text-amber-400 font-bold">{p.price}</p>
            </div>
            <button className="w-full py-2.5 btn-purple-gradient text-white text-xs font-bold rounded-xl transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
