import Link from 'next/link';
import Image from 'next/image';
import Avatar from '../avatar.jpg';
import Divider from './divider';

const navItems = {
  '/about': {
    name: 'About',
  },
  '/blog': {
    name: 'Blog',
  },
  '/work': {
    name: 'Work',
  },
  '/contact': {
    name: 'Contact',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image
              src={Avatar}
              alt="Valentin Kao"
              width={80}
              height={80}
              className="rounded-md"
            />
          </Link>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold dark:text-white">
              Valentin Kao
            </h1>
            <nav
              className="flex flex-row items-start relative fade md:overflow-auto  md:relative"
              id="nav"
            >
              {' '}
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 pr-4"
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <Divider />
      </div>
    </aside>
  );
}
