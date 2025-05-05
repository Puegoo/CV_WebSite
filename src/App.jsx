import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CertificateDetails from './pages/CertificateDetails';
import './App.css';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <div className="app-container">
      <div className="background-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      
      <Navbar />
      
      <main className="main-content">
        <div 
          className={`content-wrapper ${transitionStage}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate/:id" element={<CertificateDetails />} />
          </Routes>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;