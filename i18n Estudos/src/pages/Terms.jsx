import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          {t('pages.terms.title', 'Terms and Conditions')}
        </h1>
      </header>

      <div className="max-w-none text-lg sm:text-xl leading-relaxed md:leading-loose space-y-10 text-gray-800 dark:text-slate-200">

        {/* UTXO */}
        <p className="mt-3">{t('pages.terms.body', 'Under construction...')}</p>

      </div>
    </section>
  );
}