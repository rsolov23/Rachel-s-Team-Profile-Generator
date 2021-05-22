const Employee = require("../lib/Employee.js");

//write a test if name is string
test("creates employee object", () => {
  const employee = new Employee("Dave", 5, "test@gmail.com");

  expect(employee.name).toBe("Dave");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
// test getName
test("get employees name", () => {
  const employee = new Employee("Dave", 5, "test@gmail.com");
  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

//test getId
test("gets employee id", () => {
  const employee = new Employee("Dave", 5, "test.email.com");

  //revisit this
  expect(employee.id).toEqual(expect.any(Number));
});
//test getEmail
test("get employee email address", () => {
  const employee = new Employee("Dave", 5, "test.email.com");

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});
// test getRole
test("get employee role", () => {
  const employee = new Employee("Dave", 5, "test.email.com");
  expect(employee.getRole()).toEqual("Employee");
});
