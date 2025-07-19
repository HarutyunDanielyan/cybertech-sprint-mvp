import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './CategorySelectionPage.css';

const CategorySelectionPage = () => {
    const { t } = useTranslation();
    const { setCurrentPage, setSelectedCategory } = useNavigation();

    const categories = ['general', 'phishing', 'passwords', 'data_privacy'];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        // Вместо перехода к тесту, переходим на страницу выбора профессии
        setCurrentPage('professionSelection');
    };

    return (
        <div className="category-selection-container">
            <h1>{t('category_selection_title')}</h1>
            <div className="category-grid">
                {categories.map((cat) => (
                    <button key={cat} className="category-button" onClick={() => handleCategorySelect(cat)}>
                        {t(`category_${cat}`)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelectionPage;
