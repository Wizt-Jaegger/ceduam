import React from 'react';
import logoFooter from "../../assets/logoFull.svg";
import "./Footer.css";
import { useLanguage } from "../../LanguageContext";

const Footer = () => {
    const { language } = useLanguage();

    const translations = {
        privacy: {
            es: "Política de privacidad",
            en: "Privacy Policy",
            fr: "Politique de confidentialité"
        },
        terms: {
            es: "Términos y condiciones",
            en: "Terms and Conditions",
            fr: "Termes et conditions"
        },
        index: {
            es: "Secciones",
            en: "Sections",
            fr: "Sections"
        },
        home: {
            es: "Inicio",
            en: "Home",
            fr: "Accueil"
        },
        cendi: {
            es: "CENDI",
            en: "CENDI",
            fr: "CENDI"
        },
        preescolar: {
            es: "Preescolar",
            en: "Preschool",
            fr: "Maternelle"
        },
        primaria: {
            es: "Primaria",
            en: "Primary",
            fr: "Primaire"
        },
        secundaria: {
            es: "Secundaria",
            en: "Secondary",
            fr: "Collège"
        },
        contact: {
            es: "Contacto",
            en: "Contact",
            fr: "Contact"
        },
        follow: {
            es: "Síguenos",
            en: "Follow us",
            fr: "Suivez-nous"
        },
        addressLine1: {
            es: "Carretera Federal México-Cuernavaca no. 16 y Laurel no. 102, Col. Buena Vista",
            en: "Federal Highway Mexico-Cuernavaca No. 16 and Laurel No. 102, Col. Buena Vista",
            fr: "Autoroute fédérale Mexico-Cuernavaca n°16 et Laurel n°102, Col. Buena Vista"
        },
        addressLine2: {
            es: "Cuernavaca, Mor., México",
            en: "Cuernavaca, Mor., Mexico",
            fr: "Cuernavaca, Mor., Mexique"
        },
        phone1: "+52 777 3174407",
        phone2: "+52 777 3131339",
        email: "info@centroeducativoamericano.edu.mx"
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Company Section */}
                    <div className="footer-col" id="company">
                        <h3 className="footer-h3">
                            <img src={logoFooter} alt="CEDUAM Logo" className="footer-logo" />
                        </h3>
                        <div className="footer-links">
                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                {translations.privacy[language]}
                            </a>
                            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                                {translations.terms[language]}
                            </a>
                        </div>
                    </div>

                    {/* Sections Links */}
                    <div className="footer-col" id="sections">
                        <h3 className="footer-h3">{translations.index[language]}</h3>
                        <div className="footer-links">
                            <a href="/cendi">{translations.cendi[language]}</a>
                            <a href="/preescolar">{translations.preescolar[language]}</a>
                            <a href="/primaria">{translations.primaria[language]}</a>
                            <a href="/secundaria">{translations.secundaria[language]}</a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-col" id="contact">
                        <h3 className="footer-h3">{translations.contact[language]}</h3>
                        <div className="footer-contact-details">
                            <i className="fa fa-location"></i> 
                            <p>
                                {translations.addressLine1[language]}<br />
                                {translations.addressLine2[language]}
                            </p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-phone"></i>
                            <p>{translations.phone1}</p>
                            <p>{translations.phone2}</p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-envelope"></i>
                            <p>{translations.email}</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-col" id="social">
                        <h3 className="footer-h3">{translations.follow[language]}</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/CEDUAM" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/centroeducativoamericano" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/527773174407" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
