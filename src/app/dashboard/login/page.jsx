"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const session = useSession();

  const handleLogin = async (e) => {
    e.preventDefault();

    signIn("credentials", { email, password });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <form onSubmit={handleLogin} className="flex gap-2 flex-col ">
      <div className="mt-[15%]">
        <div className="flex flex-col items-center my-4 gap-2">
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-4xl text-[#0caa0ca8]">Login</h1>
          </header>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            required
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-blue-950"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-blue-950"
          />

          <button className="border border-slate-300 min-w-[100px] bg-[#0caa0ca8]/80 text-white active:bg-[#0caa0ca8] rounded-lg px-2 py-1 outline-none focus-within:border-slate-100">
            Login
          </button>

          {error && "Error"}
          <Link href="/dashboard/signup" className="underline">
            Dont have an Account?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
