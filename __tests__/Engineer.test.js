const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

//test if github is string

test("test to check if github is a string", () => {
  const engineer = new Engineer("Dave", 5, "test@email.com", "github");
  expect(engineer.github).toEqual(expect.any(String));
});
// test getGithub
test("get engineers github", () => {
  const engineer = new Engineer("Dave", 5, "test@email.com", "github");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github)
  );
});

//test getRole
test("get role of engineer", () => {
  const engineer = new Engineer("Dave", 5, "test@email.com", "github");
  expect(engineer.getRole()).toEqual("Engineer");
});
