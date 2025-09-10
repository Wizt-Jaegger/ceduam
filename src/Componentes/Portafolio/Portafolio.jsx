// src/Componentes/Portafolio/Portafolio.jsx
import "./Portafolio.css";
import portfolio1 from "../../assets/portfolio-1.jpg";
import portfolio2 from "../../assets/portfolio-2.jpg";
import portfolio3 from "../../assets/portfolio-3.jpg";
import portfolio4 from "../../assets/portfolio-4.jpg";
import portfolio5 from "../../assets/portfolio-5.jpg";
import portfolio6 from "../../assets/portfolio-6.jpg";
import portfolio7 from "../../assets/portfolio-7.jpg";
import portfolio8 from "../../assets/portfolio-8.jpg";

// placeholders para nuevas imágenes (puedes reemplazar)
import portfolio9 from "../../assets/portfolio-9.jpg";
import portfolio10 from "../../assets/portfolio-10.jpg";
import portfolio11 from "../../assets/portfolio-11.jpg";
import portfolio12 from "../../assets/portfolio-12.jpg";
import portfolio13 from "../../assets/portfolio-13.jpg";
import portfolio14 from "../../assets/portfolio-8.jpg";
import portfolio15 from "../../assets/portfolio-8.jpg";
import portfolio16 from "../../assets/portfolio-16.jpg";
import portfolio17 from "../../assets/portfolio-8.jpg";
import portfolio18 from "../../assets/portfolio-8.jpg";
import portfolio19 from "../../assets/portfolio-8.jpg";
import portfolio20 from "../../assets/portfolio-8.jpg";

import { useLanguage } from "../../LanguageContext";

