import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import logo from '../../assets/logo.svg';
import presentacion1 from '../../assets/presentacion1.png';
import presentacion2 from '../../assets/presentacion2.png';
import presentacion3 from '../../assets/presentacion3.png';
import presentacion4 from '../../assets/presentacion4.png';
import { useLanguage } from "../../LanguageContext";

const imageArray = [presentacion1, presentacion2, presentacion3, presentacion4];

const Presentacion = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(prev => {
        const descCount = translations[language]?.descriptions.length || 1;
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
      nameSchool: "Centro Educativo Americano",
      descriptions: [
        "Armonía, Integridad y Respeto!",
        "Formando estudiantes preparados para los retos del siglo XXI",
        "Educación de calidad con valores humanos"
      ]
    },
    en: {
      nameSchool: "American Educational Center",
      descriptions: [
        "Harmony, Integrity, and Respect!",
        "Preparing students for the challenges of the 21st century",
        "Quality education with human values"
      ]
    },
    fr: {
      nameSchool: "Centre Éducatif Américain",
      descriptions: [
        "Harmonie, Intégrité et Respect!",
        "Former des étudiants prêts pour les défis du XXIe siècle",
        "Une éducation de qualité avec des valeurs humaines"
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
        <img src={logo} alt="Logo" className="logo-presentacion" />
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

export default Presentacion;
