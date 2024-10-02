import { quizQuestions } from './array.js';


// DOM Element
const questionEl = document.getElementById('qustion');
const optionEl = document.getElementById('option');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const timeEl = document.getElementById('timeNum');
const correctAns = document.getElementById('correctAns');
// const skipAns = document.getElementById('skipAns');
// const worngAns = document.getElementById('worngAns');
const quizBox = document.getElementById('quiz-box');
const ansBox = document.getElementById('ans-box');
const ansOption = document.getElementById('ansOption');


// Quiz State
let currentQuestionIndex = 0;
let timeLeft = 10;
let timer;
let userAnswers = [];
let skippedQuestions = 0;


// Call Functions
showQue();
addActiveClass();


// Show Current Question
function showQue() {
    resetState();

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionEl.textContent = `Q${currentQuestionIndex + 1}. ${currentQuestion.question}`;


    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');

        input.type = 'radio';
        input.name = 'option';
        input.value = index;
        input.addEventListener('change', () => {
            userAnswers[currentQuestionIndex] = index;
            nextBtn.disabled = false;
        });

        label.appendChild(input);
        span.textContent = option;
        label.appendChild(span);

        li.appendChild(label);
        optionEl.appendChild(li);

    });
    setTime();
    addActiveClass();
}

// Next Question
nextBtn.addEventListener('click', () => {
    moveToNext();
});

submitBtn.addEventListener('click', () => {
    showResults();
});

// Reset State for New Question
function resetState() {
    nextBtn.disabled = true;
    optionEl.innerHTML = '';
    timeLeft = 10;
    timeEl.textContent = timeLeft;
}

// Last Question
function lastQue() {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
}

function setTime() {
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            userAnswers[currentQuestionIndex] = null;
            skippedQuestions++;
            moveToNext();
        }
    }, 1000);
}

function moveToNext() {
    clearInterval(timer);

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQue();
    }
    else {
        lastQue();
    }
}


function showResults() {

    quizBox.classList.add('hidden');
    ansBox.classList.remove('hidden');

    let score = 0;
    let wrong = 0;
    quizQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.correctAnswer;

        const questionText = document.createElement('p');
        questionText.textContent = `Q${index + 1}. ${q.question}`;
        ansOption.appendChild(questionText);

        q.options.forEach((option, index) => {
            const li = document.createElement('li');
            const label = document.createElement('div');
            const span = document.createElement('span');

            span.textContent = option;
            label.appendChild(span);

            if (index === correctAnswer) {
                console.log("Correct");
                li.classList.add('correct-answer');
            }
            else if (userAnswer === index) {
                console.log("Wrong");
                li.classList.add('wrong-answer');
            }

            li.appendChild(label);
            ansOption.appendChild(li);

        });

        if (userAnswer === correctAnswer) {
            score++;
        }
        else {
            wrong++;
        }
    })
    correctAns.textContent = score + '/' + quizQuestions.length;
}

function initQuiz() {
    userAnswers = Array(quizQuestions.length).fill(null);
    skippedQuestions = 0;

}

initQuiz();


























































function addActiveClass() {
    const radioButtons = document.querySelectorAll('input[name="option"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            const labels = document.querySelectorAll('label');
            labels.forEach(label => {
                label.classList.remove('selected');
            });

            if (this.checked) {
                this.parentElement.classList.add('selected');
            }
        });

    });
}


