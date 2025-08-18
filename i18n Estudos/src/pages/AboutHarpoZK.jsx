import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutHarpoZK() {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          {t('pages.aboutHarpoZK.title')}
        </h1>
      </header>

      <div className="max-w-none text-lg sm:text-xl leading-relaxed md:leading-loose space-y-10 text-gray-800 dark:text-slate-200">
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.aboutHarpoZK.trilemma.title')}</h2>
          <p className="mt-3">{t('pages.aboutHarpoZK.trilemma.body')}</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>{t('pages.aboutHarpoZK.trilemma.items.decentralization')}</li>
            <li>{t('pages.aboutHarpoZK.trilemma.items.programmability')}</li>
            <li>{t('pages.aboutHarpoZK.trilemma.items.privacy')}</li>
          </ul>
          <blockquote className="mt-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
            {t('pages.aboutHarpoZK.trilemma.quote')}
          </blockquote>
        </section>

        <hr className="border-slate-400 dark:border-slate-700" />

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.aboutHarpoZK.integratedPrivacy.title')}</h2>
          <p className="mt-3">{t('pages.aboutHarpoZK.integratedPrivacy.body1')}</p>
          <p className="mt-3">{t('pages.aboutHarpoZK.integratedPrivacy.body2')}</p>
          <blockquote className="mt-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
            {t('pages.aboutHarpoZK.integratedPrivacy.quote')}
          </blockquote>
        </section>

        <hr className="border-slate-400 dark:border-slate-700" />

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.aboutHarpoZK.advancedEncryption.title')}</h2>
          <p className="mt-3">{t('pages.aboutHarpoZK.advancedEncryption.body1')}</p>
          <p className="mt-3">{t('pages.aboutHarpoZK.advancedEncryption.body2')}</p>
          <blockquote className="mt-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
            {t('pages.aboutHarpoZK.advancedEncryption.quote')}
          </blockquote>
        </section>

        <hr className="border-slate-400 dark:border-slate-700" />

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.aboutHarpoZK.secureTransfer.title')}</h2>
          <p className="mt-3">{t('pages.aboutHarpoZK.secureTransfer.body1')}</p>
          <p className="mt-3">{t('pages.aboutHarpoZK.secureTransfer.body2')}</p>
          <blockquote className="mt-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
            {t('pages.aboutHarpoZK.secureTransfer.quote')}
          </blockquote>
        </section>

        <hr className="border-slate-400 dark:border-slate-700" />

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.aboutHarpoZK.settlement.title')}</h2>
          <p className="mt-3">{t('pages.aboutHarpoZK.settlement.body1')}</p>
          <p className="mt-3">{t('pages.aboutHarpoZK.settlement.body2')}</p>
          <blockquote className="mt-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
            {t('pages.aboutHarpoZK.settlement.quote')}
          </blockquote>
        </section>

        <hr className="border-slate-400 dark:border-slate-700" />

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.aboutHarpoZK.encryptedTokens.title')}</h2>
          <p className="mt-3">{t('pages.aboutHarpoZK.encryptedTokens.body1')}</p>
          <p className="mt-3">{t('pages.aboutHarpoZK.encryptedTokens.body2')}</p>
          <blockquote className="mt-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
            {t('pages.aboutHarpoZK.encryptedTokens.quote')}
          </blockquote>
        </section>

        <hr className="border-slate-400 dark:border-slate-700" />

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.aboutHarpoZK.anonymity.title')}</h2>
          <p className="mt-3">{t('pages.aboutHarpoZK.anonymity.body1')}</p>
          <div className="mt-3">
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('pages.aboutHarpoZK.anonymity.items.offchain')}</li>
              <li>{t('pages.aboutHarpoZK.anonymity.items.node')}</li>
              <li>{t('pages.aboutHarpoZK.anonymity.items.inputs')}</li>
            </ul>
          </div>
          <blockquote className="mt-4 border-l-4 border-slate-300 dark:border-slate-600 pl-4 italic">
            {t('pages.aboutHarpoZK.anonymity.quote')}
          </blockquote>
        </section>
      </div>
    </section>
  );
}