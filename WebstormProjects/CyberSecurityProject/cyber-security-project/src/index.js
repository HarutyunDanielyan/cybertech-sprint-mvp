import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.css';
import App from './App';
// Импортируем наш новый провайдер навигации
import { NavigationProvider } from './context/NavigationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback="Բեռնում...">
            <I18nextProvider i18n={i18n}>
                {/* Оборачиваем все приложение в NavigationProvider */}
                <NavigationProvider>
                    <App />
                </NavigationProvider>
            </I18nextProvider>
        </Suspense>
    </React.StrictMode>
);
