"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("oceanmind_logged_in");
    localStorage.removeItem("oceanmind_user_email");
    localStorage.removeItem("oceanmind_user_name");

    router.push("/login");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-400"
    >
      <LogOut size={17} />

      <span>Logout</span>
    </button>
  );
}