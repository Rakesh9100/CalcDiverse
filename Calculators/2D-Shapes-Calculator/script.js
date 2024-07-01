function calculate(event) {
    event.preventDefault();
    var shape = document.getElementById("shape").value;
    var numSides = parseFloat(document.getElementById("nofsides").value);
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var radius = parseFloat(document.getElementById("radius").value);
    var diagonal1 = parseFloat(document.getElementById("diagonal1").value);
    var diagonal2 = parseFloat(document.getElementById("diagonal2").value);
    var resultContainer = document.getElementById("result");
    var metric = document.getElementById("metric").value

    if (shape === "") {
        resultContainer.textContent = "Please select a shape.";
        return;
    } else if (shape === "square" || shape === "hexagon" || shape === "nsides") {
        if (isNaN(length)) {
            resultContainer.textContent = "Enter valid numerical value";
            return;
        }
    } else if (shape === "rhombus") {
        if (isNaN(diagonal1) || isNaN(diagonal2)) {
            resultContainer.textContent = "Enter valid numerical value";
            return;
        }
    } else if (shape === "circle") {
        if (isNaN(radius)) {
            resultContainer.textContent = "Enter valid numerical value";
            return;
        }
    } else {
        if (isNaN(length) || isNaN(width)) {
            resultContainer.textContent = "Enter valid numerical value";
            return;
        }
    }

    if (length < 0 || width < 0 || radius < 0 || diagonal1 < 0 || diagonal2 < 0) {
        resultContainer.textContent = "Enter a positive value.";
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
            perimeter = 2 * Math.PI * radius;
            area = Math.PI * Math.pow(radius, 2);
            break;
        case "triangle":
            perimeter = 3 * length;
            area = (length * width) / 2;
            break;
        case "parallelogram":
            perimeter = 2 * (length + width);
            area = length * width;
            break;
        case "rhombus":
            perimeter = 4 * Math.sqrt(Math.pow(diagonal1 / 2, 2) + Math.pow(diagonal2 / 2, 2));
            area = (diagonal1 * diagonal2) / 2;
            break;
        case "trapezoid":
            // Assuming the height is the average of the parallel sides
            var height = (length + width) / 2;
            perimeter = length + width;
            area = ((length + width) * height) / 2;
            break;
        case "hexagon":
            perimeter = 6 * length;
            area = (3 * Math.sqrt(3) * Math.pow(length, 2)) / 2;
            break;
        case "nsides":
            perimeter = numSides * length;
            area = (numSides * length * length) / (4 * Math.tan(Math.PI / numSides));
            break;
        // Add cases for more shapes as needed
        default:
            break;
    }
    resultContainer.textContent = `Perimeter: ${perimeter.toFixed(2)} ${metric}, Area: ${(area).toFixed(2)} ${metric}²`;
}


function showDimensions() {
    var shape = document.getElementById("shape").value;

    // Hide all dimension rows initially
    document.getElementById("nsides-row").style.display = "none";
    document.getElementById("length-row").style.display = "none";
    document.getElementById("width-row").style.display = "none";
    document.getElementById("radius-row").style.display = "none";
    document.getElementById("diagonal1-row").style.display = "none";
    document.getElementById("diagonal2-row").style.display = "none";

    // Show the relevant dimension row based on the selected shape
    switch (shape) {
        case "rectangle":
            document.getElementById("length-row").style.display = "block";
            document.getElementById("width-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "square":
            document.getElementById("length-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "circle":
            document.getElementById("radius-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "triangle":
            document.getElementById("length-row").style.display = "block";
            document.getElementById("width-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "parallelogram":
            document.getElementById("length-row").style.display = "block";
            document.getElementById("width-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "rhombus":
            document.getElementById("diagonal1-row").style.display = "block";
            document.getElementById("diagonal2-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "trapezoid":
            document.getElementById("length-row").style.display = "block";
            document.getElementById("width-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "hexagon":
            document.getElementById("length-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        case "nsides":
            document.getElementById("nsides-row").style.display = "block";
            document.getElementById("length-row").style.display = "block";
            document.getElementById("metric-row").style.display = "block";
            break;
        // Add cases for more shapes as needed
        default:
            break;
    }
}
