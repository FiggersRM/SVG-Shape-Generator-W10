const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

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
        message: 'Which color would you like your text to be? Please use a color keyword or a hexadecimal value',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'Which color would you like you shape to be? Please use a color keyword or a hexadecimal number',
        name: 'shapeColor'
    }
])
.then ((response) => {
    data = response;
})