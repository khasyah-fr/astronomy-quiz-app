const quizData = [
    {
        question: 'What is the center of our galaxy ?',
        a: 'A Massive Star Formation',
        b: 'A Giant Black Hole',
        c: 'A Bright Nebula',
        correct: 'b' 
    },
    {
        question: 'How many planets are in our solar sytem ?',
        a: '7',
        b: '8',
        c: '9',
        correct: 'b'
    },
    {
        question: 'Which body is the most dense in the universe ?',
        a: 'Dwarf Planet',
        b: 'Comet',
        c: 'Neutron Star',
        correct: 'c'
    },
    {
        question: 'How many humans had landed on the moon ?',
        a: '12',
        b: '13',
        c: '14',
        correct: 'a'
    }
];

const atext = document.getElementById('atext');
const btext = document.getElementById('btext');
const ctext = document.getElementById('ctext');
const submitBtn = document.getElementById('submit')
const question = document.getElementById('question');
const quiz = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;


loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuestion];

    question.innerText = currentQuizData.question;
    atext.innerText = currentQuizData.a;
    btext.innerText = currentQuizData.b;
    ctext.innerText = currentQuizData.c;

    deselectRadio();
}

function deselectRadio(){
    let answersElement = document.querySelectorAll('.answer');

    answersElement.forEach(answerElement => {
        answerElement.checked = false;
    });
}

function getSelectedRadio() {
    let answersElement = document.querySelectorAll('.answer');

    let answer = undefined;

    answersElement.forEach(answerElement => {
        if(answerElement.checked){
            answer = answerElement.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {

    let answerId = getSelectedRadio();

    if(answerId !== undefined){

        if(answerId == quizData[currentQuestion].correct){
            score += 25;
        }

        if(currentQuestion < (quizData.length - 1)){

            currentQuestion++;
            loadQuiz();

        } else {
            //TODO: SHOW SCORE
            quiz.innerHTML = 
            `<h6> You scored ${score} points out of 100. 🎉 </h6>
             <button onclick="location.reload()"> Play Again? </button>`;
        }
    } else {
        alert("Please check the option");
    }
})