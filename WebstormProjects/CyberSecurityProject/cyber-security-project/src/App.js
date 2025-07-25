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
import ClientDashboard from './components/ClientDashboard';
import WhereToStartPage from './components/WhereToStartPage';
import QuizResultPage from './components/QuizResultPage';
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
            case 'quizResult': return <QuizResultPage />;
            case 'dashboard': return <ClientDashboard />;
            case 'whereToStart': return <WhereToStartPage />;
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
