window.onload = function exampleFunction() {
    startQuiz()
}

let questions = [
    {
        id: 1,
        question: 'Wat is het favoriete dier van Cornell?',
        answer: 'Kat',
        options: ['Marmot', 'Beest', 'Mens', 'Kat'],
        answered: false
    }, {
        id: 2,
        question: 'Wat is het favoriete eten van Cornell?',
        answer: 'Vlees',
        options: ['Vlees', 'Groenten', 'Blegh', 'Dier'],
        answered: false
    }
];



/** HTML elements **/
let questionElement = document.getElementById('question');
let answerFields = [
    document.getElementById('answerOne'),
    document.getElementById('answerTwo'),
    document.getElementById('answerThree'),
    document.getElementById('answerFour')
];

function startQuiz() {
    initializeQuestion();
}

let answeredQuestions = [];
let currentQuestion = null;
let currentQuestionCorrectButton = null;
function initializeQuestion() {
    let question = questions[Math.floor(Math.random() * questions.length)];

    if (question.answered) {
        initializeQuestion()
    }

    currentQuestion = question;
    setQuestion();
}

/**
 * Fill buttons and title with correct text
 */
function setQuestion() {
    questionElement.innerText = currentQuestion.question;

    for ( const [i, element] of answerFields.entries()) {
        let currentOption = currentQuestion.options[i];

        // Set the correct answered button to global variable
        if (currentOption === currentQuestion.answer) {
            currentQuestionCorrectButton = element;
        }

        element.innerText = currentOption;
    }
}

function checkAnswer(clickedAnswerElement) {
    if (clickedAnswerElement.innerText === currentQuestion.answer) {
        // Set clicked box to green
    } else {
        // Set clicked box to red
        // Correct answer to green
    }

    // Show button to next question
}

