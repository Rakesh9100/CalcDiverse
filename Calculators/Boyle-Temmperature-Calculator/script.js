

// Function to calculate the distance
function calculateTemperature() {
    // Get input values
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);

   console.log("hii");
    // Calculate distance
    var temperature = a/(b*8.314);
    var temperature1 = a/(b*0.0821);

    // Display the result
    document.getElementById('result').innerHTML = 'Boyle Temperature (When R = 8.314 J.K^(-1).mol^(-1)): ' + temperature +' and Boyle Temperature (When R = 0.0821 L.atm.K^(-1).mol^(-1)): ' + temperature1;
}

// Function to reset the form
function resetForm() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('result').innerHTML = '';
}

// Add event listener to reset button
document.getElementById('resetButton').addEventListener('click', resetForm);