import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import axios from 'axios';
import './Auth.css';

const RegisterPage = () => {
    const { t } = useTranslation();
    const { login, setCurrentPage } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // Добавили поле для имени пользователя
    const [userType, setUserType] = useState('user');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:8000/api/users/register/', {
                username,
                email,
                password,
                role: userType,
            });
            login(response.data.user);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'Ошибка регистрации. Проверьте введенные данные.');
                console.error("Ошибка от сервера:", err.response.data);
            } else if (err.request) {
                setError('Failed to connect to server. Check CORS or make sure backend is running.');
                console.error("Нет ответа от сервера:", err.request);
            } else {
                setError('Произошла непредвиденная ошибка.');
                console.error('Ошибка:', err.message);
            }
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{t('register_title')}</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">


                </div>
                <div className="form-group">
                    <label htmlFor="email">{t('register_email_label')}</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">{t('register_password_label')}</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           required/>
                </div>
                <div className="form-group">
                    <label>{t('register_who_are_you')}</label>
                    <div className="role-selector">
                        <label>
                            <input type="radio" name="userType" value="user" checked={userType === 'user'}
                                   onChange={(e) => setUserType(e.target.value)}/>
                            {t('register_role_client')}
                        </label>
                        <label>
                            <input type="radio" name="userType" value="auditor" checked={userType === 'auditor'}
                                   onChange={(e) => setUserType(e.target.value)}/>
                            {t('register_role_auditor')}
                        </label>
                    </div>
                </div>
                <button type="submit" className="auth-button">{t('register_button')}</button>
                <p className="auth-switch">
                    {t('register_have_account')}{' '}
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage('login');
                    }}>
                        {t('register_login_link')}
                    </a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
