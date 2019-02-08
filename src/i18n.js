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
          "welcome": {
            "react":  "Welcome to React and react-i18next",
            "universe":  "Welcome to new Universe"
          },
          "list": {
            "added-users": "Added {{count}} user",
            "added-users_plural": "Added {{count}} users",
          },
          "error": {
            "unspecific": "Something went wrong.",
            "404": "The page was not found.",
          },
          "key": "{{lib}} is the biggest lib of front"
        }
      },
      br: {
        translation: {
          "welcome": {
            "react": "Bem vindo ao React and react-i18next",
            "universe":  "Bem vindo ao novo Universo"
          },
          "list": {
            "added-users": "Adicionado {{count}} usuário",
            "added-users_plural": "Adicionado {{count}} usuários",
          },
          "error": {
            "unspecific": "Algo inesperado aconteceu.",
            "404": "A página não foi encontrada.",
          },
          "key": "{{lib}} é a melhor lib de front"
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