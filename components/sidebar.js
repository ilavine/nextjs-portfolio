import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/resume': {
    name: 'About Me',
  },
  '/projects': {
    name: 'Projects',
  },
  '/contact': {
    name: 'Contact Me',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[250px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
      <div className="lg:sticky lg:top-40">
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-center md:justify-center relative px-4 md:mt-12 md:ml-6 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0 pr-0">
              {Object.entries(navItems).map(([path, { name }], index) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                        'text-sm md:text-base': true,
                        'border-r': index < Object.keys(navItems).length - 1, 
                        'md:border-r-0': true, 
                      }
                    )}
                  >
                    <span className="relative py-2 px-4 flex justify-center"> {/* Updated padding values for mobile screens */}
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
