let questions = []
let filteredQuestions = []
document.addEventListener("DOMContentLoaded", () => {
  const userURL = "http://localhost:3000/api/v1/users";
  fetch(userURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        const newUser = new User(user);
        document.getElementById("user-list").innerHTML += newUser.showUser();
      });
    });
  const questionURL = "http://localhost:3000/api/v1/questions";
  fetch(questionURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(question => {
        questions.push(new Question(question))
      });
    })
  const categoryURL = "http://localhost:3000/api/v1/categories";
  fetch(categoryURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(category => {
        const newCategory = new Category(category);
        document.getElementById(
          "category"
        ).innerHTML += newCategory.showCategory();
      });
    });
  const answeredQuestionURL = "http://localhost:3000/api/v1/answered_questions";
  fetch(answeredQuestionURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(a_q => {
        const newAnsweredQuestion = new AnsweredQuestion(a_q);
        document.getElementById(
          "answered-question"
        ).innerHTML += newAnsweredQuestion.showAnsweredQuestion();
      });
    });
});

function createFilteredQuestionsForCategory(event) {
  filteredQuestions = questions.filter(question => {
    return question.cat_id == parseInt(event.target.dataset.id)
  })
  displayQuestion()
}

function displayQuestion() {
  if (filteredQuestions.length > 0) {
    filteredQuestions.shift().showQuestion()
    submitListener()
  } else {
    document.getElementById('question-form').style.display = "none"
  }
}

function submitListener() {
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    postAnsweredQuestion(event)
  })
}

function postAnsweredQuestion(event) {
  debugger
  const postQuestionURL = "http://localhost:3000/api/v1/answered_questions"
  fetch(`postQuestionURL/${event.target.dataset.id}`, {

  })
}



