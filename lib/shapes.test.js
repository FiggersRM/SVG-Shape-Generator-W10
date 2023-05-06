const Shapes = require('./shapes');

describe('Shapes', () => {
    describe ('Triangle', () => {
        it('should create a new triangle with the given parameters', () => {
        const triangle = new Shapes.Triangle('RMF', 'white', 'blue');
        expect(triangle.shapeColor).toEqual('blue');
        expect(triangle.textColor).toEqual('white');
        expect(triangle.letters).toEqual('RMF');
        })
    })
    describe('Circle', () => {
        it('should create a new circle with the given parameters', () => {
            const circle = new Shapes.Circle('AAA', 'white', 'green');
            expect(circle.shapeColor).toEqual('green');
            expect(circle.textColor).toEqual('white');
            expect(circle.letters).toEqual('AAA');
        })
    })
})