import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import axios from 'axios';
import './Auth.css';

const LoginPage = () => {
    const { t } = useTranslation();
    const { login, setCurrentPage } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:8000/api/users/login/', {
                email,
                password,
            });
            login(response.data.user);
        } catch (err) {
            // Улучшенная обработка ошибок
            if (err.response) {
                // Ошибка пришла от сервера (например, "пользователь уже существует")
                setError(err.response.data.message || 'Ошибка регистрации. Проверьте введенные данные.');
                console.error("Ошибка от сервера:", err.response.data);
            } else if (err.request) {
                // Запрос был сделан, но ответа не было (CORS, сервер выключен)
                setError('Failed to connect to server. Check CORS or make sure backend is running.');
                console.error("Нет ответа от сервера:", err.request);
            } else {
                // Произошла другая ошибка
                setError('Произошла непредвиденная ошибка.');
                console.error('Ошибка:', err.message);
            }
        }
    };


    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{t('login_title')}</h2>
                {error && <p className="error-message">{error}</p>}
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
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('register'); }}>{t('login_register_link')}</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
