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
        const newQuestion = new Question(question);
        document.getElementById(
          "question"
        ).innerHTML += newQuestion.showQuestion();
      });
    });
});
