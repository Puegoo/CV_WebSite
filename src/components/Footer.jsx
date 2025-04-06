import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t('footer.title')}</p>
      </div>
    </footer>
  );
}

export default Footer;
