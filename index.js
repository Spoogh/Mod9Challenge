// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/script.js');


// TODO: Create an array of questions for user input
const questions = ()=>{
    return inquirer.prompt([
        {
        type: 'input',
        name: 'READMETitle',
        message: 'What is the project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter anything that needs to be installed.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'contact',
        message: 'How should you be contacted?',
      },
    ])
};


// TODO: Create a function to write README file
const writeReadMe = ({ READMETitle, description, installation, usage, github, contact }) =>
  `# ${READMETitle}

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage 
  ${usage}
  
  ## Github
  ${github}

  ## Contact
  ${contact}`;


// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) =>{
        const readMeData = writeReadMe(answers);

        fs.writeFile('README.md', readMeData, (err)=>
        err ? console.log(err) : console.log('README created!'))
    });
}

// Function call to initialize app
init();