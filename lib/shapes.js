const fs = require('fs')

class Shape {
    constructor(color, text) {
        this.color = color
        this.text = text
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(color, text) {
        super(color, text)
    }
    render() {
        const circle = `<circle cx="150" cy="100" r="80" fill="${this.color}" />` 
        const text = this.renderText()
        return `${circle}
                ${text}`
    }
}

class Triangle extends Shape {
    constructor(color, text) {
        super(color, text)
    }
    render(){
        const triangle = ``
        const text = this.renderText()
        return `${triangle}
                ${text}`
    }
   
}

class Square extends Shape {
    constructor(color, text) {
        super(color, text)
    }
    render() {
    const square = `<rect x="250" y="250"/>`
    const text = this.renderText()
    return `${square}
            ${text}`
    }   
}



// fs.writeFile('shape.svg', svgTemplate, (err, data) => {
//     err ? console.log(err) : console.log(data)
// })

module.exports = { Shape, Circle, Triangle, Square };