import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext';
import './Quiz.css';

const Quiz = () => {
    const { t } = useTranslation();
    const { selectedCategory, setCurrentPage, setQuizScore } = useNavigation();

    const questions = t(`quiz_by_category.${selectedCategory}`) || [];
    const isGradedQuiz = selectedCategory === 'gdpr';

    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);

    const handleAnswerClick = (points) => {
        const newScore = score + points;
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setScore(newScore);
            setCurrentQuestion(nextQuestion);
        } else {
            // Тест завершен
            setQuizScore(newScore); // Сохраняем итоговый результат в контекст
            setCurrentPage('quizResult'); // Переходим на страницу с результатами
        }
    };

    // Проверка на случай, если вопросы не загрузились
    if (!questions || questions.length === 0) {
        return (
            <div className="quiz-container">
                <div className="score-section">
                    <div className="result-text">Тест не найден.</div>
                    <button className="back-button" onClick={() => setCurrentPage('filters')}>
                        Вернуться
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            {/* Возвращаем полную JSX-разметку */}
            <>
                <div className="question-section">
                    <div className="question-count">
                        <span>{t('quiz_question')} {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className="question-text">{questions[currentQuestion]?.questionText}</div>
                    {isGradedQuiz && <div className="question-reference">{questions[currentQuestion]?.reference}</div>}
                </div>
                <div className={`answer-section ${isGradedQuiz ? 'graded' : ''}`}>
                    {questions[currentQuestion]?.answerOptions.map((option, index) => (
                        <button key={index} onClick={() => handleAnswerClick(isGradedQuiz ? option.points : option.isCorrect ? 1 : 0)}>
                            {isGradedQuiz && <span className="answer-grade">{String.fromCharCode(65 + index)}</span>}
                            {option.answerText}
                        </button>
                    ))}
                </div>
            </>
        </div>
    );
};

export default Quiz;
