import React from 'react';
import { useLanguage } from "../../LanguageContext";
import styled from 'styled-components';

const translations = {
    es: {
        title: "TÉRMINOS Y CONDICIONES DE USO",
        section1: "INFORMACIÓN RELEVANTE",
        content1: "Es requisito necesario para adquirir los productos o servicios que ofrezco en este sitio, que leas y aceptes los siguientes Términos y Condiciones. El uso de este sitio implica que has leído y aceptado los términos aquí descritos. Algunos productos pueden ser gestionados a través de plataformas de terceros, en cuyo caso aplican también sus propios términos.",
        section2: "LICENCIA",
        content2: "Luis Emiliano Reyes Gutiérrez concede una licencia para que utilices los productos ofrecidos en este sitio de acuerdo a los Términos y Condiciones descritos aquí.",
        section3: "USO NO AUTORIZADO",
        content3: "No puedes colocar ninguno de mis productos, modificados o no, en un CD, sitio web u otro medio para su redistribución o reventa sin mi autorización expresa.",
        section4: "PROPIEDAD",
        content4: "No puedes declarar propiedad intelectual o exclusiva sobre ninguno de mis productos, ya sean modificados o no. Todos los productos son de mi autoría, salvo que se indique lo contrario. Los productos se ofrecen sin garantía expresa o implícita, a menos que se especifique.",
        section5: "POLÍTICA DE REEMBOLSO Y GARANTÍA",
        content5: "En el caso de productos digitales no tangibles, no realizo reembolsos una vez enviado el producto. Te corresponde comprender esto antes de adquirirlo. Se pueden hacer excepciones cuando el producto no coincida con la descripción. Algunos productos pueden incluir garantía o posibilidad de reembolso, lo cual será aclarado previamente.",
        section6: "COMPROBACIÓN ANTIFRAUDE",
        content6: "La compra puede ser aplazada para verificación antifraude. También puede ser retenida por más tiempo si se requiere una investigación más exhaustiva para prevenir transacciones fraudulentas.",
        section7: "PRIVACIDAD",
        content7: "Luis Emiliano Reyes Gutiérrez garantiza que la información personal que proporciones será tratada con la seguridad necesaria. Tus datos no serán compartidos con terceros, salvo en caso de requerimientos legales.",
        content8: "La suscripción a boletines informativos por correo electrónico es voluntaria y podrás seleccionarla al crear tu cuenta o contactarme.",
        content9: "Me reservo el derecho de modificar estos términos en cualquier momento sin previo aviso."
    },
    en: {
        title: "TERMS AND CONDITIONS",
        section1: "RELEVANT INFORMATION",
        content1: "It is necessary to read and accept the following Terms and Conditions to acquire the products or services I offer on this site. By using this site, you acknowledge that you have read and accepted the terms outlined here. Some products may be managed through third-party platforms, which would be subject to their own terms as well.",
        section2: "LICENSE",
        content2: "Luis Emiliano Reyes Gutiérrez grants a license for you to use the products offered on this site in accordance with the Terms and Conditions described here.",
        section3: "UNAUTHORIZED USE",
        content3: "You may not place any of my products, modified or unmodified, on a CD, website, or any other medium for redistribution or resale without my express permission.",
        section4: "PROPERTY",
        content4: "You may not claim intellectual or exclusive ownership of any of my products, whether modified or not. All products are created by me unless otherwise stated. Products are provided without express or implied warranty unless specified.",
        section5: "REFUND AND WARRANTY POLICY",
        content5: "For intangible digital products, I do not issue refunds once the product has been sent. It is your responsibility to understand this before purchasing. Exceptions may apply when the product does not match the description. Some products may include a warranty or refund possibility, which will be clarified beforehand.",
        section6: "ANTI-FRAUD CHECK",
        content6: "The purchase may be delayed for anti-fraud verification. It may also be held longer if a more thorough investigation is required to prevent fraudulent transactions.",
        section7: "PRIVACY",
        content7: "Luis Emiliano Reyes Gutiérrez guarantees that your personal information will be handled securely. Your data will not be shared with third parties, except in compliance with legal requirements.",
        content8: "Subscription to email newsletters is voluntary and can be selected when creating your account or contacting me.",
        content9: "I reserve the right to change these terms at any time without prior notice."
    },
    fr: {
        title: "CONDITIONS D'UTILISATION",
        section1: "INFORMATIONS PERTINENTES",
        content1: "Il est nécessaire de lire et d'accepter les présentes Conditions Générales pour acquérir les produits ou services que je propose sur ce site. En utilisant ce site, vous reconnaissez avoir lu et accepté les conditions décrites ici. Certains produits peuvent être gérés via des plateformes tierces, auquel cas leurs propres conditions s'appliquent également.",
        section2: "LICENCE",
        content2: "Luis Emiliano Reyes Gutiérrez vous accorde une licence pour utiliser les produits offerts sur ce site conformément aux conditions décrites ici.",
        section3: "UTILISATION NON AUTORISÉE",
        content3: "Vous ne pouvez pas placer mes produits, modifiés ou non, sur un CD, un site Web ou tout autre support pour leur redistribution ou revente sans mon autorisation expresse.",
        section4: "PROPRIÉTÉ",
        content4: "Vous ne pouvez pas revendiquer la propriété intellectuelle ou exclusive de mes produits, qu'ils soient modifiés ou non. Tous les produits sont créés par mes soins, sauf indication contraire. Les produits sont fournis sans garantie expresse ou implicite, sauf mention contraire.",
        section5: "POLITIQUE DE REMBOURSEMENT ET DE GARANTIE",
        content5: "Pour les produits numériques intangibles, je n'émettrai pas de remboursement une fois le produit envoyé. Il est de votre responsabilité de comprendre cela avant d'effectuer un achat. Des exceptions peuvent s'appliquer lorsque le produit ne correspond pas à la description. Certains produits peuvent inclure une garantie ou une possibilité de remboursement, ce qui sera précisé au préalable.",
        section6: "VÉRIFICATION ANTI-FRAUDE",
        content6: "L'achat peut être retardé pour une vérification antifraude. Il peut également être retenu plus longtemps si une enquête plus approfondie est nécessaire pour prévenir les transactions frauduleuses.",
        section7: "CONFIDENTIALITÉ",
        content7: "Luis Emiliano Reyes Gutiérrez garantit que vos informations personnelles seront traitées en toute sécurité. Vos données ne seront pas partagées avec des tiers, sauf en cas d'obligation légale.",
        content8: "L'abonnement aux newsletters par e-mail est facultatif et peut être sélectionné lors de la création de votre compte ou lorsque vous me contactez.",
        content9: "Je me réserve le droit de modifier ces conditions à tout moment sans préavis."
    },
    de: {
        title: "NUTZUNGSBEDINGUNGEN",
        section1: "WICHTIGE INFORMATIONEN",
        content1: "Es ist erforderlich, die folgenden Allgemeinen Geschäftsbedingungen zu lesen und zu akzeptieren, um die Produkte oder Dienstleistungen zu erwerben, die ich auf dieser Website anbiete. Durch die Nutzung dieser Website bestätigen Sie, dass Sie die hier beschriebenen Bedingungen gelesen und akzeptiert haben. Einige Produkte können über Drittanbieter-Plattformen verwaltet werden, in diesem Fall gelten auch deren eigene Bedingungen.",
        section2: "LIZENZ",
        content2: "Luis Emiliano Reyes Gutiérrez gewährt Ihnen eine Lizenz zur Nutzung der auf dieser Website angebotenen Produkte gemäß den hier beschriebenen Bedingungen.",
        section3: "UNAUTORISIERTE NUTZUNG",
        content3: "Sie dürfen keine meiner Produkte, ob modifiziert oder nicht, auf einer CD, einer Website oder einem anderen Medium zur Weiterverbreitung oder zum Wiederverkauf ohne meine ausdrückliche Genehmigung platzieren.",
        section4: "EIGENTUM",
        content4: "Sie dürfen kein geistiges oder exklusives Eigentum an meinen Produkten beanspruchen, ob modifiziert oder nicht. Alle Produkte wurden von mir erstellt, es sei denn, es wird etwas anderes angegeben. Die Produkte werden ohne ausdrückliche oder stillschweigende Garantie angeboten, es sei denn, es wird etwas anderes angegeben.",
        section5: "RÜCKGABE- UND GARANTIEBEDINGUNGEN",
        content5: "Für immaterielle digitale Produkte gewähre ich keine Rückerstattungen, nachdem das Produkt gesendet wurde. Es liegt in Ihrer Verantwortung, dies vor dem Kauf zu verstehen. Ausnahmen können gelten, wenn das Produkt nicht der Beschreibung entspricht. Einige Produkte können eine Garantie oder Rückerstattungsmöglichkeit beinhalten, die vorher klargestellt wird.",
        section6: "ANTI-BETRUGSKONTROLLE",
        content6: "Der Kauf kann für eine Anti-Betrugsüberprüfung verzögert werden. Er kann auch länger zurückgehalten werden, wenn eine gründlichere Untersuchung erforderlich ist, um betrügerische Transaktionen zu verhindern.",
        section7: "DATENSCHUTZ",
        content7: "Luis Emiliano Reyes Gutiérrez garantiert, dass Ihre persönlichen Daten sicher behandelt werden. Ihre Daten werden nicht an Dritte weitergegeben, außer wenn dies gesetzlich erforderlich ist.",
        content8: "Die Anmeldung für E-Mail-Newsletter ist freiwillig und kann bei der Erstellung Ihres Kontos oder bei der Kontaktaufnahme mit mir ausgewählt werden.",
        content9: "Ich behalte mir das Recht vor, diese Bedingungen jederzeit ohne vorherige Ankündigung zu ändern."
    }
};

const TermsConditions = () => {
    const { language } = useLanguage();

    return (
        <TermsContainer>
            <h1>{translations[language].title}</h1>
            <h2>{translations[language].section1}</h2>
            <p>{translations[language].content1}</p>
            <h2>{translations[language].section2}</h2>
            <p>{translations[language].content2}</p>
            <h2>{translations[language].section3}</h2>
            <p>{translations[language].content3}</p>
            <h2>{translations[language].section4}</h2>
            <p>{translations[language].content4}</p>
            <h2>{translations[language].section5}</h2>
            <p>{translations[language].content5}</p>
            <h2>{translations[language].section6}</h2>
            <p>{translations[language].content6}</p>
            <h2>{translations[language].section7}</h2>
            <p>{translations[language].content7}</p>
            <p>{translations[language].content8}</p>
            <p>{translations[language].content9}</p>
        </TermsContainer>
    );
};

const TermsContainer = styled.div`
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
`;

export default TermsConditions;