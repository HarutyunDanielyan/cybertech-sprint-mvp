// src/components/SocialProof.js
import React from 'react';
import './SocialProof.css';

const logos = [
    // Пути к логотипам ваших клиентов или партнеров
    '/logos/company1.svg',
    '/logos/company2.svg',
    '/logos/company3.svg',
    '/logos/company4.svg',
];

const SocialProof = () => {
    return (
        <section className="social-proof">
            <p>Нам доверяют ведущие компании</p>
            <div className="logos-container">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Company ${index + 1}`} />
                ))}
            </div>
        </section>
    );
};

export default SocialProof;