import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Brand() {
  const { t } = useTranslation();
  return (
    <a className="flex items-center" href="/">
      <span className="self-center ml-2 text-2xl md:text-xl font-bold whitespace-nowrap flex items-center text-gray-900 dark:text-white">
        <img
          src="/assets/images/logo.avif"
          className="inline-block mr-1"
          width={32}
          height={32}
          alt="Harpo-ZK"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {t('header.brand')}
      </span>
    </a>
  );
}
