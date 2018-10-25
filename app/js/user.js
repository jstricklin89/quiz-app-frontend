class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    User.all.push(this);
  }

  //we're going to create user and handle the login and the logout in the class. The logout needs to just clear the global variable...the global variable is loggedInUser.
}
User.all = [];
