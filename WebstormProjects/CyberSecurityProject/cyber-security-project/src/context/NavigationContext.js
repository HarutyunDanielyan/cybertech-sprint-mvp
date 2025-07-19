import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home');
    // Обязательные поля
    const [industry, setIndustry] = useState(null);
    const [location, setLocation] = useState(null);
    const [marketLocation, setMarketLocation] = useState(null);
    const [employeeCount, setEmployeeCount] = useState(null);
    // Необязательные поля
    const [standard, setStandard] = useState(null);
    const [framework, setFramework] = useState(null);
    // Тип теста
    const [testType, setTestType] = useState('our_suggestion');

    const value = {
        currentPage, setCurrentPage,
        industry, setIndustry,
        location, setLocation,
        marketLocation, setMarketLocation,
        employeeCount, setEmployeeCount,
        standard, setStandard,
        framework, setFramework,
        testType, setTestType,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};
