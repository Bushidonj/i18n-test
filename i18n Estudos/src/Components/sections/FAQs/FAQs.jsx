import React from 'react';
import { useTranslation } from 'react-i18next';
import Headline from '../../ui/Headline.jsx';
import ItemGrid from '../../ui/ItemGrid.jsx';
import IconArrowDownRight from '../../icons/IconArrowDownRight.jsx';

const FAQs = () => {
  const { t } = useTranslation();
  const rawItems = t('faqs.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  const title = t('faqs.title');
  const subtitle = t('faqs.subtitle');
  const highlight = t('faqs.highlight');

  return (
    <section className="relative">
      <div className="relative text-default px-4 md:px-6 py-12 md:py-16 lg:py-20 mx-auto max-w-6xl">
        <Headline
          title={title}
          subtitle={subtitle}
          highlight={highlight}
          classes={{
            container: 'max-w-5xl',
            title: 'text-4xl md:text-5xl',
          }}
        />
        <div className="mb-8 md:mx-auto md:bm-12 sm:mx-auto mt-6">
          <ItemGrid
            items={items}
            defaultIcon={IconArrowDownRight}
            classes={{
              panel: 'max-w-none',
              container: 'md:grid-cols-2',
              icon: 'text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4',
              title: 'md:text-[1.3rem]',
              description: 'text-gray-300',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
