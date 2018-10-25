let questions = [];
let filteredQuestions = [];
let loggedInUser = 1;
let selectedRadioQId = "incorrect";

document.addEventListener("DOMContentLoaded", () => {
  const userURL = "http://localhost:3000/api/v1/users";
  fetch(userURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        const newUser = new User(user);
      });
    });
  const questionURL = "http://localhost:3000/api/v1/questions";
  fetch(questionURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(question => {
        questions.push(new Question(question));
      });
    });

  const categoryURL = "http://localhost:3000/api/v1/categories";
  fetch(categoryURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(category => {
        const newCategory = new Category(category);
        newCategory.showCategory();
      });
    });

  const answeredQuestionURL = "http://localhost:3000/api/v1/answered_questions";
  fetch(answeredQuestionURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(a_q => {
        const newAnsweredQuestion = new AnsweredQuestion(a_q);
      });
    });
  document.getElementById("question-form").style.display = "none";
  document.getElementById("category-id").style.display = "none";
  document.getElementById('login-form').style.display = "none";
});
function showHideCategories() {
  let catCards = document.getElementById("category-id")
  catCards.style.display = "none" ? catCards.style.display = "block" : catCards.style.display = "none"
}

function showLogin() {
  const loginForm = document.getElementById('login-form')
  const loginButton = document.getElementById('login-button')

  if (event.target.id === "sign-up") {
    loginForm.style.display = "block"
    document.getElementById('login-header').innerText = 'Create Login'
    loginButton.value = 'Create Login'
    loginForm.addEventListener('submit', () => {
      event.preventDefault()
      authenticateUser(event)
      document.getElementById('login-form').style.display = "none";
    })
  } else if (event.target.id === "login") {
    loginForm.style.display = "block"
    document.getElementById('login-header').innerText = 'Login'
    loginButton.value = 'Login'
    loginForm.addEventListener('submit', () => {
      event.preventDefault()
      authenticateUser(event)
      document.getElementById('login-form').style.display = "none";
    })
  } else if (event.target.id === "logout") {
    console.log("LOGOUT CLICKED");
    loggedInUser = ""
    document.getElementById("question-form").style.display = "none";
    document.getElementById("category-id").style.display = "none";
  }
  //use an if statment to show the displays once the user is logged in.
}

function authenticateUser(event) {
  const body = {
    name: event.target.username.value
  }
  fetch("http://localhost:3000/api/v1/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body),
  }).then(r => r.json())
  .then(user => loggedInUser = user.id)
  .then(event.target.reset())
  .then(() => showHideCategories())
}

//this executes when a category button is clicked
function createFilteredQuestionsForCategory(event) {
  //stores all filtered questions for that category into a global variable
  filteredQuestions = questions.filter(question => {
    return question.cat_id == parseInt(event.target.dataset.id);
  });
  //executes next function and shows the question form
  console.log(filteredQuestions);
  displayQuestion();
  submitListener();
  event.preventDefault();
  document.getElementById('question-form').style.display = "block"
}
//if questions are still left in global array variable they will be removed, shown and start submit listener for question
function displayQuestion() {
  if (filteredQuestions.length > 0) {
    filteredQuestions.shift().showQuestion();
    console.log(filteredQuestions)
    //otherwise user will be alerted quiz is complete, hides the question form, and empties global variables
  } else {
    alert('Quiz Complete! Select another quiz by category if you want to play again.')
    document.getElementById("question-form").style.display = "none";
    filteredQuestions = [];
    selectedRadioQId = "incorrect";
  }
}
//captures all question radio events into a global variable. either 'correct' or 'incorrect' via dataset.id
function radioEvent(event) {
  event.target.dataset.id === "correct"
    ? (selectedRadioQId = event.target.dataset.id)
    : (selectedRadioQId = event.target.dataset.id);
}
//executed from displayQuestion(). starts submit listener on question, prevents refresh, and executes next function
function submitListener() {
  document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault()
    postAnsweredQuestion(event)
  })
}
//posts each answered question to the database via post request. uses global loggedinuser variable. then executes displayQuestion() again.
function postAnsweredQuestion(event) {
  const body = {
    user_id: loggedInUser,
    question_id: parseInt(event.target.dataset.id),
    correct_answer: selectedRadioQId === "incorrect" ? 0 : 1
  }
  fetch(`http://localhost:3000/api/v1/answered_questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body),
  }).then(() => displayQuestion())
}
