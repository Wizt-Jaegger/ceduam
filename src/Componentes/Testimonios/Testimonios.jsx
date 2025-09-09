import React, { useRef } from "react";
import './Testimonios.css';
import siguiente_icon from '../../assets/next-icon.svg';
import atras_icon from '../../assets/back-icon.svg';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useLanguage } from "../../LanguageContext";

const testimonies = [
    {
        name: "Rosa Valverde",
        type: {
            es: "Madre de familia",
            en: "Parent",
            fr: "Parent"
        },
        text: {
            es: "El Centro Educativo Americano ha sido fundamental en el desarrollo académico y social de mi hija. El personal es afectivo, profesional y siempre atento a las necesidades de los niños.",
            en: "The Centro Educativo Americano has been essential in my daughter's academic and social development. The staff is caring, professional, and always attentive to the children's needs.",
            fr: "Le Centro Educativo Americano a été essentiel pour le développement académique et social de ma fille. Le personnel est attentionné, professionnel et toujours attentif aux besoins des enfants."
        },
        img: user_1
    },
    {
        name: "Luis Reyes",
        type: {
            es: "Exalumno",
            en: "Alumnus",
            fr: "Ancien élève"
        },
        text: {
            es: "Mi experiencia en el Centro Educativo Americano fue increíble. Aprendí mucho y los profesores siempre nos motivaron a explorar y desarrollar nuestras habilidades.",
            en: "My experience at the Centro Educativo Americano was amazing. I learned a lot, and the teachers always encouraged us to explore and develop our skills.",
            fr: "Mon expérience au Centro Educativo Americano a été incroyable. J'ai beaucoup appris et les enseignants nous ont toujours encouragés à explorer et développer nos compétences."
        },
        img: user_2
    },
    {
        name: "Monica Estrada",
        type: {
            es: "Madre de familia",
            en: "Parent",
            fr: "Parent"
        },
        text: {
            es: "Estoy muy agradecida con el Centro Educativo Americano por el apoyo constante y la atención personalizada que brindan. Mi hijo disfruta cada día en la escuela y ha crecido mucho en todos los sentidos.",
            en: "I am very grateful to the Centro Educativo Americano for the constant support and personalized attention they provide. My son enjoys every day at school and has grown so much in every way.",
            fr: "Je suis très reconnaissante au Centro Educativo Americano pour le soutien constant et l'attention personnalisée qu'ils offrent. Mon fils apprécie chaque jour à l'école et a beaucoup grandi dans tous les domaines."
        },
        img: user_3
    },
    {
        name: "Juan Quiroga",
        type: {
            es: "Exalumno",
            en: "Alumnus",
            fr: "Ancien élève"
        },
        text: {
            es: "El Centro Educativo Americano me preparó excelente para mis estudios superiores. Los valores, la educación y el acompañamiento que recibimos fueron excepcionales.",
            en: "The Centro Educativo Americano prepared me excellently for my higher education. The values, education, and support we received were exceptional.",
            fr: "Le Centro Educativo Americano m'a parfaitement préparé pour mes études supérieures. Les valeurs, l'éducation et le soutien que nous avons reçus étaient exceptionnels."
        },
        img: user_4
    }
];

const Testimonios = () => {
    const { language } = useLanguage();
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className="testimonios">
            <img src={siguiente_icon} alt="Siguiente" className="siguiente-btn" onClick={slideForward} />
            <img src={atras_icon} alt="Atrás" className="atras-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    {testimonies.map((t, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={t.img} alt={t.name} />
                                    <div>
                                        <h3>{t.name}</h3>
                                        <span>{t.type[language]}</span>
                                    </div>
                                </div>
                                <p>{t.text[language]}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Testimonios;
