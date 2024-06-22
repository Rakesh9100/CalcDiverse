function calculate() {
    // Get input values
    const doraX = parseFloat(document.getElementById('doraX').value);
    const doraY = parseFloat(document.getElementById('doraY').value);
    const objectX = parseFloat(document.getElementById('objectX').value);
    const objectY = parseFloat(document.getElementById('objectY').value);
    const maxDistance = parseFloat(document.getElementById('maxDistance').value);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; // Clear previous results

    // Check if inputs are valid numbers
    if (isNaN(doraX) || isNaN(doraY) || isNaN(objectX) || isNaN(objectY) || isNaN(maxDistance)) {
        alert("Enter the correct values.");
        return;
    }

    // Calculate the distance
    const distance = Math.sqrt(Math.pow(objectX - doraX, 2) + Math.pow(objectY - doraY, 2));

    // Determine visibility
    const isVisible = distance <= maxDistance;

    // Display the result
    resultDiv.innerHTML = `Distance between Dora and the object: ${distance.toFixed(2)}<br>`;
    if (isVisible) {
        resultDiv.innerHTML += "The object is visible to Dora.";
    } else {
        resultDiv.innerHTML += "The object is not visible to Dora.";
    }
}
