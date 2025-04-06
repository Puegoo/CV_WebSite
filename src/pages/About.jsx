// src/pages/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about')}</h1>
      <p>{t('welcome')}</p>
      <p>Wprowadź tutaj informacje o sobie, swoje umiejętności oraz krótką biografię.</p>
    </div>
  );
}

export default About;
