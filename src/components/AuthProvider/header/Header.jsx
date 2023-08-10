"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  const name = session?.data?.user?.email.split("@")[0];
  return (
    <>
      <div className="flex flex-row bg-white text-black h-[50px] rounded-lg p-2.5 justify-between">
        <p className="flex font-bold">Welcome {name} !! </p>
        <div className="flex ml-[50px]">
          <input
            type="search"
            placeholder="Dummy Search"
            className="border border-slate-300 bg-transparent rounded outline-none focus-within:border-blue-950"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
