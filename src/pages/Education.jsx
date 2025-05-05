import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Education.css';

function Education() {
  const { t, i18n } = useTranslation();
  
  // Sample education data - preserve as it was
  const education = [
    {
      institution: i18n.language === 'pl' ? 'Uniwersytet Rzeszowski' : 'University of Rzeszow',
      degree: i18n.language === 'pl' ? 'Informatyka, specjalizacja: Bazy Danych' : 'Computer Science, Database Specialization',
      period: '2022 - Present',
      description: i18n.language === 'pl' 
        ? 'Studia ukierunkowane na projektowanie i zarządzanie bazami danych oraz analizę danych. Specjalizacja w modelowaniu danych i projektowaniu systemów bazodanowych.'
        : 'Studies focused on database design and management, and data analysis. Specialization in data modeling and database system design.',
      courses: [
        i18n.language === 'pl' ? 'Projektowanie baz danych' : 'Database Design',
        i18n.language === 'pl' ? 'Hurtownie danych' : 'Data Warehousing',
        i18n.language === 'pl' ? 'Programowanie obiektowe' : 'Object-Oriented Programming',
        i18n.language === 'pl' ? 'Analiza i struktury bazy danych' : 'Database Analysis and Structures',
        i18n.language === 'pl' ? 'Nierelacyjne bazy danych' : 'NoSQL Databases',
        i18n.language === 'pl' ? 'Algorytmy i struktury danych' : 'Algorithms and Data Structures',
        i18n.language === 'pl' ? 'Sztuczna inteligencja' : 'Artificial Intelligence'
      ]
    },
    {
      institution: i18n.language === 'pl' ? 'Technikum Elektroniczne' : 'Electronic Technical School',
      degree: i18n.language === 'pl' ? 'Technik informatyk' : 'IT Technician',
      period: '2018 - 2022',
      description: i18n.language === 'pl'
        ? 'Nauka w zakresie administracji systemami i sieciami komputerowymi oraz praktyczne aspekty programowania.'
        : 'Education in system and network administration as well as practical aspects of programming.',
      courses: [
        i18n.language === 'pl' ? 'Administracja systemami' : 'System Administration',
        i18n.language === 'pl' ? 'Sieci komputerowe' : 'Computer Networks',
        i18n.language === 'pl' ? 'Podstawy programowania' : 'Programming Fundamentals',
        i18n.language === 'pl' ? 'Projektowanie stron WWW' : 'Web Design',
        i18n.language === 'pl' ? 'Bazy danych' : 'Databases',
        i18n.language === 'pl' ? 'Systemy operacyjne' : 'Operating Systems',
        i18n.language === 'pl' ? 'Programowanie obiektowe' : 'Object-Oriented Programming'
      ]
    }
  ];

  // Certification data with links to detail pages
  const certifications = [
    {
      id: 'tech-informatyk',
      name: 'Certyfikat: Technik Informatyk',
      issuer: 'Szkoła panstwowa',
      date: '2022',
      icon: <img src="/src/assets/guarantee-icon.svg" alt="" />,
      details: [
        i18n.language === 'pl' ? 'Kwalifikacja INF.02' : 'Qualification INF.02',
        i18n.language === 'pl' ? 'Kwalifikacja INF.03' : 'Qualification INF.03',
        i18n.language === 'pl' ? 'Specjalizacja w sieciach' : 'Specialization in networking'
      ]
    },
    {
      id: 'python',
      name: 'Python',
      issuer: 'Udemy',
      date: '2024',
      icon: <img src="/src/assets/python.svg" alt="" />,
      details: [
        i18n.language === 'pl' ? 'Programowanie obiektowe' : 'Object-oriented programming',
        i18n.language === 'pl' ? 'Analiza danych' : 'Data analysis',
        i18n.language === 'pl' ? 'Biblioteki: NumPy, Pandas' : 'Libraries: NumPy, Pandas'
      ]
    },
    {
      id: 'data-science',
      name: 'Data Science',
      issuer: 'Udemy',
      date: '2024/2025',
      icon: <img src="/src/assets/cell-module.svg" alt="" />,
      details: [
        i18n.language === 'pl' ? 'Wizualizacja danych' : 'Data visualization',
        i18n.language === 'pl' ? 'Statystyczna analiza danych' : 'Statistical data analysis',
        i18n.language === 'pl' ? 'Big Data' : 'Big Data'
      ]
    },
    {
      id: 'sql',
      name: 'SQL',
      issuer: 'Udemy',
      date: '2023',
      icon: <img src="/src/assets/database-icon.svg" alt="" />,
      details: [
        i18n.language === 'pl' ? 'Zaawansowane zapytania' : 'Advanced queries',
        i18n.language === 'pl' ? 'Optymalizacja baz danych' : 'Database optimization',
        i18n.language === 'pl' ? 'Projektowanie schematów' : 'Schema design'
      ]
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      issuer: 'Udemy',
      date: '2022',
      icon: <img src="/src/assets/ai.svg" alt="" />,
      details: [
        i18n.language === 'pl' ? 'Algorytmy uczenia maszynowego' : 'Machine learning algorithms',
        i18n.language === 'pl' ? 'Sieci neuronowe' : 'Neural networks',
        i18n.language === 'pl' ? 'Przetwarzanie języka naturalnego' : 'Natural language processing'
      ]
    },
    {
      id: 'power-bi',
      name: 'Power BI',
      issuer: 'Udemy',
      date: '2023',
      icon: <img src="/src/assets/power-bi-icon.svg" alt="" />,
      details: [
        i18n.language === 'pl' ? 'Tworzenie dashboardów' : 'Dashboard creation',
        i18n.language === 'pl' ? 'ETL i transformacja danych' : 'ETL and data transformation',
        i18n.language === 'pl' ? 'DAX i język M' : 'DAX and M language'
      ]
    },
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
              <div className="certification-main">
                <div className="certification-icon">{cert.icon}</div>
                <div className="certification-content">
                  <h3 className="certification-name">{cert.name}</h3>
                  <p className="certification-details">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              
              <div className="certification-expandable">
                <ul className="certification-details-list">
                  {cert.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                <Link to={`/certificate/${cert.id}`} className="view-document-btn">
                  {i18n.language === 'pl' ? 'Zobacz dokument' : 'View document'}
                </Link>
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