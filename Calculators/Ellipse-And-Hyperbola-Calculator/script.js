function calculate() {
    var shape = document.getElementById('shape').value;
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').innerHTML = "Please enter valid values for 'a' and 'b'.";
        return;
    }

    var area = 0;
    var perimeter = 0;

    if (shape === 'ellipse') {
        area = Math.PI * a * b;
        perimeter = calculateEllipsePerimeter(a, b);
    } else if (shape === 'hyperbola') {
        area = Math.PI * Math.sqrt(a ** 2 + b ** 2);
    }

    var resultText = `${capitalizeFirstLetter(shape)} Area: ${area.toFixed(2)}`;

    if (shape === 'ellipse' && perimeter !== undefined) {
        resultText += `<br> Perimeter: ${perimeter.toFixed(2)}`;
    }

    document.getElementById('result').innerHTML = resultText;
}

function calculateEllipsePerimeter(a, b) {
    return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
