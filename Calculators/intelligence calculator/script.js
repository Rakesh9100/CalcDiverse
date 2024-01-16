const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "How many sides does a triangle have?", answer: "3" },
    { question: "What is the square root of 25?", answer: "5" },
    // Add more questions as needed
];

let currentQuestion = 0;
let correctAnswers = 0;

const questionContainer = document.getElementById('question-container');
const answerInput = document.getElementById('answer');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;
}

function nextQuestion() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === '') {
        alert('Please provide an answer before moving to the next question.');
        return;
    }

    if (userAnswer === correctAnswer) {
        correctAnswers++;
    }

    answerInput.value = '';

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        const iqScore = calculateIQ(correctAnswers, questions.length);
        alert(`Quiz completed! Your IQ Score: ${iqScore}`);
    }
}

function calculateIQ(correctAnswers, totalQuestions) {
    // Simple scoring system: 1 point for each correct answer
    const percentage = (correctAnswers / totalQuestions) * 100;

    // IQ calculation (just for illustration)
    // The formula used here is arbitrary and not based on any scientific standard.
    const iqScore = Math.round((percentage / 100) * 150 + 50);

    return iqScore;
}

nextButton.addEventListener('click', nextQuestion);

// Initial load
loadQuestion();
