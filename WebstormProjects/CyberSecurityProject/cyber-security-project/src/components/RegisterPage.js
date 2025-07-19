import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// 1. Убедитесь, что этот импорт присутствует и путь к файлу верный
import { useNavigation } from '../context/NavigationContext';
import './Auth.css';

const RegisterPage = () => {
    const { t } = useTranslation();

    // 2. Получаем функцию с именем `setCurrentPage`
    const { setCurrentPage } = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('client');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(t('register_success_message'));
    };

    // 3. Обработчик клика использует ПРАВИЛЬНУЮ функцию
    const handleLoginClick = (e) => {
        e.preventDefault();
        setCurrentPage('login');
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{t('register_title')}</h2>
                {/* Поля ввода */}
                <div className="form-group">
                    <label htmlFor="email">{t('register_email_label')}</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">{t('register_password_label')}</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {/* Выбор роли */}
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
                {/* Ссылка для перехода на страницу входа */}
                <p className="auth-switch">
                    {t('register_have_account')}{' '}
                    <a href="#" onClick={handleLoginClick}>
                        {t('register_login_link')}
                    </a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
