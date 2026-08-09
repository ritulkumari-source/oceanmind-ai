"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const PUBLIC_PATHS = ["/", "/login"];

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const checkAuthentication = () => {
      const loggedIn =
        localStorage.getItem("oceanmind_logged_in") === "true";

      // Landing page and login page are always public
      if (PUBLIC_PATHS.includes(pathname)) {
        setIsAuthenticated(true);
        return;
      }

      // Every other page requires login
      if (!loggedIn) {
        setIsAuthenticated(false);
        router.replace("/login");
        return;
      }

      setIsAuthenticated(true);
    };

    checkAuthentication();

    // Also react if login/logout changes in another tab
    window.addEventListener("storage", checkAuthentication);

    return () => {
      window.removeEventListener("storage", checkAuthentication);
    };
  }, [pathname, router]);

  /*
   * Public pages can render immediately.
   */
  if (PUBLIC_PATHS.includes(pathname)) {
    return <>{children}</>;
  }

  /*
   * Don't show protected page content while checking authentication.
   */
  if (isAuthenticated === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center gap-4">

          <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

          <p className="text-sm text-slate-400">
            Checking OceanMind access...
          </p>

        </div>
      </main>
    );
  }

  /*
   * Not authenticated.
   * Redirect is already happening above.
   */
  if (!isAuthenticated) {
    return null;
  }

  /*
   * Authenticated user can access protected pages.
   */
  return <>{children}</>;
}