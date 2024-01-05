function calculate(event) {
    event.preventDefault();
    var shape = document.getElementById("shape").value;
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var resultContainer = document.getElementById("result");

    if (isNaN(length) || (isNaN(width) && (shape !== "circle"))) {
        resultContainer.textContent = "Please enter valid numerical values.";
        return;
    }

    var perimeter, area;

    switch (shape) {
        case "rectangle":
            perimeter = 2 * (length + width);
            area = length * width;
            break;
        case "square":
            perimeter = 4 * length;
            area = Math.pow(length, 2);
            break;
        case "circle":
            perimeter = 2 * Math.PI * length;
            area = Math.PI * Math.pow(length, 2);
            break;
        case "triangle":
            perimeter = 3 * length;
            area = (length * width) / 2;
            break;
        case "parallelogram":
            perimeter = 2 * (length + width);
            area = length * width;
            break;
        default:
            break;
    }

    resultContainer.textContent = "Perimeter: " + perimeter.toFixed(2) + ", Area: " + area.toFixed(2);
}
