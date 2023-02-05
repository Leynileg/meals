import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { locale } from "expo-localization";

import { translations } from "./locales";

const lang = locale.split("-")[0];

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: translations,
  lng: lang,
  fallbackLng: "en",
  nsSeparator: ".",
  keySeparator: false,
  cleanCode: true,
  returnNull: false,
  interpolation: {
    escapeValue: false
  }
});
