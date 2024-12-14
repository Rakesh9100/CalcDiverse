function calculateFactors() {
    // Retrieve the input value and parse it as an integer
    const number = parseInt(document.getElementById('number').value);
    // Get a reference to the result display div
    const resultDiv = document.getElementById('result');

    // Validate the input: check if it's a number and greater than 0
    if (isNaN(number) || number <= 0) {
        resultDiv.innerHTML = 'Please enter a positive number.';
        resultDiv.style.display = 'block';
        return;
    }

    let factors = [];
    // Loop through numbers from 1 to the input number
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    // Display the list of factors in the result div
    resultDiv.innerHTML = `Factors of ${number}: <strong>${factors.join(', ')}</strong>`;
    resultDiv.style.display = 'block';
}