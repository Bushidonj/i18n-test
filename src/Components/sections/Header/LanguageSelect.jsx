import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function LanguageSelect() {
  const { t } = useTranslation();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (i18next && i18next.language) {
      setLang(i18next.language);
    }
  }, []);

  const onChangeLang = (e) => {
    const next = e.target.value;
    setLang(next);
    i18next.changeLanguage(next);
    document.documentElement.setAttribute('lang', next);
  };

  return (
    <div className="ml-4">
      <label className="sr-only" htmlFor="lang-select">{t('header.language')}</label>
      <select
        id="lang-select"
        className="rounded px-2 py-1 border text-gray-900 bg-white border-slate-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:text-slate-200 dark:bg-slate-800/80 dark:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-600"
        value={lang}
        onChange={onChangeLang}
      >
        <option value="en">English</option>
        <option value="pt-BR">Português (BR)</option>
      </select>
    </div>
  );
}
