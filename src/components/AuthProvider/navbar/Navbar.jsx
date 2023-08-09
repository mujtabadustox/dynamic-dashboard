"use client";

import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  return (
    <div className="flex justify-between w-100">
      <Link href="/" className="font-bold mx-5 my-2.5 text-green-400">
        Dashboardify
      </Link>

      <div className="flex gap-4 mx-5 my-2.5">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        {session && session.status === "authenticated" && (
          <button
            onClick={signOut}
            className="border border-slate-300 w-[100px]  bg-[#7c6f5a]/80 active:bg-[#7c6f5a] rounded-lg text-white outline-none focus-within:border-slate-100"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
