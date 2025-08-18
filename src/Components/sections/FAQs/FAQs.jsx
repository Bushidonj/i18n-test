import React from 'react';
import { useTranslation } from 'react-i18next';
import Headline from '../../ui/Headline.jsx';
import ItemGrid from '../../ui/ItemGrid.jsx';
import IconArrowDownRight from '../../icons/IconArrowDownRight.jsx';

// Dynamic FAQs section
// Props: { id?, isDark?, classes?, bg? }
const FAQs = ({ id, isDark = false, classes = {}, bg = null }) => {
  const { t } = useTranslation();
  const rawItems = t('faqs.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  const title = t('faqs.title');
  const subtitle = t('faqs.subtitle');
  const highlight = t('faqs.highlight');

  return (
    <section className="relative" {...(id ? { id } : {})}>
      <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        {bg ?? <div className={`absolute inset-0 ${isDark ? 'bg-dark dark:bg-transparent' : ''}`}></div>}
      </div>
      <div className={`relative text-default px-4 md:px-6 py-12 md:py-16 lg:py-20 mx-auto max-w-6xl ${classes?.container || ''} ${isDark ? 'dark' : ''}`}>
        <Headline
          title={title}
          subtitle={subtitle}
          highlight={highlight}
          classes={{
            container: `max-w-5xl ${classes?.headline?.container || ''}`,
            title: `text-4xl md:text-5xl ${classes?.headline?.title || ''}`,
            subtitle: classes?.headline?.subtitle || '',
            highlight: classes?.headline?.highlight || '',
          }}
        />
        <div className="mb-8 md:mx-auto md:bm-12 sm:mx-auto mt-6">
          <ItemGrid
            items={items}
            defaultIcon={IconArrowDownRight}
            classes={{
              panel: `max-w-none ${classes?.items?.panel || ''}`,
              container: `md:grid-cols-2 ${classes?.items?.container || ''}`,
              icon: `text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 ${classes?.items?.icon || ''}`,
              title: `md:text-[1.3rem] ${classes?.items?.title || ''}`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
