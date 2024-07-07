function reverseString(str) {
    return str.split('').reverse().join('');
}

function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

function checkSpecialNumber() {
    const number = document.getElementById('numberInput').value;
    const sumDigits = sumOfDigits(number);
    const reversedSum = reverseString(sumDigits.toString());
    const product = sumDigits * parseInt(reversedSum);

    const resultElement = document.getElementById('result');
    const detailsElement = document.getElementById('details');

    if (product === parseInt(number)) {
        resultElement.textContent = `${number} is a special number!`;
    } else {
        resultElement.textContent = `${number} is not a special number.`;
    }

    detailsElement.textContent = `Sum of digits: ${sumDigits}\nReversed sum: ${reversedSum}\nProduct: ${sumDigits} × ${reversedSum} = ${product}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('button').addEventListener('click', checkSpecialNumber);
});
