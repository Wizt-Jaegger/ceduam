import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../../assets/logoFull.svg';
import menu_icon from '../../assets/menu-icon.svg';
import tache_icon from '../../assets/tache.svg';
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const NavbarSecundario = () => {
    const { language, toggleLanguage } = useLanguage();
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Detectar scroll para sticky navbar
    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Script UserWay
    useEffect(() => {
        if (!document.querySelector('script[data-userway]')) {
            const script = document.createElement("script");
            script.src = "https://cdn.userway.org/widget.js";
            script.dataset.account = "kjnkkEfZx0";
            script.dataset.userway = "true";
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const toggleMenu = () => setMobileMenu(!mobileMenu);

    const translations = {
        es: { home: "Inicio", actividades: "acercaDe", portafolio: "Actividades", ubicacion: "Ubicación", contact: "Regresar" },
        en: { home: "Home", actividades: "About", portafolio: "Activities", ubicacion: "Location", contact: "Go back" },
        fr: { home: "Accueil", actividades: "acercaDe", portafolio: "Acculier", ubicacion: "Localisation", contact: "Retour" }
    };

    const t = translations[language];

    return (
        <div>
            {/* Botón flotante WhatsApp */}
            <a
                className="botonFlotante"
                href="https://wa.me/527773174407"
                target="_blank"
                rel="noopener noreferrer"
                title="¡Whasaaaa!"
            >
                <i className="fab fa-whatsapp"></i>
            </a>

            {/* Botón flotante arriba */}
            <a className={`botonUp ${sticky ? 'dark-botonUp' : ''}`} title="¡Pa' arriba!">
                <Link to="presentacion" smooth={true} offset={0} duration={800}>
                    <i className='bx bx-chevron-up-circle'></i>
                </Link>
            </a>

            {/* Botón flotante abajo */}
            <a className={`botonDown ${sticky ? 'dark-botonDown' : ''}`} title="¡Pa' abajo!">
                <Link to="footer" smooth={true} offset={0} duration={1000}>
                    <i className='bx bx-chevron-down-circle'></i>
                </Link>
            </a>

            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <div className={`panel-container ${sticky ? 'dark-panel-container' : ''}`}>
                    <a href="/">
                        <img src={logo} alt="logo Emi" className="logo" />
                    </a>

                    <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                        <li>
                            <Link to="presentacion" smooth={true} offset={0} duration={500}>{t.home}</Link>
                        </li>
                        <li>
                            <Link to="acercaDe" smooth={true} offset={-130} duration={500}>{t.actividades}</Link>
                        </li>
                        <li>
                            <Link to="portfolio" smooth={true} offset={-80} duration={500}>{t.portafolio}</Link>
                        </li>
                        <li>
                            <Link to="map-container" smooth={true} offset={-90} duration={500}>{t.ubicacion}</Link>
                        </li>
                        <li className="contactoBtn">
                            <a href="/" className={`btn ${sticky ? 'dark-contactoBtn' : ''}`}>
                                {t.contact}
                                <div className="btn2"></div>
                            </a>
                        </li>

                    </ul>

                    <div className="menu-container">
                        <img
                            src={mobileMenu ? tache_icon : menu_icon}
                            alt="menu"
                            className="menu-icon"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>

                {/* Botón de idioma */}
                <div
                    className="engBtn"
                    onClick={() => {
                        toggleLanguage();
                        setTimeout(() => window.location.reload(), 1);
                    }}
                >
                    {language.toUpperCase()}
                </div>
            </nav>
        </div>
    );
};

export default NavbarSecundario;
