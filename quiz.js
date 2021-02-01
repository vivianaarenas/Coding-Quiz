const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
var introPageDiv = document.getElementById("introPage");

// create our questions
let questions = [
  {
    question: "Arrays in JavaScript can be used to store ______ ",
    imgSrc: "img/js.png",
    choiceA: "Numbers and Strings and Other Arrays",
    choiceB: "Booleans",
    choiceC: "Both",
    correct: "C",
  },
  {
    question: "What does CSS stand for?",
    imgSrc: "img/css.png",
    choiceA: "Common Style Sheet",
    choiceB: "Cascading Style Sheet",
    choiceC: "Colorful Style Sheet",
    correct: "B",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______.",
    imgSrc: "img/code.png",
    choiceA: "quotes",
    choiceB: "square brackets",
    choiceC: "curly brackets",
    correct: "C",
  },
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 60;
const questionTime = 60; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
const highScore = {
  score: 0,
  initials: "",
};

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  introPageDiv.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count--;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    highScore.score += 10;
    console.log(highScore.score);
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    count -= 10;
    answerIsWrong();
  }
  //count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  // highScores.style.display = "block";
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * highScore.score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "img/5.png"
      : scorePerCent >= 60
      ? "img/4.png"
      : scorePerCent >= 40
      ? "img/3.png"
      : scorePerCent >= 20
      ? "img/2.png"
      : "img/1.png";

  scoreDiv.innerHTML += `
  <img src='${img}'>
  <div>
    <p>Your score is: ${highScore.score}</p>
          Enter initials: <input id='initialsInput'>
    <button id='SaveHighScore'>Save</button>
  </div>
  `;

  var saveHighScore = document.getElementById("SaveHighScore");
  var initialsInput = document.getElementById("initialsInput");
  saveHighScore.addEventListener("click", function () {
    const initialValue = initialsInput.value.trim();
    highScore.initials = initialValue;

    localStorage.setItem("highScore", JSON.stringify(highScore));

    console.log(highScore);
    renderHighScore();
  });

  function renderHighScore() {
    var highScoreDIV = document.createElement("div");
    var storedHighscore = JSON.parse(localStorage.getItem("highScore"));
    var storedScore = storedHighscore.score;

    var storedInitials = storedHighscore.initials;

    highScoreDIV.innerHTML = `<p> ${storedInitials} - ${storedScore}</p>`;
  }

  //var initialsInput = document.createElement("<input>");
  //scoreDiv.innerHTML = "<p>" + score + "%</p>";
}
