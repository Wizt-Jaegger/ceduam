import { useRef } from "react";
import "./Portafolio.css";
import portfolio1 from "../../assets/portfolio-1.jpg";
import portfolio2 from "../../assets/portfolio-2.jpg";
import portfolio3 from "../../assets/portfolio-3.jpg";
import portfolio4 from "../../assets/portfolio-4.jpg";
import portfolio5 from "../../assets/portfolio-5.jpg";
import portfolio6 from "../../assets/portfolio-6.jpg";
import portfolio7 from "../../assets/portfolio-7.jpg";
import portfolio8 from "../../assets/portfolio-8.jpg";

const Portafolio = () => {
  

  const portfolioItems = [
    { href: "https://www.un.org/es/mun", src: portfolio1 },
    { href: "https://spellingbee.com", src: portfolio2 },
    { href: "https://www.facebook.com/IguazuMorelos", src: portfolio3 },
    { href: "https://www.facebook.com/IztapasauriaAlcIztapalapa", src: portfolio4 },
    { href: "https://innovaschools.edu.mx/blog/importancia-eventos-escolares-escuela-primaria/", src: portfolio5 },
    { href: "https://identidadydesarrollo.com/importancia-de-la-diversidad-cultural", src: portfolio6 },
    { href: "https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S2665-01692024000200327", src: portfolio8 },
    { href: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjugcLWw8uPAxUlPkQIHTbnMFkQFnoECBoQAQ&url=https%3A%2F%2Frevistasdigitales.uniboyaca.edu.co%2Findex.php%2FEFQ%2Farticle%2Fdownload%2F1207%2F865%2F9389&usg=AOvVaw179OP1rpBJ3uy6iPeoU9Y1&opi=89978449", src: portfolio7 },
  ];

  return (
    <section className="portfolio section" id="portfolio" style={{ paddingTop: "120px", marginTop: "-120px" }}>
      <div className="container">
        
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item padd-15" key={index}>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src={item.src} alt="portfolio" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="portfolio-item-inner shadow-dark" onClick={item.onClick}>
                  <div className="portfolio-img">
                    <img src={item.src} alt="portfolio" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Portafolio;
