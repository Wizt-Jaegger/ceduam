import React, { useState } from "react";
import './Galeria.css';
import { Link } from 'react-router-dom';
import habilidad1 from '../../assets/habilidad-1.png';
import habilidad2 from '../../assets/habilidad-2.png';
import habilidad3 from '../../assets/habilidad-3.png';
import habilidad4 from '../../assets/habilidad-4.png';
import flechaBlanca from '../../assets/dark-arrow.svg';
import { useLanguage } from "../../LanguageContext";

const items = [
    { img: habilidad1, alt: "Cendi", to: "/cendi", key: "cendi" },
    { img: habilidad2, alt: "Preescolar", to: "/preescolar", key: "preescolar" },
    { img: habilidad3, alt: "Primaria", to: "/primaria", key: "primaria" },
    { img: habilidad4, alt: "Secundaria", to: "/secundaria", key: "secundaria" },
];

const Habilidades = () => {
    const { language } = useLanguage(); 
    const [showAll, setShowAll] = useState(false);

    const translations = {
        watchMore: {
            es: "Ver más",
            en: "Show more",
            fr: "Voir plus"
        },
        showLess: {
            es: "Ver menos",
            en: "Show less",
            fr: "Voir moins"
        },
        generalDescription: {
            es: "En nuestra institución consideramos fundamental acompañar a los estudiantes en cada etapa de su formación. Desde los primeros años, fomentamos un desarrollo integral basado en la armonía, la integridad y el respeto, promoviendo valores, conocimientos y habilidades que les permitan crecer como personas responsables y preparadas para los retos del futuro.",
            en: "At our institution, we consider it essential to support students at every stage of their education. From the early years, we promote integral development based on harmony, integrity, and respect, fostering values, knowledge, and skills that help them grow into responsible individuals prepared for future challenges.",
            fr: "Dans notre établissement, nous considérons essentiel d’accompagner les élèves à chaque étape de leur formation. Dès les premières années, nous favorisons un développement intégral fondé sur l’harmonie, l’intégrité et le respect, en promouvant des valeurs, des connaissances et des compétences qui leur permettent de devenir des personnes responsables et prêtes à relever les défis de l’avenir."
        },
        descriptions: {
            cendi: {
                es: "CENDI/CAI para bebés de hasta 3 años, enfocado en su desarrollo integral.",
                en: "CENDI/CAI for babies up to 3 years old, focused on their integral development.",
                fr: "CENDI/CAI pour les bébés jusqu’à 3 ans, axé sur leur développement intégral."
            },
            preescolar: {
                es: "Nivel preescolar donde los niños se preparan con bases sólidas para su aprendizaje.",
                en: "Preschool level where children build strong foundations for learning.",
                fr: "Niveau préscolaire où les enfants acquièrent des bases solides pour l’apprentissage."
            },
            primaria: {
                es: "Educación primaria que fortalece el conocimiento y los valores de los estudiantes.",
                en: "Elementary school education that strengthens students’ knowledge and values.",
                fr: "Éducation primaire qui renforce les connaissances et les valeurs des élèves."
            },
            secundaria: {
                es: "Educación secundaria que impulsa el pensamiento crítico y el desarrollo académico.",
                en: "Middle school education that fosters critical thinking and academic growth.",
                fr: "Éducation secondaire qui favorise la pensée critique et le développement académique."
            }
        }
    };

    const visibleItems = items; // siempre mostramos todos los niveles

    return (
        <div className="habilidades">
            <div className="gallery">
                {visibleItems.map(({ img, alt, to, key }, index) => (
                    <Link key={index} to={to} className="gallery-item">
                        <img src={img} alt={alt} />
                        <div className="gallery-description">
                            {translations.descriptions[key][language]}
                        </div>
                    </Link>
                ))}
            </div>

            {showAll && (
                <div className="general-description">
                    {translations.generalDescription[language]}
                </div>
            )}

            <button 
                className="btn" 
                onClick={() => setShowAll(prev => !prev)}
            >
                {showAll && (
                    <img
                        src={flechaBlanca}
                        alt="Flecha blanca"
                        style={{ transform: 'rotate(180deg)', marginRight: '8px'}}
                    />
                )}
                {showAll ? translations.showLess[language] : translations.watchMore[language]}
                {!showAll && (
                    <img
                        src={flechaBlanca}
                        alt="Flecha blanca"
                        style={{ marginLeft: '8px'}}
                    />
                )}
            </button>
        </div>
    );
};

export default Habilidades;
