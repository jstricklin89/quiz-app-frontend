class User {
  constructor(user) {
    this.name = user.name;
    User.all.push(this);
  }

  showUser() {
    return `<li>${this.name}</li>`;
  }
}

User.all = [];
