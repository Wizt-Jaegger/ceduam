import React, { useRef } from "react";
import "./Clientes.css";
import FotoCli1 from "../../assets/FotoCli_1.png";
import FotoCli2 from "../../assets/FotoCli_2.png";
import FotoCli3 from "../../assets/FotoCli_3.png";
import FotoCli4 from "../../assets/FotoCli_4.png";
import FotoCli5 from "../../assets/FotoCli_5.png";
import FotoCli6 from "../../assets/FotoCli_6.png";
import FotoCli7 from "../../assets/FotoCli_7.png";
import siguiente_icon from "../../assets/next-icon.svg";
import atras_icon from "../../assets/back-icon.svg";
import { useLanguage } from "../../LanguageContext";

const clientesData = {
  es: [
    { img: FotoCli1, name: "Judo", slogan: "Disciplina, fuerza y respeto en cada movimiento." },
    { img: FotoCli2, name: "Ajedrez", slogan: "Desarrolla tu estrategia, paciencia y pensamiento crítico." },
    { img: FotoCli3, name: "Robótica", slogan: "Explora la tecnología creando e innovando con tus propias manos." },
    { img: FotoCli4, name: "Música", slogan: "Expresa tu creatividad y emociones a través del arte musical." },
    { img: FotoCli5, name: "Orquesta", slogan: "Vive la experiencia de hacer música en conjunto y en armonía." },
    { img: FotoCli6, name: "Taekwondo", slogan: "Fortalece cuerpo y mente con valores de disciplina y perseverancia." },
    { img: FotoCli7, name: "Danza Hawaiana", slogan: "Movimiento, ritmo y expresión para liberar tu energía." }
  ],
  en: [
    { img: FotoCli1, name: "Judo", slogan: "Discipline, strength, and respect in every move." },
    { img: FotoCli2, name: "Chess", slogan: "Develop strategy, patience, and critical thinking." },
    { img: FotoCli3, name: "Robotics", slogan: "Explore technology by creating and innovating with your own hands." },
    { img: FotoCli4, name: "Music", slogan: "Express your creativity and emotions through musical art." },
    { img: FotoCli5, name: "Orchestra", slogan: "Experience the harmony of playing music together." },
    { img: FotoCli6, name: "Taekwondo", slogan: "Strengthen body and mind with discipline and perseverance." },
    { img: FotoCli7, name: "Hawaian Dance", slogan: "Movement, rhythm, and expression to unleash your energy." }
  ],
  fr: [
    { img: FotoCli1, name: "Judo", slogan: "Discipline, force et respect dans chaque mouvement." },
    { img: FotoCli2, name: "Échecs", slogan: "Développe ta stratégie, ta patience et ta pensée critique." },
    { img: FotoCli3, name: "Robotique", slogan: "Explore la technologie en créant et en innovant de tes propres mains." },
    { img: FotoCli4, name: "Musique", slogan: "Exprime ta créativité et tes émotions à travers l'art musical." },
    { img: FotoCli5, name: "Orchestre", slogan: "Vis l'expérience de faire de la musique en harmonie." },
    { img: FotoCli6, name: "Taekwondo", slogan: "Renforce ton corps et ton esprit avec discipline et persévérance." },
    { img: FotoCli7, name: "Danse Hawaian", slogan: "Mouvement, rythme et expression pour libérer ton énergie." }
  ]
};

const sectionTitles = {
  es: "Nuestros Talleres",
  en: "Our Workshops",
  fr: "Nos Ateliers"
};

const Clientes = () => {
  const { language } = useLanguage();
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  const clientes = clientesData[language] || clientesData["en"];
  const tituloSeccion = sectionTitles[language] || sectionTitles["en"];

  const handleScroll = (direction) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    const carousel = carouselRef.current;
    const scrollStep = 300;

    if (direction === "right") {
      if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const newScrollLeft = Math.min(carousel.scrollLeft + scrollStep, carousel.scrollWidth - carousel.offsetWidth);
        carousel.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    } else if (direction === "left") {
      if (carousel.scrollLeft === 0) {
        carousel.scrollTo({ left: carousel.scrollWidth - carousel.offsetWidth, behavior: "smooth" });
      } else {
        const newScrollLeft = Math.max(carousel.scrollLeft - scrollStep, 0);
        carousel.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 300);
  };

  return (
    <section id="clientes" className="clientes-section">
      <h2 className="clientes-title">{tituloSeccion}</h2>
      <div className="row">
        <div className="wrapper">
          <img src={atras_icon} alt="Atrás" className="arrow left" onClick={() => handleScroll("left")} />
          <ul className="carousel" ref={carouselRef}>
            {clientes.map((cliente, index) => (
              <li className="card" key={index}>
                <div className="img">
                  <img src={cliente.img} alt={cliente.name} draggable="false" />
                </div>
                <h2>{cliente.name}</h2>
                <span>{cliente.slogan}</span>
              </li>
            ))}
          </ul>
          <img src={siguiente_icon} alt="Siguiente" className="arrow right" onClick={() => handleScroll("right")} />
        </div>
      </div>
    </section>
  );
};

export default Clientes;
