class Employee {
  constructor(role, name, id, email) {
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  //   getId()

  getId() {
    if (this.id === 0) {
      return false;
    } else {
      this.id = id++;
    }
  }
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
