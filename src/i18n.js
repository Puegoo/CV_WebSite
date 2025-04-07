// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      "about": {
        "title": "O mnie",
        "text": "Nazywam się Piotr Nowak i jestem ambitnym profesjonalistą IT, obecnie studiującym informatykę ze specjalizacją w bazach danych. Moje doświadczenie zawodowe obejmuje praktyki w firmie NEXET, gdzie współpracowałem z Asseco Poland S.A., oraz pracę jako serwisant w serwisie Apollo.\n\nPosiadam zaawansowaną wiedzę techniczną, umiejętności zarządcze i interpersonalne. Szybko się uczę, jestem samodzielny, a jednocześnie dobrze współpracuję w zespole. Mam zdany egzamin zawodowy i liczne certyfikaty, a moim celem jest rozwój w roli analityka danych.\n\nZafascynowany nowoczesnymi technologiami, aktywnie poszukuję innowacyjnych rozwiązań. Moja pasja do danych motywuje mnie do ciągłego rozwoju w branży IT. Wierzę, że moje umiejętności techniczne i miękkie czynią mnie wartościowym kandydatem dla firm poszukujących zmotywowanych profesjonalistów.\n\nW wolnym czasie pasjonuję się sportami zimowymi, siłownią i podróżami. Jestem perfekcjonistą, sumiennym i zorganizowanym, co pozwala mi wykonywać pracę na najwyższym poziomie. Znam język 🇵🇱 (ojczysty), 🇬🇧 (średniozaawansowany) i 🇪🇸 (początkujący).",
        "download": "Pobierz",
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
        "text": "My name is Piotr Nowak, and I am an ambitious IT professional currently studying computer science with a specialization in databases. My professional experience includes an internship at NEXET, where I collaborated with Asseco Poland S.A., and a role as a technician at Apollo Service.\n\nI possess advanced technical knowledge, managerial skills, and interpersonal abilities. I learn quickly, work independently, and thrive in team settings. I have passed a professional exam and earned numerous certificates, with my goal being to develop as a data analyst.\n\nI am fascinated by modern technologies and actively seek innovative solutions. My passion for data drives me to continuously grow in the IT industry. I believe my blend of technical and soft skills makes me a valuable candidate for companies seeking motivated professionals.\n\nIn my free time, I enjoy winter sports, the gym, and traveling. I am a perfectionist, diligent, and organized, ensuring my work is of the highest quality. I speak 🇵🇱 (native), 🇬🇧 (intermediate), and 🇪🇸 (beginner).",
        "download": "Download",
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