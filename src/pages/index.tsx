import Login from "@/components/Login";
import scss from "@/styles/Home.module.scss";
import { useSession } from "next-auth/react";
import React from "react";
import Dashboard from "./dashboard";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};
export default Home;
