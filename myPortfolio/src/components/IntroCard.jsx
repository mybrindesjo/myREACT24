import React from 'react';

function IntroCard({ imgSrc, imgAlt, title, subtitle, description }) {
    return (
        <div className="intro-card">
{/*             <img className="me-picture" src={imgSrc} alt={imgAlt} width="600" height="400" />   */}            <div className="media-column">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>       
                <p>{description}</p>
            </div>
        </div>
    );
}

export default IntroCard;
