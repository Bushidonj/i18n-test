import React from 'react';
import { useTranslation } from 'react-i18next';
import IconStar from '../../icons/IconStar.jsx';
import Headline from '../../ui/Headline.jsx';
import ItemGrid from '../../ui/ItemGrid.jsx';

// Dynamic Features section (no panel borders by default)
// Props: { id?, isDark?, classes?, bg? }
const Features = ({ id, isDark = false, classes = {}, bg = null }) => {
  const { t } = useTranslation();
  const rawItems = t('features.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  const title = t('features.title');
  const subtitle = t('features.subtitle');
  const highlight = t('features.highlight');

  return (
    <section className="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        {bg ?? <div className={`absolute inset-0 ${isDark ? 'bg-dark dark:bg-transparent' : ''}`}></div>}
      </div>
      <div
        className={`relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default ${classes?.container || ''} ${isDark ? 'dark' : ''}`}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <ItemGrid
          items={items}
          defaultIcon={IconStar}
          variant="none"
          classes={{
            container: `md:grid-cols-2 ${classes?.items?.container || ''}`,
            title: `md:text-[1.3rem] ${classes?.items?.title || ''}`,
            icon: `text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 ${classes?.items?.icon || ''}`,
            card: classes?.items?.card || '',
            panel: classes?.items?.panel || '',
            description: classes?.items?.description || '',
          }}
        />
      </div>
    </section>
  );
};

export default Features;
