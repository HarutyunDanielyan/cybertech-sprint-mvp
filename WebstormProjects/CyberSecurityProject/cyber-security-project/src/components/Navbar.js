import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const { setCurrentPage, isAuthenticated, logout } = useNavigation();

    // Состояние для отслеживания видимости выпадающего меню
    const [isProductMenuOpen, setProductMenuOpen] = useState(false);
    const [isSolutionMenuOpen, setSolutionMenuOpen] = useState(false);
    const [isCompanyMenuOpen, setCompanyMenuOpen] = useState(false);
    const [isResourcesMenuOpen, setResourcesMenuOpen] = useState(false);
    const handleNavClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#" onClick={(e) => handleNavClick(e, 'home')}>Moderat</a>
            </div>
            <ul className="navbar-links">
                {/* Оборачиваем "Product" в li с обработчиками наведения */}
                <li
                    className="dropdown-container"
                    onMouseEnter={() => setProductMenuOpen(true)}
                    onMouseLeave={() => setProductMenuOpen(false)}
                >
                    <a href="#">{t('nav_product')}</a>
                    {/* Условный рендеринг выпадающего меню */}
                    {isProductMenuOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#">{t('dropdown_automated_compliance')}</a></li>
                            <li><a href="#">{t('dropdown_risk_management')}</a></li>
                            <li><a href="#">{t('dropdown_audit_management')}</a></li>
                        </ul>
                    )}
                </li>
                <li
                    className="dropdown-container"
                    onMouseEnter={() => setSolutionMenuOpen(true)}
                    onMouseLeave={() => setSolutionMenuOpen(false)}
                ><a href="#">{t('nav_solutions')}</a>
                    {/* Условный рендеринг выпадающего меню */}
                    {isSolutionMenuOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#">{t('dropdown_automated_compliance')}</a></li>
                            <li><a href="#">{t('dropdown_risk_management')}</a></li>
                            <li><a href="#">{t('dropdown_audit_management')}</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="#">{t('nav_customers')}</a></li>
                <li
                    className="dropdown-container"
                    onMouseEnter={() => setResourcesMenuOpen(true)}
                    onMouseLeave={() => setResourcesMenuOpen(false)}
                ><a href="#">{t('nav_resources')}</a>
                    {/* Условный рендеринг выпадающего меню */}
                    {isResourcesMenuOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#">{t('dropdown_automated_compliance')}</a></li>
                            <li><a href="#">{t('dropdown_risk_management')}</a></li>
                            <li><a href="#">{t('dropdown_audit_management')}</a></li>
                        </ul>
                    )}
                </li>
                <li
                    className="dropdown-container"
                    onMouseEnter={() => setCompanyMenuOpen(true)}
                    onMouseLeave={() => setCompanyMenuOpen(false)}
                ><a href="#">{t('nav_company')}</a>
                    {/* Условный рендеринг выпадающего меню */}
                    {isCompanyMenuOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#">{t('dropdown_automated_compliance')}</a></li>
                            <li><a href="#">{t('dropdown_risk_management')}</a></li>
                            <li><a href="#">{t('dropdown_audit_management')}</a></li>
                        </ul>
                    )}
                </li>
            </ul>

            <div className="navbar-actions">
                <LanguageSwitcher />
                {isAuthenticated ? (
                    <>
                        <span className="user-email">demo@moderat.com</span>
                        <button className="navbar-cta logout-btn" onClick={logout}>
                            {t('nav_logout')}
                        </button>
                    </>
                ) : (
                    <>
                        <button className="navbar-button" onClick={() => setCurrentPage('login')}>
                            {t('nav_login')}
                        </button>
                        <button className="navbar-cta" onClick={() => setCurrentPage('register')}>
                            {t('nav_register_button')}
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
