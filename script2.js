var Scores = JSON.parse(localStorage.getItem("High-Scores"));
if (Scores == null) {
  Scores = [];
}
var initialsInput = document.querySelector("#initials-input");
var NumberStop = 0;
var TimerNumber = 15;
var CounterNumber = document.querySelector("#Countdown-number");
var questionIndex = 0;
var choicesEl = document.getElementById("choices");
var startQuizButton = document.getElementById("start-quiz");
var HighScoresButton = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");
var finalScore = document.getElementById("final-score");
var highScoresDisplay = document.querySelector("#highscores-display");
var score = 0;
function startQuiz() {
  NumberStop = setInterval(TimerDecrease, 1000);

  // Remove start screen text
  // get the first question
  startQuizButton.style.display = "none";
  initialsInput.style.display = "none";
  getQuestion();
}

function displayScores() {
  highScoresDisplay.innerHTML = "";
  for (var i = 0; i < Scores.length; i++) {
    highScoresDisplay.innerHTML += `${Scores[i].Initials}: ${Scores[i].Score}<br>`;
  }
}
HighScoresButton.addEventListener("click", displayScores);
function getQuestion() {
  var currentQuestion = myQuestions[questionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  var answers = Object.values(currentQuestion.answers);
  answers.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice
    choiceNode.onclick = questionClick;
    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}
startQuizButton.onclick = function() {
  startQuiz();
};
function questionClick() {
  // check if user guessed wrong
  if (this.value !== myQuestions[questionIndex].correctAnswer) {
    feedbackEl.textContent = "Wrong!";
    TimerNumber -= 1;
    CounterNumber.innerText = TimerNumber;
  } else {
    feedbackEl.textContent = "Correct!";
    score += 1;
  }
  // move to next question
  questionIndex++;
  // check if we've run out of questions
  if (questionIndex === myQuestions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}
var myQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers"
    },
    correctAnswer: "alerts"
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "parentheses",
      d: "square brackets"
    },
    correctAnswer: "parentheses"
  },
  {
    question: "What type of CSS Selector Matches element names?",
    answers: {
      a: "Universal Selector",
      b: "Type Selector",
      c: "Class Selector",
      d: "ID Selector"
    },
    correctAnswer: "Type Selector"
  },
  {
    question: "Tags are often referred to as:",
    answers: {
      a: "elements",
      b: "arrays",
      c: "attributes",
      d: "characters"
    },
    correctAnswer: "elements"
  }
];

function TimerDecrease() {
  if (TimerNumber > 0) {
    TimerNumber--;
  } else {
    quizEnd();
  }
  CounterNumber.innerText = TimerNumber;
}

function quizEnd() {
  var points = score * 5 + TimerNumber;
  clearInterval(NumberStop);
  // add a div for the final score
  // grab that div and add the final score value
  finalScore.innerHTML = `You got ${score} out of ${myQuestions.length} correct.<br>You got ${points} points.`;
  HighScoresButton.style.display = "block";
  Scores.push({ Score: points, Initials: initialsInput.value });
  localStorage.setItem("High-Scores", JSON.stringify(Scores));
}
