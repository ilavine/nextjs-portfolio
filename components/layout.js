import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Sidebar from "../components/sidebar";

export const siteTitle = "Next.js Portfolio - Yulia Lavine";


export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Yulia Lavine - Web Developer Portfolio"
        />
      </Head>
      <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <aside className="sidebar w-64 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div className="my-4 w-full border-b-4 border-gray-100 text-center">
            <span className="font-mono text-xl font-bold tracking-widest">
              YL
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Sidebar />
          </div>
          <div className="my-4"></div>
        </aside>
        <main className="main -ml-64 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
          {children}
     

        </main>
      </div>
    </>
  );
}
