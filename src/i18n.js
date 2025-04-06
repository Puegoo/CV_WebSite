// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      "about": "O mnie",
      "experience": "Doświadczenie",
      "education": "Edukacja",
      "projects": "Projekty",
      "contact": "Kontakt",
      "welcome": "Witamy na mojej stronie CV!"
    }
  },
  en: {
    translation: {
      "about": "About me",
      "experience": "Experience",
      "education": "Education",
      "projects": "Projects",
      "contact": "Contact",
      "welcome": "Welcome to my CV page!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
