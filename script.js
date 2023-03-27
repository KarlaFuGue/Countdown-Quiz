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
        if (this.getQuestionIndex().isCorrectChoice(answer)){
            this .score++;
        }
        this.questionIndex++;
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
//Is the selected choice correct?
    isCorrectAnswer(choice) {
        return this.answer === choice;
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
        //Object which contet all the questions and options
        for (let i = 0; i < choices.lenght; i++) {
            let choiceElement = document.getElementsByClassName("btn");
            choiceElement.innerHTML = choices [i];
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
    progressElement = `Question ${currentQuestionNumber}`;
}


//QUIZ QUESTIONS
let questions = [
    new Question (
     'Inside which HTML element do we put the JavaScript?',
     ['<scripting>','<js>','<script>','<javascript>'],
     '<script>',   
    ),
    new Question (
    'Where is the correct place to insert a JavaScript?',
    ['<body> section','<head> section','Both sections <head> & <body> are coreect'],
    '<script>',   
       ),

];

let quiz = new Quiz (questions);

//DISPLAY QUESTION
displayQuestion();



