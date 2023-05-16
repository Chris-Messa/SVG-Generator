const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const fs = require('fs');

const validateInput = (input) => {
    if (input.length ===3) {
        return true;
    } else {
        return 'Text must contain exactly 3 characters'
    }
}

const questions = [
    {
        type: 'input',
        message: 'Enter 3 characters for the logo text',
        name: 'text',
        validate: validateInput
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



function generateSVG(shape) {
    
    const svgTemplate = `<html>
    <head>
      <title>SVG Example</title>
    </head>
    <body>
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
  
          ${shape.render()}
    </svg>
    </body>
    </html>`

    fs.writeFile('index.html', svgTemplate, (err, data) => {
        err ? console.log(err) : console.log(data)
    })

}

inquirer.prompt(questions)
.then((response) => {
    let shape = '';
    switch(response.shape) {
        case 'Circle':
        shape = new shapes.Circle(response.color.toLowerCase(), response.text)
            break;
        case 'Triangle':
        shape = new shapes.Triangle(response.color.toLowerCase(), response.text)
            break;
        case 'Square':
        shape = new shapes.Square(response.color.toLowerCase(), response.text)
            break; 
    }
    return generateSVG(shape)

})
