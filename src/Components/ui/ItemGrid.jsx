import React from 'react';
import { ITEMGRID_DEFAULT_TONE } from './config.js';

// React ItemGrid with variant support
// Props: {
//   items,
//   defaultIcon: Component,
//   variant?: 'panel' | 'none',
//   classes?: { container, card, panel, icon, title, description }
//   renderItem?: (item, idx, helpers) => React.ReactNode
//   textTone?: 'auto' | 'contrast' | 'muted'
// }
const ItemGrid = ({ items = [], defaultIcon: DefaultIcon = null, variant = 'panel', classes = {}, renderItem, textTone = ITEMGRID_DEFAULT_TONE }) => {
  const containerClasses = `grid grid-cols-1 gap-4 ${classes.container || ''}`;

  // Variant-based defaults
  const defaultPanel = 'border border-blue-900/40 rounded-xl p-6';
  const defaultNone = '';

  const resolvedPanel = classes.panel || (variant === 'panel' ? defaultPanel : defaultNone);
  const cardClasses = `${resolvedPanel} ${classes.card || ''}`.trim();
  const iconWrapClasses = classes.icon || 'text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4';
  const titleClasses = classes.title || '';
  const toneMap = {
    auto: 'text-gray-700 dark:text-gray-300',
    contrast: 'text-gray-800 dark:text-gray-100',
    muted: 'text-gray-600 dark:text-gray-400',
  };
  const descriptionClasses = classes.description || toneMap[textTone] || toneMap.auto;

  const helpers = { DefaultIcon, iconWrapClasses, titleClasses, descriptionClasses, cardClasses };

  return (
    <div className={containerClasses}>
      {Array.isArray(items) && items.map((it, idx) => (
        renderItem ? (
          <React.Fragment key={idx}>{renderItem(it, idx, helpers)}</React.Fragment>
        ) : (
          <div key={idx} className={cardClasses}>
            <div className="flex items-center">
              {DefaultIcon ? (
                <div className={iconWrapClasses}>
                  <DefaultIcon size={24} color="#ffffff" />
                </div>
              ) : null}
              <h3 className={`m-0 font-semibold ${titleClasses}`}>{it.title}</h3>
            </div>
            <p className={`mt-2 ${descriptionClasses}`}>{it.description}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default ItemGrid;
