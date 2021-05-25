//require fs
const fs = require("fs"); // require inquire
const inquirer = require("inquirer");
// const { prototype } = require("./lib/Employee");
//require lib file
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");

//require page template
// const pageTemplate = require("./src/page-template");

let employeeArr = [];

const promptRole = () => {
  console.log("Welcome to my Team Profile Generator!");
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        choices: ["Engineer", "Manager", "Intern", "My team is complete!"],
        message: "Which role would you like to add?",
      },
    ])
    .then((res) => {
      if (res.role !== "My team is complete!") {
        promptEmployee(res.role);
      } else {
        //write file
        const writeToFile = (employeeData) => {
          fs.writeFileSync("develop.html", generatePage(employeeData), "utf-8");
        };
        writeToFile(employeeArr);
        console.log("Your team is set!!");
        console.log(employeeArr);

        return employeeArr;
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
        promptManager(res, role);
      } else if (role == "Engineer") {
        promptEngineer(res, role);
      } else if (role == "Intern") {
        promptIntern(res, role);
      }
    });
};

// promptEmployee();

const promptManager = (data, type) => {
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
      const manager = new Manager(
        type,
        data.name,
        data.ID,
        data.email,
        officeNumber
      );
      console.log(manager);
      employeeArr.push(manager);
      promptRole();
    });
};
const promptEngineer = (data, type) => {
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
        type,
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

const promptIntern = (data, type) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Please enter your school",
      },
    ])
    .then(({ school }) => {
      const intern = new Intern(type, data.name, data.ID, data.email, school);
      console.log(intern);
      employeeArr.push(intern);
      promptRole();
    });
};

// promptRole();
// TODO: Create a function to write html

// const writeToFile = (employeeArr) => {
//   fs.writeFileSync("develop.html", employeeArr, "utf-8");
// };

// TODO: Create a function to initialize app
promptRole();
// .then((employeeData) => {
//   return generatePage(employeeData);
// })
// .then((employeeData) => {
//   return writeToFile(employeeData);
// })
// .catch((err) => {
//   console.log(err);
// });
