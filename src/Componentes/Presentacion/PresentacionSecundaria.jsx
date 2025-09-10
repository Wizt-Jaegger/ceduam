import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import logo from '../../assets/habilidad-4.png';
import secundaria1 from '../../assets/presentacion-secundaria-1.png';
import secundaria2 from '../../assets/presentacion-secundaria-2.png';
import secundaria3 from '../../assets/presentacion-secundaria-3.png';
import secundaria4 from '../../assets/presentacion-secundaria-4.png';

import { useLanguage } from "../../LanguageContext";

const imageArray = [secundaria1, secundaria2, secundaria3, secundaria4];

const PresentacionSecundaria = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageArray.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Cambia descripción cada 4s
  useEffect(() => {
    const interval = setInterval(() => {
      const descCount = translations[language]?.descriptions.length || 1;
      setCurrentDescription(prev => {
        let next = Math.floor(Math.random() * descCount);
        while (next === prev) {
          next = Math.floor(Math.random() * descCount);
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [language]);

  const translations = {
    es: {
      nameSchool: "Secundaria",
      descriptions: [
        "Preparación integral para los retos académicos y personales.",
        "Fomento del pensamiento crítico, creatividad y liderazgo.",
        "Proyectos, deportes y actividades culturales que fortalecen habilidades."
      ]
    },
    en: {
      nameSchool: "Middle School",
      descriptions: [
        "Comprehensive preparation for academic and personal challenges.",
        "Encouraging critical thinking, creativity, and leadership.",
        "Projects, sports, and cultural activities that strengthen skills."
      ]
    },
    fr: {
      nameSchool: "Collège",
      descriptions: [
        "Préparation complète aux défis académiques et personnels.",
        "Encouragement à la pensée critique, créativité et leadership.",
        "Projets, sports et activités culturelles qui renforcent les compétences."
      ]
    }
  };

  const t = translations[language] || translations.es;

  return (
    <div className='presentacion'>
      <div
        className="carousel-background"
        style={{ backgroundImage: `url(${imageArray[currentImage]})` }}
      ></div>

      <div className='presentacion-texto'>
        <img 
          src={logo} 
          alt="Logo" 
          className="logo-presentacion" 
          style={{ borderRadius: '50%', objectFit: 'cover' }} 
        />
        <h1>{t.nameSchool}</h1>
        <p>{t.descriptions[currentDescription]}</p>
      </div>

      <div className="carousel-indicators">
        {imageArray.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PresentacionSecundaria;
