$(".reset").hide();
$(".start").on("click", function() {
    $(".start").hide();
    showQuestion();
    for (i = 0; i < questions.length; i++){
        contain.push(questions[i]);
    }
})

function startTimer(){
	if (!running) {
	   timeInterval = setInterval(function everySecond() {
	       if (timer === 0) {
	           showQuestion();
	           timer = 20;
	       }
	       timer--;
	       $(".timerDiv").html("<p>" + "Time Remaining: " + timer + "</p>")
	   }, 1000); //thousand milliseconds or one second
	   running = true;
	}
}

/// Variable holds Questions
var questions = [
    {
        question: "Who was fired at the end of season 3?",
        choices: ["Chase", "Cameron", "Foreman", "House"],
        answer: 0,
    },
    {
        question: "Which one of these people weren't apart of House's team?",
        choices: ["Cameron", "Chase", "Foreman", "Cuddy"],
        answer: 3,
    },
    {
        question: "How much money does Edward Vogler bring to the hospital?",
        choices: ["$10 Million", "$100 Million", "$100 Thousand", "$10 Thousand"],
        answer: 1,
    },
    {
        question: "What was House's first name?",
        choices: ["Greg", "Greggory", "Alex", "Wilson"],
        answer: 1,
    },
    {
        question: "Who plays doctor House?",
        choices: ["Hugh Laurie", "Robert Sean Leonard", "Jesse Spencer", "Kal Penn"],
        answer: 0,
    },
    {
        question: "In the episode where the babies were dying from a bacterial disease, the old lady that made the bears was causing it",
        choices: ["True", "False"],
        answer: 0,
    },
    {
        question: "Did Dr.Cameron ever have a baby with her first husband?",
        choices: ["True", "False"],
        answer: 1,
    }];

var running = false;
var timer = 20;
var timeInterval;
var scoreCorrect = 0;
var scoreWrong = 0;
var scoreUA = 0;
var questionsShown = 0;
var userAnswer = "";
var questionList = questions.length;
var counterStart = false;
var newArray = [];
var contain = [];
var choose;
var index;

function showQuestion() {
    questionsShown++;
    if(questionsShown === questions.length){
        //Game over
        //Show score
        clearInterval(timeInterval);
        running = false;
        $(".reset").show();
        //attach click handler to reset button that resets the game
        $(".reset").on("click", function() {
            
        })
    }
    $(".answerDiv").empty();
    startTimer();
    index = Math.floor(Math.random() * questions.length);
    choose = questions[index];
    $(".questionDiv").html("<p>" + choose.question + "</p>");
    for (i = 0; i < choose.choices.length; i++){
        let userGuess = $("<div>");
        userGuess.addClass("guesschoice");
        userGuess.html(choose.choices[i]);
        userGuess.attr("data-guessvalue", i);
        //userGuess.on("click", function(){ });
        userGuess.click(function(event){
            //choose.answer //index number for your correct answer
            //userGuess.attr("data-guessvalue"); //Retrieve the userguess attribute
            if(choose.answer === userGuess.data('guessvalue')){
                scoreCorrect++;
                $(".scoreCorrect").html("<p>" + "Total Points: " + scoreCorrect + "</p>");
                showQuestion();
            } else {
                showQuestion();
            }
        });
        $(".answerDiv").append(userGuess);
    }
}

function resetGame() {
    showQuestion();
}