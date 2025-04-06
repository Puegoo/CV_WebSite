import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import polishFlag from '../assets/polish-flag.svg';
import englishFlag from '../assets/english-flag.svg';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            {t('about')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>
            {t('experience')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")}>
            {t('education')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            {t('projects')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            {t('contact')}
          </NavLink>
        </li>
        <li>
          {/* Przycisk zmiany języka */}
          <button 
            onClick={toggleLanguage} 
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Zmień język"
          >
            <img 
              src={i18n.language === 'pl' ? polishFlag : englishFlag} 
              alt={i18n.language === 'pl' ? 'Polski' : 'English'} 
              style={{ width: '32px', height: '32px' }} 
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
