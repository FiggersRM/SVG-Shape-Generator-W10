const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes');

inquirer
.prompt ([
    {
        type: 'list',
        message: 'Which shape would you like to use for your logo?',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Which letters would you like in your logo (Up to three)',
        name: 'letters',
    },
    {
        type: 'input',
        message: 'Which color would you like your text to be? Please use a color keyword or a hexadecimal value including the #.',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'Which color would you like you shape to be? Please use a color keyword or a hexadecimal number including the #.',
        name: 'shapeColor'
    }
])
.then ((response) => {
    data = response;
    console.log(data);
    if (data.shape === "Triangle") {
        const triangle = new Shapes.Triangle(data.letters, data.textColor, data.shapeColor);
        const svgStr = triangle.render();
        fs.writeFile('logo.svg', svgStr, (err) => err ? console.error(err) : console.log('Generated logo.svg'));
    } else if (data.shape === "Circle") {
        const circle = new Shapes.Circle(data.letters, data.textColor, data.shapeColor);
        const svgStr = circle.render();
        fs.writeFile('logo.svg', svgStr, (err) => err ? console.error(err) : console.log('Generated logo.svg'));
    } else {
        const square = new Shapes.Square(data.letters, data.textColor, data.shapeColor);
        const svgStr = square.render();
        fs.writeFile('logo.svg', svgStr, (err) => err ? console.error(err) : console.log('Generated logo.svg'));
    }
})