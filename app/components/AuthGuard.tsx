'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Public routes that don't need login
    const publicPages = ["/login", "/register", "/admin"];
    const isPublic = publicPages.some((p) => pathname.startsWith(p));

    const currentUserStr = localStorage.getItem("virelio_current_user");

    if (!isPublic) {
      if (!currentUserStr) {
        // Force redirect to login if not logged in
        router.push("/login");
      } else {
        const currentUser = JSON.parse(currentUserStr);
        // Check if user is banned
        if (currentUser.isBanned) {
          localStorage.removeItem("virelio_current_user");
          alert("Aap ka account Admin dwaara BAN kar diya gaya hai!");
          router.push("/login");
        }
      }
    }
    setLoading(false);
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-amber-400 font-bold text-sm">
        Loading VIRELIO Security Gate...
      </div>
    );
  }

  return <>{children}</>;
}
