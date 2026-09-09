export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/80 backdrop-blur py-8 px-6 mt-16 text-center text-xs text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-black px-2 py-0.5 rounded-full font-bold text-sm">V</span>
          <span className="text-white font-bold tracking-wider text-sm">VIRELIO PLATFORM</span>
        </div>
        <p>© {new Date().getFullYear()} Virelio. All rights reserved. Secure & Decentralized Ecosystem.</p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:text-amber-400 transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-amber-400 transition-colors">Privacy</a>
          <a href="/support" className="hover:text-amber-400 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
