function calculateTemperature() {
    // Get input values
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
  
    // Check for empty inputs
    if (isNaN(a) || a === 0) {
      alert("Please enter a valid value for a");
    } else if (isNaN(b) || b === 0) {
      alert("Please enter a valid value for b");
    } else {
      // Calculate temperatures with correct units
      var temperature = a / (b * 8.314); // in Kelvin
      var temperature1 = a / (b * 0.0821); // in Kelvin
  
      // Round outputs to 2 decimal places
      temperature = temperature.toFixed(2);
      temperature1 = temperature1.toFixed(2);
  
      // Display results
      document.getElementById('result').innerHTML = 'Boyle Temperature (When R = 8.314 J.K^(-1).mol^(-1)): ' + temperature + ' K and Boyle Temperature (When R = 0.0821 L.atm.K^(-1).mol^(-1)): ' + temperature1 + ' K';
  
    }
}

// Function to reset the form
function resetForm() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('result').innerHTML = '';
}

// Add event listener to reset button
document.getElementById('resetButton').addEventListener('click', resetForm);
