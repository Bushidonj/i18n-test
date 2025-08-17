import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t } = useTranslation();
  return (
    <nav
      className="items-center w-full md:w-auto hidden md:flex text-gray-800 dark:text-slate-200 overflow-visible md:mx-5"
      aria-label="Main navigation"
    >
      <ul className="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
        {/* About dropdown */}
        <li className="relative group">
          <button className="px-4 py-3 flex items-center hover:text-white">
            {t('header.menu.about')}
            <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          <ul className="absolute left-0 mt-1 hidden group-hover:block group-focus-within:block z-50 bg-white border border-slate-200 rounded shadow-xl min-w-[200px] dark:bg-slate-900/95 dark:border-slate-800 backdrop-blur-md">
            <li>
              <a href="/about" className="block px-5 py-2 hover:bg-gray-50 dark:hover:bg-slate-800">{t('header.menu.aboutUs')}</a>
            </li>
            <li>
              <a href="/blog" className="block px-5 py-2 hover:bg-gray-50 dark:hover:bg-slate-800">{t('header.menu.blog')}</a>
            </li>
          </ul>
        </li>

        {/* For Devs dropdown */}
        <li className="relative group">
          <button className="px-4 py-3 flex items-center hover:text-white">
            {t('header.menu.forDevs')}
            <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          <ul className="absolute left-0 mt-1 hidden group-hover:block group-focus-within:block z-50 bg-white border border-slate-200 rounded shadow-xl min-w-[220px] dark:bg-slate-900/95 dark:border-slate-800 backdrop-blur-md">
            <li>
              <a href="/docs" className="block px-5 py-2 hover:bg-gray-50 dark:hover:bg-slate-800">{t('header.menu.docs')}</a>
            </li>
            <li>
              <a href="/how-to-use" className="block px-5 py-2 hover:bg-gray-50 dark:hover:bg-slate-800">{t('header.menu.howToUse')}</a>
            </li>
            <li>
              <a href="/concepts" className="block px-5 py-2 hover:bg-gray-50 dark:hover:bg-slate-800">{t('header.menu.concepts')}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
