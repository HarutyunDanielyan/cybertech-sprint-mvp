import React from 'react';
import { useTranslation } from 'react-i18next';
// 1. Исправляем путь: выходим из папки 'components' (`../`) и заходим в 'context'
import { useNavigation } from '../context/NavigationContext';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const { setCurrentPage } = useNavigation();

    // Функция-обработчик, чтобы ссылки не перезагружали страницу
    const handleNavClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#" onClick={(e) => handleNavClick(e, 'home')}>MODERAT</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#" onClick={(e) => handleNavClick(e, 'home')}>{t('nav_home')}</a></li>
                {/* Эта ссылка ведет на страницу с фильтрами */}
                <li><a href="#" onClick={(e) => handleNavClick(e, 'filters')}>{t('nav_quiz')}</a></li>
            </ul>
            <button className="navbar-cta" onClick={() => setCurrentPage('login')}>
                {t('nav_register')}
            </button>
        </nav>
    );
};

export default Navbar;
