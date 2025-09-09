import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import logo from '../../assets/habilidad-1.png';
import presentacion1 from '../../assets/presentacion-cendi-1.png';
import presentacion2 from '../../assets/presentacion-cendi-2.png';
import presentacion3 from '../../assets/presentacion-cendi-3.png';
import presentacion4 from '../../assets/presentacion-cendi-4.png';
import { useLanguage } from "../../LanguageContext";

const imageArray = [presentacion1, presentacion2, presentacion3, presentacion4];

const PresentacionCendi = () => {
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
      nameSchool: "CENDI / CAI",
      descriptions: [
        "Armonía, Integridad y Respeto desde los primeros años",
        "Cuidado y estimulación temprana para bebés y niños pequeños",
        "Un espacio seguro con educación inicial de calidad"
      ]
    },
    en: {
      nameSchool: "CENDI / CAI",
      descriptions: [
        "Harmony, Integrity, and Respect from the very first years",
        "Early care and stimulation for babies and toddlers",
        "A safe space with quality early education"
      ]
    },
    fr: {
      nameSchool: "CENDI / CAI",
      descriptions: [
        "Harmonie, Intégrité et Respect dès les premières années",
        "Soins et stimulation précoce pour bébés et jeunes enfants",
        "Un espace sûr avec une éducation initiale de qualité"
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

export default PresentacionCendi;
