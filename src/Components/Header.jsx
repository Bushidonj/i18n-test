import React, { useEffect, useState } from 'react';
import Brand from './Header/Brand';
import Nav from './Header/Nav';
import ToggleTheme from './Header/ToggleTheme';
import LanguageSelect from './Header/LanguageSelect';

// Header composition

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolling(window.scrollY >= 10);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="header"
      className={`sticky top-0 z-40 flex-none mx-auto w-full border-b border-slate-200 dark:border-slate-800 bg-white text-gray-900 dark:bg-gray-900 dark:text-slate-300 transition-[opacity] ease-in-out ${isScrolling ? '' : ''
        }`}
    >
      <div className="absolute inset-0" />
      <div className="relative py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div className="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <Brand />
          <div className="flex items-center md:hidden">
            <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
            {/* Mobile menu toggle could be added later */}
          </div>
        </div>
        <Nav />
        <div className="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div className="items-center flex justify-between w-full md:w-auto">
            <div className="flex">
              <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
            </div>
            <LanguageSelect />
          </div>
        </div>
      </div>
    </header>
  );
}
