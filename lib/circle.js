const Shape = require('./shapes')

class Circle extends Shape {
    constructor(color, text, radius) {
        super(color, text)
        this.radius = radius
    }
    makeCircle() {console.log('circle created')}
}

const circle = new Circle('blue', 'hello', '80')

console.log(circle);

const circleTemplate = `<circle cx="150" cy="100" r="80" fill="blue" />`

module.exports = Circle 