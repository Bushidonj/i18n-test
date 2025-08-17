import React from 'react';

// Simple React version of Harpo's Headline (no Qwik, no twMerge)
// Props: { title, subtitle, highlight, classes?: { container, title, subtitle, highlight } }
const Headline = ({ title, subtitle, highlight, classes = {} }) => {
  return (
    <div className={`mb-8 text-center ${classes.container || ''}`}>
      {highlight ? (
        <div className={`text-primary-600 dark:text-primary-600 font-bold tracking-wide uppercase ${classes.highlight || ''}`}>
          {highlight}
        </div>
      ) : null}
      {title ? (
        <h2 className={`mt-2 text-5xl md:text-4xl font-bold ${classes.title || ''}`}>{title}</h2>
      ) : null}
      {subtitle ? (
        <p className={`mt-4 text-gray-600 dark:text-gray-300 ${classes.subtitle || ''}`}>{subtitle}</p>
      ) : null}
    </div>
  );
};

export default Headline;
