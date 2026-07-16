import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import cs from './locales/cs.json';
import pl from './locales/pl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      cs: { translation: cs },
      pl: { translation: pl },
    },
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Bez 'navigator' → nový návštěvník bez uložené volby dostane češtinu (fallbackLng).
      // Přepnutí jazyka se uloží a přežije (localStorage/cookie).
      order: ['querystring', 'cookie', 'localStorage'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
