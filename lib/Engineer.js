const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
  constructor(role, name, id, email, githubUserName) {
    //call parent instruct
    super(role, name, id, email);
    this.githubUserName = githubUserName;
  }

  getGithub() {
    return this.githubUserName;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
