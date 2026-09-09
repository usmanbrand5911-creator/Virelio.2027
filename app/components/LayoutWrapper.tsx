'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const sidebarLinks = [
    { name: "🏠 Home", href: "/" },
    { name: "⚡ Earn Tasks", href: "/tasks" },
    { name: "💰 Wallet & Withdrawal", href: "/wallet" },
    { name: "🛒 Shop Products", href: "/shop" },
    { name: "📰 Articles", href: "/articles" },
    { name: "🔥 Latest Articles", href: "/latest-articles" },
    { name: "📝 Blogs & Guest Posts", href: "/blogs" },
    { name: "📜 Terms & Conditions", href: "/terms" },
    { name: "🔒 Privacy Policy", href: "/privacy" },
    { name: "📞 Contact Us", href: "/contact" },
    { name: "🛡️ Admin Panel", href: "/admin" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-gray-100">
      <Navbar />
      
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {/* PC Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 p-6 glass-panel border-r border-amber-500/20 space-y-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar">
          <div className="space-y-1">
            <h3 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest px-3 pb-2">PC Desktop Sidebar</h3>
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-2xl text-xs font-bold transition ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500/20 to-blue-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      : "text-gray-300 hover:text-amber-300 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
