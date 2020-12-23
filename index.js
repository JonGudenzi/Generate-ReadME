const  inquirer = require('inquirer');
const fs = require("fs");
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown');

// array of questions for user
// const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
            {
                type: "input",
                name: "github",
                message: "What is you GitHub name?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },
            {
                type: "input",
                name: "title",
                message: "What is the title of your project?"
            },
            {
                type: "input",
                name: "description",
                message: "Please provide a brief description of the project",
            },
            {
                type: "input",
                name: "usage",
                message: "Please provide a brief description of how to use this application",
            },
            {
                type: "list",
                name: "license",
                message: "What type of license is used for this project?",
                choices: ["Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause 'Simplified' License",
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense']
            },
            {
                type: "input",
                name: "install",
                message: "What command should be run to install dependencies?",
                default: "npm i"
            },
            {
                type: "input",
                name: "test",
                message: "What command should be run to run tests?",
                default: "npm test"
            },
            {
                type: "input",
                name: "contribution",
                message: "What does the user need to know about contributing to the repo?",
            }
        ];

    
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Success!");
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// function call to initialize program
init();
