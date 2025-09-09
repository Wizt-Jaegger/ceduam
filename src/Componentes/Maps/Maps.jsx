import React from 'react';
import './Maps.css';
import { useLanguage } from '../../LanguageContext';

const Maps = () => {
  const { language } = useLanguage();

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1527357300874!2d-99.25087492594551!3d18.96886088221385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cde09086895001%3A0x9f7007fe66d6d3ea!2sAmerican%20Educational%20Center!5e0!3m2!1en!2smx!4v1757372537780!5m2!1en!2smx`;

  const descriptions = {
    en: "Find us at American Educational Center, Cuernavaca, Morelos.",
    es: "Encuéntranos en el Centro Educativo Americano, Cuernavaca, Morelos.",
    fr: "Trouvez-nous au Centre Éducatif Américain, Cuernavaca, Morelos.",
  };

  return (
    <div className="map-container">
      <iframe
        src={mapUrl}
        className="minimal-map"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      />
      <p className="map-description">{descriptions[language]}</p>
    </div>
  );
};

export default Maps;
