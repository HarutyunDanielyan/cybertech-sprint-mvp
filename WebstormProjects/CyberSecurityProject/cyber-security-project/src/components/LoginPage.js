import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './Auth.css';

const LoginPage = () => {
    const { t } = useTranslation();
    const { setCurrentPage } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь должна быть реальная логика входа
        // После успешного входа перенаправляем на дашборд
        setCurrentPage('dashboard');
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setCurrentPage('register');
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{t('login_title')}</h2>
                <div className="form-group">
                    <label htmlFor="email">{t('register_email_label')}</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">{t('register_password_label')}</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="auth-button">{t('login_button')}</button>
                <p className="auth-switch">
                    {t('login_no_account')}{' '}
                    <a href="#" onClick={handleRegisterClick}>{t('nav_register')}</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
