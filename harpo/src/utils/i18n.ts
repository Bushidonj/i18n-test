import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

let initialized = false;

export const initI18n = async () => {
  if (initialized) return i18n;
  await i18n
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      backend: {
        loadPath: '/assets/locale/{{lng}}/translation.json'
      },
      fallbackLng: 'en',
      ns: ['translation'],
      defaultNS: 'translation',
      detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
      },
      interpolation: { escapeValue: false }
    });
  // Sync <html lang> and notify listeners
  const updateHtmlLang = () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', i18n.language || 'en');
      document.dispatchEvent(new CustomEvent('i18n:changed'));
    }
  };
  updateHtmlLang();
  i18n.on('languageChanged', updateHtmlLang);
  i18n.on('loaded', updateHtmlLang);
  i18n.on('initialized', updateHtmlLang);
  initialized = true;
  return i18n;
};

export default i18n;
