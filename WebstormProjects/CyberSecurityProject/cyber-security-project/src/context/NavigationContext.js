import React, { createContext, useState, useContext,useEffect } from 'react';
import axios from 'axios';
const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
export const NavigationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home');
    // Возвращаем состояние аутентификации
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
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
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                // Этот запрос либо вернет данные пользователя, либо ошибку 403,
                // но в любом случае установит CSRF-cookie
                const response = await axios.get('/api/users/me/');
                login(response.data);
            } catch (error) {
                // Пользователь не авторизован, это нормально
                console.log("Пользователь не авторизован.");
            }
        };
        checkAuthStatus();
    }, []);
    // Возвращаем функции для входа и выхода
    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        setCurrentPage('dashboard');
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8000/api/users/logout/');
            setUser(null);
            setIsAuthenticated(false);
            setCurrentPage('home');
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
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
        user,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};
