

/* Event Handlers */
//Onload
$(document).ready(function() {
    console.log( "Jquery working, page ready!" );
    window.localStorage.setItem("data", "something");

});

//Start Quiz
//TODO: Start timer
$('#btnStartQuiz').click(function () {
    $('.startScreen').hide();
    $('.qandaScreen').show();
});