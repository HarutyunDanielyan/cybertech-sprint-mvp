import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './QuizResultPage.css';

const QuizResultPage = () => {
    const { t } = useTranslation();
    const { quizScore, setCurrentPage } = useNavigation();

    const getComplianceLevel = (score) => {
        if (score >= 210) return { text: t('score_excellent'), color: '#27ae60' };
        if (score >= 165) return { text: t('score_good'), color: '#4a90e2' };
        if (score >= 120) return { text: t('score_moderate'), color: '#f39c12' };
        return { text: t('score_poor'), color: '#c0392b' };
    };

    const complianceLevel = getComplianceLevel(quizScore);
    const maxScore = 225;
    // 1. Вычисляем проценты
    const percentage = Math.round((quizScore / maxScore) * 100);

    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="result-page-container">
            <div className="result-card-unified">
                <div className="circular-chart-container">
                    <svg
                        className="circular-chart"
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                    >
                        <circle
                            className="circular-chart-background"
                            stroke="#e6e6e6"
                            strokeWidth="15"
                            fill="transparent"
                            r={radius}
                            cx="100"
                            cy="100"
                        />
                        <circle
                            className="circular-chart-progress"
                            stroke={complianceLevel.color}
                            strokeWidth="15"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            fill="transparent"
                            r={radius}
                            cx="100"
                            cy="100"
                        />
                    </svg>
                    <div className="chart-text">
                        {/* 2. Отображаем результат в процентах */}
                        <div className="score-display">{percentage}%</div>
                    </div>
                </div>

                <div className="level-display" style={{ color: complianceLevel.color }}>
                    {complianceLevel.text}
                </div>

                <button className="reset-button" onClick={() => setCurrentPage('filters')}>
                    {t('try_again_button')}
                </button>
            </div>
        </div>
    );
};

export default QuizResultPage;
