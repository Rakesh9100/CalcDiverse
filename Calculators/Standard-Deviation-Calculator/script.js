function calculate() {
    // Get the input values
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);

    // Calculate the mean
    const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

    // Calculate the standard deviation
    const variance = numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / numbers.length;
    const stddev = Math.sqrt(variance).toFixed(3);

    // Display the results
    document.getElementById('stddev').innerText = `Standard Deviation: ${stddev}`;
}
