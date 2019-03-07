$(document).ready(function () {
    $(".reset").hide();
});

var timer = 20;
var timeInterval;
var scoreCorrect = 0;
var scoreWrong = 0;
var scoreUA = 0;
var userAnswer = "";
var questionList = questions.length;
var counterStart = false;


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
