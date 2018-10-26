let questions = [];
let filteredQuestions = [];
let loggedInUser = ""
let selectedRadioQId = "incorrect";

const questionForm = document.getElementById("question-form")
const catCards = document.getElementById("category-id")
//toggle the categories section from show/hide
function showHideCategories() {
  catCards.style.display = "none" ? catCards.style.display = "block" : catCards.style.display = "none"
}

document.addEventListener("DOMContentLoaded", () => {
  //execute all initial fetches stored in fetchobjects.js
  fetchUsers()
  fetchQuestions()
  fetchCategories()
  fetchAnsweredQuestions()
  fetchLeaderboardStats()
  //hide questions, categories, and login at pageload
  leaderboardDiv.style.display = "none"
  document.getElementById('leaderboard-header').style.display = "none"
  document.getElementById('leaderboard-hide').style.display = "none"
  questionForm.style.display = "none";
  catCards.style.display = "none";
  document.getElementById('login-form').style.display = "none";
});