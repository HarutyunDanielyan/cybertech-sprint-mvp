import React from 'react';
import { useTranslation } from 'react-i18next';
import './ClientDashboard.css'; // Подключаем стили для дашборда

// Иконки можно заменить на SVG или библиотеку иконок
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const CollectionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;

const ClientDashboard = () => {
    const { t } = useTranslation();

    // Mock data for the dashboard
    const stats = [
        { icon: <CheckIcon />, value: 3, label: t('completed_quizzes') },
        { icon: <ClockIcon />, value: 1, label: t('in_progress') },
        { icon: <ChartIcon />, value: '82%', label: t('avg_score') },
        { icon: <CollectionIcon />, value: 5, label: t('frameworks') },
    ];

    const quizzes = [
        { id: 'gdpr', tag: t('eu_regulation'), title: 'GDPR Compliance Quiz', desc: t('gdpr_desc'), questions: 25, time: 30, progress: 85, status: 'continue' },
        { id: 'iso', tag: t('iso_standard'), title: 'ISO 27001 Compliance', desc: t('iso_desc'), questions: 35, time: 45, status: 'start', isNew: true },
        { id: 'combined', tag: t('multi_framework'), title: 'Combined Assessment', desc: t('combined_desc'), questions: 50, time: 60, progress: 45, status: 'continue' },
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div>
                    <h1>{t('dashboard_title')}</h1>
                    <p>{t('dashboard_welcome')}</p>
                </div>
                <div className="last-login">
                    {t('last_login')}: Today, 2:30 PM
                </div>
            </header>

            <section className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="quizzes-section">
                <div className="quizzes-header">
                    <h2>{t('available_quizzes')}</h2>
                    <div className="filter-wrapper">
                        <span>{t('filter_by')}:</span>
                        <select>
                            <option>All Frameworks</option>
                        </select>
                    </div>
                </div>

                <div className="quiz-grid">
                    {quizzes.map(quiz => (
                        <div key={quiz.id} className="quiz-card">
                            <div className="quiz-card-header">
                                <span className={`quiz-tag tag-${quiz.id}`}>{quiz.tag}</span>
                                {quiz.isNew && <span className="new-badge">New</span>}
                                {quiz.progress && (
                                    <div className="progress-ring">
                                        <svg><circle cx="20" cy="20" r="16" style={{'--progress': quiz.progress}}></circle></svg>
                                        <span>{quiz.progress}%</span>
                                    </div>
                                )}
                            </div>
                            <h3>{quiz.title}</h3>
                            <p>{quiz.desc}</p>
                            <div className="quiz-card-footer">
                                <div className="quiz-info">
                                    <span>{quiz.questions} Questions</span>
                                    <span>~{quiz.time} min</span>
                                </div>
                                <button className={`quiz-button btn-${quiz.status}`}>{t(quiz.status)}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClientDashboard;
