'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className="bg-gray-950 border-b border-gray-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-9 sm:h-11 w-auto" />
        </Link>
      </div>
    </header>
  );
}
