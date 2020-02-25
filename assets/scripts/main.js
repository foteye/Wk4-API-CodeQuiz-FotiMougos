/* Event Handlers */
//On Load
$(document).ready(function() {

});

// Start Quiz Button is Pressed
$('#btnStartQuiz').click(function () {
    gameLoop();    
});

$('#answerList').children().click(function (event){
    $('#answerList').children().removeClass('active');
    $(event.target).addClass('active');
});

/* End Event Handlers */

class Timer {
    constructor(display){
        this.timer = display;
        this.startTime = "";
        this.duration = "";
        this.totalTime = 300000;
    }

    start(){
        //this.timer.show();
        this.startTime = Date.now();
        var self = this;
        this.interval = setInterval(() => {
            this.timeLeft = (this.totalTime - (Date.now() - this.startTime));
            var minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
            if (minutes < 10) minutes="0"+minutes;
            var seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
            if (seconds < 10) seconds="0"+seconds;

        $('#countdown').text("Questions Answered: " + localStorage.getItem('answeredQuestions')  + " | Time Left: " + minutes + "m " + seconds + "s");
            console.log(minutes + "m " + seconds + "s");

        },100);
    }

    stop() {
        clearInterval(this.interval);
        this.duration = (Date.now() - this.startTime);
    }
}

class Quiz {
    constructor(){
        this.questions = [{
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
        this.score = 0;
        this.answeredQuestions = 0;
        window.localStorage.setItem('answeredQuestions', 0);
        window.localStorage.setItem('finished', false);

        $('.startScreen').hide();
        $('.qandaScreen').show();

        this.loadNextQuestion();
    }

    /*  Should be called once at the start, then again after each answer is submitted.
        This function loads the question and answers into the following elements:
            * Question Number  => #questionNumber (this.answeredQuestions.length + 1)
            * Question Text => #questionText
            * Answers => #answerList children (randomize)
    */
    loadNextQuestion(){
        if (this.questions.length  === 0){
            window.localStorage.setItem('finished', true);
            return;
        }

        // Tidy up previous question
        $('#answerList').children().removeClass('correct');
        $('#answerList').children().removeClass('active');

        // Generate a random question and remove it from the list
        var index = Math.floor(Math.random() * this.questions.length);
        var question = this.questions[index];
        this.questions.splice(index,1);

        //Load question number and text
        $("#questionNumber").text('Question ' + (this.answeredQuestions + 1));
        $("#questionText").text(question.question);
        
        //Set correct answer to a random box
        var answerBoxes = ['a','b','c','d'];
        var correctIndex  = Math.floor(Math.random() * answerBoxes.length);
        
        $('#answer-' + answerBoxes[correctIndex]).text(question.correctAnswer); //Set correct answer to random box
        $('#answer-' + answerBoxes[correctIndex]).addClass('correct'); //Add correct class so we can check later
        answerBoxes.splice(correctIndex,1); //Remove index of correct answer
        
        // Populate the rest of the boxes with incorrect answers
        for (var answer of question.incorrectAnswers){
            var incorrectIndex = Math.floor(Math.random() * answerBoxes.length);
            $('#answer-' + answerBoxes[incorrectIndex]).text(answer);
            answerBoxes.splice(incorrectIndex,1);
        }
    }

    // When an answer is submitted, score is incremented by 1
    submitAnswer(){
        var submittedAnswer = $("#answerList").children('.active').attr('id');
        var correctAnswer = $("#answerList").children('.correct').attr('id');

        if (submittedAnswer == correctAnswer){
            //Correct answer
            this.score += 1;
        }

        this.answeredQuestions += 1;
        window.localStorage.setItem('answeredQuestions', this.answeredQuestions);
        this.loadNextQuestion();
    }
    
    endQuiz(){
        $('.qandaScreen').hide();
        $('.summaryScreen').show();
    }

    
}

//Start Quiz & Timer - This should be the game loop
//TODO: Start timer
function gameLoop(){
    var quiz = new Quiz();

    $('#btnSubmitAnswer').click(function () {
        if ($("#answerList").children('active')){
            quiz.submitAnswer();
        } else {
            alert('Please select an answer');
        } 
    });
    
    var timer = new Timer($('#timer'));
    timer.start();
    
    //Game Finished
    // timer.stop();
    console.log(quiz);

}



