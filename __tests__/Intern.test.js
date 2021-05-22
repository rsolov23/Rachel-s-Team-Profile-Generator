const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

//test if school is a string
test("check is school is string", () => {
  const intern = new Intern("Dave", 5, "test@email.com", "UTA");

  expect(intern.school).toEqual(expect.any(String));
});
// test getSchool
test("get school", () => {
  const intern = new Intern("Dave", 5, "test@email.com", "UTA");
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});
//test getRole
test("get role od intern", () => {
  const intern = new Intern("Dave", 5, "test@email.com", "UTA");
  expect(intern.getRole()).toEqual("Intern");
});
