import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
// Стили можно будет использовать те же, что и для выбора категории
import './CategorySelectionPage.css';

const ProfessionSelectionPage = () => {
    const { t } = useTranslation();
    const { setCurrentPage, setSelectedProfession } = useNavigation();

    // Список доступных профессий
    const professions = ['developer', 'manager', 'designer', 'student'];

    const handleProfessionSelect = (profession) => {
        setSelectedProfession(profession);
        setCurrentPage('quiz'); // После выбора профессии переходим к тесту
    };

    return (
        <div className="category-selection-container">
            <h1>{t('profession_selection_title')}</h1>
            <div className="category-grid">
                {professions.map((prof) => (
                    <button key={prof} className="category-button" onClick={() => handleProfessionSelect(prof)}>
                        {t(`profession_${prof}`)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProfessionSelectionPage;
