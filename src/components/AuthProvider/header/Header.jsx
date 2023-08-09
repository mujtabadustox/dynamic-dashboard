"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  return (
    <>
      <div className="bg-white text-black">
        Welcome! {session?.data?.user?.email}
      </div>
    </>
  );
};

export default Header;
