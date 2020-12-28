// * Pseudocoding Coding Quiz
// A user first sees a title page that introduces the rules of the game,
// inside the title card page, the user can press the start quiz button which will load the first question
// first question and answers are displayed,
// timer is adjusted to remove 10 seconds each time you get an answer wrong
// go through the questions and the score that remains will be your high school
// add high score and initials to list, which is saved to a high score list

var body = document.body;
var secondsEl = document.getElementById("timeLeft");

let currentQuestion = 0;

const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");
const questionEl = document.createElement("h2");

//const readyQuiz = document.getElementById("readyQuiz");
const gameShow = document.getElementById("gameShow");
const quiz = document.getElementById("quiz");
//creates a new div element that the questions are going to be shown in,
const showQuestions = document.createElement("div");

//as we create the element, we declare it up here, but we use it wherever it needs to be used in the function

var questions = [
  {
    question: "Arrays in JavaScript can be used to store ______ ",
    choices: ["Numbers and Strings and Other Arrays", "Booleans", "Both"],
    //we're doing this to target the index to later get the answer, which will be done with a function in the future
    answer: "Both",
    //we're going to match answer,
    //wait for a click from the user,
    //and get value from that click,
    //which will be one of the choices,
    //and compare if that matches what we have as the correct answer of that choice,
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Common Style Sheet",
      "Cascading Style Sheet",
      "Colorful Style Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______.",
    choices: ["quotes", "square brackets", "curly brackets"],
    answer: "curly brackets",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["curly brackets", "parenthesis", "quotes"],
    answer: "curly brackets",
  },
];

//make my first button to test out start quiz button
// startButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   alert("You did it!");
// });

// question = questions[pos].question;
// chA = questions[pos].a;
// chB = questions[pos].b;
// chC = questions[pos].c;

var secondsLeft;
var timerInterval;

function setTime() {}

//whenever you load the page, it's going to load this function init
function init() {
  secondsLeft = 60;
}

init();

function startQuiz() {
  quizContainer.style.display = "none";

  //quiz.style.display = "block";

  timerInterval = setInterval(function () {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;
    console.log(secondsLeft);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  displayQuestion();
}

startButton.addEventListener("click", startQuiz);

function displayQuestion() {
  //loop through these questions, and for each question, you're going to make an element for the question itself
  //for the element, you're going to give value/text content of that elemnt to equal to the question from the questions array
  //loop through questions, find the title
}
// // display a question
// function displayQuestion() {
//   let q = questions[currentQuestion];

//   question.innerHTML = "<p>" + q.question + "</p>";
//   a.innerHTML = q.a;
//   b.innerHTML = q.b;
//   c.innerHTML = q.c;

// start quiz

// $("#startButton").click(function() {
//   // Hide the intro and show the game screen
//   $("#gameIntro").fadeOut(1000);

//create variables, includes pos which is what position user is in the test and/or what question they're up to
// var pos = 0;
// var correct = 0;
// var test, test_status, question, choice, choices, chA, chB, chC;

// var test = document.getElementById("test");

// const startBtn = document.getElementById("startButton");

// // ************** Event Listeners ***************
// startButton.addEventListener("click", questions);
// startButton.addEventListener("click", setTime);
// startButton.addEventListener("click", () => {
//   messageDiv.textContent = "";
// });
// chA.addEventListener("click", choice0);
// chB.addEventListener("click", choice1);
// chC.addEventListener("click", choice2);

// startBtn.addEventListener("click", function (event) {
//   event.preventDefault();
// });

//startQuiz.onclick = startTimer;
//array of questions from which the code quiz pulls from, it's an multidimensional array with 4 inner array elements

// //function in order to get elements for the getElementById function

// function get(x) {
//   return document.getElementById(x);
// }

// function renderQuestion() {
//   test = get("test");
//   if (pos >= questions.length) {
//     test.innerHTML =
//       "<h2>You got " +
//       correct +
//       "of" +
//       questions.length +
//       "questions correct</h2>";
//     get("test_status").innerHTML = "Test completed"; // resets the variable to allow users to restart the test
//     pos = 0;
//     correct = 0;
//     // stops rest of renderQuestion function running when test is completed
//     return false;
//   }
// }

// get("test_status").innerHTML =
//   "Question " + (pos + 1) + " of " + questions.length;

// function setTime() {
//   let timerInterval = setInterval(() => {
//     time--;
//     timer.textContent = `Timer: ${time}`;

//     if (time === 0) {
//       clearInterval(timerInterval);
//       alert("You ran out of time!");
//       endGame();
//     } else if (questionIndex === questions.length) {
//       clearInterval(timerInterval);
//     }
//   }, 1000);
//   return score;
// }

// // ************ Select Answer Function *****************
// function selectAnswer(answer) {
//   if (
//     questions[questionIndex].answer === questions[questionIndex].choices[answer]
//   ) {
//     messageDiv.textContent = "Correct!";
//     score += 20;
//     console.log(score);
//     correctSound.play();
//   } else {
//     messageDiv.textContent = "Incorrect!";
//     score -= 20;
//     time -= 10;
//     incorrectSound.play();
//   }
//   questionIndex++;
//   showNextQuestion();
// }
