import React, { useState } from "react";
import './Contacto.css';
import msg_icon from '../../assets/msg-icon.svg';
import mail_icon from '../../assets/mail-icon.svg';
import phone_icon from '../../assets/phone-icon.svg';
import location_icon from '../../assets/location-icon.svg';
import { useLanguage } from "../../LanguageContext";

const translations = {
    es: {
        title: "Envíanos un mensaje",
        description: "Tómate la libertad de contactarnos por medio de este formulario. Tu retroalimentación, preguntas y sugerencias son importantes para nosotros.",
        name: "Nombre:",
        namePlaceholder: "Ingresa tu nombre",
        email: "Correo electrónico:",
        emailPlaceholder: "Ingresa tu correo",
        subject: "Asunto:",
        subjectPlaceholder: "Ingresa el asunto",
        message: "Tu mensaje:",
        messagePlaceholder: "Ingresa tu mensaje aquí",
        send: "¡Enviar mensaje!",
        sending: "Enviando...",
        sent: "¡Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje",
        connectionError: "Error de conexión",
        location: "Carretera Federal México-Cuernavaca no. 16 y Laurel no. 102, Col. Buena Vista, Cuernavaca, Mor."
    },
    en: {
        title: "Send us a message",
        description: "Feel free to contact us through this form. Your feedback, questions, and suggestions are important to us.",
        name: "Name:",
        namePlaceholder: "Enter your name",
        email: "Email:",
        emailPlaceholder: "Enter your email",
        subject: "Subject:",
        subjectPlaceholder: "Enter the subject",
        message: "Your message:",
        messagePlaceholder: "Enter your message here",
        send: "Send Message!",
        sending: "Sending...",
        sent: "Message sent successfully!",
        error: "Error sending the message",
        connectionError: "Connection error",
        location: "Carretera Federal México-Cuernavaca no. 16 y Laurel no. 102, Col. Buena Vista, Cuernavaca, Mor."
    }
    // Puedes agregar más idiomas si quieres
};

const Contacto = () => {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(t.sending);

        const formData = new FormData(event.target);
        formData.append("access_key", "cd5a296f-47dd-4026-8472-7190b1a149f3");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult(t.sent);
                event.target.reset();
            } else {
                setResult(t.error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult(t.connectionError);
        }
    };

    return (
        <section id="contacto" className="contacto">
            <div className="contacto-col">
                <h3>{t.title} <img src={msg_icon} alt="msg icon" /></h3>
                <p>{t.description}</p>
                <ul>
                    <li><img src={mail_icon} alt="mail" />info@centroeducativoamericano.edu.mx</li>
                    <li><img src={phone_icon} alt="phone" />+52 777 3174407</li>
                    <li><img src={phone_icon} alt="phone" />+52 777 3131339</li>
                    <li><img src={location_icon} alt="location" />{t.location}</li>
                </ul>
            </div>

            <div className="contacto-col">
                <form onSubmit={onSubmit}>
                    <label>{t.name}</label>
                    <input type="text" name="nombre" placeholder={t.namePlaceholder} required />

                    <label>{t.email}</label>
                    <input type="email" name="email" placeholder={t.emailPlaceholder} required />

                    <label>{t.subject}</label>
                    <input type="text" name="asunto" placeholder={t.subjectPlaceholder} required />

                    <label>{t.message}</label>
                    <textarea name="mensaje" rows="6" placeholder={t.messagePlaceholder} required></textarea>

                    <button type="submit" className="btn">{t.send}</button>
                    <span>{result}</span>
                </form>
            </div>
        </section>
    );
};

export default Contacto;
