import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CertificateDetails.css';

function CertificateDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [imageEnlarged, setImageEnlarged] = useState(false);

  // Certificate data
  const certificates = {
    'tech-informatyk': {
      title: i18n.language === 'pl' ? 'Certyfikat: Technik Informatyk' : 'Certificate: IT Technician',
      issuer: i18n.language === 'pl' ? 'Szkoła państwowa' : 'State School',
      date: '2022',
      description: i18n.language === 'pl' 
        ? 'Certyfikat potwierdzający kwalifikacje zawodowe w zawodzie technik informatyk, uzyskany po zdaniu egzaminu państwowego.' 
        : 'Certificate confirming professional qualifications as an IT technician, obtained after passing the state exam.',
      details: [
        i18n.language === 'pl' ? 'Kwalifikacja INF.02: Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych' : 'Qualification INF.02: Administration and operation of computer systems, peripheral devices and local computer networks',
        i18n.language === 'pl' ? 'Kwalifikacja INF.03: Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych' : 'Qualification INF.03: Creating and administering websites, web applications and databases',
        i18n.language === 'pl' ? 'Specjalizacja w sieciach komputerowych i administracji serwerami' : 'Specialization in computer networks and server administration',
        i18n.language === 'pl' ? 'Zdobyte umiejętności w zakresie programowania i tworzenia stron internetowych' : 'Skills acquired in programming and website development',
        i18n.language === 'pl' ? 'Kompetencje z zakresu zarządzania bazami danych i projektowania systemów informatycznych' : 'Competencies in database management and IT systems design'
      ],
      imagePath: '/src/assets/guarantee-icon.svg', // Temporary placeholder - replace with actual certificate image
    },
    'python': {
      title: 'Python',
      issuer: 'Udemy',
      date: '2024',
      description: i18n.language === 'pl' 
        ? 'Kurs zaawansowanego programowania w Pythonie, obejmujący analizę danych i biblioteki do obliczeń naukowych.' 
        : 'Advanced Python programming course, covering data analysis and scientific computing libraries.',
      details: [
        i18n.language === 'pl' ? 'Programowanie obiektowe w Pythonie' : 'Object-oriented programming in Python',
        i18n.language === 'pl' ? 'Analiza danych przy użyciu bibliotek NumPy i Pandas' : 'Data analysis using NumPy and Pandas libraries',
        i18n.language === 'pl' ? 'Wizualizacja danych za pomocą Matplotlib i Seaborn' : 'Data visualization with Matplotlib and Seaborn',
        i18n.language === 'pl' ? 'Uczenie maszynowe z wykorzystaniem biblioteki scikit-learn' : 'Machine learning using scikit-learn library',
        i18n.language === 'pl' ? 'Przetwarzanie danych w czasie rzeczywistym' : 'Real-time data processing'
      ],
      imagePath: '/src/assets/python.svg', // Temporary placeholder
    },
    'data-science': {
      title: 'Data Science',
      issuer: 'Udemy',
      date: '2024/2025',
      description: i18n.language === 'pl' 
        ? 'Kompleksowy kurs analizy danych i nauki o danych, obejmujący statystykę, wizualizację i przetwarzanie dużych zbiorów danych.' 
        : 'Comprehensive data analysis and data science course, covering statistics, visualization, and big data processing.',
      details: [
        i18n.language === 'pl' ? 'Statystyczna analiza danych' : 'Statistical data analysis',
        i18n.language === 'pl' ? 'Zaawansowana wizualizacja danych' : 'Advanced data visualization',
        i18n.language === 'pl' ? 'Techniki przetwarzania Big Data' : 'Big Data processing techniques',
        i18n.language === 'pl' ? 'Modele predykcyjne i ich zastosowanie' : 'Predictive models and their applications',
        i18n.language === 'pl' ? 'Analiza danych w czasie rzeczywistym' : 'Real-time data analysis'
      ],
      imagePath: '/src/assets/cell-module.svg', // Temporary placeholder
    },
    'sql': {
      title: 'SQL',
      issuer: 'Udemy',
      date: '2023',
      description: i18n.language === 'pl' 
        ? 'Zaawansowany kurs SQL obejmujący projektowanie baz danych, optymalizację zapytań i administrację bazami danych.' 
        : 'Advanced SQL course covering database design, query optimization, and database administration.',
      details: [
        i18n.language === 'pl' ? 'Zaawansowane zapytania i techniki optymalizacji' : 'Advanced queries and optimization techniques',
        i18n.language === 'pl' ? 'Projektowanie i normalizacja baz danych' : 'Database design and normalization',
        i18n.language === 'pl' ? 'Administracja bazami danych' : 'Database administration',
        i18n.language === 'pl' ? 'Procedury składowane i funkcje' : 'Stored procedures and functions',
        i18n.language === 'pl' ? 'Indeksowanie i strategie optymalizacji wydajności' : 'Indexing and performance optimization strategies'
      ],
      imagePath: '/src/assets/database-icon.svg', // Temporary placeholder
    },
    'machine-learning': {
      title: 'Machine Learning',
      issuer: 'Udemy',
      date: '2022',
      description: i18n.language === 'pl' 
        ? 'Kurs uczenia maszynowego z wykorzystaniem Pythona, obejmujący algorytmy klasyfikacji, regresji i uczenia głębokiego.' 
        : 'Machine learning course using Python, covering classification, regression, and deep learning algorithms.',
      details: [
        i18n.language === 'pl' ? 'Algorytmy uczenia nadzorowanego i nienadzorowanego' : 'Supervised and unsupervised learning algorithms',
        i18n.language === 'pl' ? 'Sieci neuronowe i uczenie głębokie' : 'Neural networks and deep learning',
        i18n.language === 'pl' ? 'Przetwarzanie języka naturalnego (NLP)' : 'Natural Language Processing (NLP)',
        i18n.language === 'pl' ? 'Modele zespołowe i boosting' : 'Ensemble models and boosting',
        i18n.language === 'pl' ? 'Wizja komputerowa i analiza obrazów' : 'Computer vision and image analysis'
      ],
      imagePath: '/src/assets/ai.svg', // Temporary placeholder
    },
    'power-bi': {
      title: 'Power BI',
      issuer: 'Udemy',
      date: '2023',
      description: i18n.language === 'pl' 
        ? 'Kurs Microsoft Power BI obejmujący tworzenie dashboardów, analizę danych i transformację danych za pomocą języka DAX i M.' 
        : 'Microsoft Power BI course covering dashboard creation, data analysis and data transformation using DAX and M languages.',
      details: [
        i18n.language === 'pl' ? 'Tworzenie interaktywnych dashboardów' : 'Creating interactive dashboards',
        i18n.language === 'pl' ? 'ETL i transformacja danych' : 'ETL and data transformation',
        i18n.language === 'pl' ? 'Programowanie w języku DAX' : 'DAX language programming',
        i18n.language === 'pl' ? 'Wizualizacja i analiza danych' : 'Data visualization and analysis',
        i18n.language === 'pl' ? 'Publikowanie i udostępnianie raportów' : 'Publishing and sharing reports'
      ],
      imagePath: '/src/assets/power-bi-icon.svg', // Temporary placeholder
    }
  };

  const certificate = certificates[id];

  // Handle case when certificate is not found
  if (!certificate) {
    return (
      <div className="certificate-not-found">
        <h2>{i18n.language === 'pl' ? 'Certyfikat nie znaleziony' : 'Certificate not found'}</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          {i18n.language === 'pl' ? 'Powrót' : 'Back'}
        </button>
      </div>
    );
  }

  const toggleImageSize = () => {
    setImageEnlarged(!imageEnlarged);
  };

  return (
    <div className="certificate-details-page">
      <div className="certificate-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← {i18n.language === 'pl' ? 'Powrót' : 'Back'}
        </button>
        <h1 className="certificate-title">{certificate.title}</h1>
      </div>

      <div className="certificate-content">
        <div className="certificate-info">
          <div className="certificate-metadata">
            <p className="certificate-issuer">
              <span>{i18n.language === 'pl' ? 'Wydawca' : 'Issuer'}:</span> {certificate.issuer}
            </p>
            <p className="certificate-date">
              <span>{i18n.language === 'pl' ? 'Data uzyskania' : 'Acquisition Date'}:</span> {certificate.date}
            </p>
          </div>
          
          <p className="certificate-description">{certificate.description}</p>
          
          <div className="certificate-details-section">
            <h3 className="details-title">
              {i18n.language === 'pl' ? 'Szczegóły certyfikatu' : 'Certificate Details'}
            </h3>
            <ul className="details-list">
              {certificate.details.map((detail, index) => (
                <li key={index} className="detail-item">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="certificate-image-container">
          <div className={`certificate-image ${imageEnlarged ? 'enlarged' : ''}`} onClick={toggleImageSize}>
            <img src={certificate.imagePath} alt={certificate.title} />
            <div className="image-overlay">
              <span>{i18n.language === 'pl' ? 'Kliknij, aby powiększyć' : 'Click to enlarge'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {imageEnlarged && (
        <div className="enlarged-overlay" onClick={toggleImageSize}>
          <div className="enlarged-image-container">
            <img src={certificate.imagePath} alt={certificate.title} />
            <button className="close-button">
              {i18n.language === 'pl' ? 'Zamknij' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificateDetails;