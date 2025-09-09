import React, { useState } from 'react';
import './Planes.css';
import plan_1 from '../../assets/program-1.png';
import plan_2 from '../../assets/program-2.png';
import plan_3 from '../../assets/program-3.png';
import plan_icon_1 from '../../assets/program-icon-1.svg';
import plan_icon_2 from '../../assets/program-icon-2.svg';
import plan_icon_3 from '../../assets/program-icon-3.svg';
import { useLanguage } from "../../LanguageContext";

const Planes = () => {
    const { language } = useLanguage();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            img: plan_1,
            icon: plan_icon_1,
            es: "¡Hola!",
            en: "¡Hola!",
            fr: "¡Hola!",
            info: {
                es: "El español es clave para la comunicación en muchos países y para comprender su cultura.",
                en: "Spanish is key for communication in many countries and understanding its culture.",
                fr: "L'espagnol est essentiel pour communiquer dans de nombreux pays et comprendre leur culture."
            }
        },
        {
            img: plan_2,
            icon: plan_icon_2,
            es: "Hello!",
            en: "Hello!",
            fr: "Hello!",
            info: {
                es: "El inglés es un idioma internacional fundamental para la educación y los negocios.",
                en: "English is an international language essential for education and business.",
                fr: "L'anglais est une langue internationale essentielle pour l'éducation et les affaires."
            }
        },
        {
            img: plan_3,
            icon: plan_icon_3,
            es: "Bonjour!",
            en: "Bonjour!",
            fr: "Bonjour!",
            info: {
                es: "El francés abre puertas a la cultura europea y al comercio internacional.",
                en: "French opens doors to European culture and international trade.",
                fr: "Le français ouvre des portes à la culture européenne et au commerce international."
            }
        }
    ];

    return (
        <div className='planes'>
            {plans.map((plan, index) => (
                <div className="plan" key={index} onClick={() => setSelectedPlan(plan)}>
                    <img src={plan.img} alt='' />
                    <div className='subtitulo'>
                        <img src={plan.icon} alt='' />
                        <p>{plan[language]}</p>
                    </div>
                </div>
            ))}

            {selectedPlan && (
                <div className="modal" onClick={() => setSelectedPlan(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedPlan[language]}</h2>
                        <p>{selectedPlan.info[language]}</p>
                        <button onClick={() => setSelectedPlan(null)} className='btn'>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Planes;
