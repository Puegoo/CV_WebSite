import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

function Projects() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Tech tags color mapping
  const techColors = {
    'Python': '#3776AB',
    'Django': '#092E20',
    'JavaScript': '#F7DF1E',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'Neo4J': '#008CC1',
    'C#': '#239120',
    '.NET': '#512BD4',
    'Oracle Database': '#F80000',
    'PHP': '#777BB4',
    'Laravel': '#FF2D20',
    'MySQL': '#00758F',
    'Tailwind CSS': '#06B6D4',
    'Java': '#007396',
    'React': '#61DAFB',
  };
  
  // Sample projects data with enhanced descriptions
  const projects = [
    {
      title: 'QUBE',
      subtitle: i18n.language === 'pl' ? 'Aplikacja do zarządzania projektami' : 'Project Management Application',
      category: 'data',
      image: '/src/images/QUBE.png',
      technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'Neo4J'],
      description: i18n.language === 'pl' 
        ? 'Kompleksowe narzędzie do zarządzania projektami z interfejsem dashboard dla analityków danych. Aplikacja umożliwia wizualizację danych w czasie rzeczywistym, generowanie raportów oraz śledzenie postępów zespołu. Wykorzystuje bazę grafową Neo4J do efektywnego mapowania zależności między zadaniami.'
        : 'Comprehensive project management tool with a dashboard interface for data analysts. The application enables real-time data visualization, report generation, and team progress tracking. It uses the Neo4J graph database for efficient mapping of dependencies between tasks.',
      link: 'https://github.com/Puegoo/QUBE.git',
      year: '2024'
    },
    {
      title: 'North Coffee',
      subtitle: i18n.language === 'pl' ? 'Blog i platforma e-commerce' : 'Blog and E-commerce Platform',
      category: 'web',
      image: '/src/images/NORTH COFFEE.png', 
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: i18n.language === 'pl'
        ? 'Responsywna strona internetowa dedykowana miłośnikom kawy, łącząca funkcjonalności bloga z platformą zakupową. Zawiera katalog produktów z możliwością filtrowania, koszyk zakupowy, system płatności online oraz panel zarządzania treścią dla administratorów.'
        : 'Responsive website dedicated to coffee enthusiasts, combining blog functionalities with a shopping platform. Features a product catalog with filtering options, shopping cart, online payment system, and a content management panel for administrators.',
      link: 'https://github.com/Puegoo/North-Coffee.git',
      year: '2023'
    },
    {
      title: 'PillPal',
      subtitle: i18n.language === 'pl' ? 'System zarządzania lekami i receptami' : 'Medication and Prescription Management System',
      category: 'data',
      image: '/src/images/PillPal.png',
      technologies: ['C#', '.NET', 'Oracle Database', 'MySQL'],
      description: i18n.language === 'pl'
        ? 'Aplikacja do zarządzania lekami i receptami dla pacjentów i aptek. System umożliwia śledzenie historii leków, powiadomienia o terminach przyjmowania oraz integrację z systemem aptecznym. Baza danych Oracle zapewnia bezpieczne przechowywanie danych medycznych.'
        : 'Application for medication and prescription management for patients and pharmacies. The system enables medication history tracking, medication schedule notifications, and integration with pharmacy systems. Oracle Database ensures secure storage of medical data.',
      link: 'https://github.com/Puegoo/System_lekow_i_recept.git',
      year: '2024'
    },
    {
      title: 'BTStudent',
      subtitle: i18n.language === 'pl' ? 'Aplikacja do zarządzania finansami studenckimi' : 'Student Finance Management Application',
      category: 'web',
      image: '/src/images/BTStudent.png',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
      description: i18n.language === 'pl'
        ? 'Intuicyjna aplikacja pomagająca studentom w zarządzaniu budżetem. Oferuje kategoryzację wydatków, automatyczne śledzenie rachunków, planowanie oszczędności oraz wizualizację trendów wydatków w czasie. Zoptymalizowana pod kątem urządzeń mobilnych.'
        : 'Intuitive application helping students manage their budget. It offers expense categorization, automatic bill tracking, savings planning, and visualization of spending trends over time. Optimized for mobile devices.',
      link: 'https://github.com/Puegoo/BTStudent.git',
      year: '2022'
    },
    {
      title: 'Portfolio CV',
      subtitle: i18n.language === 'pl' ? 'Responsywna strona CV' : 'Responsive CV Website',
      category: 'web',
      image: '/src/images/portfolio.png',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      description: i18n.language === 'pl'
        ? 'Nowoczesna, responsywna strona internetowa typu Single Page Application stworzona w React z obsługą wielu języków. Prezentuje moje umiejętności, doświadczenie i projekty w eleganckim, profesjonalnym układzie.'
        : 'Modern, responsive Single Page Application created in React with multi-language support. It presents my skills, experience, and projects in an elegant, professional layout.',
      link: 'https://github.com/Puegoo/CV_Website',
      year: '2025'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Categories for filter
  const categories = [
    { id: 'all', name: i18n.language === 'pl' ? 'Wszystkie' : 'All' },
    { id: 'web', name: i18n.language === 'pl' ? 'Aplikacje webowe' : 'Web Apps' },
    { id: 'data', name: i18n.language === 'pl' ? 'Projekty bazodanowe' : 'Database Projects' }
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="section-title">{t('projects')}</h1>
        <p className="section-tagline">
          {i18n.language === 'pl' 
            ? 'Odkryj moje projekty i prace programistyczne' 
            : 'Discover my projects and development works'}
        </p>
      </div>
      
      <div className="projects-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />
              <div className="project-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                  {i18n.language === 'pl' ? 'Zobacz kod' : 'View Code'}
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-year">{project.year}</div>
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    className="technology-tag" 
                    key={techIndex}
                    style={{ 
                      backgroundColor: techColors[tech] || '#555',
                      color: ['JavaScript', 'Tailwind CSS'].includes(tech) ? '#000' : '#fff'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="github-section">
        <div className="github-card">
          <div className="github-icon">
            <span className="github-logo"><img src="/src/images/Github_profile.png" alt="GitHub Avatar" /></span>
          </div>
          <div className="github-content">
            <h3 className="github-title">
              {i18n.language === 'pl' ? 'Sprawdź moje repozytorium' : 'Check out my repository'}
            </h3>
            <p className="github-description">
              {i18n.language === 'pl' 
                ? 'Zobacz więcej projektów i kod źródłowy na moim profilu GitHub.' 
                : 'See more projects and source code on my GitHub profile.'}
            </p>
            <a href="https://github.com/Puegoo" target="_blank" rel="noopener noreferrer" className="accent-btn github-btn">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;