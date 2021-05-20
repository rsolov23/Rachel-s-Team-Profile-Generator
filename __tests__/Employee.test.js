const Employee = require("../lib/Employee.js");

//write a test if name is string
test("checks if employee has name, id, and email", () => {
  const employee = new Employee("Dave", 5, "test@gmail.com");

  expect(employee.name).toBe("Dave");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
//write a test if id is a number
//write a test for valid email
