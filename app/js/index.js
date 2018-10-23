document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/users'
  fetch(endPoint)
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      const newUser = new User(user)
      document.getElementById('user-list').innerHTML += newUser.showUser()
    })
  })
})

