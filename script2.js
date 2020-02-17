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
    }
  ];
  ​
  var questionIndex = 0;
  var choicesEl = document.getElementById("choices");
  var startQuizButton = document.getElementById("start-quiz");
  var submitButton = document.getElementById("submit");
  var feedbackEl = document.getElementById("feedback");
  var finalScore = document.getElementById("final-score");
  var score = 0;
  ​
  function startQuiz() {
    // Remove start screen text
    // get the first question
    startQuizButton.style.display = "none";
    submitButton.style.display = "none";
    getQuestion();
  }
  ​
  function getQuestion() {
    var currentQuestion = myQuestions[questionIndex];
  ​
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.question;
  ​
    choicesEl.innerHTML = "";
  ​
    var answers = Object.values(currentQuestion.answers);
  ​
    answers.forEach(function(choice, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  ​
      choiceNode.textContent = i + 1 + ". " + choice;
  ​
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  ​
      // display on the page
      choicesEl.appendChild(choiceNode);
    });
  }
  ​
  startQuizButton.onclick = function() {
    startQuiz();
  };
  ​
  function questionClick() {
    // check if user guessed wrong
    if (this.value !== myQuestions[questionIndex].correctAnswer) {
      feedbackEl.textContent = "Wrong!";
    } else {
      feedbackEl.textContent = "Correct!";
      score += 1;
    }
    // move to next question
    questionIndex++;
  ​
    // check if we've run out of questions
    if (questionIndex === myQuestions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  ​
  function quizEnd() {
    // add a div for the final score
    // grab that div and add the final score value
    finalScore.innerText = `You got ${score} out of ${myQuestions.length} correct.`;
  }
  Collapse
  
  
  
  