import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import tr from './tr.json';

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON:"v3",
    resources: {
      tr: {
        translation: tr,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'tr',
    lng: 'te',
  });
export default i18next;