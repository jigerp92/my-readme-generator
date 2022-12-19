// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "list",
        name: "license",
        message: "What license you would like?",
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

    }
    //email address, project name, description of project, what commends you use to run dependencies, what commends you use to run test, contributor, github repo link
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponses)=>{
        console.log("readmegenerated");
        writeToFile("README.md", generateMarkdown({...userResponses}));
    })
}

// Function call to initialize app
init();
