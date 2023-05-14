const inquirer = require('inquirer');
const shapes = require('./shapes')

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
    let shape = '';
    switch(response.shape) {
        case 'Circle':
        shape = new shapes.Circle(response.color, response.text)
            break;
        case 'Triangle':
        shape = new shapes.Triangle(response.color, response.text)
            break;
        case 'Square':
        shape = new shapes.Square(response.color, response.text)
            break; 
    }
    return shape.render()

})
