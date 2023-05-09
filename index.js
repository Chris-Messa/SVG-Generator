const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Enter 3 characters for the logo text',
        name: 'text',
    },
    {
        type: 'list',
        message: 'Choose the shape you would like to use',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'list', 
        message: 'Choose a color for your shape',
        name: 'color',
        choices: ['Green', 'Blue', 'Red', 'Yellow', 'Purple']
    }
]

inquirer.prompt(questions)
.then((response) => {
    console.log(response);
})