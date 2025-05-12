import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import QR_instagram from '../images/lea_pier_qr.webp';
import QR_github from '../images/puegoo_qr.webp';
import QR_linkedin from '../images/qr_linkedin.webp';
import EmailIcon from '../assets/email-icon.svg';
import PhoneIcon from '../assets/phone-icon.svg';

function Contact() {
  const { t, i18n } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  const contactInfo = [
    {
      icon: EmailIcon,
      title: 'Email',
      info: 'nowak.kpiotr@icloud.com'
    },
    {
      icon: PhoneIcon,
      title: i18n.language === 'pl' ? 'Telefon' : 'Phone',
      info: '+48 570 685 774'
    }
  ];

  const socialMedia = [
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/piotr-nowak-5869ba269',
      iconClass: 'linkedin-bg',
      glowColor: 'linkedin-glow',
      qrCode: QR_linkedin,
      qrAlt: 'LinkedIn QR Code'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Puegoo',
      iconClass: 'github-bg',
      glowColor: 'github-glow',
      qrCode: QR_github,
      qrAlt: 'GitHub QR Code'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lea_pier/',
      iconClass: 'instagram-bg',
      glowColor: 'instagram-glow',
      qrCode: QR_instagram,
      qrAlt: 'Instagram QR Code'
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="section-title">{t('contact')}</h1>
        <div className="title-underline"></div>
      </div>
      
      <div className="contact-content">
        <div className="contact-info-section">
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <div className="info-card" key={index}>
              <div className="info-icon">
                <img src={info.icon} alt={info.title} className="info-svg" />
              </div>
                <h3 className="info-title">{info.title}</h3>
                <p className="info-text">{info.info}</p>
              </div>
            ))}
          </div>
          
          <div className="social-links-card">
            <h3 className="social-title">
              {i18n.language === 'pl' ? 'Media społecznościowe' : 'Social Media'}
            </h3>
            <div className="social-links">
              {socialMedia.map((social, index) => (
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`social-link ${social.iconClass}`}
                  key={index}
                >
                  <div className={`social-glow ${social.glowColor}`}></div>
                  <div className="social-content">
                    <div className={`social-icon ${social.name.toLowerCase()}-icon`}></div>
                    <span className={`social-name ${social.name.toLowerCase()}-text`}>{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <div className="form-container">
            <h2 className="form-title">
              {i18n.language === 'pl' ? 'Wyślij wiadomość' : 'Send a Message'}
            </h2>
            
            {formStatus.submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>
                  {i18n.language === 'pl'
                    ? 'Wiadomość wysłana!'
                    : 'Message sent!'}
                </h3>
                <p>
                  {i18n.language === 'pl'
                    ? 'Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.'
                    : 'Thank you for reaching out. I will get back to you as soon as possible.'}
                </p>
                <button 
                  className="accent-btn"
                  onClick={() => setFormStatus({ submitted: false, error: false })}
                >
                  {i18n.language === 'pl' ? 'Wyślij kolejną wiadomość' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    {i18n.language === 'pl' ? 'Imię i nazwisko' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={i18n.language === 'pl' ? 'Twoje imię i nazwisko' : 'Your full name'}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={i18n.language === 'pl' ? 'Twój adres email' : 'Your email address'}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">
                    {i18n.language === 'pl' ? 'Temat' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={i18n.language === 'pl' ? 'Temat wiadomości' : 'Message subject'}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    {i18n.language === 'pl' ? 'Wiadomość' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder={i18n.language === 'pl' ? 'Twoja wiadomość...' : 'Your message...'}
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  {i18n.language === 'pl' ? 'Wyślij wiadomość' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <div className="qr-codes-section">
        <h2 className="qr-codes-title">
          {i18n.language === 'pl' ? 'Zeskanuj kod QR' : 'Scan QR code'}
        </h2>
        <div className="qr-codes-container">
          {socialMedia.map((social, index) => (
            <div className="qr-code-item" key={index}>
              <div className="qr-code-header">
                <div className={`social-icon-small ${social.name.toLowerCase()}-icon`}></div>
                <h3 className={`qr-code-title ${social.name.toLowerCase()}-text`}>{social.name}</h3>
              </div>
              <div className="qr-code-image-wrapper">
                <img 
                  src={social.qrCode} 
                  alt={social.qrAlt} 
                  className="qr-code-image" 
                />
              </div>
              <p className="qr-code-caption">
                {i18n.language === 'pl' 
                  ? `Zeskanuj aby odwiedzić mój profil ${social.name}` 
                  : `Scan to visit my ${social.name} profile`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;