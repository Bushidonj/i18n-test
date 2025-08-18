import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleTheme from './ToggleTheme';
import LanguageSelect from './LanguageSelect';

export default function Nav({ isMenuOpen = false }) {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const isMobile = isMenuOpen; // quando o menu está aberto, estamos no modo mobile
  return (
    <nav
      className={`items-center w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex text-gray-800 dark:text-slate-200 overflow-visible md:mx-5`}
      aria-label="Main navigation"
    >
      <ul className="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
        {/* About dropdown */}
        <li className="relative group">
          <button
            className="px-5 py-4 flex items-center hover:text-gray-900 dark:hover:text-white transition-colors w-full md:w-auto"
            onClick={() => {
              if (isMobile) setOpenDropdown(openDropdown === 'about' ? null : 'about');
            }}
          >
            {t('header.menu.about')}
            <svg className={`w-3.5 h-3.5 ml-1 transition-transform duration-150 ease-out ${openDropdown === 'about' ? 'rotate-180' : ''} md:rotate-0 md:group-hover:rotate-180`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          <ul className={`${isMobile ? (openDropdown === 'about' ? 'block' : 'hidden') : 'invisible group-hover:visible group-focus-within:visible pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto'} ${isMobile ? 'pl-4' : 'absolute left-0 top-full'} z-50 bg-white border border-slate-200 rounded shadow-xl min-w-[200px] dark:bg-slate-900/95 dark:border-slate-800 backdrop-blur-md transition ease-out duration-150 ${isMobile ? '' : 'transform opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0'}`}>
            <li>
              <a href="/about-harpo-zk" className="block px-5 py-2 text-gray-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:text-white">{t('header.menu.aboutHarpoZK')}</a>
            </li>
            <li>
              <a href="/flow-sdk" className="block px-5 py-2 text-gray-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:text-white">{t('header.menu.flowSDK')}</a>
            </li>
          </ul>
        </li>

        {/* For Devs dropdown */}
        <li className="relative group">
          <button
            className="px-5 py-4 flex items-center hover:text-gray-900 dark:hover:text-white transition-colors w-full md:w-auto"
            onClick={() => {
              if (isMobile) setOpenDropdown(openDropdown === 'devs' ? null : 'devs');
            }}
          >
            {t('header.menu.forDevs')}
            <svg className={`w-3.5 h-3.5 ml-1 transition-transform duration-150 ease-out ${openDropdown === 'devs' ? 'rotate-180' : ''} md:rotate-0 md:group-hover:rotate-180`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          <ul className={`${isMobile ? (openDropdown === 'devs' ? 'block' : 'hidden') : 'invisible group-hover:visible group-focus-within:visible pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto'} ${isMobile ? 'pl-4' : 'absolute left-0 top-full'} z-50 bg-white border border-slate-200 rounded shadow-xl min-w-[220px] dark:bg-slate-900/95 dark:border-slate-800 backdrop-blur-md transition ease-out duration-150 ${isMobile ? '' : 'transform opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0'}`}>
            <li>
              <a href="/docs" className="block px-5 py-2 text-gray-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:text-white">{t('header.menu.docs')}</a>
            </li>
            <li>
              <a href="/how-to-use" className="block px-5 py-2 text-gray-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:text-white">{t('header.menu.howToUse')}</a>
            </li>
            <li>
              <a href="/concepts" className="block px-5 py-2 text-gray-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:text-white">{t('header.menu.concepts')}</a>
            </li>
          </ul>
        </li>

        {/* Mobile-only: Theme + Language */}
        <li className="md:hidden mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-medium">Theme</span>
            <ToggleTheme iconClass="w-6 h-6" />
          </div>
          <div className="mt-2 px-1">
            <LanguageSelect />
          </div>
        </li>
      </ul>
    </nav>
  );
}
