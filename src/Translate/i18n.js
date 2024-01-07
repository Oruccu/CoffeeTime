import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from 'i18next-react-native-language-detector';

import en from './translations/en';
import tr from './translations/tr';
i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: tr,
      },
      es: {
        translation: en,
      },
    },
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;