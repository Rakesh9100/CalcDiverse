function checkNarcissisticNumber() {
    const number = document.getElementById('numberInput').value;
    const digits = number.split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

    const result = document.getElementById('result');
    if (number === "") {
        result.textContent = "Please enter a number.";
        return;
    }
    
    if (sum == number) {
        result.textContent = `${number} is a Narcissistic number.`;
    } else {
        result.textContent = `${number} is not a Narcissistic number.`;
    }
}
