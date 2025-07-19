import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './FilterPage.css';

const FilterPage = () => {
    const { t } = useTranslation();
    const { setCurrentPage, setIndustry, setLocation, setMarketLocation, setEmployeeCount, setStandard, setFramework } = useNavigation();

    const [selections, setSelections] = useState({
        industry: null, location: null, market: null, employees: null,
        standard: null, framework: null,
    });

    const filterCategories = {
        industry: { title: t('filter_step_1_title'), options: ['it', 'finance', 'health', 'retail'] },
        location: { title: t('filter_step_2_title'), options: ['armenia', 'eua', 'usa', 'other'] },
        market: { title: t('filter_step_3_title'), options: ['armenia', 'cis', 'usa', 'europe'] },
        employees: { title: t('filter_step_4_title'), options: ['1-50', '51-200', '201-1000', '1000_plus'] },
        standard: { title: t('filter_step_5_title'), options: ['iso27001', 'soc2', 'gdpr', 'nist'] },
        framework: { title: t('filter_step_6_title'), options: ['cobit', 'cis', 'owasp'] },
    };

    const handleSelect = (category, option) => {
        setSelections(prev => ({ ...prev, [category]: prev[category] === option ? null : option }));
    };

    const handleSubmit = () => {
        setIndustry(selections.industry);
        setLocation(selections.location);
        setMarketLocation(selections.market);
        setEmployeeCount(selections.employees);
        setStandard(selections.standard);
        setFramework(selections.framework);

        if (selections.standard || selections.framework) {
            setCurrentPage('testTypeSelection');
        } else {
            setCurrentPage('quiz');
        }
    };

    const isReady = selections.industry && selections.location && selections.market && selections.employees;

    return (
        <div className="filter-container checklist-style">
            {Object.entries(filterCategories).map(([key, value]) => (
                <div key={key} className="filter-category">
                    <h2>{value.title}</h2>
                    <div className="options-group">
                        {value.options.map((option) => (
                            <button
                                key={option}
                                className={`option-button ${selections[key] === option ? 'selected' : ''}`}
                                onClick={() => handleSelect(key, option)}
                            >
                                {t(`${key}_${option}`)}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <button className="submit-button" onClick={handleSubmit} disabled={!isReady}>
                {t('filter_submit_button')}
            </button>
        </div>
    );
};

export default FilterPage;
