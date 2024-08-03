// scripts.js

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');

// Show slides
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => {
        dot.classList.remove('active-dot');
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active-dot');
}

// Change slide manually
function changeSlide(n) {
    slideIndex += n - 1;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

// Initialize slider
function initSlider() {
    showSlides();
    const slideInterval = setInterval(showSlides, 5000);
}

// Generate dots
function generateDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => {
            slideIndex = index;
            showSlides();
        });
        dotsContainer.appendChild(dot);
    });
}

generateDots();
initSlider();



// Quiz functionality
const quizQuestions = [
    {
        question: "What is a sustainable practice?",
        answers: ["Recycling", "Littering", "Using public transportation", "Wasting water"],
        correct: [0, 2]
    },
    {
        question: "Which of the following helps in reducing carbon footprint?",
        answers: ["Driving alone", "Carpooling", "Leaving lights on", "Using renewable energy"],
        correct: [1, 3]
    },
    {
        question: "What is a sustainable practice?",
        answers: ["Recycling", "Littering", "Using public transportation", "Wasting water"],
        correct: [0, 2]
    },
    {
        question: "Which of the following helps in reducing carbon footprint?",
        answers: ["Driving alone", "Carpooling", "Leaving lights on", "Using renewable energy"],
        correct: [1, 3]
    },
    {
        question: "What can you do to save water?",
        answers: ["Take long showers", "Fix leaks", "Let the tap run", "Use a broom to clean driveways"],
        correct: [1, 3]
    },
    {
        question: "Which of these is an example of renewable energy?",
        answers: ["Coal", "Solar power", "Natural gas", "Wind power"],
        correct: [1, 3]
    },
    {
        question: "How can you reduce waste?",
        answers: ["Buy single-use items", "Compost food scraps", "Throw away old clothes", "Use disposable plates"],
        correct: [1]
    },
    {
        question: "What is an eco-friendly mode of transportation?",
        answers: ["Carpooling", "Walking", "Biking", "All of the above"],
        correct: [3]
    },
    {
        question: "What can you do to help improve air quality?",
        answers: ["Burning trash", "Planting trees", "Driving everywhere", "Using public transportation"],
        correct: [1, 3]
    }
];

let currentQuestion = 0;

function startQuiz() {
    document.getElementById('quizContainer').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const quiz = quizQuestions[currentQuestion];
    const quizContainer = document.getElementById('quizQuestions');
    
    quizContainer.innerHTML = `
        <div class="question">
            <p>${quiz.question}</p>
            <div class="options">
                ${quiz.answers.map((answer, index) => `
                    <button class="quiz-option" onclick="answerQuiz(${index})">${answer}</button>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('quizResults').textContent = '';
}

function answerQuiz(selected) {
    const quiz = quizQuestions[currentQuestion];
    const correctAnswers = quiz.correct;
    const resultText = correctAnswers.includes(selected) ? 'Correct!' : 'Incorrect.';
    
    const resultDisplay = document.getElementById('quizResults');
    resultDisplay.textContent = resultText;
    resultDisplay.className = correctAnswers.includes(selected) ? 'correct' : 'incorrect';

    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        setTimeout(loadQuestion, 2000);
    } else {
        setTimeout(() => {
            resultDisplay.textContent += ' Quiz Completed!';
            document.getElementById('quizContainer').style.display = 'none';
            currentQuestion = 0;
        }, 2000);
    }
}

document.getElementById('quizButton').addEventListener('click', startQuiz);






