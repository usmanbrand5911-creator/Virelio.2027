'use client';

import React from 'react';

export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className="flex items-center cursor-pointer">
      <svg
        viewBox="0 0 460 115"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="virelioLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Circular Emblem with Network V */}
        <g transform="translate(5, 5)">
          <circle cx="50" cy="50" r="45" stroke="url(#virelioLogoGrad)" strokeWidth="6" fill="none" />
          <circle cx="50" cy="50" r="37" stroke="url(#virelioLogoGrad)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.6" />
          <path
            d="M 27 33 L 49 73 L 71 33"
            stroke="url(#virelioLogoGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line x1="60" y1="53" x2="78" y2="28" stroke="url(#virelioLogoGrad)" strokeWidth="3" />
          <line x1="78" y1="28" x2="89" y2="43" stroke="url(#virelioLogoGrad)" strokeWidth="3" />
          <line x1="78" y1="28" x2="68" y2="16" stroke="url(#virelioLogoGrad)" strokeWidth="3" />
          <circle cx="78" cy="28" r="4.5" fill="url(#virelioLogoGrad)" />
          <circle cx="89" cy="43" r="4" fill="url(#virelioLogoGrad)" />
          <circle cx="68" cy="16" r="3.5" fill="url(#virelioLogoGrad)" />
        </g>

        {/* VIRELIO Text + Curved Line */}
        <g transform="translate(120, 0)">
          <text
            x="0"
            y="68"
            fill="url(#virelioLogoGrad)"
            fontSize="58"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="3"
          >
            VIRELIO
          </text>
          <path
            d="M -15 88 Q 130 115 310 88"
            stroke="url(#virelioLogoGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
