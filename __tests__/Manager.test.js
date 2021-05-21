//require manager .js

const Manager = require("../lib/Manager");
//test if office number is a number
test("checks if office number is number", () => {
  const manager = new Manager("Dave", 5, "test@email.com", 25);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
