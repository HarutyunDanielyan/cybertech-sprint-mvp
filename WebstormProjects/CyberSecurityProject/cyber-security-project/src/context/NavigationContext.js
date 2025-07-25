import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home');
    // Возвращаем состояние аутентификации
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Состояния для фильтров
    const [industry, setIndustry] = useState(null);
    const [location, setLocation] = useState(null);
    const [marketLocation, setMarketLocation] = useState(null);
    const [employeeCount, setEmployeeCount] = useState(null);
    const [standard, setStandard] = useState(null);
    const [framework, setFramework] = useState(null);
    const [testType, setTestType] = useState('our_suggestion');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [quizScore, setQuizScore] = useState(0);

    // Возвращаем функции для входа и выхода
    const login = () => {
        setIsAuthenticated(true);
        setCurrentPage('dashboard');
    };

    const logout = () => {
        setIsAuthenticated(false);
        setCurrentPage('home');
    };

    const value = {
        currentPage, setCurrentPage,
        isAuthenticated, login, logout, // Убедитесь, что они передаются здесь
        industry, setIndustry,
        location, setLocation,
        marketLocation, setMarketLocation,
        employeeCount, setEmployeeCount,
        standard, setStandard,
        framework, setFramework,
        testType, setTestType,
        selectedCategory, setSelectedCategory,
        quizScore, setQuizScore,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};
