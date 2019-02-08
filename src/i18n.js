import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: {
          "Welcome": {
            "To React":  "Welcome to React and react-i18next",
            "To New Universe":  "Welcome to new Universe"
          },
          "List": {
            "Added Users": "Added {{count}} user",
            "Added Users_plural": "Added {{count}} users",
          }
        }
      },
      br: {
        translation: {
          "Welcome": {
            "To React": "Bem vindo ao React and react-i18next",
            "To New Universe":  "Bem vindo ao novo Universo"
          },
          "List": {
            "Added Users": "Adicionado {{count}} usuário",
            "Added Users_plural": "Adicionado {{count}} usuários",
          }
        }
      }
    },
    fallbackLng: "br",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;