import React from 'react';
import './PresentacionSub.css';
import main_img from '../../assets/robots-img.png';
import flecha_oscura from '../../assets/dark-arrow.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const translations = {
  es: {
    saludo: "¿Buscas un desarrollador en robótica y mecatrónica?",
    slogan: "Electrónica, control y movimiento",
    descripcion: "Diseño e implemento sistemas robóticos usando Arduino y lenguaje C, integro sensores, actuadores hidráulicos y neumáticos, y aplico principios de electrónica digital y mecatrónica.",
    descubrir: "Ver más"
  },
  en: {
    saludo: "Looking for a robotics and mechatronics developer?",
    slogan: "Electronics, Control & Motion",
    descripcion: "I design and implement robotic systems using Arduino and C, integrate sensors, hydraulic and pneumatic actuators, and apply digital electronics and mechatronics principles.",
    descubrir: "Learn more"
  },
  fr: {
    saludo: "Vous cherchez un développeur en robotique et mécatronique ?",
    slogan: "Électronique, contrôle et mouvement",
    descripcion: "Je conçois et mets en œuvre des systèmes robotiques avec Arduino et C, j’intègre des capteurs, des actionneurs hydrauliques et pneumatiques, et j’applique les principes de l’électronique numérique et de la mécatronique.",
    descubrir: "En savoir plus"
  },
  de: {
    saludo: "Suchen Sie einen Entwickler für Robotik und Mechatronik?",
    slogan: "Elektronik, Steuerung & Bewegung",
    descripcion: "Ich entwerfe und implementiere robotische Systeme mit Arduino und C, integriere Sensoren sowie hydraulische und pneumatische Aktoren und setze digitale Elektronik und Mechatronik um.",
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
