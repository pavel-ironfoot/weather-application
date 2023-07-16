import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import uaTranslations from './translations/ua/ua.json';
import enTranslations from './translations/en/en.json';
import heTranslations from './translations/he/he.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', 
    fallbackLng: 'en', 
    resources: {
      ua: {
        translation: uaTranslations,
      },
      en: {
        translation: enTranslations,
      },
      he: {
        translation: heTranslations,
      },
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;