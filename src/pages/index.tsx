import Login from "@/components/Login";
import Dashboard from "./dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { useSession } from "next-auth/react";
import Head from "next/head";


export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard"/>
        <meta name ="viewport" content="width=devide-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Header />
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
