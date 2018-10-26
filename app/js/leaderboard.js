const userStatsButton = document.getElementById("user-stats")
const leaderboardButton = document.getElementById("leaderboard")
const userStatsDiv = document.getElementById("user-stats-div")
const leaderboardDiv = document.getElementById("leaderboard-div")
//store all specific user stats here
let userStats = []
//store all stats here first, then extract user stats
let leaderboardStats = []

function fetchLeaderboardStats() {
  const answeredQuestionURL = "http://localhost:3000/api/v1/answered_questions";
  fetch(answeredQuestionURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(a_q => {
        leaderboardStats.push(a_q)
      });
    });
}

function showHideUserStats() {
  userStatsDiv.style.display = "none" ? userStatsDiv.style.display = "block" : userStatsDiv.style.display = "none"
}

function showHideLeaderboardDiv() {
  leaderboardDiv.style.display = "none" ? leaderboardDiv.style.display = "block" : leaderboardDiv.style.display = "none"
}

//add questions right, and questions wrong to the user div
function displayUserStats() {

}

//add questions right, and questions wrong to the leaderboard div
function displayLeaderboardStats() { 
  leaderboardDiv.style.display = "block"
  document.getElementById('leaderboard-header').style.display = "block"
  document.getElementById('leaderboard-hide').style.display = "block"
  let correctAnsCount = leaderboardStats.filter(obj => {
    return obj.correct_answer === true
  })
  leaderboardDiv.innerHTML = `<p>Total Correct Answers: ${correctAnsCount.length}</p>`

  let incorrectAnsCount = leaderboardStats.filter(obj => {
    return obj.correct_answer === false
  })
  leaderboardDiv.innerHTML += `<p>Total Incorrect Answers: ${incorrectAnsCount.length}</p>`
}

function hideLeaderboard() {
  leaderboardDiv.style.display = "none"
  document.getElementById('leaderboard-header').style.display = "none"
  document.getElementById('leaderboard-hide').style.display = "none"
}






