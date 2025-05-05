import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

function Experience() {
  const { t, i18n } = useTranslation();
  
  // Sample experience data - replace with your actual experience
  const experiences = [
    {
      company: 'NEXET',
      role: i18n.language === 'pl' ? 'Stażysta' : 'Intern',
      period: '2023 - 2024',
      description: i18n.language === 'pl' 
        ? 'Współpraca z Asseco Poland S.A. przy projektach związanych z analizą danych. Opracowywanie rozwiązań bazodanowych i implementacja front-endowych komponentów. Uczestnictwo w cyklu wytwarzania oprogramowania.'
        : 'Collaboration with Asseco Poland S.A. on data analysis projects. Developing database solutions and implementing front-end components. Participation in the software development lifecycle.',
      skills: ['SQL', 'React', 'Data Analysis', 'Git']
    },
    {
      company: 'Apollo Service',
      role: i18n.language === 'pl' ? 'Serwisant IT' : 'IT Technician',
      period: '2022 - 2023',
      description: i18n.language === 'pl'
        ? 'Diagnostyka i naprawa sprzętu komputerowego. Konfiguracja sieci lokalnych. Wsparcie techniczne dla klientów. Instalacja i utrzymanie oprogramowania systemowego i użytkowego.'
        : 'Diagnosing and repairing computer hardware. Local network configuration. Technical support for customers. Installation and maintenance of system and utility software.',
      skills: ['Hardware', 'Networks', 'Windows', 'Linux']
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-header">
        <h1 className="section-title">{t('experience')}</h1>
        <p className="section-tagline">
          {i18n.language === 'pl' 
            ? 'Moje doświadczenie zawodowe i projekty' 
            : 'My professional experience and projects'}
        </p>
      </div>
      
      <div className="timeline">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="experience-time">{exp.period}</div>
              <h3 className="experience-role">{exp.role}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="achievements-section">
        <h2 className="achievements-title">
          {i18n.language === 'pl' ? 'Osiągnięcia' : 'Achievements'}
        </h2>
        
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3 className="achievement-title">
              {i18n.language === 'pl' ? 'Egzamin zawodowy' : 'Professional Certification'}
            </h3>
            <p className="achievement-description">
              {i18n.language === 'pl'
                ? 'Zdany egzamin z kwalifikacji zawodowych w dziedzinie IT.'
                : 'Passed professional qualification exam in the IT field.'}
            </p>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">📊</div>
            <h3 className="achievement-title">
              {i18n.language === 'pl' ? 'Analiza danych' : 'Data Analysis'}
            </h3>
            <p className="achievement-description">
              {i18n.language === 'pl'
                ? 'Wykonanie projektu analizy danych dla rzeczywistego klienta podczas stażu.'
                : 'Completed a real-world data analysis project during internship.'}
            </p>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">💻</div>
            <h3 className="achievement-title">
              {i18n.language === 'pl' ? 'Rozwój umiejętności' : 'Skill Development'}
            </h3>
            <p className="achievement-description">
              {i18n.language === 'pl'
                ? 'Samodzielne ukończenie zaawansowanych kursów programowania i baz danych.'
                : 'Self-completion of advanced programming and database courses.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;