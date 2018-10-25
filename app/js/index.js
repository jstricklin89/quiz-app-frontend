let questions = [];
let filteredQuestions = [];
let users = [];
document.addEventListener("DOMContentLoaded", () => {
  const userURL = "http://localhost:3000/api/v1/users";
  fetch(userURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        users.push(new User(user));

        // document.getElementById("user-list").innerHTML += newUser.showUser();
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
        // document.getElementById(
        //   "answered-question"
        // ).innerHTML += newAnsweredQuestion.showAnsweredQuestion();
      });
    });
  document.getElementById("question-form").style.display = "none";
  document.getElementById("category-id").style.display = "none";
});

function showLogin() {
  const signUp = document.getElementById("sign-up");
  const login = document.getElementById("login");
  const logout = document.getElementById("logout");
  const navbarNav = document.getElementById("navbarNav");
  // navbarNav.addEventListener("click", function(event) {
  //   console.log("CLICKED");
  // });

  if (event.target.id === "sign-up") {
    ///the top part is SIMPLY showing/hiding the correct form and form text.
    //use validation, not authentication. the validation will prevent duplicates in the database. when you do a fetch .then() you should do a .catch() which catches errors. Don't do a .then() and just leave it b/c need a .catch() after that.
    //this should be done after the event listener for the login button.
    //maybe use cookies to keep someone logged in on the front end. It's easy to implement in JS.
    id = event.target.dataset;
    fetch("http://localhost:3000/api/v1/users/"`${id}`);
    //this is going to be a post. It will take the event value when you hit submit and post it.
    //on signup it will be a post after you create a new user on the JavaScript side. new user and feed in target value of name. It'll create a user on the JS side and on the backend side. After it posts to back end and creats a user in the JS User Class, you want to store that user as loggedInUser.
    console.log("SIGNUP CLICKED");
  } else if (event.target.id === "login") {
    //this goes into a user creation/user login function: it's going to compare the data value to the user's array (up top).
    //I'm simply making the login form look corretly here.
    console.log("LOGIN CLICKED");
  } else if (event.target.id === "logout") {
    console.log("LOGOUT CLICKED");
    //when logout happens we are going to remove the loggedInUser and hide both of the page elements.
    document.getElementById("question-form").style.display = "none";
    document.getElementById("category-id").style.display = "none";
  }
  if (user) {
    //use an if statment to show the displays once the user is logged in.
    document.getElementById("question-form").style.display = "block";
    document.getElementById("category-id").style.display = "block";
  }
}

function createFilteredQuestionsForCategory(event) {
  filteredQuestions = questions.filter(question => {
    return question.cat_id == parseInt(event.target.dataset.id);
  });
  displayQuestion();
}

function displayQuestion() {
  if (filteredQuestions.length > 0) {
    filteredQuestions.shift().showQuestion();
    submitListener();
  } else {
    document.getElementById("question-form").style.display = "none";
  }
}

function submitListener() {
  document.addEventListener("submit", event => {
    event.preventDefault();
    postAnsweredQuestion(event);
  });
}

function postAnsweredQuestion(event) {
  const body = {};
  debugger;
  const postQuestionURL = "http://localhost:3000/api/v1/answered_questions";
  fetch(`postQuestionURL/${event.target.dataset.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  });
}
