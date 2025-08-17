import React from 'react';
import { useTranslation } from 'react-i18next';
import IconStar from '../../icons/IconStar.jsx';
import Headline from '../../ui/Headline.jsx';
import ItemGrid from '../../ui/ItemGrid.jsx';

const Features = () => {
  const { t } = useTranslation();
  const rawItems = t('features.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  const title = t('features.title');
  const subtitle = t('features.subtitle');
  const highlight = t('features.highlight');

  return (
    <>
      <section className="relative scroll-mt-16">
        <div className="relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
          <Headline title={title} subtitle={subtitle} highlight={highlight} />
          <ItemGrid
            items={items}
            defaultIcon={IconStar}
            classes={{
              container: 'md:grid-cols-2',
              title: 'md:text-[1.3rem]',
              icon: 'text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Features;
