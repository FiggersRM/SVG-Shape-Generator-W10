function Shape(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
}

function Triangle(letters, textColor, shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        const triangle = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <polygon points = "5, 200 150, 5 300, 200" stroke = "${this.shapeColor}" fill = "${this.shapeColor}" stroke-width = "5"/>

        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}" dominant-baseline="hanging">${this.letters}</text>`

        return triangle;
    }
}

function Circle(letters, textColor, shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        const circle = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="95" stroke = "${this.shapeColor}" fill = "${this.shapeColor}" stroke-width = "5"/>

        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}" dominant-baseline="middle">${this.letters}</text>`

        return circle;
    }
}

function Square(letters, textColor, shapeColor) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        const square = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <rect x="0" y="0" width="300" height="200" stroke = "${this.shapeColor}" fill = "${this.shapeColor}" stroke-width = "5"/>

        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}" dominant-baseline="middle">${this.letters}</text>`

        return square;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
}