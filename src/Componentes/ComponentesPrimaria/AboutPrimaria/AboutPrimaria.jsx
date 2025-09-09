import React from "react";
import '../../ComponentesCendi/AboutCendi/AboutCendi.css';
import acercaDe_img from '../../../assets/about-cendi.png';
import play_icon from '../../../assets/play-icon.svg';
import { useLanguage } from "../../../LanguageContext";

const texts = {
    es: {
        title: "ACERCA DE PRIMARIA",
        subtitle: "FORMACIÓN ACADÉMICA Y VALORES",
        p1: "En nuestra primaria, ofrecemos una educación integral que combina excelencia académica con formación en valores, brindando a los alumnos las herramientas necesarias para enfrentar con éxito los retos de su desarrollo personal y académico.",
        p2: "Promovemos la comprensión lectora, el pensamiento lógico-matemático, las ciencias y la expresión artística, integrando también el aprendizaje del inglés como segunda lengua desde los primeros grados.",
        p3: "Fomentamos la responsabilidad, el trabajo en equipo, la autonomía y el respeto, dentro de un ambiente seguro y motivador, que impulsa a cada estudiante a alcanzar su máximo potencial.",
        lema: "Aprendemos con disciplina, valores y entusiasmo para construir un mejor futuro."
    },
    en: {
        title: "ABOUT PRIMARY SCHOOL",
        subtitle: "ACADEMIC TRAINING AND VALUES",
        p1: "In our primary school, we offer a comprehensive education that combines academic excellence with character formation, providing students with the tools they need to successfully face the challenges of their personal and academic growth.",
        p2: "We promote reading comprehension, logical-mathematical thinking, science, and artistic expression, while also integrating English learning as a second language from the early grades.",
        p3: "We foster responsibility, teamwork, autonomy, and respect in a safe and motivating environment that encourages every student to reach their full potential.",
        lema: "We learn with discipline, values, and enthusiasm to build a better future."
    },
    fr: {
        title: "À PROPOS DE L'ÉCOLE PRIMAIRE",
        subtitle: "FORMATION ACADÉMIQUE ET VALEURS",
        p1: "Dans notre école primaire, nous offrons une éducation complète qui combine l'excellence académique avec la formation aux valeurs, donnant aux élèves les outils nécessaires pour relever avec succès les défis de leur développement personnel et scolaire.",
        p2: "Nous encourageons la compréhension en lecture, la pensée logico-mathématique, les sciences et l'expression artistique, tout en intégrant l'apprentissage de l'anglais comme deuxième langue dès les premières années.",
        p3: "Nous favorisons la responsabilité, le travail en équipe, l'autonomie et le respect dans un environnement sûr et motivant, qui pousse chaque élève à atteindre son plein potentiel.",
        lema: "Nous apprenons avec discipline, valeurs et enthousiasme pour construire un avenir meilleur."
    }
};

const AboutPrimaria = ({ setPlayState }) => {
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

export default AboutPrimaria;
