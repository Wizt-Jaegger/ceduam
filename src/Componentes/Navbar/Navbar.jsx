import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../../assets/logoFull.svg';
import menu_icon from '../../assets/menu-icon.svg';
import tache_icon from '../../assets/tache.svg';
import dropdown_icon from '../../assets/dropdown.svg'; 
import closedown_icon from '../../assets/closedown.svg'; 
import { Link } from "react-scroll";
import { useLanguage } from "../../LanguageContext";

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [trayectoriaMenu, setTrayectoriaMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    

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
    const toggleTrayectoriaMenu = () => setTrayectoriaMenu(!trayectoriaMenu);

    const translations = {
        es: {
            home: "Inicio",
            about: "Acerca de",
            services: "Oferta Educativa",
            trajectory: "Trayectoria",
            clients: "Talleres",
            technologies: "Lenguajes",
            portfolio: "Portafolio",
            testimonials: "Testimonios",
            contact: "Contactanos"
        },
        en: {
            home: "Home",
            about: "About",
            services: "Academic Programs", 
            trajectory: "Trajectory",
            clients: "Workshops",
            technologies: "Languages",
            portfolio: "Portfolio",
            testimonials: "Testimonials",
            contact: "Contact us"
        },
        fr: {
            home: "Accueil",
            about: "À propos",
            services: "Offre Éducative",
            trajectory: "Parcours",
            clients: "Ateliers",
            technologies: "Langues",
            portfolio: "Portfolio",
            testimonials: "Témoignages",
            contact: "Contactez"
        }
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
                <div className={`panel-container ${sticky ?'dark-panel-container':''}`}>
                    <Link 
                        to="presentacion" 
                        smooth={true} 
                        offset={0} 
                        duration={500} 
                        style={{ marginRight: "40px" }}
                    >
                        <img src={logo} alt="logo ceduam" className="logo" />
                    </Link>

                    <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                        <li className="active">
                            <Link to="presentacion" smooth={true} offset={0} duration={500}>
                                {t.home}
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="habilidades" smooth={true} offset={-260} duration={500}>
                                {t.services}
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} offset={-70} duration={500}>
                                {t.about}
                            </Link>
                        </li>
                        <li
                            className="dropdown"
                            onMouseEnter={toggleTrayectoriaMenu}
                            onMouseLeave={toggleTrayectoriaMenu}
                        >
                            <span>{t.trajectory}</span>
                            <img
                                src={trayectoriaMenu ? closedown_icon : dropdown_icon}
                                alt="Dropdown Icon"
                                className="dropdown-icon"
                            />
                            <ul className={`submenu ${trayectoriaMenu ? 'show' : ''}`}>
                                
                                <li>
                                    <Link to="planes" smooth={true} offset={-260} duration={500}>
                                        {t.technologies}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="clientes" smooth={true} offset={-200} duration={500}>
                                        {t.clients}
                                    </Link>
                                </li>
                                {/**
                                <li>
                                    <Link to="portfolio section" smooth={true} offset={-80} duration={500}>
                                        {t.portfolio}
                                    </Link>
                                </li>
                                */}
                                <li>
                                    <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                                        {t.testimonials}
                                    </Link>
                                </li>
                                
                                
                            </ul>
                        </li>
                        <li className="contactoBtn">
                            <Link 
                                to="contacto"
                                smooth={true}
                                offset={-260}
                                duration={500}
                                className={`btn ${sticky ? 'dark-contactoBtn' : ''}`}
                            >
                                {t.contact}
                                <div className="btn2"></div>
                            </Link>
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
                <div className="engBtn"

                    onClick={() => {
                        toggleLanguage(); 
                        setTimeout(() => {
                            window.location.reload(); 
                        }, 1); 
                    }}
                >
                    {language.toUpperCase()}
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;
