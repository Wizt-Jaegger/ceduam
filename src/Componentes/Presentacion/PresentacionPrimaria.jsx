import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import logo from '../../assets/habilidad-3.png';
import primaria1 from '../../assets/presentacion-primaria-1.png';
import primaria2 from '../../assets/presentacion2.png';
import primaria3 from '../../assets/presentacion3.png';
import primaria4 from '../../assets/presentacion4.png';
import { useLanguage } from "../../LanguageContext";

const imageArray = [primaria1, primaria2, primaria3, primaria4];

const PresentacionPrimaria = () => {
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
      nameSchool: "Primaria",
      descriptions: [
        "Formación bilingüe en español e inglés con francés desde 4° grado.",
        "Certificaciones internacionales que fortalecen el aprendizaje.",
        "Cada día es una oportunidad para crecer, descubrir y soñar."
      ]
    },
    en: {
      nameSchool: "Elementary School",
      descriptions: [
        "Bilingual education in Spanish and English, with French starting in 4th grade.",
        "International certifications to strengthen learning.",
        "Every day is a new opportunity to grow, discover, and dream."
      ]
    },
    fr: {
      nameSchool: "École Primaire",
      descriptions: [
        "Éducation bilingue en espagnol et en anglais, avec le français dès la 4e année.",
        "Certifications internationales qui renforcent l'apprentissage.",
        "Chaque jour est une opportunité de grandir, découvrir et rêver."
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

export default PresentacionPrimaria;
