var questions = [{
    'question' : 'You can initialise an empty array with: var arr = ?',
    'correctAnswer' : '[]',
    'incorrectAnswers' : ['<>','{}','()']   
},{
    'question' : 'Which one of the following is NOT a valid selector?',
    'correctAnswer' : 'document.querySelector("@myElement")',
    'incorrectAnswers' : ['document.querySelector("#mydiv")','document.querySelector(".myClass")','document.querySelector("div")'] 
},{
    'question' : 'Which one of the following best describes casting in Javascript?',
    'correctAnswer' : 'Change the data type of a variable to to another data type.',
    'incorrectAnswers' : ['The time taken to concentrate and shoot off a magic spell.','Sending your fishing line 30 meters off the edge of the reef.','Putting The Witcher on the TV via Chromecast']
},{
    'question' : 'Inside which HTML element do we put the JavaScript?',
    'correctAnswer' : '<script>',
    'incorrectAnswers' : ['<scripting>','<javascript>','<js>']
},{
    'question' : 'What is the correct syntax for referring to an external script called "xxx.js"?',
    'correctAnswer' : '<script src="xxx.js"',
    'incorrectAnswers' : ['<script href="xxx.js"','<script name="xxx.js"','<script "xxs.js">']
},{
    'question' : 'Which one of the following is valid syntax for an IF statement?',
    'correctAnswer' : 'if ( i == 5 ) { ... }',
    'incorrectAnswers' : ['if i == 5 { ... }','if ( i = 5 ) { ... }','if i = 5 then']
},{
    'question' : 'Which one of the following is valid syntax for a FOR loop?',
    'correctAnswer' : 'for ( var i = 0; i < x.length; i++ ) { ... }',
    'incorrectAnswers' : ['for ( var i = 0; i < x.lenght; i++ ) { ... }','for ( i++; i < 0; var i = 10) { ... } ','for each y in x do the thing']
},{
    'question' : 'Which one of the following is valid syntax for a comment in Javascript?',
    'correctAnswer' : '//This is a comment',
    'incorrectAnswers' : ['\\\\This is a comment','#This is a comment','\'This is a comment']
},{
    'question' : 'Which event occurs when a user clicks on a HTML element?',
    'correctAnswer' : 'onclick',
    'incorrectAnswers' : ['onmouseover','onchange','onmouseclick']
},{
    'question' : 'How do you declare a variable called \'carName\' in Javascript?',
    'correctAnswer' : 'var carName = "Beamer"',
    'incorrectAnswers' : ['v carName = "Beamer"','dim carName = "Beamer"','string carName = "Beamer"']
}];


//On Load
$(document).ready(function() {
    window.localStorage.setItem("data", "something");

});

/* Event Handlers */
// Start Quiz Button is Pressed
$('#btnStartQuiz').click(function () {
    startQuiz();    
});

$('#btnSubmitAnswer').click(function () {
    submitAnswer();
});


/* End Event Handlers */

//Start Quiz & Timer
//TODO: Start timer
function startQuiz(){
    $('.startScreen').hide();
    $('.qandaScreen').show();
}

// When an answer is submitted, score is incremented by 1
function submitAnswer(){
    //TODO: Get current active answer, check if correct or not, increment score accordingly. Then, load next question.
}