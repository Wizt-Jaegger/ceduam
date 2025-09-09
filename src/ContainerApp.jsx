import React, { useState } from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Presentacion from "./Componentes/Presentacion/Presentacion";
import Planes from "./Componentes/Planes/Planes";
import Titulo from "./Componentes/Titulo/Titulo";
import Contacto from "./Componentes/Contacto/Contacto";
import Footer from "./Componentes/Footer/Footer";
import { useLanguage } from "../src/LanguageContext"; 
import Certificados from "./Componentes/Clientes/Clientes";
import Habilidades from "./Componentes/Galeria/Habilidades";
import Maps from "./Componentes/Maps/Maps";
import AboutMe from "./Componentes/AboutMe/AboutMe";
import Banner from "./Componentes/Banner/Banner";
import fondo1 from "./assets/taekwondo.jpg";
import fondo2 from "./assets/robotica.jpg";
import fondo3 from "./assets/musica.jpg"
import fondo4 from "./assets/educacion.jpg"
import Testimonios from "./Componentes/Testimonios/Testimonios"
const ContainerApp = () => {
    const { language } = useLanguage();

    return (
        <div>
            <Navbar />
            <Presentacion />
            <Banner texto={
                language === "es" ?
                "¡APRENDE TAEKWONDO!" :
                language === "en" ? 
                "LEARN TAEKWONDO!" : 
                language === "fr" ? 
                "APPRENDS LE TAEKWONDO !" : 
                "APRENDE TAEKWONDO!"
            }
                imagenFondo={fondo1} 
            />

            <div className="container">
               <Titulo 
                    subTitulo={
                        language === "es" ? 
                        "Oferta educativa" : 
                        language === "en" ? 
                        "Academic Programs" : 
                        language === "fr" ? 
                        "Offre éducative" : 
                        "Oferta educativa"
                    } 
                    titulo={
                        language === "es" ? 
                        "¡Estudia con nosotros!" : 
                        language === "en" ? 
                        "Study with us!" : 
                        language === "fr" ? 
                        "Étudie avec nous !" : 
                        "¡Estudia con nosotros!" 
                    } 
                />

                <Habilidades />
            

            </div>
            <Banner 
                texto={
                    language === "es" ? "TE GUSTAN LOS ROBOTS?" :
                    language === "en" ? "DO YOU LIKE ROBOTS?" :
                    language === "fr" ? "AIMEZ-VOUS LES ROBOTS ?" :
                    "TE GUSTAN LOS ROBOTS?"
                }
                imagenFondo={fondo2} 
            />

            <div className="container">
                <AboutMe/>
                
                <Titulo 
                    subTitulo={
                        language === "es" ? "Idiomas" :
                        language === "en" ? "Languages" :
                        language === "de" ? "Sprachen" :
                        "Langues"
                    }
                    titulo={
                        language === "es" ? "Prepárate en un ambiente internacional y multicultural" :
                        language === "en" ? "Get ready in an international and multicultural environment" :
                        language === "fr" ? "Préparez-vous dans un environnement international et multiculturel" :
                        "Prepárate en un ambiente internacional y multicultural"
                    }

                />
                <Planes />
            </div>
            <Banner 
                texto={
                    language === "es" 
                        ? "¡ÚNETE AL TALLER DE MÚSICA!" 
                        : language === "en" 
                        ? "JOIN OUR MUSIC WORKSHOP!" 
                        : language === "fr" 
                        ? "REJOINS NOTRE ATELIER DE MUSIQUE !" 
                        : "¡ÚNETE AL TALLER DE MÚSICA!"
                }
                imagenFondo={fondo3} 
            />

            <div className="container">
                <Titulo 
                    subTitulo={language === "es" ? "Talleres" : language === "en" ? "Workshops" : "Ateliers"
                    }
                    titulo={language === "es" ? "Espacios creativos y formativos para nuestros alumnos" : language === "en" ? "Creative and educational spaces for our students" : "Espaces créatifs et éducatifs pour nos élèves"
                    }
                />
                <Certificados />
            </div>
            <Banner texto={
                language === "es" ?
                "¡EDUCACIÓN INTEGRAL CON VALORES!" :
                language === "en" ? 
                "COMPREHENSIVE EDUCATION WITH VALUES!" : 
                language === "fr" ? 
                "ÉDUCATION INTÉGRALE AVEC DES VALEURS !" : 
                "¡EDUCACIÓN INTEGRAL CON VALORES!"
            }
                imagenFondo={fondo4} 
            />


            <div className="container">

                
                <Titulo 
                    subTitulo={language === "es" ? "Testimonios" : language === "en" ? "Testimonials" : language === "de" ? "Referenzen" : "Témoignages"} 
                    titulo={language === "es" ? "Opiniones de la gente" : language === "en" ? "What People Say" : language === "de" ? "Was die Leute sagen" : "Avis des gens"}
                />

                <Testimonios/>
                
            </div>
                
            

            <div className="container">
                
                <Titulo 
                    subTitulo={language === "es" ? "Contactanos" : language === "en" ? "Contact Us" : language === "fr" ? "Contactez-nouz" : "Contactanos"} 
                    titulo={language === "es" ? "Da tu opinión" : language === "en" ? "Your feedback" : language === "de" ? "Ihr Feedback" : "Vos retours"} 
                />
                <Contacto />
                <Maps />
            </div>
            
            <Footer />
        </div>
    );
}

export default ContainerApp;
