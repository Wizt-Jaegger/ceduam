import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import { useLanguage } from '../../LanguageContext';

const calculateAge = (date) => {
  const today = new Date();
  const d = new Date(date);
  let age = today.getFullYear() - d.getFullYear();
  const m = today.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < d.getDate())) age--;
  return age;
};

const translations = {
  en: {
    aboutMe: "About Us",
    introduction: "Welcome to CEDUAM® - Centro Educativo Americano.",
    description: "A high-quality educational institution committed to preparing students for the demands of daily life.",
    paragraph: "CEDUAM® was founded in 1993 by a group of education professionals committed to actively contributing to a better-prepared society. We emphasize academic excellence, personal development, and innovative teaching methods. Our experienced teachers and modern facilities ensure that each student reaches their full potential.",
    missionTitle: "Our Mission",
    missionDesc: "To provide high-quality education that fosters academic, social, and emotional development, preparing students for real-world challenges.",
    visionTitle: "Our Vision",
    visionDesc: "To be recognized as a leading educational institution in Mexico, known for excellence, innovation, and student success.",
    videoTitle: "Discover CEDUAM®",
    skillsTitle: "Core Strengths",
  },
  es: {
    aboutMe: "Acerca de Nosotros",
    introduction: "Bienvenidos a CEDUAM® - Centro Educativo Americano.",
    description: "Una institución educativa de alta calidad comprometida con preparar a los estudiantes para las exigencias de la vida diaria.",
    paragraph: "CEDUAM® fue fundada en 1993 por un grupo de profesionistas especializados en educación interesados en contribuir activamente a una sociedad mejor preparada. Enfocamos nuestra labor en la excelencia académica, desarrollo personal y métodos de enseñanza innovadores. Nuestros docentes experimentados y modernas instalaciones garantizan que cada estudiante alcance su máximo potencial.",
    missionTitle: "Nuestra Misión",
    missionDesc: "Brindar educación de alta calidad que fomente el desarrollo académico, social y emocional, preparando a los estudiantes para los retos de la vida real.",
    visionTitle: "Nuestra Visión",
    visionDesc: "Ser reconocidos como una institución educativa líder en México, destacada por la excelencia, innovación y éxito de los estudiantes.",
    videoTitle: "Conoce CEDUAM®",
    skillsTitle: "Fortalezas Clave",
  },
  fr: {
    aboutMe: "Accueil",
    introduction: "Bienvenue à CEDUAM® - Centro Educativo Americano.",
    description: "Une institution éducative de haute qualité engagée à préparer les étudiants aux exigences de la vie quotidienne.",
    paragraph: "CEDUAM® a été fondée en 1993 par un groupe de professionnels de l'éducation déterminés à contribuer activement à une société mieux préparée. Nous mettons l'accent sur l'excellence académique, le développement personnel et les méthodes d'enseignement innovantes. Nos enseignants expérimentés et nos installations modernes garantissent que chaque étudiant atteint son plein potentiel.",
    missionTitle: "Notre Mission",
    missionDesc: "Fournir une éducation de haute qualité qui favorise le développement académique, social et émotionnel, préparant les étudiants aux défis du monde réel.",
    visionTitle: "Notre Vision",
    visionDesc: "Être reconnu comme une institution éducative de premier plan au Mexique, connue pour son excellence, son innovation et la réussite de ses étudiants.",
    videoTitle: "Découvrez CEDUAM®",
    skillsTitle: "Forces Clés",
  }
};

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language.toLowerCase()] || translations['es']; // <-- Normaliza idioma
  const foundingDate = '1993-08-18';
  const years = calculateAge(foundingDate);

  const [skillsLoaded, setSkillsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setSkillsLoaded(true), 500);
  }, []);

  const skills = [
    { name: 'Academic Excellence', percent: 95 },
    { name: 'STEM & Robotics', percent: 80 },
    { name: 'Arts & Creativity', percent: 85 },
    { name: 'Language Programs', percent: 90 },
  ];

  return (
    <section className="about sectionAbout" id="about">
      <div className="containerAbout">

        {/* Título */}
        <div className="rowAbout">
          <div className="sectionAbout-title AboutPadd-15">
            <h2>{t.aboutMe}</h2>
          </div>
        </div>

        {/* Introducción */}
        <div className="rowAbout">
          <div className="about-text AboutPadd-15">
            <h3>{t.introduction} <span>{t.description}</span></h3>
            <p>{t.paragraph}</p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="rowAbout mission-vision">
          <div className="mission AboutPadd-15">
            <h4>{t.missionTitle}</h4>
            <p>{t.missionDesc}</p>
          </div>
          <div className="vision AboutPadd-15">
            <h4>{t.visionTitle}</h4>
            <p>{t.visionDesc}</p>
          </div>
        </div>

        {/* Video */}
        <div className="rowAbout video-section AboutPadd-15">
          <h4>{t.videoTitle}</h4>
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/vs2hnlYYgC4"
              title="CEDUAM® Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Habilidades */}
        <div className="rowAbout skills AboutPadd-15">
          <h4>{t.skillsTitle}</h4>
          {skills.map((skill, i) => (
            <div className="skill-item AboutPadd-15" key={i}>
              <h5>{skill.name}</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: skillsLoaded ? `${skill.percent}%` : '0%' }}></div>
                <div className="skill-percent">{skill.percent}%</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
