import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>{t('footer_product')}</h4>
                    <ul>
                        <li><a href="#features">{t('footer_features')}</a></li>
                        <li><a href="#pricing">{t('footer_pricing')}</a></li>
                        <li><a href="/demo">{t('footer_demo')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t('footer_company')}</h4>
                    <ul>
                        <li><a href="/about">{t('footer_about')}</a></li>
                        <li><a href="/contact">{t('footer_contact')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t('footer_resources')}</h4>
                    <ul>
                        <li><a href="/blog">{t('footer_blog')}</a></li>
                        <li><a href="/faq">{t('footer_faq')}</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} YourStartupName. {t('footer_copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
