import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HomePage.css'; // Подключаем новые стили

// SVG-код для фоновой паутины
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

    const fadeIn = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    };

    return (
        <div className="home-page-container">
            <motion.div
                className="title-section"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >

            </motion.div>

            <div className="spiderweb-container">
                <SpiderwebBackground />

                <div className="node center-node">MODERAT Core</div>

                <div className="node node-gdpr">
                    <strong>GDPR</strong>
                    <span>European data protection</span>
                </div>

                <div className="node node-iso">
                    <strong>ISO 27001</strong>
                    <span>Security management</span>
                </div>

                <div className="node node-data-protection">
                    <strong>Data Protection</strong>
                    <span>Armenian data law</span>
                </div>

                <div className="node node-cyber-law">
                    <strong>Armenian Cyber Law</strong>
                    <span>Draft cybersecurity law</span>
                </div>

                <div className="node node-nis2">
                    <strong>NIS 2</strong>
                    <span>Network security directive</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
