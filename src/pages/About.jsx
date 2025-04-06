import React from 'react';
import { useTranslation } from 'react-i18next';
import profileImg from '../images/profile.png';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="photo-tile">
        <img src={profileImg} alt={t('profilePhotoAlt')} />
      </div>
      <div className="text-tile">
        <h1>{t('about.title')}</h1>
        <p>{t('about.text')}</p>
      </div>
    </div>
  );
}

export default About;