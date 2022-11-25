import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import tr from './tr';
import en from './en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: tr,
      en: en,
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: '.',

    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

export default i18n;
