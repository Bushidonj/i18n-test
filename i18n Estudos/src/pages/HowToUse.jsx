import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HowToUse() {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          {t('pages.howToUse.title')}
        </h1>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none text-lg sm:text-xl">
        <p>{t('pages.howToUse.body1')}</p>
        <p className="mt-4">{t('pages.howToUse.body2')}</p>
        <p className="mt-4">{t('pages.howToUse.body3')}</p>
        <p className="mt-4">{t('pages.howToUse.body4')}</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8">{t('pages.howToUse.tools.title')}</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>{t('pages.howToUse.tools.eventCapture')}</li>
          <li>{t('pages.howToUse.tools.utxoVerify')}</li>
          <li>{t('pages.howToUse.tools.automateStates')}</li>
        </ul>
      </div>
    </section>
  );
}