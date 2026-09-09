'use client';

export default function VirelioLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Outer Glass Ring Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 via-purple-500/20 to-cyan-400/30 blur-sm"></div>
      
      {/* SVG Recreating Exact User Logo Geometry */}
      <svg className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {/* Circular Outer Badge */}
        <circle cx="100" cy="100" r="90" stroke="url(#goldGrad)" strokeWidth="8" fill="rgba(10,12,24,0.7)" />
        <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

        {/* Stylized 'V' Shape */}
        <path d="M 50 55 L 98 150 L 125 95" stroke="url(#goldGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 68 55 L 98 120" stroke="url(#goldGrad)" strokeWidth="6" strokeLinecap="round" />

        {/* Connected Network Nodes / Dots */}
        <line x1="125" y1="95" x2="155" y2="70" stroke="url(#cyanGrad)" strokeWidth="5" />
        <line x1="125" y1="95" x2="160" y2="115" stroke="url(#cyanGrad)" strokeWidth="5" />
        <line x1="155" y1="70" x2="140" y2="35" stroke="url(#cyanGrad)" strokeWidth="5" />
        <line x1="155" y1="70" x2="175" y2="50" stroke="url(#cyanGrad)" strokeWidth="5" />

        {/* Glowing Node Circles */}
        <circle cx="125" cy="95" r="7" fill="#f59e0b" />
        <circle cx="155" cy="70" r="8" fill="#38bdf8" />
        <circle cx="160" cy="115" r="7" fill="#818cf8" />
        <circle cx="140" cy="35" r="6" fill="#38bdf8" />
        <circle cx="175" cy="50" r="6" fill="#c084fc" />
      </svg>
    </div>
  );
}
