const cli = require('./lib/cli')
const shapes = require('./lib/shapes')

const svgTemplate = 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${cli.shape.render()}

</svg>`
