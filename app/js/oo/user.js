class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    User.all.push(this);
  }

}

User.all = [];
