import React from "react";
import './Banner.css';

const Banner = ({ texto, imagenFondo }) => {
    const estiloFondo = {
        backgroundImage: `url(${imagenFondo})`,
    };

    return (
        <div className="banner" style={estiloFondo}>
            <div className="banner-texto">
                <h2>{texto}</h2>
            </div>
        </div>
    );
};

export default Banner;
