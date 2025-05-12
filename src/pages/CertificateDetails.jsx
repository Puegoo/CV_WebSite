import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CertificateDetails.css';

function CertificateDetails() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificates = {
    'tech-informatyk': {
      title: i18n.language === 'pl' ? 'Certyfikat: Technik Informatyk' : 'Certificate: IT Technician',
      issuer: i18n.language === 'pl' ? 'Okręgowa Komisja Egzaminacyjna w Krakowie' : 'Regional Examination Board in Krakow',
      date: '2022',
      description: i18n.language === 'pl' 
        ? 'Certyfikat potwierdzający kwalifikacje zawodowe w zawodzie technik informatyk (symbol cyfrowy 351203), uzyskany po zdaniu egzaminu państwowego.' 
        : 'Certificate confirming professional qualifications as an IT technician (digital symbol 351203), obtained after passing the state exam.',
      images: [
        {
          src: './src/assets/certificates/Certyfikat Tech.inf.jpg',
          description: i18n.language === 'pl' 
            ? 'Europass - Suplement do dyplomu potwierdzającego kwalifikacje zawodowe' 
            : 'Europass - Supplement to the diploma confirming professional qualifications',
          details: [
            i18n.language === 'pl' ? 'Dokument Europass potwierdzający kwalifikacje zawodowe' : 'Europass document confirming professional qualifications',
            i18n.language === 'pl' ? 'Zgodny z europejskimi standardami dokumentacji kwalifikacji' : 'Compliant with European qualification documentation standards',
            i18n.language === 'pl' ? 'Uznawany w całej Unii Europejskiej' : 'Recognized throughout the European Union'
          ]
        },
        {
          src: './src/assets/certificates/Certyfikat Tech.inf_page-0004.jpg',
          description: i18n.language === 'pl' 
            ? 'Podstawa wydania dyplomu i oficjalnie uznane sposoby uzyskania dyplomu' 
            : 'Basis for issuing the diploma and officially recognized ways of obtaining the diploma',
          details: [
            i18n.language === 'pl' ? 'Poziom kwalifikacji: PRK V (Polska Rama Kwalifikacji)' : 'Qualification level: PQF V (Polish Qualification Framework)',
            i18n.language === 'pl' ? 'Poziom kwalifikacji: ERK 5 (Europejska Rama Kwalifikacji)' : 'Qualification level: EQF 5 (European Qualification Framework)',
            i18n.language === 'pl' ? 'Warunki uzyskania: zdany egzamin zawodowy oraz ukończenie szkoły technicznej' : 'Conditions for obtaining: passed professional exam and completion of technical school'
          ]
        },
        {
          src: './src/assets/certificates/Certyfikat Tech.inf_page-0005.jpg',
          description: i18n.language === 'pl' 
            ? 'Kwalifikacje - Opis i zakres nabytych umiejętności' 
            : 'Qualifications - Description and scope of acquired skills',
          details: [
            i18n.language === 'pl' ? 'Kwalifikacja EE.08: Montaż i eksploatacja systemów komputerowych, urządzeń peryferyjnych i sieci' : 'Qualification EE.08: Assembly and operation of computer systems, peripheral devices and networks',
            i18n.language === 'pl' ? 'Kwalifikacja EE.09: Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych' : 'Qualification EE.09: Programming, creating and administering websites and databases',
            i18n.language === 'pl' ? 'Montaż i modernizacja urządzeń techniki komputerowej' : 'Assembly and modernization of computer equipment',
            i18n.language === 'pl' ? 'Posługiwanie się oprogramowaniem systemowym i użytkowym' : 'Using system and application software'
          ]
        },
        {
          src: './src/assets/certificates/Certyfikat Tech.inf_page-0006.jpg',
          description: i18n.language === 'pl' 
            ? 'Osiągnięcia i kompetencje zawodowe' 
            : 'Professional achievements and competencies',
          details: [
            i18n.language === 'pl' ? 'Wykonywanie lokalnych sieci komputerowych' : 'Creating local computer networks',
            i18n.language === 'pl' ? 'Eksploatacja urządzeń sieciowych' : 'Operating network devices',
            i18n.language === 'pl' ? 'Tworzenie baz danych i administrowanie nimi' : 'Creating and administering databases',
            i18n.language === 'pl' ? 'Projektowanie i tworzenie witryn internetowych' : 'Designing and creating websites'
          ]
        },
        {
          src: './src/assets/certificates/Certyfikat Tech.inf_page-0007.jpg',
          description: i18n.language === 'pl' 
            ? 'Dyplom technika informatyka' 
            : 'IT Technician diploma',
          details: [
            i18n.language === 'pl' ? 'Oficjalny dokument potwierdzający uzyskanie tytułu technika informatyka' : 'Official document confirming the IT technician title',
            i18n.language === 'pl' ? 'Wydany przez Okręgową Komisję Egzaminacyjną w Krakowie' : 'Issued by the Regional Examination Board in Krakow',
            i18n.language === 'pl' ? 'Uprawnienia do wykonywania zawodu technika informatyka' : 'Authorization to practice as an IT technician'
          ]
        }
      ],
      // Base details shown when no specific image is selected or for general info
      generalDetails: [
        i18n.language === 'pl' ? 'Kwalifikacja EE.08: Montaż i eksploatacja systemów komputerowych, urządzeń peryferyjnych i sieci' : 'Qualification EE.08: Assembly and operation of computer systems, peripheral devices and networks',
        i18n.language === 'pl' ? 'Kwalifikacja EE.09: Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych' : 'Qualification EE.09: Programming, creating and administering websites and databases',
        i18n.language === 'pl' ? 'Poziom kwalifikacji: PRK V (Polska Rama Kwalifikacji)' : 'Qualification level: PQF V (Polish Qualification Framework)',
        i18n.language === 'pl' ? 'Poziom kwalifikacji: ERK 5 (Europejska Rama Kwalifikacji)' : 'Qualification level: EQF 5 (European Qualification Framework)',
        i18n.language === 'pl' ? 'Montaż i modernizacja urządzeń techniki komputerowej' : 'Assembly and modernization of computer equipment',
        i18n.language === 'pl' ? 'Posługiwanie się oprogramowaniem systemowym i użytkowym' : 'Using system and application software',
        i18n.language === 'pl' ? 'Wykonywanie lokalnych sieci komputerowych' : 'Creating local computer networks',
        i18n.language === 'pl' ? 'Eksploatacja urządzeń sieciowych' : 'Operating network devices',
        i18n.language === 'pl' ? 'Tworzenie baz danych i administrowanie nimi' : 'Creating and administering databases',
        i18n.language === 'pl' ? 'Projektowanie i tworzenie witryn internetowych' : 'Designing and creating websites',
      ]
    },
    'python': {
      title: 'Python',
      issuer: 'Udemy',
      date: '2024-2025',
      description: i18n.language === 'pl' 
        ? 'Dwa kompleksowe kursy Pythona obejmujące zarówno podstawy jak i zaawansowane aspekty programowania, od zmiennych i struktur danych po klasy, iteratory, generatory i zaawansowane techniki programowania.' 
        : 'Two comprehensive Python courses covering both basics and advanced aspects of programming, from variables and data structures to classes, iterators, generators, and advanced programming techniques.',
      images: [
        {
          src: './src/assets/certificates/Kurs Python w Pigułce od Podstaw do Mastera.jpg',
          description: i18n.language === 'pl' 
            ? 'Certyfikat ukończenia kursu "Python w Pigułce od Podstaw do Mastera"' 
            : 'Certificate of completion for the course "Python in a Nutshell from Basics to Master"',
          details: [
            i18n.language === 'pl' ? 'Zmienne liczbowe, łańcuchy znaków, wartości logiczne, słowniki, listy, zbiory oraz konwersje typów' : 'Numeric variables, strings, logical values, dictionaries, lists, sets, and type conversions',
            i18n.language === 'pl' ? 'Operatory arytmetyczne, przypisania, porównania, przynależności, logiczne, konkatenacji i tożsamości' : 'Arithmetic, assignment, comparison, membership, logical, concatenation, and identity operators',
            i18n.language === 'pl' ? 'Instrukcje sterujące programem: if, elif, else' : 'Control flow statements: if, elif, else',
            i18n.language === 'pl' ? 'Pętle for, while z wykorzystaniem break i continue' : 'For and while loops with break and continue statements',
            i18n.language === 'pl' ? 'Tworzenie własnych funkcji, funkcje lambda, zwracanie wartości z return' : 'Creating custom functions, lambda functions, returning values with return',
            i18n.language === 'pl' ? 'Funkcje operujące na listach, słownikach, krotkach, datach, liczbach i łańcuchach znaków' : 'Functions for operating on lists, dictionaries, tuples, dates, numbers, and strings',
            i18n.language === 'pl' ? 'Programowanie obiektowe: klasy, konstruktory, destruktory, obiekty, metody, atrybuty, dziedziczenie' : 'Object-oriented programming: classes, constructors, destructors, objects, methods, attributes, inheritance',
            i18n.language === 'pl' ? 'Turtle do prostego rysowania w oknie' : 'Turtle for simple window drawing',
            i18n.language === 'pl' ? 'TKinter do tworzenia interfejsu użytkownika z przyciskami, polami tekstowymi, listami, menu' : 'TKinter for creating user interfaces with buttons, text fields, lists, menus',
            i18n.language === 'pl' ? 'Tworzenie praktycznych programów np. kalkulator, aplikacje terminalowe' : 'Creating practical programs like calculators, terminal applications, etc.'
          ]
        },
        {
          src: './src/assets/certificates/python-srz.jpg',
          description: i18n.language === 'pl' 
            ? 'Certyfikat kursu "Python dla średnio zaawansowanych"' 
            : 'Certificate for the "Python for Intermediate Users" course',
          details: [
            i18n.language === 'pl' ? 'Klasy i programowanie obiektowe na zaawansowanym poziomie' : 'Classes and advanced object-oriented programming',
            i18n.language === 'pl' ? 'Zaawansowane wykorzystanie funkcji i ich mniej oczywiste zastosowania' : 'Advanced function usage and their less obvious applications',
            i18n.language === 'pl' ? 'Zaawansowane operacje na typach i konwersje typów' : 'Advanced type operations and type conversions',
            i18n.language === 'pl' ? 'Efektywne wykorzystanie wyjątków i ich obsługa' : 'Effective use of exceptions and their handling',
            i18n.language === 'pl' ? 'Iteratory, generatory i ich praktyczne zastosowania' : 'Iterators, generators and their practical applications',
            i18n.language === 'pl' ? 'Context managers i ich implementacja' : 'Context managers and their implementation',
            i18n.language === 'pl' ? 'Tworzenie i wykorzystanie dekoratorów' : 'Creating and using decorators',
            i18n.language === 'pl' ? 'Optymalizacja kodu dla zwiększenia wydajności' : 'Code optimization for increased efficiency',
            i18n.language === 'pl' ? 'Praktyczne zadania z rozwiązaniami po każdej lekcji' : 'Practical exercises with solutions after each lesson',
            i18n.language === 'pl' ? 'Programowanie "pythoniczne" zgodne z idiomami języka' : '"Pythonic" programming in accordance with language idioms'
          ]
        }
      ],
      generalDetails: [
        i18n.language === 'pl' ? 'Dwa kompleksowe kursy: Python w Pigułce od Podstaw do Mastera oraz Python dla średnio zaawansowanych' : 'Two comprehensive courses: Python in a Nutshell from Basics to Master and Python for Intermediate Users',
        i18n.language === 'pl' ? 'Od zmiennych i podstawowych struktur danych po zaawansowane techniki programowania' : 'From variables and basic data structures to advanced programming techniques',
        i18n.language === 'pl' ? 'Pełna ścieżka rozwoju w języku Python - od podstaw do poziomu zaawansowanego' : 'Complete Python development path - from basics to advanced level',
        i18n.language === 'pl' ? 'Programowanie obiektowe, funkcyjne i proceduralne' : 'Object-oriented, functional and procedural programming',
        i18n.language === 'pl' ? 'Praktyczne projekty i zadania utrwalające wiedzę' : 'Practical projects and exercises to consolidate knowledge'
      ]
    },
    'data-science': {
      title: 'Data Science',
      issuer: 'Udemy',
      date: '2024/2025',
      description: i18n.language === 'pl' 
        ? 'Kompleksowy kurs analizy danych i nauki o danych, obejmujący statystykę, wizualizację i przetwarzanie dużych zbiorów danych.' 
        : 'Comprehensive data analysis and data science course, covering statistics, visualization, and big data processing.',
      images: [
        {
          src: './src/assets/cell-module.svg',
          description: i18n.language === 'pl' 
            ? 'Certyfikat Data Science' 
            : 'Data Science Certificate',
          details: [
            i18n.language === 'pl' ? 'Statystyczna analiza danych' : 'Statistical data analysis',
            i18n.language === 'pl' ? 'Zaawansowana wizualizacja danych' : 'Advanced data visualization',
            i18n.language === 'pl' ? 'Techniki przetwarzania Big Data' : 'Big Data processing techniques',
            i18n.language === 'pl' ? 'Modele predykcyjne i ich zastosowanie' : 'Predictive models and their applications',
            i18n.language === 'pl' ? 'Analiza danych w czasie rzeczywistym' : 'Real-time data analysis'
          ]
        },
        {
          src: './src/assets/database-icon.svg',
          description: i18n.language === 'pl' 
            ? 'Zaświadczenie o ukończeniu kursu' 
            : 'Course completion certificate',
          details: [
            i18n.language === 'pl' ? 'Eksploracyjna analiza danych' : 'Exploratory data analysis',
            i18n.language === 'pl' ? 'Analiza szeregów czasowych' : 'Time series analysis',
            i18n.language === 'pl' ? 'Przetwarzanie danych w Pandas i NumPy' : 'Data processing in Pandas and NumPy',
            i18n.language === 'pl' ? 'Techniki próbkowania i walidacji' : 'Sampling and validation techniques',
            i18n.language === 'pl' ? 'Przygotowanie danych do modelowania' : 'Data preparation for modeling'
          ]
        }
      ],
      generalDetails: [
        i18n.language === 'pl' ? 'Statystyczna analiza danych' : 'Statistical data analysis',
        i18n.language === 'pl' ? 'Zaawansowana wizualizacja danych' : 'Advanced data visualization',
        i18n.language === 'pl' ? 'Techniki przetwarzania Big Data' : 'Big Data processing techniques',
        i18n.language === 'pl' ? 'Modele predykcyjne i ich zastosowanie' : 'Predictive models and their applications',
        i18n.language === 'pl' ? 'Analiza danych w czasie rzeczywistym' : 'Real-time data analysis'
      ]
    },
    'sql': {
      title: 'SQL',
      issuer: 'Udemy',
      date: '2024',
      description: i18n.language === 'pl' 
        ? 'Kurs programowania w SQL od podstaw, obejmujący tworzenie baz danych, tabel, manipulację danymi oraz łączenie z innymi językami programowania.' 
        : 'SQL programming course from scratch, covering database creation, tables, data manipulation and connection with other programming languages.',
      images: [
        {
          src: './src/assets/certificates/SQL.png',
          description: i18n.language === 'pl' 
            ? 'Certyfikat ukończenia kursu "SQL od podstaw"' 
            : 'Certificate of completion for the "SQL from scratch" course',
          details: [
            i18n.language === 'pl' ? 'Tworzenie baz danych i tabel z unikalną identyfikacją' : 'Creating databases and tables with unique identification',
            i18n.language === 'pl' ? 'Dodawanie i aktualizacja rekordów' : 'Adding and updating records',
            i18n.language === 'pl' ? 'Pobieranie danych z wykorzystaniem WHERE, LIKE, ORDER BY, LIMIT' : 'Data retrieval using WHERE, LIKE, ORDER BY, LIMIT',
            i18n.language === 'pl' ? 'Funkcje agregujące: MIN, MAX, COUNT, AVG, SUM' : 'Aggregate functions: MIN, MAX, COUNT, AVG, SUM',
            i18n.language === 'pl' ? 'Łączenie tabel: INNER JOIN, LEFT JOIN, RIGHT JOIN' : 'Joining tables: INNER JOIN, LEFT JOIN, RIGHT JOIN',
            i18n.language === 'pl' ? 'Modyfikacja struktury tabel z ALTER' : 'Modifying table structure with ALTER',
            i18n.language === 'pl' ? 'Zaawansowane operacje: UNION, HAVING, EXISTS, ANY' : 'Advanced operations: UNION, HAVING, EXISTS, ANY',
            i18n.language === 'pl' ? 'Integracja SQL z Java, PHP i JavaScript' : 'SQL integration with Java, PHP and JavaScript'
          ]
        }
      ],
      generalDetails: [
        i18n.language === 'pl' ? 'Tworzenie baz danych i tabel z unikalną identyfikacją' : 'Creating databases and tables with unique identification',
        i18n.language === 'pl' ? 'Dodawanie i aktualizacja rekordów' : 'Adding and updating records',
        i18n.language === 'pl' ? 'Pobieranie danych z wykorzystaniem WHERE, LIKE, ORDER BY, LIMIT' : 'Data retrieval using WHERE, LIKE, ORDER BY, LIMIT',
        i18n.language === 'pl' ? 'Funkcje agregujące: MIN, MAX, COUNT, AVG, SUM' : 'Aggregate functions: MIN, MAX, COUNT, AVG, SUM',
        i18n.language === 'pl' ? 'Łączenie tabel: INNER JOIN, LEFT JOIN, RIGHT JOIN' : 'Joining tables: INNER JOIN, LEFT JOIN, RIGHT JOIN',
        i18n.language === 'pl' ? 'Modyfikacja struktury tabel z ALTER' : 'Modifying table structure with ALTER',
        i18n.language === 'pl' ? 'Zaawansowane operacje: UNION, HAVING, EXISTS, ANY' : 'Advanced operations: UNION, HAVING, EXISTS, ANY',
        i18n.language === 'pl' ? 'Integracja SQL z Java, PHP i JavaScript' : 'SQL integration with Java, PHP and JavaScript'
      ]
    },
    'power-bi': {
      title: 'Power BI',
      issuer: 'Udemy',
      date: '2024',
      description: i18n.language === 'pl' 
        ? 'Praktyczny kurs Microsoft Power BI Desktop skupiający się na tworzeniu dynamicznych dashboardów i wizualizacji danych.' 
        : 'Practical Microsoft Power BI Desktop course focusing on creating dynamic dashboards and data visualization.',
      images: [
        {
          src: './src/assets/certificates/PowerBi.jpg',
          description: i18n.language === 'pl' 
            ? 'Certyfikat ukończenia kursu "Poznaj Power BI w jedną godzinę!"' 
            : 'Certificate of completion for the "Learn Power BI in one hour!" course',
          details: [
            i18n.language === 'pl' ? 'Wprowadzenie do Power BI Desktop' : 'Introduction to Power BI Desktop',
            i18n.language === 'pl' ? 'Łączenie się z danymi i ich obróbka w Power BI Desktop' : 'Connecting to data and processing it in Power BI Desktop',
            i18n.language === 'pl' ? 'Tworzenie wykresów i wizualizacji danych' : 'Creating charts and data visualizations',
            i18n.language === 'pl' ? 'Tworzenie i zarządzanie relacjami oraz fragmentatory' : 'Creating and managing relationships and slicers',
            i18n.language === 'pl' ? 'Podstawy obsługi Power BI Desktop' : 'Basics of Power BI Desktop operation',
            i18n.language === 'pl' ? 'Tworzenie dynamicznych dashboardów' : 'Creating dynamic dashboards'
          ]
        }
      ],
      generalDetails: [
        i18n.language === 'pl' ? 'Wprowadzenie do Power BI Desktop' : 'Introduction to Power BI Desktop',
        i18n.language === 'pl' ? 'Łączenie się z danymi i ich obróbka w Power BI Desktop' : 'Connecting to data and processing it in Power BI Desktop',
        i18n.language === 'pl' ? 'Tworzenie wykresów i wizualizacji danych' : 'Creating charts and data visualizations',
        i18n.language === 'pl' ? 'Tworzenie i zarządzanie relacjami oraz fragmentatory' : 'Creating and managing relationships and slicers',
        i18n.language === 'pl' ? 'Podstawy obsługi Power BI Desktop' : 'Basics of Power BI Desktop operation',
        i18n.language === 'pl' ? 'Tworzenie dynamicznych dashboardów' : 'Creating dynamic dashboards'
      ]
    },
    'machine-learning': {
      title: 'Machine Learning',
      issuer: 'Udemy',
      date: '2022',
      description: i18n.language === 'pl' 
        ? 'Kurs uczenia maszynowego z wykorzystaniem Pythona, obejmujący algorytmy klasyfikacji, regresji i uczenia głębokiego.' 
        : 'Machine learning course using Python, covering classification, regression, and deep learning algorithms.',
      images: [
        {
          src: './src/assets/ai.svg',
          description: i18n.language === 'pl' 
            ? 'Certyfikat Machine Learning' 
            : 'Machine Learning Certificate',
          details: [
            i18n.language === 'pl' ? 'Algorytmy uczenia nadzorowanego: regresja, klasyfikacja' : 'Supervised learning algorithms: regression, classification',
            i18n.language === 'pl' ? 'Algorytmy uczenia nienadzorowanego: klastrowanie, redukcja wymiarowości' : 'Unsupervised learning algorithms: clustering, dimensionality reduction',
            i18n.language === 'pl' ? 'Podstawy sieci neuronowych' : 'Neural network fundamentals'
          ]
        },
        {
          src: './src/assets/python.svg',
          description: i18n.language === 'pl' 
            ? 'Zaświadczenie o ukończeniu kursu' 
            : 'Course completion certificate',
          details: [
            i18n.language === 'pl' ? 'Przetwarzanie języka naturalnego (NLP)' : 'Natural Language Processing (NLP)',
            i18n.language === 'pl' ? 'Modele zespołowe i boosting' : 'Ensemble models and boosting',
            i18n.language === 'pl' ? 'Wizja komputerowa i analiza obrazów' : 'Computer vision and image analysis'
          ]
        }
      ],
      generalDetails: [
        i18n.language === 'pl' ? 'Algorytmy uczenia nadzorowanego i nienadzorowanego' : 'Supervised and unsupervised learning algorithms',
        i18n.language === 'pl' ? 'Sieci neuronowe i uczenie głębokie' : 'Neural networks and deep learning',
        i18n.language === 'pl' ? 'Przetwarzanie języka naturalnego (NLP)' : 'Natural Language Processing (NLP)',
        i18n.language === 'pl' ? 'Modele zespołowe i boosting' : 'Ensemble models and boosting',
        i18n.language === 'pl' ? 'Wizja komputerowa i analiza obrazów' : 'Computer vision and image analysis'
      ]
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === certificate.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? certificate.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Get current image and its details
  const currentImage = certificate.images[currentImageIndex];
  
  // Get details for the current image or fallback to general details
  const currentDetails = currentImage.details || certificate.generalDetails;

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
              {currentDetails.map((detail, index) => (
                <li key={index} className="detail-item">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="certificate-image-container">
          {/* Image counter */}
          {certificate.images.length > 1 && (
            <div className="image-counter">
              {currentImageIndex + 1} / {certificate.images.length}
            </div>
          )}
          
          <div className="certificate-image">
            <img 
              src={currentImage.src} 
              alt={currentImage.description || certificate.title} 
            />
          </div>
          
          {/* Gallery navigation */}
          {certificate.images.length > 1 && (
            <div className="gallery-nav">
              <button className="gallery-arrow prev-arrow" onClick={prevImage}>
                &#10094;
              </button>
              <button className="gallery-arrow next-arrow" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          )}
          
          {/* Image caption */}
          {currentImage.description && (
            <div className="image-caption">
              {currentImage.description}
            </div>
          )}
          
          {/* Thumbnail navigation */}
          {certificate.images.length > 1 && (
            <div className="thumbnail-container">
              {certificate.images.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <img src={img.src} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificateDetails;