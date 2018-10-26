//actions for each navbar button: signup, login, logout
function showLogin() {
  const loginForm = document.getElementById('login-form')
  const loginButton = document.getElementById('login-button')
  const loginHeader = document.getElementById('login-header')

  if (event.target.id === "sign-up") {
    loginForm.style.display = "block"
    loginHeader.innerText = 'Create Login'
    loginButton.value = 'Create Login'
    loginForm.addEventListener('submit', () => {
      event.preventDefault()
      authenticateUser(event)
      loginForm.style.display = "none";
    })
  } else if (event.target.id === "login") {
      if (loggedInUser === "") {
      loginForm.style.display = "block"
      loginHeader.innerText = 'Login'
      loginButton.value = 'Login'
      loginForm.addEventListener('submit', () => {
        event.preventDefault()
        authenticateUser(event)
        loginForm.style.display = "none"
      })
      } else {
        alert(`A user is still logged in. Please logout before login attempt.`)
      }
  } else if (event.target.id === "logout") {
    loggedInUser = ""
    questionForm.style.display = "none";
    catCards.style.display = "none";
  }
}
//authenticates a user after login or sign up is submitted. then returns and sets the loggedinuser var.
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