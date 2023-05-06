function Shape(letters, textColor, shapeColor) {
    this.letters = letters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
}

function Triangle(letters, textColor, shapeColor, shape) {
    Shape.call(this, letters, textColor, shapeColor);
    this.render = function () {
        const triangle = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <polygon points = "150, 200 300, 0 0, 0" stroke = "${this.shapeColor}" fill = "${this.shapeColor}" stroke-width = "5"/>

        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>`
    }
}