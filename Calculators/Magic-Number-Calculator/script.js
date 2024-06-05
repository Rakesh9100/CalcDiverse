// script.js

function handleOptionChange() {
    const option = document.getElementById('option-select').value;
    document.getElementById('single-number-section').style.display = option === "single" ? 'block' : 'none';
    document.getElementById('range-section').style.display = option === "range" ? 'block' : 'none';
}

function calculateDigitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function isMagicNumber(num) {
    while (num >= 10) {
        num = calculateDigitSum(num);
    }
    return num === 1;
}

function checkMagicNumber() {
    const num = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');
    if (num === "") {
        resultDiv.textContent = "Please enter a number.";
        return;
    }
    const isMagic = isMagicNumber(parseInt(num));
    resultDiv.textContent = isMagic ? `${num} is a Magic Number!` : `${num} is not a Magic Number.`;
}

function findMagicNumbersInRange() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const rangeResultDiv = document.getElementById('range-result');
    if (isNaN(start) || isNaN(end) || start > end) {
        rangeResultDiv.textContent = "Please enter a valid range.";
        return;
    }

    let magicNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isMagicNumber(i)) {
            magicNumbers.push(i);
        }
    }
    
    rangeResultDiv.textContent = magicNumbers.length > 0 ?
        `Magic Numbers in range ${start} to ${end}: ${magicNumbers.join(", ")}` :
        `No Magic Numbers found in the range ${start} to ${end}.`;
}
