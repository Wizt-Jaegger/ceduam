import React, { use, useState } from "react"; 
import NavbarWebApp from "../Navbar/NavbarSecundario";
import PresentacionWebApp from "../Presentacion/PresentacionSecundaria";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";
import Banner from "../Banner/Banner";
import Titulo from "../Titulo/Titulo";
import Maps from "../Maps/Maps";
import Portafolio from "../Portafolio/Portafolio";
import About from "./AboutSecundaria/AboutSecundaria";
import fondo1 from "../../assets/lengua.jpg";

const ContainerApp = () => {
    const { language } = useLanguage();
    return (
        <div>
            <NavbarWebApp />
            <PresentacionWebApp />
            <Banner texto={
                language === "es" ?
                "MODELO BILINGÜE DE EXCELENCIA" :
                language === "en" ? 
                "BILINGUAL MODEL OF EXCELLENCE" : 
                language === "fr" ? 
                "MODÈLE BILINGUE D’EXCELLENCE" : 
                "MODELO BILINGÜE DE EXCELENCIA"
            }
                imagenFondo={fondo1} 
            />
            <About/>
            <div className="container">
                <Titulo 
                    subTitulo={language === "es" ? "Actividades" : language === "en" ? "Activities" : language === "de" ? "Aktivitäten" : "Activités"} 
                    titulo={language === "es" ? "Formación integral dentro y fuera del aula" : language === "en" ? "Comprehensive learning inside and outside the classroom" : language === "de" ? "Ganzheitliches Lernen innerhalb und außerhalb des Klassenzimmers" : "Un apprentissage complet à l'intérieur et à l'extérieur de la classe"}
                />
            </div>
            <Portafolio tag="secundaria" />
            <Maps/>
            <Footer />
        </div>
    );
}

export default ContainerApp;
