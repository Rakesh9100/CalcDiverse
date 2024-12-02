function calculate() {
    // Get input values
    const tickets = parseFloat(document.getElementById('tickets').value);
    const sold = parseFloat(document.getElementById('sold').value);

    // Validate inputs
    if (isNaN(tickets) || isNaN(sold) || sold <= 0) {
        document.getElementById('result').textContent = 'Please enter the values';
        return;
    }

    // Perform the calculation
    let r = tickets / sold;
    r = r * 100;
    let result = r.toFixed(2); // Limit to two decimal places
    result += "%";

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}
