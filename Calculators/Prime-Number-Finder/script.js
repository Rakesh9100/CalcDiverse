function checkPrime() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');
    const starImage = document.getElementById('starImage');

    if (number <= 1) {
        resultElement.textContent = `${number} is not a prime number.`;
        starImage.style.display = 'none';
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultElement.textContent = `${number} is a prime number!`;
        starImage.style.display = 'inline';
    } else {
        resultElement.textContent = `${number} is not a prime number.`;
        starImage.style.display = 'none';
    }
}