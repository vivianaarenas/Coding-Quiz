//create variables, includes pos which is what position user is in the test and/or what question they're up to
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC;

var test = document.getElementById("test");

const startBtn = document.getElementById("startButton");

startButton.addEventListener("click", startBtn);

startButton.addEventListener("click", questions);
// startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", () => {
  messageDiv.textContent = "";
});
chA.addEventListener("click", choice0);
chB.addEventListener("click", choice1);
chC.addEventListener("click", choice2);

startQuiz.onclick = startTimer;
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

function renderQuestion() {
  test = get("test");
  if (pos >= questions.length) {
    test.innerHTML =
      "<h2>You got " +
      correct +
      "of" +
      questions.length +
      "questions correct</h2>";
    get("test_status").innerHTML = "Test completed"; // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
}

get("test_status").innerHTML =
  "Question " + (pos + 1) + " of " + questions.length;

question = questions[pos].question;
chA = questions[pos].a;
chB = questions[pos].b;
chC = questions[pos].c;
