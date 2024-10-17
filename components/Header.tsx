"use client";

import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import React from "react";
import LogoutIcon from "@/public/logout.svg";

const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  return (
    <>
      {user?.id ? (
        <div className="flex flex-col h-8">
          <div className="flex items-center gap-2 self-end">
            <span>Welcome, {user.username}!</span>
            <LogoutIcon width={20} onClick={logout} />
          </div>
        </div>
      ) : (
        <button
          className="bg-green-600 text-white rounded hover:bg-green-700 self-end px-2 py-1"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Header;
