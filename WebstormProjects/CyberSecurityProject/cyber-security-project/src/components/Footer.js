import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>{t('nav_product')}</h4>
                    <ul>
                        <li><a href="#features">{t('dropdown_gdpr')}</a></li>
                        <li><a href="#pricing">{t('dropdown_nis2')}</a></li>
                        <li><a href="/demo">{t('dropdown_iso27001')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t('nav_solutions')}</h4>
                    <ul>
                        <li><a href="#features">{t('dropdown_compamy_size')}</a></li>
                        <li><a href="#pricing">{t('dropdown_find_a_partner')}</a></li>
                        <li><a href="/demo">{t('dropdown_partners')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t('nav_company')}</h4>
                    <ul>
                        <li><a href="/about">{t('dropdown_about')}</a></li>
                        <li><a href="/contact">{t('dropdown_careers')}</a></li>
                        <li><a href="/contact">{t('dropdown_security')}</a></li>
                        <li><a href="/contact">{t('dropdown_press')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t('nav_resources')}</h4>
                    <ul>
                        <li><a href="/blog">{t('dropdown_all_resources')}</a></li>
                        <li><a href="/faq">{t('dropdown_collections')}</a></li>
                        <li><a href="/faq">{t('dropdown_customer_education')}</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Moderat. {t('footer_copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
