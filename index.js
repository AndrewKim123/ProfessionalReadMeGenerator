const mkgen = require('./utils/generateMarkdown');
const fs = require("fs");
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What's your title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information of your project?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What is the contribution guidelines of your project?"
    },
    {
        type: "input",
        name: "instructions",
        message: "What are the test instructions of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What is the license of your project?",
        choices: ["Apache", "Boost", "BSD 3", "BSD 2", "none"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your usename for GitHub?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

  ])
  .then((answers) => fs.writeFile("./README.md", mkgen(answers), err=>{if (err) throw err}))