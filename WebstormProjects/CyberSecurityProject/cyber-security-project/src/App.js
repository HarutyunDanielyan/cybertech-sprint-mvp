import React from 'react';
import { useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Quiz from './components/Quiz';
import SupportChat from './components/SupportChat';
import HomePage from './components/HomePage';
import FilterPage from './components/FilterPage';
import TestTypeSelectionPage from './components/TestTypeSelectionPage';
import ClientDashboard from './components/ClientDashboard'; // 1. Импортируем дашборд
import './App.css';

function App() {
    const { currentPage } = useNavigation();

    const renderPage = () => {
        switch (currentPage) {
            case 'register': return <RegisterPage />;
            case 'login': return <LoginPage />;
            case 'filters': return <FilterPage />;
            case 'testTypeSelection': return <TestTypeSelectionPage />;
            case 'quiz': return <Quiz />;
            case 'dashboard': return <ClientDashboard />; // 2. Добавляем новый маршрут
            case 'home':
            default: return <HomePage />;
        }
    };

    return (
        <div className="App">
            <Navbar />
            <main>{renderPage()}</main>
            <Footer />
            <SupportChat />
        </div>
    );
}

export default App;
