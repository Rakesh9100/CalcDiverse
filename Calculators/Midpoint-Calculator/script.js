function calculateMidpoint(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get the values from the input fields
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    // Calculate the midpoint
    const midpointX = (x1 + x2) / 2;
    const midpointY = (y1 + y2) / 2;

    // Display the result
    document.getElementById('result').textContent = `Midpoint: (${midpointX}, ${midpointY})`;
}

// Clear the input fields and result when the page is loaded or refreshed
window.onload = function () {
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('result').textContent = '';
}
