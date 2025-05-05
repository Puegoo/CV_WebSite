import React from 'react';
import { useTranslation } from 'react-i18next';
import './Education.css';

function Education() {
  const { t, i18n } = useTranslation();
  
  // Sample education data - replace with your actual education
  const education = [
    {
      institution: i18n.language === 'pl' ? 'Uniwersytet Informatyczny' : 'University of Computer Science',
      degree: i18n.language === 'pl' ? 'Informatyka, specjalizacja Bazy Danych' : 'Computer Science, Database Specialization',
      period: '2021 - Present',
      description: i18n.language === 'pl' 
        ? 'Studia ukierunkowane na projektowanie i zarządzanie bazami danych oraz analizę danych. Specjalizacja w modelowaniu danych i projektowaniu systemów bazodanowych.'
        : 'Studies focused on database design and management, and data analysis. Specialization in data modeling and database system design.',
      courses: [
        i18n.language === 'pl' ? 'Projektowanie baz danych' : 'Database Design',
        i18n.language === 'pl' ? 'Hurtownie danych' : 'Data Warehousing',
        i18n.language === 'pl' ? 'Programowanie obiektowe' : 'Object-Oriented Programming',
        i18n.language === 'pl' ? 'Analiza algorytmów' : 'Algorithm Analysis'
      ]
    },
    {
      institution: i18n.language === 'pl' ? 'Technikum Informatyczne' : 'IT Technical School',
      degree: i18n.language === 'pl' ? 'Technik informatyk' : 'IT Technician',
      period: '2017 - 2021',
      description: i18n.language === 'pl'
        ? 'Nauka w zakresie administracji systemami i sieciami komputerowymi oraz praktyczne aspekty programowania. Wykonanie projektu dyplomowego z zakresu aplikacji webowych.'
        : 'Education in system and network administration as well as practical aspects of programming. Completion of a diploma project in the field of web applications.',
      courses: [
        i18n.language === 'pl' ? 'Administracja systemami' : 'System Administration',
        i18n.language === 'pl' ? 'Sieci komputerowe' : 'Computer Networks',
        i18n.language === 'pl' ? 'Podstawy programowania' : 'Programming Fundamentals',
        i18n.language === 'pl' ? 'Projektowanie stron WWW' : 'Web Design'
      ]
    }
  ];

  // Sample certification data
  const certifications = [
    {
      name: 'SQL Advanced',
      issuer: 'Oracle',
      date: '2023',
      icon: '🏅'
    },
    {
      name: 'Web Development',
      issuer: 'Coursera',
      date: '2022',
      icon: '🏅'
    },
    {
      name: 'Data Analysis Fundamentals',
      issuer: 'DataCamp',
      date: '2022',
      icon: '🏅'
    }
  ];

  return (
    <div className="education-page">
      <div className="education-header">
        <h1 className="section-title">{t('education')}</h1>
        <p className="section-tagline">
          {i18n.language === 'pl' 
            ? 'Moja edukacja i kwalifikacje' 
            : 'My education and qualifications'}
        </p>
      </div>
      
      <div className="education-cards">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-card-header">
              <div className="education-period">{edu.period}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
            </div>
            
            <div className="education-card-content">
              <p className="education-description">{edu.description}</p>
              
              <div className="key-courses">
                <h5 className="key-courses-title">
                  {i18n.language === 'pl' ? 'Kluczowe przedmioty' : 'Key Courses'}
                </h5>
                <ul className="courses-list">
                  {edu.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="course-item">{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="certifications-section">
        <h2 className="certifications-title">
          {i18n.language === 'pl' ? 'Certyfikaty i szkolenia' : 'Certifications and Training'}
        </h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-icon">{cert.icon}</div>
              <div className="certification-content">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-details">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-section">
        <h2 className="skills-title">
          {i18n.language === 'pl' ? 'Umiejętności techniczne' : 'Technical Skills'}
        </h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="skill-category-title">
              {i18n.language === 'pl' ? 'Bazy danych' : 'Databases'}
            </h3>
            <div className="skill-bars">
              <div className="skill-bar-item">
                <div className="skill-name">SQL</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-bar-item">
                <div className="skill-name">PostgreSQL</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-bar-item">
                <div className="skill-name">MongoDB</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="skill-category-title">
              {i18n.language === 'pl' ? 'Programowanie' : 'Programming'}
            </h3>
            <div className="skill-bars">
              <div className="skill-bar-item">
                <div className="skill-name">JavaScript/React</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-bar-item">
                <div className="skill-name">Python</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-bar-item">
                <div className="skill-name">Java</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;