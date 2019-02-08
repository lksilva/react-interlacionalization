import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import en from './translations/en.json';
import br from './translations/br.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      br,
      en,
    },
    lng: "br", // Sobrescreve o LanguageDetector
    fallbackLng: "br", // Seta esse idioma caso não encontre o idioma do usuário
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;