import React from 'react';
import { useTranslation } from 'react-i18next';

function IconTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.633 7.997c.013.177.013.355.013.533 0 5.408-4.118 11.64-11.64 11.64-2.313 0-4.464-.676-6.272-1.843.321.038.63.05.964.05a8.23 8.23 0 0 0 5.1-1.756 4.116 4.116 0 0 1-3.842-2.852c.25.038.5.063.764.063.363 0 .726-.05 1.065-.138a4.108 4.108 0 0 1-3.296-4.034v-.05c.55.304 1.19.487 1.87.513a4.1 4.1 0 0 1-1.833-3.417c0-.764.203-1.453.558-2.06a11.675 11.675 0 0 0 8.465 4.292 4.63 4.63 0 0 1-.102-.94 4.104 4.104 0 0 1 7.103-2.803 8.09 8.09 0 0 0 2.604-.99 4.13 4.13 0 0 1-1.806 2.263 8.176 8.176 0 0 0 2.366-.637 8.84 8.84 0 0 1-2.06 2.135z"/>
    </svg>
  );
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm4.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </svg>
  );
}

function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.88 3.16 9.01 7.55 10.46.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.07-3.07.67-3.72-1.31-3.72-1.31-.5-1.25-1.22-1.58-1.22-1.58-.99-.68.08-.66.08-.66 1.09.08 1.65 1.12 1.65 1.12.97 1.65 2.54 1.17 3.16.89.1-.7.38-1.17.68-1.44-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.17 1.12-2.93-.11-.28-.49-1.43.11-2.98 0 0 .92-.3 3.02 1.12a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.55.22 2.7.11 2.98.69.76 1.12 1.73 1.12 2.93 0 4.23-2.58 5.15-5.04 5.42.39.33.73.98.73 1.99 0 1.44-.01 2.6-.01 2.95 0 .29.2.64.76.53A10.71 10.71 0 0 0 23.1 11.6C23.1 5.33 18.27.5 12 .5z"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const links = [
    {
      title: t('footer.columns.support'),
      items: [
        { title: t('footer.links.aboutHarpo'), href: '/about-harpo-zk' },
        { title: t('footer.links.professionalServices'), href: 'https://www.linkedin.com/in/julianosales/' },
        { title: t('footer.links.technicalContact'), href: 'https://www.linkedin.com/in/julianosales/' },
      ],
    },
    {
      title: t('footer.columns.company'),
      items: [
        { title: t('footer.links.aboutUs'), href: '/about-us' },
        // { title: t('footer.links.blog'), href: '/blog' },
      ],
    },
    {
      title: t('footer.columns.devs'),
      items: [
        { title: t('footer.links.demo'), href: 'https://www.linkedin.com/in/julianosales/' },
        { title: t('footer.links.docs'), href: '/docs' },
        { title: t('footer.links.howToUse'), href: '/how-to-use' },
        { title: t('footer.links.concepts'), href: '/concepts' },
      ],
    },
    {
      title: t('footer.columns.legal'),
      items: [
        { title: t('footer.links.privacy'), href: '/privacy' },
        { title: t('footer.links.terms'), href: '/terms' },
      ],
    },
  ];

  const social = [
    { label: 'Twitter', href: 'https://x.com/HarpoZK', Icon: IconTwitter },
    { label: 'Instagram', href: 'https://www.instagram.com/harpozk/', Icon: IconInstagram },
    { label: 'Github', href: 'https://github.com/HarpoZK', Icon: IconGithub },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div className="col-span-12 lg:col-span-4 pr-8">
            <div className="mb-2">
              <a className="inline-block font-bold text-xl" href="/">{t('footer.brand')}</a>
            </div>
            <div className="text-gray-700 dark:text-gray-400">
              {t('footer.description')}
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="text-gray-800 dark:text-slate-200 font-medium mb-2">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul className="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} className="mb-2">
                      <a
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-slate-200 hover:underline transition duration-150 ease-in-out"
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul className="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, Icon }, index) => (
              <li key={index}>
                <a
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>

          <div className="text-sm text-gray-700 dark:text-slate-400 mr-4">
            <span className="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://allan-azevedo.netlify.app/)]"></span>
            {t('footer.madeBy')} {' '}
            <a className="text-blue-800 underline dark:text-gray-200" href="https://allan-azevedo.netlify.app/" target="_blank" rel="noopener noreferrer">
              A.A Solutions
            </a>{' '}
            · {t('footer.allRights')} {t('footer.version')}
          </div>
        </div>
      </div>
    </footer>
  );
}
