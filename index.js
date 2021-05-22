//require fs
const fs = require("fs"); // require inquire
const inquirer = require("inquirer");
// const { prototype } = require("./lib/Employee");
//require lib file
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//require page template
const pageTemplate = require("./src/page-template");

let employeeArr = [];

const promptRole = () => {
  console.log("Welcome to my Team Profile Generator!");
  inquirer
    .prompt([
      {
        type: "list",
        choices: ["Engineer", "Manager", "Intern", "My team is complete!"],
        name: "choice",
        message: "Which role would you like to add?",
      },
    ])
    .then((res) => {
      if (res.choice !== "My team is complete!") {
        promptEmployee(res.choice);
      } else {
        console.log(employeeArr);
        console.log("Your team is set!!");
        //do something with this, maybe put it into pagetemplate, I don't know
      }
    });
};
const promptEmployee = (role) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        Message: "Please enter your name",
      },
      {
        type: "input",
        name: "ID",
        message: "PLease enter employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your Email Address",
      },
    ])
    .then((res) => {
      if (role == "Manager") {
        promptManager(res);
      } else if (role == "Engineer") {
        promptEngineer(res);
      } else if (role == "Intern") {
        promptIntern(res);
      }
    });
};

// promptEmployee();

const promptManager = (data) => {
  //   promptEmployee();

  return inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "what is office number?",
      },
    ])
    .then(({ officeNumber }) => {
      const manager = new Manager(data.name, data.ID, data.email, officeNumber);
      console.log(manager);
      employeeArr.push(manager);
      promptRole();
    });
};
const promptEngineer = (data) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "githubUserName",
        message: "Please enter your github username",
      },
    ])
    .then(({ githubUserName }) => {
      const engineer = new Engineer(
        data.name,
        data.ID,
        data.email,
        githubUserName
      );
      console.log(Engineer);
      employeeArr.push(engineer);
      promptRole();
    });
};

const promptIntern = (data) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Please enter your school",
      },
    ])
    .then(({ school }) => {
      const intern = new Intern(data.name, data.ID, data.email, school);
      console.log(intern);
      employeeArr.push(intern);
      promptRole();
    });
};
promptRole();
