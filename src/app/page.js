import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 ">
      <div className="mt-[25%]">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl text-[#0caa0ca8] font-bold">Dashboardify</h1>
        </header>
        <p className="flex text-[#70ad37] mt-[-10px] ml-[10px]">
          A Dynamic Dashboard Application
        </p>
        <div className="flex flex-row items-center gap-2 mt-5 ml-12">
          <Link
            href="/dashboard/login"
            className="border border-slate-300 bg-[#0caa0ca8]/80 text-white active:bg-[#0caa0ca8] rounded-lg px-2 py-1 outline-none focus-within:border-slate-100"
          >
            Login
          </Link>
          <Link
            href="/dashboard/signup"
            className="border border-slate-300 min-h-[20px] min-w-[40px] bg-[#0caa0ca8]/80 text-white active:bg-[#0caa0ca8]/80 rounded-lg px-2 py-1 outline-none focus-within:border-slate-100"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
