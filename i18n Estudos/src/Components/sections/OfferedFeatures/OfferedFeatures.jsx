import React from 'react';
import { useTranslation } from 'react-i18next';

const OfferedFeatures = () => {
  const { t } = useTranslation();
  const rawItems = t('offeredFeatures.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="relative scroll-mt-16">
      <div className="relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
        <div className="text-center">
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">{t('offeredFeatures.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-6 md:mt-7">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="relative border border-blue-900/40 rounded-xl p-6 pt-8 bg-transparent shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-3 ltr:left-5 rtl:right-5 bg-sky-500 text-white rounded-md px-2.5 py-0.5 text-[0.78rem] font-medium shadow ring-1 ring-sky-300/30">
                {idx + 1}
              </div>

              <h3 className="m-0 font-semibold md:text-[1.08rem] lg:text-[1.18rem]">
                {it.title}
              </h3>
              <p className="mt-2.5 text-gray-300/90 dark:text-gray-300 leading-relaxed text-[0.98rem] md:text-[1rem]">
                {it.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferedFeatures;
