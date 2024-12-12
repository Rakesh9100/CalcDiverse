function calculateFactors() {
    const number = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(number) || number <= 0) {
        resultDiv.innerHTML = 'Please enter a positive number.';
        resultDiv.style.display = 'block';
        return;
    }

    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    resultDiv.innerHTML = `Factors of ${number}: <strong>${factors.join(', ')}</strong>`;
    resultDiv.style.display = 'block';
}