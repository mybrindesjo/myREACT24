import React from 'react';

function InfoCard({ imgSrc, imgAlt, title, subtitle, date, extraContent }) {
    return (
        <article className="info-card">
            <img src={imgSrc} alt={imgAlt} width="100" height="100" />
            <div className="info-text">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <p>{date}</p>
                {extraContent}
            </div>
        </article>

    );
}

export default InfoCard;
