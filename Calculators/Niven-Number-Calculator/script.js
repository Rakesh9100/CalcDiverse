function checkNivenNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    if (numberInput === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    const number = parseInt(numberInput);
    const sumOfDigits = number
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);

    if (number % sumOfDigits === 0) {
        resultElement.textContent = `${number} is a Niven number. ${number} is divisible by ${sumOfDigits} (sum of its digits).`;
    } else {
        resultElement.textContent = `${number} is not a Niven number.`;
    }
}
