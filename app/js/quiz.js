//this executes when a category button is clicked
function createFilteredQuestionsForCategory(event) {
  //stores all filtered questions for that category into a global variable
  filteredQuestions = questions.filter(question => {
    return question.cat_id == parseInt(event.target.dataset.id);
  });
  //executes next function and shows the question form
  displayQuestion();
  submitListener();
  event.preventDefault();
  document.getElementById("question-form").style.display = "block";
}
//if questions are still left in global array variable they will be removed, shown and start submit listener for question
function displayQuestion() {
  if (filteredQuestions.length > 0) {
    filteredQuestions.shift().showQuestion();
    //otherwise user will be alerted quiz is complete, hides the question form, and empties global variables
  } else {
    alert(
      "Quiz Complete! Select another quiz by category if you want to play again."
    );
    questionForm.style.display = "none";
    filteredQuestions = [];
    selectedRadioQId = "incorrect";
  }
}
//captures all question radio events into a global variable. either 'correct' or 'incorrect' via dataset.id
function radioEvent(event) {
  selectedRadioQId = event.target.dataset.id;
}
//executed from displayQuestion(). starts submit listener on question, prevents refresh, and executes next function
function submitListener() {
  document
    .getElementById("question-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      postAnsweredQuestion(event);
    });
}
//posts each answered question to the database via post request. uses global loggedinuser variable. then executes displayQuestion() again.
function postAnsweredQuestion(event) {
  const body = {
    user_id: loggedInUser,
    question_id: parseInt(event.target.dataset.id),
    correct_answer: selectedRadioQId === "incorrect" ? 0 : 1
  };
  fetch(`http://localhost:3000/api/v1/answered_questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(() => clearRadioButton())
    .then(() => displayQuestion());
}

function clearRadioButton() {
  var ele = document.getElementsByName("answerRadios");
  for (var i = 0; i < ele.length; i++) ele[i].checked = false;
}
