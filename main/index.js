//this is where the main logic lie
//you will first require all of the titles and nodes packages needed
//engineer, Manager, Intern,
//require that page-template.js
//we are receiving that anonymous function
//giving the name pageTemplate
// const pageTemplate = require(`./src/page-template.js`);
//and now, we can use that pagetemplete as a function, which can accept a a parameter
// pageTemplate(answers_from_inquirer_prompt);
// and now, we can use that pageTemplate as a function, which can Accept a parameter
//index files are considered the entry point to your application
//if this is your entry point, you must do your inquirer here
//this is where you do your FS write file stuff
// the dist folder is where the output html files will land
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/manager");
// create writeFile function using promises instead of a callback function
const team = [];
// const generateHTML = require("./generateHTML.js");
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    //   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    // .then((answers) => console.log(answers))
    .then((answers) => {
      team.push(new Manager(answers.name, 44, answers.email, answers.office)) 
        // new Engineer(answers.name, 48, answers.email, answers.github),
        // new intern(answers.name,100, answers.email, answers.school)];

      // team.printInfo();
      console.log(team);
      // console.log(team.getGitHub());
      // console.log(team, getSchool());

    

      // pass team to page-template.js here & save to variable
      // call writeFileAsync, passing in varbiale from line 39
    })
    .catch((err) => console.error(err));
};

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "What is your title?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",
    },
    {
      type: "confirm",
      name: "add",
      message: "add another employee?",
    },
    

    // {
    //   type: "input",
    //   name: "role",
    //   message: "What is your title?",
    // },
    // {
    //   type: "input",
    //   name: "name",
    //   message: "What is your name?",
    // },
    // {
    //   type: "input",
    //   name: "email",
    //   message: "What is your email?",
    // },
    // {
    //   type: "input",
    //   name: "github",
    //   message: "What is your github username?",
    // },
    // {
    //   type: "confirm",
    //   name: "add",
    //   message: "add another employee?",
    // },
    // {
    //   type: "input",
    //   name: "role",
    //   message: "What is your title?",
    // },
    // {
    //   type: "input",
    //   name: "name",
    //   message: "What is your name?",
    // },
    // {
    //   type: "input",
    //   name: "email",
    //   message: "What is your email?",
    // },
    // {
    //   type: "input",
    //   name: "office",
    //   message: "Where do you go to School?",
    // },
    // {
    //   type: "confirm",
    //   name: "add",
    //   message: "add another employee?",
    // },
  ]);
};
init();
