import React from 'react';
import { useLanguage } from "../../LanguageContext";
import styled from 'styled-components';

const translations = {
    es: {
        title: "POLÍTICA DE PRIVACIDAD",
        intro: "Este sitio personal, propiedad de Luis Emiliano Reyes Gutiérrez, funciona como un portafolio y currículum en línea. No pertenece a ninguna empresa ni recopila información con fines comerciales. Al utilizar el sitio, aceptas que los mensajes enviados mediante el formulario de contacto pueden mostrarse públicamente en la sección de 'Últimos Mensajes' como comentarios visibles.",
        disclaimer: "Este sitio tiene fines demostrativos como portafolio personal. Las imágenes utilizadas pertenecen a sus respectivos autores. No se reclama propiedad sobre ellas.",
        publicMessages: "Mensajes públicos",
        publicMessagesText: "Los mensajes enviados por medio del formulario pueden mostrarse como comentarios públicos en el sitio. Esta sección sólo muestra los últimos 5 comentarios, por lo que no serán visibles de forma permanente. Si deseas comunicarte de forma privada, contáctame por WhatsApp o por llamada telefónica.",
        cookies: "Cookies",
        cookiesText: "Este sitio puede utilizar cookies para mejorar la experiencia del usuario, pero no almacena información personal sensible.",
        thirdParty: "Enlaces a Terceros",
        thirdPartyText: "Este sitio puede contener enlaces a sitios externos. No me hago responsable del contenido ni de las políticas de privacidad de dichos sitios.",
        control: "Control de tu información",
        controlText: "No se recopila ni almacena información personal con fines comerciales. Si tienes alguna inquietud sobre la publicación de tu mensaje, puedes solicitar su eliminación contactándome directamente.",
        update: "Esta política puede actualizarse ocasionalmente. Te recomiendo revisarla cada cierto tiempo para estar al tanto de cualquier cambio."
    },
    en: {
        title: "PRIVACY POLICY",
        intro: "This personal site, owned by Luis Emiliano Reyes Gutiérrez, functions as an online portfolio and resume. It is not affiliated with any company and does not collect information for commercial purposes. By using this site, you accept that messages sent through the contact form may be publicly displayed in the 'Latest Messages' section as visible comments.",
        disclaimer: "This site is for demonstrative purposes as a personal portfolio. The images used belong to their respective authors. No ownership is claimed over them.",
        publicMessages: "Public Messages",
        publicMessagesText: "Messages sent through the contact form may appear as public comments on the site. This section only shows the last 5 messages, so your message will not remain permanently visible. If you wish to contact me privately, please use WhatsApp or call me directly.",
        cookies: "Cookies",
        cookiesText: "This site may use cookies to enhance user experience, but it does not store sensitive personal information.",
        thirdParty: "Third-Party Links",
        thirdPartyText: "This site may contain links to external websites. I am not responsible for the content or privacy policies of those websites.",
        control: "Control of Your Information",
        controlText: "No personal information is collected or stored for commercial use. If you have any concerns about the publication of your message, you can request its removal by contacting me directly.",
        update: "This policy may be updated occasionally. I recommend reviewing it from time to time to stay informed of any changes."
    },
    de: {
        title: "DATENSCHUTZRICHTLINIE",
        intro: "Diese persönliche Website, im Besitz von Luis Emiliano Reyes Gutiérrez, dient als Online-Portfolio und Lebenslauf. Sie ist mit keinem Unternehmen verbunden und sammelt keine Informationen zu kommerziellen Zwecken. Durch die Nutzung der Website akzeptierst du, dass über das Kontaktformular gesendete Nachrichten öffentlich im Abschnitt 'Neueste Nachrichten' angezeigt werden können.",
        disclaimer: "Diese Website dient Demonstrationszwecken als persönliches Portfolio. Die verwendeten Bilder gehören ihren jeweiligen Autoren. Es wird kein Eigentum an ihnen beansprucht.",
        publicMessages: "Öffentliche Nachrichten",
        publicMessagesText: "Nachrichten, die über das Kontaktformular gesendet werden, können als öffentliche Kommentare auf der Website erscheinen. Dieser Abschnitt zeigt nur die letzten 5 Nachrichten an, sodass deine Nachricht nicht dauerhaft sichtbar bleibt. Wenn du mich privat kontaktieren möchtest, verwende bitte WhatsApp oder rufe mich direkt an.",
        cookies: "Cookies",
        cookiesText: "Diese Website kann Cookies verwenden, um die Benutzererfahrung zu verbessern, speichert jedoch keine sensiblen persönlichen Informationen.",
        thirdParty: "Links zu Dritten",
        thirdPartyText: "Diese Website kann Links zu externen Websites enthalten. Ich bin nicht verantwortlich für den Inhalt oder die Datenschutzrichtlinien dieser Websites.",
        control: "Kontrolle deiner Informationen",
        controlText: "Es werden keine persönlichen Informationen zu kommerziellen Zwecken gesammelt oder gespeichert. Wenn du Bedenken bezüglich der Veröffentlichung deiner Nachricht hast, kannst du deren Entfernung direkt bei mir anfordern.",
        update: "Diese Richtlinie kann gelegentlich aktualisiert werden. Ich empfehle dir, sie regelmäßig zu überprüfen, um über Änderungen informiert zu bleiben."
    },
    fr: {
        title: "POLITIQUE DE CONFIDENTIALITÉ",
        intro: "Ce site personnel, propriété de Luis Emiliano Reyes Gutiérrez, fonctionne comme un portfolio et un CV en ligne. Il n'est affilié à aucune entreprise et ne collecte pas d'informations à des fins commerciales. En utilisant ce site, vous acceptez que les messages envoyés via le formulaire de contact puissent être affichés publiquement dans la section 'Derniers messages' en tant que commentaires visibles.",
        disclaimer: "Ce site est destiné à des fins de démonstration en tant que portfolio personnel. Les images utilisées appartiennent à leurs auteurs respectifs. Aucune propriété n'est revendiquée.",
        publicMessages: "Messages publics",
        publicMessagesText: "Les messages envoyés via le formulaire de contact peuvent apparaître comme commentaires publics sur le site. Cette section ne montre que les 5 derniers messages, donc votre message ne sera pas visible de manière permanente. Si vous souhaitez me contacter en privé, utilisez WhatsApp ou appelez-moi directement.",
        cookies: "Cookies",
        cookiesText: "Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur, mais ne stocke aucune information personnelle sensible.",
        thirdParty: "Liens vers des tiers",
        thirdPartyText: "Ce site peut contenir des liens vers des sites externes. Je ne suis pas responsable du contenu ou des politiques de confidentialité de ces sites.",
        control: "Contrôle de vos informations",
        controlText: "Aucune information personnelle n'est collectée ou stockée à des fins commerciales. Si vous avez des préoccupations concernant la publication de votre message, vous pouvez demander sa suppression en me contactant directement.",
        update: "Cette politique peut être mise à jour occasionnellement. Je vous recommande de la consulter de temps en temps pour rester informé de tout changement."
    }
};

const PrivacyPolicy = () => {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;

    return (
        <PrivacyContainer>
            <h1>{t.title}</h1>
            <p>{t.intro}</p>
            <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#555" }}>{t.disclaimer}</p>

            <h2>{t.publicMessages}</h2>
            <p>{t.publicMessagesText}</p>

            <h2>{t.cookies}</h2>
            <p>{t.cookiesText}</p>

            <h2>{t.thirdParty}</h2>
            <p>{t.thirdPartyText}</p>

            <h2>{t.control}</h2>
            <p>{t.controlText}</p>

            <p>{t.update}</p>
        </PrivacyContainer>
    );
};

const PrivacyContainer = styled.div`
    margin: 20px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    font-size: 1.2rem;
    line-height: 1.7;
    color: #333;

    h1 {
        text-align: center;
        color: #132d46;
        margin-bottom: 20px;
        font-size: 2.5rem;
    }

    h2 {
        color: #00c9c3;
        margin-bottom: 15px;
        font-size: 1.8rem;
    }

    p {
        color: #666;
        margin-bottom: 20px;
        font-size: 1.1rem;
    }

    a {
        color: #00c9c3;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default PrivacyPolicy;
