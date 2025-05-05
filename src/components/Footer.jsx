import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} {t('footer.copyright')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;