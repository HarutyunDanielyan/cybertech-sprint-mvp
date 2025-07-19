import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './TestTypeSelectionPage.css'; // Подключаем новые стили

// Вспомогательный компонент для отображения выбранных критериев
const SelectionSummary = ({ criteria }) => {
    const { t } = useTranslation();
    return (
        <ul className="selection-summary">
            {Object.entries(criteria).map(([key, value]) =>
                value ? (
                    <li key={key}>
                        <strong>{t(`filter_label_${key}`)}:</strong>
                        <span>{t(`${key}_${value}`)}</span>
                    </li>
                ) : null
            )}
        </ul>
    );
};

const TestTypeSelectionPage = () => {
    const { t } = useTranslation();
    const { setCurrentPage, setTestType, ...filters } = useNavigation();

    const handleSelect = (type) => {
        setTestType(type);
        setCurrentPage('quiz');
    };

    const mandatoryCriteria = {
        industry: filters.industry,
        location: filters.location,
        market: filters.marketLocation,
        employees: filters.employeeCount,
    };

    const allCriteria = {
        ...mandatoryCriteria,
        standard: filters.standard,
        framework: filters.framework,
    };

    return (
        <div className="selection-container">
            <h1>{t('test_type_selection_title')}</h1>
            <div className="selection-grid">
                {/* Карточка №1: Наш вариант */}
                <div className="selection-card" onClick={() => handleSelect('our_suggestion')}>
                    <h2>{t('test_type_our_suggestion')}</h2>
                    <p>{t('test_type_our_suggestion_desc')}</p>
                    <SelectionSummary criteria={mandatoryCriteria} />
                </div>

                {/* Карточка №2: Вариант клиента */}
                <div className="selection-card" onClick={() => handleSelect('client_choice')}>
                    <h2>{t('test_type_client_choice')}</h2>
                    <p>{t('test_type_client_choice_desc')}</p>
                    <SelectionSummary criteria={allCriteria} />
                </div>
            </div>
        </div>
    );
};

export default TestTypeSelectionPage;
