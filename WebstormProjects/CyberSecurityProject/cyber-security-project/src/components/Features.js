// src/components/Features.js
import React from 'react';
import './Features.css';

const featuresData = [
    {
        icon: '🔍', // Можно использовать иконки из библиотек типа react-icons
        title: 'Автоматический аудит',
        description: 'Система сама проверит ваш сайт по сотням параметров безопасности.'
    },
    {
        icon: '📋',
        title: 'Удобные чек-листы',
        description: 'Проверяйте безопасность вручную с помощью готовых и понятных чек-листов.'
    },
    {
        icon: '📊',
        title: 'Наглядные отчеты',
        description: 'Получайте детальные отчеты с рекомендациями по устранению уязвимостей.'
    }
];

const Features = () => {
    return (
        <section id="features" className="features">
            <h2>Все, что нужно для безопасности вашего сайта</h2>
            <div className="features-grid">
                {featuresData.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;