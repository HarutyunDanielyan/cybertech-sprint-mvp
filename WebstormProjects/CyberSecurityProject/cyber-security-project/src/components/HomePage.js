import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import { motion } from 'framer-motion'; // Импортируем motion для анимации
import './HomePage.css';

// SVG иконка для логотипа в hero section
const LogoIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A2BE2" />
                <stop offset="100%" stopColor="#4A00E0" />
            </linearGradient>
        </defs>
        <g>
            <path d="M10 5 L10 45 C10 55, 40 55, 40 45 L40 5 Z" fill="url(#logoGrad)" />
            <path d="M25 15 L25 50 C25 60, 55 60, 55 50 L55 15 Z" fill="url(#logoGrad)" opacity="0.7"/>
        </g>
    </svg>
);

// SVG для фоновой "паутины"
const SpiderwebBackground = () => (
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="spiderweb-svg">
        <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(230,230,250,0.1)" />
                <stop offset="100%" stopColor="rgba(230,230,250,0)" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#grad)" stroke="#e6e6fa" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#e6e6fa" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="#e6e6fa" strokeWidth="0.2" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#e6e6fa" strokeWidth="0.2" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#e6e6fa" strokeWidth="0.2" />
        <line x1="17.6" y1="17.6" x2="82.4" y2="82.4" stroke="#e6e6fa" strokeWidth="0.2" />
        <line x1="17.6" y1="82.4" x2="82.4" y2="17.6" stroke="#e6e6fa" strokeWidth="0.2" />
    </svg>
);

const HomePage = () => {
    const { t } = useTranslation();
    const { setCurrentPage } = useNavigation();

    const fadeIn = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    };

    return (
        <div className="new-homepage">
            {/* Секция 1: Hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-logo">
                        <LogoIcon />
                        <span>Moderat</span>
                    </div>
                    <h1>{t('homepage_hero_title')}</h1>
                    <p>{t('homepage_hero_subtitle')}</p>
                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => setCurrentPage('filters')}>{t('start_free')}</button>
                        <button className="btn-secondary" onClick={() => setCurrentPage('dashboard')}>{t('view_dashboard')}</button>
                    </div>
                </div>
            </section>

            {/* Секция 2: Get Started */}
            <section className="get-started-section">
                <h2>{t('homepage_getstarted_title')}</h2>
                <p>{t('homepage_getstarted_subtitle')}</p>
                <button className="btn-primary" onClick={() => setCurrentPage('filters')}>{t('quick_start')}</button>
            </section>

            {/* НОВАЯ Секция: Supported Frameworks (Паутина) */}
            <section className="frameworks-section">
                <motion.div
                    className="title-section-frameworks"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h1>{t('homepage_frameworks_title')}</h1>
                    <p>{t('homepage_frameworks_subtitle')}</p></motion.div>
                <div className="spiderweb-container">
                    <SpiderwebBackground/>
                    <div className="node center-node">Moderat Core</div>
                    <div className="node node-gdpr"><strong>GDPR</strong><span>European data protection</span></div>
                    <div className="node node-iso"><strong>ISO 27001</strong><span>Security management</span></div>
                    <div className="node node-data-protection"><strong>Data Protection</strong><span>Armenian data law</span></div>
                    <div className="node node-cyber-law"><strong>Armenian Cyber Law</strong><span>Draft cybersecurity law</span></div>
                    <div className="node node-nis2"><strong>NIS 2</strong><span>Network security directive</span></div>
                </div>
            </section>

            {/* Секция 4: Trusted by */}
            <section className="trusted-by-section">
                <h2>{t('homepage_trusted_title')}</h2>
                <p>{t('homepage_trusted_subtitle')}</p>
                <div className="logos-grid">
                    <div className="logo-item">TechCorp</div>
                    <div className="logo-item">DataSafe</div>
                    <div className="logo-item">SecureNet</div>
                    <div className="logo-item">ComplianceFirst</div>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p>{t('homepage_testimonial1_text')}</p>
                        <div className="author">
                            <strong>{t('homepage_testimonial1_author')}</strong>
                            <span>{t('homepage_testimonial1_role')}</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p>{t('homepage_testimonial2_text')}</p>
                        <div className="author">
                            <strong>{t('homepage_testimonial2_author')}</strong>
                            <span>{t('homepage_testimonial2_role')}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
