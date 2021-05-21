const Intern = require("../lib/Intern");

//test if school is a string
test("check is school is string", () => {
  const intern = new Intern("Dave", 5, "test@email.com", "UTA");

  expect(intern.school).toEqual(expect.any(String));
});
