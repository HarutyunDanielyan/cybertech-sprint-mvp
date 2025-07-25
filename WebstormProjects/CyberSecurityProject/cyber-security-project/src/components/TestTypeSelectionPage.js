import React from 'react'; // Убрали useEffect и useState, так как они больше не нужны
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './TestTypeSelectionPage.css';

// Вспомогательный компонент для отображения выбранных критериев
const SelectionSummary = ({ criteria }) => {
    const { t } = useTranslation();
    const validCriteria = Object.entries(criteria).filter(([key, value]) => value);

    return (
        <ul className="selection-summary">
            {validCriteria.map(([key, value]) =>
                <li key={key}>
                    <strong>{t(`filter_label_${key}`)}:</strong>
                    <span>{t(`${key}_${value}`)}</span>
                </li>
            )}
        </ul>
    );
};

const TestTypeSelectionPage = () => {
    const { t } = useTranslation();
    const { setCurrentPage, setTestType, setSelectedCategory, ...filters } = useNavigation();

    // Обработчик для первого варианта (предложение системы)
    const handleSelectOurSuggestion = () => {
        setTestType('our_suggestion');
        setSelectedCategory('gdpr');
        setCurrentPage('quiz');
    };

    // Обработчик для второго варианта (выбор клиента)
    const handleSelectClientChoice = () => {
        // Проверяем, выбрал ли клиент именно GDPR
        if (filters.standard === 'gdpr') {
            setTestType('client_choice');
            setSelectedCategory('gdpr');
            setCurrentPage('quiz');
        } else {
            // Если выбран другой стандарт (или ни одного), показываем сообщение
            alert(t('test_not_ready_message'));
        }
    };

    // Собираем объекты с критериями для каждой карточки
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
                <div className="selection-card" onClick={handleSelectOurSuggestion}>
                    <h2>{t('test_type_our_suggestion')}</h2>
                    <p>{t('test_type_our_suggestion_desc')}</p>
                    <SelectionSummary criteria={mandatoryCriteria} />
                </div>

                {/* Карточка №2: Вариант клиента */}
                <div
                    className="selection-card" // Убрали класс disabled, так как карточка всегда кликабельна
                    onClick={handleSelectClientChoice} // Используем новый обработчик
                >
                    <h2>{t('test_type_client_choice')}</h2>
                    <p>{t('test_type_client_choice_desc')}</p>
                    <SelectionSummary criteria={allCriteria} />
                </div>
            </div>
        </div>
    );
};

export default TestTypeSelectionPage;
