import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './Quiz.css';

const Quiz = () => {
    const { t } = useTranslation();
    const { industry, location, marketLocation, employeeCount, standard, framework, testType, setCurrentPage } = useNavigation();

    const allQuestions = t('quiz_questions') || [];

    const filteredQuestions = allQuestions.filter(q => {
        const mandatoryMatch =
            q.filters.industry.includes(industry) &&
            q.filters.location.includes(location) &&
            q.filters.marketLocation.includes(marketLocation) &&
            q.filters.employeeCount.includes(employeeCount);

        if (!mandatoryMatch) return false;

        if (testType === 'client_choice') {
            const standardMatch = standard ? (q.filters.standard && q.filters.standard.includes(standard)) : true;
            const frameworkMatch = framework ? (q.filters.framework && q.filters.framework.includes(framework)) : true;
            return standardMatch && frameworkMatch;
        }

        return true;
    });

    const [questions, setQuestions] = useState(filteredQuestions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        setQuestions(filteredQuestions);
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }, [industry, location, marketLocation, employeeCount, standard, framework, testType]);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    if (questions.length === 0) {
        return (
            <div className="quiz-container">
                <div className="score-section">
                    <div className="result-text">Ձեր ընտրության համար հարցեր չեն գտնվել։</div>
                    <button className="back-button" onClick={() => setCurrentPage('filters')}>
                        Վերադառնալ ֆիլտրեր
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    <div>Ձեր արդյունքն է {score} / {questions.length}</div>
                    <button className="back-button" onClick={() => setCurrentPage('filters')}>
                        Փորձել կրկին
                    </button>
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Հարց {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
                                {option.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
