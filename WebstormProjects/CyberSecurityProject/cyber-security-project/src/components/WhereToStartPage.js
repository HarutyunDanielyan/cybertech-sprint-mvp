import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './WhereToStartPage.css';

const WhereToStartPage = () => {
    const { t } = useTranslation();
    const { setCurrentPage } = useNavigation();

    const quizzes = [
        {
            id: 'gdpr_assessment',
            title: t('gdpr_assessment_title'),
            description: t('gdpr_assessment_desc'),
            action: () => setCurrentPage('filters'),
        },
        // Сюда можно будет добавлять другие тесты в будущем
    ];

    return (
        <div className="start-page-container">
            <h1>{t('nav_where_to_start')}</h1>
            <div className="quiz-list">
                {quizzes.map(quiz => (
                    <div key={quiz.id} className="quiz-list-item">
                        <div className="quiz-info">
                            <h2>{quiz.title}</h2>
                            <p>{quiz.description}</p>
                        </div>
                        <button onClick={quiz.action}>{t('start_quiz_button')}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhereToStartPage;
