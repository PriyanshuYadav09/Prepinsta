const quizData = [
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Rome'], answer: 'Paris' },
    { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Saturn'], answer: 'Mars' },
    { question: 'Who wrote the play "Romeo and Juliet"?', options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'], answer: 'William Shakespeare' },
    { question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2', 'NaCl'], answer: 'H2O' },
    { question: 'Which country is known as the Land of the Rising Sun?', options: ['Japan', 'China', 'South Korea', 'Thailand'], answer: 'Japan' },
    { question: 'What is the largest mammal?', options: ['Blue whale', 'Elephant', 'Giraffe', 'Hippo'], answer: 'Blue whale' },
    { question: 'Who painted the Mona Lisa?', options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'], answer: 'Leonardo da Vinci' },
    { question: 'What is the tallest mountain in the world?', options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'], answer: 'Mount Everest' },
    { question: 'What is the smallest planet in the solar system?', options: ['Mercury', 'Mars', 'Pluto', 'Earth'], answer: 'Mercury' },
    { question: 'Which bird is known for its ability to mimic human speech?', options: ['Parrot', 'Eagle', 'Owl', 'Penguin'], answer: 'Parrot' }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 220;
let timer;
let selectedOptions = {};

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    startTimer();
});

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            submitQuiz(); // Automatically submit when time is up
        }
    }, 1000);
}

function loadQuestion() {
    const questionContainer = document.getElementById('question_container');
    const optionContainer = document.getElementById('option_container');
    const number = document.getElementById('number');

    questionContainer.innerHTML = quizData[currentQuestionIndex].question;
    optionContainer.innerHTML = '';

    quizData[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener('click', () => selectAnswer(option, button));
        if (selectedOptions[currentQuestionIndex] === option) {
            button.style.backgroundColor = 'rgb(63, 197, 241)';
            button.style.color = 'white';
        }
        optionContainer.appendChild(button);
    });

    number.innerHTML = `${currentQuestionIndex + 1} / ${quizData.length}`;

    // Show submit button only on the last question
    if (currentQuestionIndex === quizData.length - 1) {
        document.getElementById('click').style.display = 'block';
    } else {
        document.getElementById('click').style.display = 'none';
    }
}

function selectAnswer(selectedOption, button) {
    document.querySelectorAll('#option_container button').forEach(btn => {
        btn.style.backgroundColor = '#333'; /* Dark background color for buttons */
        btn.style.color = '#e0e0e0'; /* Light color for text */
    });
    button.style.backgroundColor = 'rgb(63, 197, 241)';
    button.style.color = 'white';
    selectedOptions[currentQuestionIndex] = selectedOption;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        document.getElementById('display').innerHTML = '';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        document.getElementById('display').innerHTML = '';
    }
}


function submitQuiz() {
clearInterval(timer);
document.querySelectorAll('#option_container button').forEach(btn => btn.disabled = true);

quizData.forEach((item, index) => {
if (selectedOptions[index] === item.answer) {
    score++;
}
});

if (score >= 7) {
showFallingStars();
document.getElementById('congratsPopup').style.display = 'block';
} else {
document.getElementById('tryAgainPopup').style.display = 'block';
}

let resultText = `<h4>Your total score is ${score} out of ${quizData.length}</h4>`;
quizData.forEach((item, index) => {
resultText += `<p>Q: ${item.question}<br>A: ${item.answer}</p>`;
});

document.getElementById('result').innerHTML = resultText;
document.getElementById('click').style.display = 'none';
document.getElementById('next').style.display = 'none';
document.getElementById('previous').style.display = 'none';
document.body.insertAdjacentHTML('beforeend', '<button onclick="restartQuiz()">Restart Quiz</button>');
}


function showFallingStars() {
const container = document.querySelector('.container');
for (let i = 0; i < 30; i++) {
const star = document.createElement('div');
star.classList.add('falling-star');
star.style.width = `${Math.random() * 5 + 5}px`;
star.style.height = star.style.width;
star.style.left = `${Math.random() * 100}%`;
star.style.top = `${Math.random() * -100}px`;
container.appendChild(star);
setTimeout(() => star.remove(), 4000); // Remove star after it has fallen
}
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 220;
    selectedOptions = {};
    document.getElementById('time').textContent = timeLeft;
    document.getElementById('result').innerHTML = '';
    document.getElementById('click').style.display = 'none';
    document.getElementById('next').style.display = 'block';
    document.getElementById('previous').style.display = 'block';
    loadQuestion();
    startTimer();
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}
function updateStatus() {
const statusList = document.getElementById('status_list');
statusList.innerHTML = '';

quizData.forEach((item, index) => {
const listItem = document.createElement('li');
let statusClass = 'not-answered';
if (selectedOptions[index] === undefined) {
    statusClass = 'not-answered';
} else if (selectedOptions[index] === quizData[index].answer) {
    statusClass = 'answered';
} else {
    statusClass = 'skipped';
}
listItem.classList.add(statusClass);
listItem.textContent = `Q${index + 1}: ${statusClass.replace('-', ' ')}`;
statusList.appendChild(listItem);
});
}

function loadQuestion() {
const questionContainer = document.getElementById('question_container');
const optionContainer = document.getElementById('option_container');
const number = document.getElementById('number');

questionContainer.innerHTML = quizData[currentQuestionIndex].question;
optionContainer.innerHTML = '';

quizData[currentQuestionIndex].options.forEach(option => {
const button = document.createElement("button");
button.innerText = option;
button.addEventListener('click', () => selectAnswer(option, button));
if (selectedOptions[currentQuestionIndex] === option) {
    button.style.backgroundColor = 'rgb(63, 197, 241)';
    button.style.color = 'white';
}
optionContainer.appendChild(button);
});

number.innerHTML = `${currentQuestionIndex + 1} / ${quizData.length}`;

// Show submit button only on the last question
if (currentQuestionIndex === quizData.length - 1) {
document.getElementById('click').style.display = 'block';
} else {
document.getElementById('click').style.display = 'none';
}

// Update status list
updateStatus();
}

function selectAnswer(selectedOption, button) {
document.querySelectorAll('#option_container button').forEach(btn => {
btn.style.backgroundColor = '#333'; /* Dark background color for buttons */
btn.style.color = '#e0e0e0'; /* Light color for text */
});
button.style.backgroundColor = 'rgb(63, 197, 241)';
button.style.color = 'white';
selectedOptions[currentQuestionIndex] = selectedOption;

// Update status list
updateStatus();
}

