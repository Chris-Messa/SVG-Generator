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
        return `${circle}\n${text}`
    }
}

class Triangle extends Shape {
    constructor(color, text) {
        super(color, text)
    }
    render(){
        const triangle = `<polygon points="50,150 150,0 250,150" fill="${this.color}"/>`
        const text = this.renderText()
        return `${triangle}\n${text}`
    }
   
}

class Square extends Shape {
    constructor(color, text) {
        super(color, text)
    }
    render() {
    const square = `<rect x="75" y="33" width="150" height="150" fill="${this.color}"/>`
    const text = this.renderText()
    return `${square}\n${text}`
    }   
}




module.exports = { Shape, Circle, Triangle, Square };