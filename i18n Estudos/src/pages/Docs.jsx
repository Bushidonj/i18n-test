import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Docs() {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          {t('pages.docs.title')}
        </h1>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none text-lg sm:text-xl">
        <p>{t('pages.docs.intro')}</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8">{t('pages.docs.sections.gettingStarted.title')}</h2>
        <p className="mt-2">{t('pages.docs.sections.gettingStarted.body')}</p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6">{t('pages.docs.references.title')}</h3>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><a href="/how-to-use" className="text-blue-600 dark:text-blue-400 hover:underline">{t('pages.docs.references.howToUse')}</a></li>
          <li><a href="/concepts" className="text-blue-600 dark:text-blue-400 hover:underline">{t('pages.docs.references.concepts')}</a></li>
          <li><a href="/flow-sdk" className="text-blue-600 dark:text-blue-400 hover:underline">{t('pages.docs.references.flowSDK')}</a></li>
        </ul>
      </div>
    </section>
  );
}