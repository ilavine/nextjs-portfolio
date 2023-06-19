import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/sidebar";

export const siteTitle = "Next.js Portfolio - Yulia Lavine";

export default function Layout({ children }) {
  const [showArrowDown, setShowArrowDown] = useState(false);
  const [showArrowUp, setShowArrowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingDown = window.pageYOffset > 0;
      setShowArrowDown(isScrollingDown);
    };

    const handleResize = () => {
      setShowArrowDown(window.innerWidth < 768);
    };

    const handleScrollUp = () => {
      setShowArrowUp(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScrollUp);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScrollUp);
    };
  }, []);



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <><>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Yulia Lavine - Web Developer Portfolio" />
      </Head>
      <div className="flex min-h-screen flex-col md:flex-row bg-gray-100 text-gray-800">
        <aside
          className={`sidebar w-full md:w-64 bg-white p-4 transition-transform duration-150 ease-in md:translate-y-0 md:shadow md:mr-4`}
        >
 <div className="my-4 md:mt-24 w-full border-b-4 border-gray-100 text-center">            <span className="font-mono text-3xl font-bold tracking-widest">
              YL
            </span>
          </div>
          < Navbar />

 
        </aside>
        <main className="main flex-grow flex p-4 transition-all duration-150 ease-in flex justify-center">
          {children}
        </main>
        
        {showArrowUp && (
          <button
            className="fixed bottom-6 right-6 rounded-full p-2 border-2 border-gray-800"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            &#8593;
          </button>
        )}
      </div>
    </><Footer /></>
  );
}
