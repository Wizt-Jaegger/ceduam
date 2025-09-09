import React, { use, useState } from "react";
import NavbarWebApp from "../Navbar/NavbarSecundario";
import PresentacionAI from "../Presentacion/PresentacionAI";
import Footer from "../Footer/Footer";
import { useLanguage } from "../../LanguageContext";

const translations = {
    es: {
        message: "Hola, este sitio fue creado por mí como estudiante. Estoy en mi último año, por lo que tengo muchos proyectos; debido a ello, no puedo actualizar la página tan seguido como quisiera. Agradezco tu paciencia con las actualizaciones."
    },
    en: {
        message: "Hi, this site was created by me as a student. I'm in my final year, which means I have many projects; because of that, I can't update the site as often as I'd like. I appreciate your patience with updates."
    },
    de: {
        message: "Hallo, diese Website wurde von mir als Student erstellt. Ich bin im letzten Studienjahr und habe daher viele Projekte; deshalb kann ich die Seite nicht so oft aktualisieren, wie ich es gerne würde. Vielen Dank für deine Geduld mit den Aktualisierungen."
    },
    fr: {
        message: "Bonjour, ce site a été créé par moi en tant qu'étudiant. Je suis dans ma dernière année d’études, ce qui signifie que j’ai de nombreux projets ; à cause de cela, je ne peux pas mettre le site à jour aussi souvent que je le voudrais. Merci pour ta patience concernant les mises à jour."
    }
};
const ContainerApp = () => {
    const { language } = useLanguage();
    const { message } = translations[language] || translations["en"]; 


    return (
        <div>
            <NavbarWebApp />
            <PresentacionAI />
             <div style={{ color: "white", padding: "2rem", fontSize:"3rem" , margin: "1rem" }}>
                    {message}
                </div>
            <div className="container">
            
            </div>
            
            <Footer />
        </div>
    );
}

export default ContainerApp;
