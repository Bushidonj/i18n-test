import React from 'react';

// React version of Harpo's ItemGrid
// Props: { items, defaultIcon: Component, classes?: { container, card, panel, icon, title, description } }
const ItemGrid = ({ items = [], defaultIcon: DefaultIcon = null, classes = {} }) => {
  const containerClasses = `grid mx-auto gap-8 ${classes.container || ''}`;
  const baseCardClasses = `border-2 border-blue-900 rounded-xl p-4`;
  const panelClasses = classes.panel || '';
  const cardClasses = `${panelClasses ? panelClasses : baseCardClasses} ${classes.card || ''}`.trim();
  const iconWrapClasses = classes.icon || 'text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4';
  const titleClasses = classes.title || '';
  const descriptionClasses = classes.description || 'text-gray-600 dark:text-gray-300';

  return (
    <div className={containerClasses}>
      {Array.isArray(items) && items.map((it, idx) => (
        <div key={idx} className={cardClasses}>
          <div className="flex items-center">
            {DefaultIcon ? (
              <div className={iconWrapClasses}>
                <DefaultIcon size={24} color="#ffffff" />
              </div>
            ) : null}
            <h3 className={`text-xl m-0 font-bold ${titleClasses}`}>{it.title}</h3>
          </div>
          <p className={`mt-3 ${descriptionClasses}`}>{it.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
