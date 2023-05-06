const Shapes = require('./shapes');

describe('Shapes', () => {
    describe ('Triangle', () => {
        it('should create a new triangle with the given parameters', () => {
        const triangle = new Shapes.Triangle('RMF', 'white', 'blue');
        expect(triangle.shapeColor).toEqual('blue');
        expect(triangle.textColor).toEqual('white');
        })
    })
})