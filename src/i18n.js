// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      "about": {
        "title": "O mnie",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Phasellus consectetur enim sed arcu ultricies, in sodales lorem dapibus."
      },
      "footer": {
        "title": "© 2025 Piotr Nowak. Wszelkie prawa zastrzeżone."
      },
      "experience": "Doświadczenie",
      "education": "Edukacja",
      "projects": "Projekty",
      "contact": "Kontakt",
      "welcome": "Witamy na mojej stronie CV!",
      "profilePhotoAlt": "Zdjęcie profilowe"
    }
  },
  en: {
    translation: {
      "about": {
        "title": "About Me",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Phasellus consectetur enim sed arcu ultricies, in sodales lorem dapibus."
      },
      "footer": {
        "title": "© 2025 Piotr Nowak. All rights reserved."
      },
      "experience": "Experience",
      "education": "Education",
      "projects": "Projects",
      "contact": "Contact",
      "welcome": "Welcome to my CV page!",
      "profilePhotoAlt": "Profile Picture"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl', // domyślny język
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;