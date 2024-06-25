
document.getElementById('spyNumberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const number = document.getElementById('numberInput').value;
    const result = checkSpyNumber(number);
    document.getElementById('result').textContent = result ? `${number} is a Spy Number.` : `${number} is not a Spy Number.`;
});

document.getElementById('clearResultBtn').addEventListener('click', function() {
    document.getElementById('result').textContent = '';
    document.getElementById('numberInput').value = '';
});

document.getElementById('digitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const digitCount = document.getElementById('digitInput').value;
    const spyNumbers = findSpyNumbers(digitCount);
    document.getElementById('spyNumbersResult').innerHTML = `<p>Spy Numbers with ${digitCount} digits:</p><p>${spyNumbers.join(', ')}</p>`;
});

document.getElementById('clearSpyNumbersBtn').addEventListener('click', function() {
    document.getElementById('spyNumbersResult').innerHTML = '';
    document.getElementById('digitInput').value = '';
});

function checkSpyNumber(number) {
    const digits = number.split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const product = digits.reduce((a, b) => a * b, 1);
    return sum === product;
}

function findSpyNumbers(digitCount) {
    const spyNumbers = [];
    const start = Math.pow(10, digitCount - 1);
    const end = Math.pow(10, digitCount);
    for (let i = start; i < end; i++) {
        if (checkSpyNumber(i.toString())) {
            spyNumbers.push(i);
        }
    }
    return spyNumbers;
}
