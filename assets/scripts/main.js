

/* Event Handlers */
//Onload
$(document).ready(function() {
    console.log( "Jquery working, page ready!" );
});

//Start Quiz
//TODO: Start timer
$('#btnStartQuiz').click(function () {
    $('.startScreen').hide();
    $('.qandaScreen').show();
});