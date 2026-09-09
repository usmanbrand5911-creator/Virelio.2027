'use client';
import Footer from "../components/Footer";

export default function OrdersPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-6 max-w-2xl mx-auto w-full my-auto space-y-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center">
          My Platform Orders
        </h1>

        <div className="glass-card p-6 rounded-2xl space-y-3">
          <p className="text-xs text-gray-400 text-center">No active package orders found. Buy products from Shop to start earning!</p>
          <a href="/shop" className="block text-center py-2 bg-purple-600 text-white text-xs font-bold rounded-xl">Go to Shop</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
