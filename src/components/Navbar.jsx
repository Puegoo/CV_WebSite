import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import polishFlag from '../assets/polish-flag.svg';
import englishFlag from '../assets/english-flag.svg';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-text">Piotr Nowak</div>
        </div>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <div className={`mobile-toggle-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`mobile-toggle-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`mobile-toggle-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              {t('about.title')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>
              {t('experience')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>
              {t('education')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
              {t('projects')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              {t('contact')}
            </NavLink>
          </li>
          <li className="lang-toggle-container">
            <button 
              className="lang-toggle-btn"
              onClick={toggleLanguage} 
              aria-label={i18n.language === 'pl' ? 'Switch to English' : 'Przełącz na Polski'}
            >
              <img 
                src={i18n.language === 'pl' ? polishFlag : englishFlag} 
                alt={i18n.language === 'pl' ? 'Polski' : 'English'} 
                className="flag-icon"
              />
              <span className="lang-label">{i18n.language === 'pl' ? 'PL' : 'EN'}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;