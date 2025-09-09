import React from "react";
import '../../ComponentesCendi/AboutCendi/AboutCendi.css';
import acercaDe_img from '../../../assets/about-cendi.png';
import play_icon from '../../../assets/play-icon.svg';
import { useLanguage } from "../../../LanguageContext";

const texts = {
    es: {
        title: "ACERCA DE SECUNDARIA",
        subtitle: "DESARROLLO INTEGRAL Y PREPARACIÓN PARA EL FUTURO",
        p1: "En nuestra secundaria, acompañamos a los estudiantes en una etapa clave de su formación, brindando una educación de calidad que combina conocimientos académicos sólidos con el desarrollo de habilidades sociales y emocionales.",
        p2: "Nuestro plan de estudios fortalece el pensamiento crítico, la investigación, la comunicación efectiva y la resolución de problemas, integrando además el dominio del inglés y el uso de tecnologías como herramientas fundamentales para su futuro.",
        p3: "Fomentamos la identidad, el liderazgo, la responsabilidad y el compromiso social en un entorno de respeto y motivación, preparando a cada joven para continuar sus estudios de nivel medio superior con confianza y seguridad.",
        lema: "Formamos líderes con conocimiento, valores y visión de futuro."
    },
    en: {
        title: "ABOUT SECONDARY SCHOOL",
        subtitle: "HOLISTIC DEVELOPMENT AND PREPARATION FOR THE FUTURE",
        p1: "In our secondary school, we guide students through a key stage of their education, providing high-quality learning that combines strong academic knowledge with social and emotional skills development.",
        p2: "Our curriculum strengthens critical thinking, research, effective communication, and problem-solving, while also integrating English proficiency and technology as essential tools for their future.",
        p3: "We foster identity, leadership, responsibility, and social commitment in an environment of respect and motivation, preparing each student to confidently continue their higher education.",
        lema: "We form leaders with knowledge, values, and a vision for the future."
    },
    fr: {
        title: "À PROPOS DU COLLÈGE",
        subtitle: "DÉVELOPPEMENT INTÉGRAL ET PRÉPARATION POUR L'AVENIR",
        p1: "Dans notre collège, nous accompagnons les élèves dans une étape clé de leur formation, en offrant une éducation de qualité qui combine des connaissances académiques solides avec le développement des compétences sociales et émotionnelles.",
        p2: "Notre programme renforce la pensée critique, la recherche, la communication efficace et la résolution de problèmes, tout en intégrant la maîtrise de l'anglais et l'utilisation des technologies comme outils essentiels pour leur avenir.",
        p3: "Nous favorisons l'identité, le leadership, la responsabilité et l'engagement social dans un environnement de respect et de motivation, préparant chaque jeune à poursuivre ses études secondaires avec confiance et assurance.",
        lema: "Nous formons des leaders avec des connaissances, des valeurs et une vision d'avenir."
    }
};

const AboutSecundaria = ({ setPlayState }) => {
    const { language } = useLanguage();
    const t = texts[language] || texts.es;

    return (
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt={t.title} className="acercaDe-img" />
                <img
                    src={play_icon}
                    alt="Reproducir video"
                    className="play-icon"
                    onClick={() => setPlayState(true)}
                />
            </div>

            <div className="acercaDe-der">
                <h3>{t.title}</h3>
                <h2>{t.subtitle}</h2>
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
                <p>
                    <strong>{t.lema}</strong>
                </p>
            </div>
        </div>
    );
};

export default AboutSecundaria;
