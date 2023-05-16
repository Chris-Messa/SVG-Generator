const { Shape, Circle, Triangle, Square } = require('./shapes')

describe('Shape', () => {
    test("Shape is being built", () => {
        const shape = new Shape('red', 'hello')
        expect(shape.color).toEqual('red')
    })
    test("Shape has correct text", () => {
        const shape = new Shape('red', 'hello')
        expect(shape.text).toEqual('hello')
    })
    test("Shape has correct text", () => {
        const shape = new Shape('red', 'hello')
        expect(shape.text).toEqual('hello')
    })
    test("Shape text rendered", ()=> {
        const shape = new Shape('blue', 'hello')
        const testRenderText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">hello</text>`
        expect(testRenderText).toEqual(shape.renderText())
    })
})

describe('Circle', () => {
    test("Circle rendered", () => {
        const circle = new Circle('green', 'SVG')
        const testRenderCircle = `<circle cx="150" cy="100" r="80" fill="green" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`
        expect(testRenderCircle).toEqual(circle.render());
    })
})
describe('Triangle', () => {
    test("Triangle rendered", () => {
        const triangle = new Triangle('green', 'SVG')
        const testRenderTriangle = `<polygon points="50,150 150,0 250,150" fill="green"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`
        expect(testRenderTriangle).toEqual(triangle.render());
    })
})
describe('Square', () => {
    test("Square rendered", () => {
        const square = new Square('green', 'SVG')
        const testRenderSquare = `<rect x="75" y="33" width="150" height="150" fill="green"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`
        expect(testRenderSquare).toEqual(square.render());
    })
})

