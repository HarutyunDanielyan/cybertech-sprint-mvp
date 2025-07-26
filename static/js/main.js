// Main JavaScript for Moderat Compliance Platform
document.addEventListener('DOMContentLoaded', () => {
    // Toggle view between quiz cards and compliance score
    const toggleViewBtn = document.getElementById('toggle-view-btn');
    const toggleViewBtnHy = document.getElementById('toggle-view-btn-hy');
    const quizCardsGrid = document.getElementById('quiz-cards-grid');
    const complianceScoreView = document.getElementById('compliance-score-view');

    if (toggleViewBtn) {
        toggleViewBtn.addEventListener('click', () => {
            quizCardsGrid.classList.toggle('hidden');
            complianceScoreView.classList.toggle('hidden');
        });
    }
    if (toggleViewBtnHy) {
        toggleViewBtnHy.addEventListener('click', () => {
            quizCardsGrid.classList.toggle('hidden');
            complianceScoreView.classList.toggle('hidden');
        });
    }

    // Start quiz function
    window.startQuiz = function(quizTitle) {
        window.location.href = `/assessments/quiz/${quizTitle}`;
    };
});