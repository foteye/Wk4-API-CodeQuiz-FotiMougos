//Onload
$(document).ready(function() {
    console.log( "Jquery working, page ready!" );
});

$('#btnStartQuiz').click(function () {
    $('.startScreen').hide();
    $('.qandaScreen').show();
});