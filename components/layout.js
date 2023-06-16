import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Sidebar from '../components/sidebar';

export const siteTitle = 'Next.js Portfolio - Yulia Lavine';

export default function Layout({ children, home }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/resume', name: 'Resume' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yulia Lavine - Web Developer Portfolio" />
      </Head>
      <div className="flex min-h-screen flex-col md:flex-row bg-gray-100 text-gray-800">
        <aside
          className={`sidebar w-full md:w-64 bg-white p-4 transition-transform duration-150 ease-in ${
            isSidebarOpen ? '' : '-translate-y-full'
          } md:translate-y-0 md:shadow-md`}
        >
          <div className="my-4 w-full border-b-4 border-gray-100 text-center">
            <span className="font-mono text-xl font-bold tracking-widest">YL</span>
          </div>
          <div className="flex flex-col items-center">
            <nav className="space-y-2">
              {navItems.map(({ path, name }) => (
                <Link key={path} href={path}
                   className="block">{name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="my-4"></div>
        </aside>
        <main className="main flex-grow flex p-4 transition-all duration-150 ease-in">
          {children}
        </main>
        <button
          className="fixed top-4 right-4 md:hidden z-10 bg-white rounded-full p-2 shadow"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isSidebarOpen ? '✖' : 'Open'}
        </button>
      </div>
    </>
  );
}
