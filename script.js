var myQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers"
    },
    correctAnswer: "c"
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
function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showResults(questions, quizContainer, restultsContainer) {}
  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];
      for (letter in questions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name ="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ":" +
            questions[i].answers[letter] +
            "</label>"
        );
      }
      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class ="answers">' +
          answers.join("") +
          "</div>"
      );
    }
    quizContainer.innerHTML = output.join("");
  }

  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
  };
}
