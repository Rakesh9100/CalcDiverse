function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function checkSpecialNumber() {
    const numberInput = document.getElementById("number");
    const number = numberInput.value;
    const resultElement = document.getElementById("result");
    const resultMessage = document.getElementById("resultMessage");

    if (number === "") {
        resultMessage.textContent = "Please enter a number";
        resultMessage.style.color = "orange";
        resultElement.style.display = "block";
        return;
    }

    const digits = number.split("");
    let sum = 0;

    for (let digit of digits) {
        sum += factorial(parseInt(digit));
    }

    if (sum == number) {
        resultMessage.textContent = `${number} is a special number because the sum of the factorial of digits is equal to the number itself!`;
    } else {
        resultMessage.textContent = `${number} is not a special number because the sum of the factorial of digits is not equal to the number itself!`;
    }

    resultElement.style.display = "block";
}
