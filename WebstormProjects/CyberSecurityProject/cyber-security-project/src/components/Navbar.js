import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const { setCurrentPage, isAuthenticated, logout , user} = useNavigation();

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
                            <li><a href="#">{t('dropdown_gdpr')}</a></li>
                            <li><a href="#">{t('dropdown_nis2')}</a></li>
                            <li><a href="#">{t('dropdown_iso27001')}</a></li>
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
                            <li><a href="#">{t('dropdown_compamy_size')}</a></li>
                            <li><a href="#">{t('dropdown_find_a_partner')}</a></li>
                            <li><a href="#">{t('dropdown_partners')}</a></li>
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
                            <li><a href="#">{t('dropdown_all_resources')}</a></li>
                            <li><a href="#">{t('dropdown_collections')}</a></li>
                            <li><a href="#">{t('dropdown_customer_education')}</a></li>
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
                            <li><a href="#">{t('dropdown_about')}</a></li>
                            <li><a href="#">{t('dropdown_careers')}</a></li>
                            <li><a href="#">{t('dropdown_security')}</a></li>
                            <li><a href="#">{t('dropdown_press')}</a></li>
                        </ul>
                    )}
                </li>
            </ul>

            <div className="navbar-actions">
                { }
                <LanguageSwitcher />
                {isAuthenticated && user ? (
                    <>
                        {/* Отображаем email пользователя */}
                        <span className="user-email">{user.email}</span>
                        <button className="navbar-cta logout-btn" onClick={logout}>x
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
