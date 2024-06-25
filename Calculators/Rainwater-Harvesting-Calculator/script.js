function calculateRainwater() {
    // Get the input values
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);
    const capacity = parseFloat(document.getElementById('capacity').value);

    // Calculate the roof area
    const area = length * width;

    // Calculate the total rainwater collected annually
    const totalRainwater = area * (rainfall / 1000) * efficiency * 1000;

    // Display the result
    const resultElement = document.getElementById('total-water');
    resultElement.textContent = `${totalRainwater.toFixed(2)} litres`;

    // Show the result container
    document.getElementById('result').style.display = 'block';
}
