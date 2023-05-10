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
    test("Circle rendered blue", () => {
        const circle = new Circle('blue', 'SVG')
        const renderCircle = `<circle cx=150 cy=100 r=80 fill=blue />`
    })
})

