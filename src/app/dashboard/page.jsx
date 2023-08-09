"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/AuthProvider/header/Header";
import Widget from "@/components/AuthProvider/widget/Widget";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  return (
    <>
      <div className="p-10">
        <Header />
      </div>

      <div className="w-[250px] h-[300px] bg-white m-5">
        <Widget />
      </div>
    </>
  );
};

export default Dashboard;
