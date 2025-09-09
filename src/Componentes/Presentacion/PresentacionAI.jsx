import React from 'react';
import './PresentacionSub.css';
import main_img from '../../assets/ai-img.png';
import flecha_oscura from '../../assets/dark-arrow.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const translations = {
  es: {
    saludo: "¿Buscas un desarrollador en Inteligencia Artificial?",
    slogan: "Machine Learning & Algoritmos IA",
    descripcion: "Desarrollo soluciones en Python utilizando TensorFlow y Keras, implemento algoritmos genéticos, de búsqueda y ordenamiento, aplico OpenCV y manejo estructuras de datos y perceptrones.",
    descubrir: "Ver más"
  },
  en: {
    saludo: "Looking for an AI developer?",
    slogan: "Machine Learning & AI Algorithms",
    descripcion: "I develop solutions in Python using TensorFlow and Keras, implement genetic, search, and sorting algorithms, apply OpenCV, and work with data structures and perceptron networks.",
    descubrir: "Learn more"
  },
  fr: {
    saludo: "Vous cherchez un développeur en Intelligence Artificielle ?",
    slogan: "Apprentissage automatique & Algorithmes IA",
    descripcion: "Je développe des solutions en Python avec TensorFlow et Keras, j’implémente des algorithmes génétiques, de recherche et de tri, j'utilise OpenCV et je maîtrise les structures de données et les perceptrons.",
    descubrir: "En savoir plus"
  },
  de: {
    saludo: "Suchen Sie einen Entwickler für Künstliche Intelligenz?",
    slogan: "Maschinelles Lernen & KI-Algorithmen",
    descripcion: "Ich entwickle Lösungen in Python mit TensorFlow und Keras, implementiere genetische Algorithmen sowie Such- und Sortieralgorithmen, wende OpenCV an und arbeite mit Datenstrukturen und Perzeptronen.",
    descubrir: "Mehr erfahren"
  }
};

const Presentacion = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className='presentacion-container'>
      <div className='presentacion'>
        <div className='presentacion-texto'>
          <div className='info'>
            <p className='saludo'>{t.saludo}</p>
            <p className="slogan">
              {t.slogan.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </p>
            <p className='descripcion'>
              {t.descripcion.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </p>
            <p>
              <Link
                to="planes"
                smooth={true}
                offset={-260}
                duration={500}
                className="btn"
              >
                {t.descubrir}<img src={flecha_oscura} alt='' />
                <div className="btn2"></div>
              </Link>
            </p>
          </div>
        </div>
        <div className='presentacion-img'>
          <div className="border">
            <div className="img-wrapper">
              <img src={main_img} alt="main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
