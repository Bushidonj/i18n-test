import React, { useEffect, useState } from 'react';
import IconSun from '../../icons/IconSun';
import IconMoon from '../../icons/IconMoon';

export default function ToggleTheme({ iconClass = 'w-6 h-6 md:w-5 md:h-5 md:inline-block', className = '' }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : systemPrefersDark;
    setDark(shouldDark);
    const root = document.documentElement.classList;
    if (shouldDark) root.add('dark');
    else root.remove('dark');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const root = document.documentElement.classList;
    if (next) {
      root.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle between Dark and Light mode"
      className={`text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center ${className}`}
    >
      {dark ? <IconMoon className={iconClass} /> : <IconSun className={iconClass} />}
    </button>
  );
}
