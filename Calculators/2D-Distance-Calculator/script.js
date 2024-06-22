document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#animated-text", {
        strings: [
            "2D Distance Calculator",
            "Calculate distances with ease"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});

// Function to calculate the distance
function calculateDistance() {
    // Get input values
    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);

    // Check if input values are valid
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers for both points.';
        return;
    }

    // Calculate distance
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Display the result
    document.getElementById('result').innerHTML = 'Distance: ' + distance.toFixed(2);
}

// Function to reset the form
function resetForm() {
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('result').innerHTML = '';
}

// Add event listener to reset button
document.getElementById('resetButton').addEventListener('click', resetForm);
