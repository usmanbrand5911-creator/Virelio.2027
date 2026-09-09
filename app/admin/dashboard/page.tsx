'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAdminLoggedIn');
    if (!isAuth) {
      router.push('/admin');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/admin');
  };

  const adminModules = [
    { title: 'Task Proofs Review', desc: 'Approve or reject screenshot proofs submitted by users for tasks.', icon: '📥', href: '/admin/task-proofs' },
    { title: 'Wallet Withdrawals', desc: 'Approve withdrawal requests and manage user payout statuses.', icon: '💳', href: '/admin/withdrawals' },
    { title: 'User Management & Balance', desc: 'Ban users, adjust balances, cut fake earnings, and transfer funds.', icon: '👥', href: '/admin/users' },
    { title: 'Articles Manager', desc: 'Post, edit, and manage platform articles and guides.', icon: '📰', href: '/admin/articles' },
    { title: 'Blogs Manager', desc: 'Publish and organize guest posts and blog articles.', icon: '✍️', href: '/admin/blogs' },
    { title: 'Notifications Center', desc: 'Send platform-wide alerts and broadcast messages to users.', icon: '🔔', href: '/admin/notifications' },
    { title: 'Footer Customization', desc: 'Manage footer links, phone numbers, email, and social handles.', icon: '🛠️', href: '/admin/footer-settings' },
    { title: 'Floating Action Button', desc: 'Customize floating support or WhatsApp buttons on public pages.', icon: '💬', href: '/admin/floating-button' },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 sm:p-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-800">
          <div>
            <h1 className="text-3xl font-extrabold screenshot-gradient">Admin Dashboard</h1>
            <p className="text-xs text-gray-400 mt-1">Full control over tasks, wallets, user moderation, and site settings</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold rounded-xl hover:bg-rose-500/20 transition"
          >
            Logout ⎋
          </button>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminModules.map((mod, index) => (
            <Link 
              key={index} 
              href={mod.href} 
              className="bg-gray-900/80 border border-gray-800 rounded-3xl p-6 hover:border-cyan-500/50 transition shadow-xl block group"
            >
              <div className="text-3xl mb-3">{mod.icon}</div>
              <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition">{mod.title}</h2>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">{mod.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 underline">
            ← Back to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
}
