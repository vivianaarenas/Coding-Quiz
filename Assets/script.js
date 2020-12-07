//create variables, includes pos which is what position user is in the test and/or what question they're up to
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC;

//array of questions from which the code quiz pulls from, it's an multidimensional array with 4 inner array elements
var questions = [
  {
    question: "Arrays in JavaScript can be used to store ______ ",
    a: "Numbers and Strings and Other Arrays",
    b: "Booleans",
    c: "Both",
    answer: "C",
  },
  {
    question: "What does CSS stand for?",
    a: "Common Style Sheet",
    b: "Cascading Style Sheet",
    c: "Colorful Style Sheet",
    answer: "B",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______.",
    a: "quotes",
    b: "square brackets",
    c: "curly brackets",
    answer: "C",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    a: "curly brackets",
    b: "parenthesis",
    c: "quotes",
    answer: "A",
  },
];

//function in order to get elements for the getElementById function

function get(x) {
  return document.getElementById(x);
}
