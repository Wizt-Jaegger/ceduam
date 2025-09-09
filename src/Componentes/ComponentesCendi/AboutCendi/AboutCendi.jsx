import React from "react";
import './AboutCendi.css'
import acercaDe_img from '../../../assets/about-cendi.png'
import play_icon from '../../../assets/play-icon.svg'
import { useLanguage } from "../../../LanguageContext";

const AboutCendi = ({ setPlayState }) => {
    const { language } = useLanguage();

    return (
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt="Sobre el CENDI" className="acercaDe-img" />
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
                        ? "ACERCA DEL CENDI"
                        : language === "en"
                        ? "ABOUT THE CENDI"
                        : "À PROPOS DU CENDI"}
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
                        ? "El CENDI del Centro Educativo Americano brinda atención especializada a bebés desde los 40 días de nacidos, ofreciendo un programa de estimulación temprana, actividades psicomotrices y un ambiente seguro, afectivo y estimulante que favorece su desarrollo integral. Contamos con horarios de guardería hasta las 17:00 hrs, con servicio de comedor adicional, asegurando que cada niño se encuentre en un espacio cuidado y adecuado hasta reunirse con su familia. Nuestro objetivo es ofrecer una base sólida para el aprendizaje y bienestar de los pequeños, fomentando su crecimiento físico, emocional y social en un entorno seguro y amoroso."
                        : language === "en"
                        ? "The CENDI of the American Educational Center provides specialized care for babies from 40 days old, offering an early stimulation program, psychomotor activities, and a safe, nurturing, and stimulating environment that promotes their holistic development. We offer daycare hours until 5:00 p.m., with additional dining services, ensuring that each child remains in a protected and suitable space until reunited with their family. Our goal is to provide a solid foundation for children's learning and well-being, fostering their physical, emotional, and social growth in a safe and loving environment."
                        : "Le CENDI du Centre Éducatif Américain offre des soins spécialisés aux bébés dès l’âge de 40 jours, en proposant un programme de stimulation précoce, des activités psychomotrices et un environnement sûr, affectueux et stimulant qui favorise leur développement global. Nous proposons des horaires de garderie jusqu’à 17h00, avec un service de restauration supplémentaire, garantissant que chaque enfant se trouve dans un espace protégé et approprié jusqu’à retrouver sa famille. Notre objectif est de fournir une base solide pour l’apprentissage et le bien-être des enfants, en favorisant leur croissance physique, émotionnelle et sociale dans un environnement sûr et affectueux."
                    }
                </p>
            </div>
        </div>
    )
}

export default AboutCendi;
