document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/users'
  fetch(endPoint)
  .then(response => response.json())
  .then(data => showUsers(data))
})

function showUsers(data) {
  let ul = document.getElementById('user-list')
  ul.innerHTML = ""
  data.forEach((user) => {
    ul.innerHTML += `<li>${user.name}</li>`
  })
}