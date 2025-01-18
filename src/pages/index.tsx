import Login from "@/components/Login";
import Dashboard from "./dashboard";
import SideMenu from "@/components/SideMenu";
import { useSession } from "next-auth/react";
import Head from "next/head";
import scss from '@/styles/Home.module.scss'
import React from "react";


const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard"/>
        <meta name ="viewport" content="width=devide-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={scss.main}>

        
        {
          session && (
            <>
              <SideMenu />
              <Dashboard/>
            </>
            

          )
        }
        <Login />
        

      </main>
    
    </>
    
  );
}
export default Home;
