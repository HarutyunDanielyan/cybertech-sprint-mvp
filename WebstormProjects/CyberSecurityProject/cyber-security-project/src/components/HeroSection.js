// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Анализ кибербезопасности вашего сайта в один клик</h1>
                <p>
                    Наша платформа поможет вам провести аудит безопасности по чек-листам и защитить ваш бизнес от угроз.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Пройти аудит</button>
                    <button className="btn-secondary">Как это работает?</button>
                </div>
            </div>
            <div className="hero-image">
                {/* Здесь можно разместить скриншот вашего продукта или иллюстрацию */}
                <img src="/path/to/your/dashboard-screenshot.png" alt="Dashboard Preview" />
            </div>
        </section>
    );
};

export default HeroSection;