import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './Auth.css';

const RegisterPage = () => {
    const { t } = useTranslation();
    // Получаем функцию login из контекста
    const { setCurrentPage, login } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('client');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь должна быть реальная логика регистрации
        // После успешной регистрации вызываем login()
        login();
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{t('register_title')}</h2>
                {/* ...поля ввода... */}
                <div className="form-group">
                    <label htmlFor="email">{t('register_email_label')}</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">{t('register_password_label')}</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>{t('register_who_are_you')}</label>
                    <div className="role-selector">
                        <label>
                            <input type="radio" name="userType" value="client" checked={userType === 'client'} onChange={(e) => setUserType(e.target.value)} />
                            {t('register_role_client')}
                        </label>
                        <label>
                            <input type="radio" name="userType" value="auditor" checked={userType === 'auditor'} onChange={(e) => setUserType(e.target.value)} />
                            {t('register_role_auditor')}
                        </label>
                    </div>
                </div>
                <button type="submit" className="auth-button">{t('register_button')}</button>
                <p className="auth-switch">
                    {t('register_have_account')}{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('login'); }}>{t('register_login_link')}</a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
