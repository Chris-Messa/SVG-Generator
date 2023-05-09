const fs = require('fs')
class Shape {
    constructor(color, text) {
        this.color = color
        this.text = text
    }
}

const myShape = new Shape('blue', 'rect', 'LOL') 

svgTemplate = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${myShape.color}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${myShape.text}</text>

</svg>`


fs.writeFile('shape.svg', svgTemplate, (err, data) => {
    err ? console.log(err) : console.log(data)
})

