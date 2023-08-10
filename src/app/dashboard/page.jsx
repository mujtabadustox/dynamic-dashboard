"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/AuthProvider/header/Header";
import Widget from "@/components/AuthProvider/widget/Widget";
import widgetsArray from "@/init.js";
import Container from "@/components/AuthProvider/container/Container";
import "./dashboard.css";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  //priority
  const sortedWidgetsArray = widgetsArray
    .slice()
    .sort((a, b) => a.priority - b.priority);

  return (
    <>
      <div className="p-10">
        <Header />
        {console.log(sortedWidgetsArray)}
      </div>

      <div className="my-grid container">
        {sortedWidgetsArray &&
          sortedWidgetsArray.map((element) => (
            <Container key={element.id} element={element}>
              <Widget element={element} />
            </Container>
          ))}
      </div>
    </>
  );
};

export default Dashboard;