const Portafolio = ({ tag }) => {
  const { language } = useLanguage();
  const lang = language || "es";

  const translations = {
    mun: {
      es: "Modelos de Naciones Unidas",
      en: "Model United Nations",
      fr: "Modèles des Nations Unies",
    },
    spelling: {
      es: "Concurso Spelling Bee",
      en: "Spelling Bee Contest",
      fr: "Concours d’orthographe",
    },
    camp: {
      es: "Campamentos de verano",
      en: "Summer Camps",
      fr: "Camps d'été",
    },
    excursiones: {
      es: "Excursiones",
      en: "Excursions",
      fr: "Excursions",
    },
    eventos: {
      es: "Eventos escolares",
      en: "School events",
      fr: "Événements scolaires",
    },
    diversidad: {
      es: "Diversidad cultural",
      en: "Cultural diversity",
      fr: "Diversité culturelle",
    },
    juegos: {
      es: "Juegos infantiles",
      en: "Children's games",
      fr: "Jeux pour enfants",
    },
    tics: {
      es: "TICs para desarrollo cognitivo",
      en: "ICT for cognitive development",
      fr: "TIC pour le développement cognitif",
    },
    montessori: {
      es: "Montessori sensorial",
      en: "Montessori sensorial",
      fr: "Montessori sensoriel",
    },
    roles: {
      es: "Juego de roles",
      en: "Role play",
      fr: "Jeu de rôles",
    },
    psicomotricidad: {
      es: "Psicomotricidad fina",
      en: "Fine motor skills",
      fr: "Psychomotricité fine",
    },
    musica: {
      es: "Música y ritmo",
      en: "Music & rhythm",
      fr: "Musique & rythme",
    },
    cooperativo: {
      es: "Aprendizaje cooperativo",
      en: "Cooperative learning",
      fr: "Apprentissage coopératif",
    },
    laboratorio: {
      es: "Laboratorio de ciencias",
      en: "Science lab",
      fr: "Laboratoire de sciences",
    },
    matematicas: {
      es: "Matemáticas manipulativas",
      en: "Manipulative math",
      fr: "Mathématiques manipulatives",
    },
    arte: {
      es: "Arte creativo",
      en: "Creative art",
      fr: "Art créatif",
    },
    stem: {
      es: "Proyectos STEM",
      en: "STEM projects",
      fr: "Projets STEM",
    },
    debates: {
      es: "Debates académicos",
      en: "Academic debates",
      fr: "Débats académiques",
    },
    educfisica: {
      es: "Educación física avanzada",
      en: "Advanced PE",
      fr: "Éducation physique avancée",
    },
    proyectosociales: {
      es: "Proyectos sociales",
      en: "Social projects",
      fr: "Projets sociaux",
    },
  };

  const tr = (key) => translations[key]?.[lang] || translations[key]?.es || "";

  // 20 actividades balanceadas con links reales o funcionales
  const portfolioItems = [
    // Cendi (5)
    { href: "https://revistasdigitales.uniboyaca.edu.co/index.php/EFQ/article/download/1207/865/9389", src: portfolio7, tag: "cendi", key: "juegos" },
    { href: "https://fontenebroschool.com/la-importancia-de-trabajar-la-motricidad-fina-en-edades-tempranas", src: portfolio11, tag: "cendi", key: "psicomotricidad" },
    { href: "https://www.classicsforkids.com/music/", src: portfolio12, tag: "cendi", key: "musica" },
    { href: "https://montessori-market.com/sensorial", src: portfolio9, tag: "cendi", key: "montessori" },
    { href: "https://uees.edu.ec/la-importancia-del-juego-para-mejorar-el-desarrollo-de-nuestros-ninos", src: portfolio10, tag: "cendi", key: "roles" },

    // Preescolar (5)
    { href: "https://revistasdigitales.uniboyaca.edu.co/index.php/EFQ/article/download/1207/865/9389", src: portfolio7, tag: "preescolar", key: "juegos" },
    { href: "https://montessori-market.com/sensorial", src: portfolio9, tag: "preescolar", key: "montessori" },
    { href: "https://uees.edu.ec/la-importancia-del-juego-para-mejorar-el-desarrollo-de-nuestros-ninos", src: portfolio10, tag: "preescolar", key: "roles" },
    { href: "https://www.colegioceumurcia.es/blog/los-beneficios-de-la-musica-en-el-desarrollo-cognitivo-creativo-intelectual-y-psicologico-del-alumnado", src: portfolio12, tag: "preescolar", key: "musica" },
    { href: "https://www.gob.mx/sipinna/articulos/el-arte-es-un-recurso-esencial-para-el-desarrollo-de-ninas-ninos-y-adolescentes", src: portfolio16, tag: "preescolar", key: "arte" },

    // Primaria (5)
    { href: "https://www.un.org/es/mun", src: portfolio1, tag: "primaria", key: "mun" },
    { href: "https://spellingbee.com", src: portfolio2, tag: "primaria", key: "spelling" },
    { href: "https://www.colegiosanjorge.es/beneficios-aprendizaje-excursiones-escolares", src: portfolio4, tag: "primaria", key: "excursiones" },
    { href: "https://innovaschools.edu.mx/blog/importancia-eventos-escolares-escuela-primaria/", src: portfolio5, tag: "primaria", key: "eventos" },
    { href: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/pedagotic/aprendizaje-cooperativo", src: portfolio13, tag: "primaria", key: "cooperativo" },

    // Secundaria (5)
    { href: "https://www.un.org/es/mun", src: portfolio1, tag: "secundaria", key: "mun" },
    { href: "https://spellingbee.com", src: portfolio2, tag: "secundaria", key: "spelling" },
    { href: "https://www.facebook.com/IguazuMorelos", src: portfolio3, tag: "secundaria", key: "camp" },
    { href: "https://identidadydesarrollo.com/importancia-de-la-diversidad-cultural", src: portfolio6, tag: "secundaria", key: "diversidad" },
    { href: "https://www.stem.org.uk/resources", src: portfolio17, tag: "secundaria", key: "stem" },
  ];

  const filteredItems = tag ? portfolioItems.filter((i) => i.tag === tag) : portfolioItems;

  return (
    <section className="portfolio section" id="portfolio" style={{ paddingTop: "120px", marginTop: "-120px" }}>
      <div className="container">
        <div className="row">
          {filteredItems.map((item, index) => (
            <div className="portfolio-item padd-15" key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={item.src} alt={tr(item.key)} />
                    <div className="portfolio-hover">{tr(item.key)}</div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
