//CLASS
class Quiz {
    constructor (questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
//What question am I on?    
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
//Guess property: User selects a possible answer
    guess(answer) {
        console.log(this.getQuestionIndex().answer)
        if (this.isCorrectAnswer(this.getQuestionIndex().answer)){
            this.score++;
        }
        this.questionIndex++;
    }
//Is the selected choice correct?
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }

//Quiz has finished when all the questions were answered
    isFinished() {
        return this.questionIndex === this.questions.lenght;
    }
}
//QUESTION CLASS
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
}
//DISPLAY QUESTION
function displayQuestion() {
    if (quiz.isFinished()) {
        showScores();
    } else {
        //display next question
        let questionElement =document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;


        //display multiple choices
        let choices = quiz.getQuestionIndex().choices;
        console.log(choices);
        //Object which contet all the questions and options
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementsByClassName("btn");
            console.log(choiceElement[i]);
            choiceElement[i].textContent = choices[i];
            guess("btn" + i, choices [i]);
        }
        showProgress();
    }
};

//GUESS FUNCTION
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

//PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex +1;
    let progressElement = document.getElementById("progress");
    progressElement.textContent= `Question ${currentQuestionNumber}`;
}

//QUIZ QUESTIONS
let questions = [
    new Question (
     'Inside which HTML element do we put the JavaScript?',
     ['<scripting>','<js>','<script>','<javascript>'],
     '<script>',   
    ),
    new Question (
    'How do you create a function in JavaScript?',
    ['function:myFunction()','function myFunction()','function = myFunction()','function myFunction'],
    'function myFunction()',   
    ),
    new Question (
    'How can you add a comment in a JavaScript?',
    ['Coment:This is a comment','<!--This is a comment-->','//This is a comment','*This is a comment'],
    '//This is a comment',   
    ),
    new Question (
    'Which event occurs when the user clicks on an HTML element?',
    ['onmouseclick','onchange','onclick','onmouseover'],
    'onclick',   
    ),
    new Question (
    'What is the correct way to write a JavaScript array?', 
    ['var colors = 1 = ("red), 2 =("green"), 3 = ("blue)','var colors = ["red", "green", "blue"]','var colors = "red", "green", "blue"','var colors = (1:"red",2:"green", 3:"blue")'],
    'var colors = ["red", "green", "blue"]',   
    ),
];

let quiz = new Quiz (questions);

//DISPLAY QUESTION
displayQuestion();



