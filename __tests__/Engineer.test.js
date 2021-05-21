const Engineer = require("../lib/Engineer.js");

//test if github is string

test("test to check if github is a string", () => {
  const engineer = new Engineer("Dave", 5, "test@email.com", "github");
  expect(engineer.github).toEqual(expect.any(String));
});
