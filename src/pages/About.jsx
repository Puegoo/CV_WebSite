import React from 'react';
import { useTranslation } from 'react-i18next';
import profileImg from '../images/profile.png';
import docCV from '../assets/doc_CV.svg';
import './About.css';

function About() {
  const { t, i18n } = useTranslation();
  
  // Split text into paragraphs
  const paragraphs = t('about.text').split('\n\n');
  
  // Extract languages from last paragraph
  const extractLanguages = () => {
    const lastPara = paragraphs[paragraphs.length - 1];
    if (lastPara.includes('🇵🇱') && lastPara.includes('🇬🇧')) {
      const languages = [
        { flag: '🇵🇱', name: i18n.language === 'pl' ? 'Polski (ojczysty)' : 'Polish (native)' },
        { flag: '🇬🇧', name: i18n.language === 'pl' ? 'Angielski (średniozaawansowany)' : 'English (intermediate)' },
        { flag: '🇪🇸', name: i18n.language === 'pl' ? 'Hiszpański (początkujący)' : 'Spanish (beginner)' }
      ];
      return languages;
    }
    return null;
  };

  const languages = extractLanguages();
  
  // Main paragraphs without the language info
  const mainParagraphs = languages ? paragraphs.slice(0, -1) : paragraphs;

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="section-title">{t('about.title')}</h1>
      </div>
      
      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img src={profileImg} alt={t('profilePhotoAlt')} className="profile-image" />
            </div>
            <div className="profile-decoration"></div>
          </div>
          
          <div className="profile-actions">
            <a href="/assets/document.pdf" download className="accent-btn download-btn">
              <span>{t('about.download')}</span>
              <img src={docCV} alt="CV" className="download-icon" />
            </a>
          </div>
          
          {languages && (
            <div className="languages-section">
              <h3 className="languages-title">
                {i18n.language === 'pl' ? 'Języki' : 'Languages'}
              </h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-name">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="about-text-section">
          <div className="about-text">
            {mainParagraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="skills-preview">
            <h3 className="skills-title">
              {i18n.language === 'pl' ? 'Kluczowe umiejętności' : 'Key Skills'}
            </h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">💻</div>
                <div className="skill-name">Front-end</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🗄️</div>
                <div className="skill-name">Database</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <div className="skill-name">Data Analysis</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔍</div>
                <div className="skill-name">Problem Solving</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;