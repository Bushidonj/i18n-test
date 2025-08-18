import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FlowSDK() {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          {t('pages.flowSDK.title')}
        </h1>
      </header>

      <div className="max-w-none text-xl sm:text-2xl leading-relaxed md:leading-loose space-y-8 text-gray-800 dark:text-slate-200">
        <h2 className="text-3xl sm:text-4xl font-semibold">{t('pages.flowSDK.envPreparation.title')}</h2>
        <p className="">{t('pages.flowSDK.envPreparation.body')}</p>

        <h2 className="text-3xl sm:text-4xl font-semibold">{t('pages.flowSDK.proofPayload.title')}</h2>
        <p className="">{t('pages.flowSDK.proofPayload.body')}</p>

        <h2 className="text-3xl sm:text-4xl font-semibold">{t('pages.flowSDK.events.title')}</h2>
        <p className="">{t('pages.flowSDK.events.body')}</p>

        <h2 className="text-3xl sm:text-4xl font-semibold">{t('pages.flowSDK.contracts.title')}</h2>
        <p className="">{t('pages.flowSDK.contracts.body')}</p>

        <h2 className="text-3xl sm:text-4xl font-semibold">{t('pages.flowSDK.ready.title')}</h2>

        <hr className="my-6 border-slate-200 dark:border-slate-700" />

        <figure className="flex justify-center">
          <img
            src="/assets/images/stepImages.png"
            alt={t('pages.flowSDK.imageAlt')}
            className="rounded-lg shadow-md border border-slate-200 dark:border-slate-700 mx-auto max-w-full"
          />
        </figure>
      </div>
    </section>
  );
}