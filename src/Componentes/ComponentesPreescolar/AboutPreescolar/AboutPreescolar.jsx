import React from "react";
import '../../ComponentesCendi/AboutCendi/AboutCendi.css';
import acercaDe_img from '../../../assets/about-cendi.png';
import play_icon from '../../../assets/play-icon.svg';
import { useLanguage } from "../../../LanguageContext";

const AboutPreescolar = ({ setPlayState }) => {
    const { language } = useLanguage();

    return (
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt="Sobre el Preescolar" className="acercaDe-img" />
                <img
                    src={play_icon}
                    alt={language === "es" ? "Reproducir video" : language === "en" ? "Play video" : "Lire la vidéo"}
                    className="play-icon"
                    onClick={() => setPlayState(true)}
                />
            </div>

            <div className="acercaDe-der">
                <h3>
                    {language === "es" 
                        ? "ACERCA DEL PREESCOLAR" 
                        : language === "en" 
                        ? "ABOUT PRESCHOOL" 
                        : "À PROPOS DE LA MATERNELLE"}
                </h3>

                <h2>
                    {language === "es" 
                        ? "CENTRO DE ATENCIÓN INFANTIL" 
                        : language === "en" 
                        ? "CHILD CARE CENTER" 
                        : "CENTRE DE GARDE D’ENFANTS"}
                </h2>

                <p>
                    {language === "es"
                        ? "En nuestro preescolar, fomentamos el desarrollo integral de los niños a través de experiencias lúdicas que despiertan su curiosidad y creatividad. Promovemos habilidades cognitivas, sociales y emocionales mediante juegos, actividades psicomotrices y dinámicas de exploración que motivan el aprendizaje."
                        : language === "en"
                        ? "In our preschool, we promote children's holistic development through playful experiences that spark curiosity and creativity. We foster cognitive, social, and emotional skills through games, psychomotor activities, and exploration dynamics that encourage learning."
                        : "Dans notre école maternelle, nous favorisons le développement global des enfants à travers des expériences ludiques qui éveillent leur curiosité et leur créativité. Nous encourageons les compétences cognitives, sociales et émotionnelles grâce à des jeux, des activités psychomotrices et des dynamiques d’exploration qui stimulent l’apprentissage."
                    }
                </p>

                <p>
                    {language === "es"
                        ? "Implementamos un programa progresivo de lectoescritura y el inicio del aprendizaje del inglés, integrando el idioma de manera natural en las actividades diarias. Todo esto en un ambiente seguro, afectivo y estimulante, donde cada niño se siente valorado y acompañado en su crecimiento."
                        : language === "en"
                        ? "We implement a progressive literacy program and the introduction to English learning, integrating the language naturally into daily activities. All within a safe, caring, and stimulating environment where each child feels valued and supported in their growth."
                        : "Nous mettons en place un programme progressif d’alphabétisation et l’initiation à l’apprentissage de l’anglais, en intégrant la langue naturellement dans les activités quotidiennes. Tout cela dans un environnement sûr, affectueux et stimulant, où chaque enfant se sent valorisé et accompagné dans sa croissance."
                    }
                </p>

                <p>
                    {language === "es"
                        ? <>Nuestro lema: <strong>"Jugamos, exploramos y aprendemos con curiosidad y creatividad."</strong></>
                        : language === "en"
                        ? <>Our motto: <strong>"We play, explore, and learn with curiosity and creativity."</strong></>
                        : <>Notre devise : <strong>"Nous jouons, explorons et apprenons avec curiosité et créativité."</strong></>
                    }
                </p>
            </div>
        </div>
    );
};

export default AboutPreescolar;
