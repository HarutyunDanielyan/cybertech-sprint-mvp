import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Импортируем хук
import './AnimatedPage.css';

const AnimatedPage = () => {
    const { t } = useTranslation(); // 2. Получаем функцию `t` для перевода

    // Данные для карточек теперь берутся из переводов
    const featuresData = [
        { icon: '🔍', title: t('feature_audit_title'), description: t('feature_audit_desc') },
        { icon: '📋', title: t('feature_checklists_title'), description: t('feature_checklists_desc') },
        { icon: '📊', title: t('feature_reports_title'), description: t('feature_reports_desc') }
    ];

    // Весь код анимации остается без изменений
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

    return (
        <div className="animated-page-container">
            {/* Анимированные фигуры */}
            <motion.div className="shape shape-1" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}></motion.div>
            <motion.div className="shape shape-2" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}></motion.div>
            <motion.div className="shape shape-3" animate={{ x: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}></motion.div>

            <motion.div className="content-wrapper" variants={containerVariants} initial="hidden" animate="visible">
                {/* 3. Заменяем весь текст на вызовы функции t() */}
                <motion.h1 variants={itemVariants}>
                    {t('main_title')}
                </motion.h1>
                <motion.p variants={itemVariants} className="subtitle">
                    {t('main_subtitle')}
                </motion.p>
                <motion.div variants={itemVariants}>
                    <button className="cta-button">{t('start_audit_button')}</button>
                </motion.div>

                <motion.div className="features-grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                    {featuresData.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AnimatedPage;