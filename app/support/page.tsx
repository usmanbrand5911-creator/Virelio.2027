export default function SupportPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-black text-amber-400">Customer Support</h1>
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 text-slate-300 text-sm text-center">
        <p className="text-slate-300">Need instant assistance? Reach out to our support team via WhatsApp using the floating button at the bottom right.</p>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-xl shadow hover:bg-green-600 transition-all">
          Chat on WhatsApp Now
        </a>
      </div>
    </div>
  );
}
