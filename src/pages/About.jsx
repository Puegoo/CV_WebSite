import React from 'react';
import { useTranslation } from 'react-i18next';
import profileImg from '../images/profile.png';
import docCV from '../assets/doc_CV.svg';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="photo-tile">
        <img src={profileImg} alt={t('profilePhotoAlt')} />
        <a href="/assets/document.pdf" download className="download-button">
          <span>{t('about.download')}</span>
          <img src={docCV} alt="Pobierz CV" />
        </a>
      </div>
      <div className="text-tile">
        <h1>{t('about.title')}</h1>
        {t('about.text').split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default About;