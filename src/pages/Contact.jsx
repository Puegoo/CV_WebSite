import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

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
    // Here you would normally connect to your backend or email service
    // For demo purposes, we'll just simulate a successful form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  // Contact information
  const contactInfo = [
    {
      icon: '📍',
      title: i18n.language === 'pl' ? 'Lokalizacja' : 'Location',
      info: 'Czarna, Subcarpathia, Poland'
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'piotr.nowak@example.com' // Replace with your actual email
    },
    {
      icon: '📱',
      title: i18n.language === 'pl' ? 'Telefon' : 'Phone',
      info: '+48 123 456 789' // Replace with your actual phone number
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="section-title">{t('contact')}</h1>
        <p className="section-tagline">
          {i18n.language === 'pl'
            ? 'Skontaktuj się ze mną'
            : 'Get in touch with me'}
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info-section">
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <div className="info-card" key={index}>
                <div className="info-icon">{info.icon}</div>
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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-name">LinkedIn</span>
                <span className="social-arrow">→</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-name">GitHub</span>
                <span className="social-arrow">→</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-name">Instagram</span>
                <span className="social-arrow">→</span>
              </a>
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
      
      {/* Optional: Add a map here */}
      <div className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            {/* Replace with actual map implementation */}
            <div className="map-info">
              <div className="map-icon">📍</div>
              <p className="map-text">
                {i18n.language === 'pl'
                  ? 'Czarna, Województwo Podkarpackie, Polska'
                  : 'Czarna, Subcarpathia, Poland'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;