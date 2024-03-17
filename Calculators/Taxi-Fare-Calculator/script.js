document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get input values
    const basicFare = parseFloat(document.getElementById('basic-fare').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const ratePerKm = parseFloat(document.getElementById('rate-per-km').value);
    const time = parseFloat(document.getElementById('time').value);
    const ratePerMinute = parseFloat(document.getElementById('rate-per-minute').value);

    // Check if any field is empty
    if (isNaN(basicFare) || isNaN(distance) || isNaN(ratePerKm) || isNaN(time) || isNaN(ratePerMinute)) {
        document.getElementById('result').innerHTML = "<h2>Please enter all fields.</h2>";
    } else {
        // Calculate fare
        const fare = basicFare + (distance * ratePerKm) + (time * ratePerMinute);

        // Display the result
        document.getElementById('result').innerHTML = `<h2>Calculated Fare: $${fare.toFixed(2)}</h2>`;
    }
});