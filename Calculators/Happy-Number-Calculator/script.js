function isHappyNumber(num) {
    let seen = new Set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = sumOfSquares(num);
    }
    return num === 1;
}

function sumOfSquares(num) {
    return num.toString().split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), 2), 0);
}

function getHappyExplanation(num) {
    let explanation = `Starting with ${num}, replace it by the sum of the squares of its digits repeatedly: `;
    let sequence = [num];

    while (num !== 1) {
        num = sumOfSquares(num);
        sequence.push(num);
    }

    explanation += sequence.join(' -> ') + '. This process leads to 1, making it a Happy Number.';
    return explanation;
}

function checkHappyNumber() {
    let number = document.getElementById('number').value;

    if (!validateInput(number)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    let result = isHappyNumber(parseInt(number));
    let explanation = result ? getHappyExplanation(parseInt(number)) : '';
    let message = result ? `${number} is a Happy Number.` : `${number} is not a Happy Number.`;

    document.getElementById('resultSingle').innerHTML = `<span class="${result ? 'happy-number-result' : 'not-happy-number-result'}">${message}<br>${explanation}</span>`;
}

function checkHappyNumbersInRange() {
    let fromRange = parseInt(document.getElementById('fromRange').value);
    let toRange = parseInt(document.getElementById('toRange').value);

    if (isNaN(fromRange) || isNaN(toRange) || fromRange >= toRange) {
        alert('Please enter valid range values.');
        return;
    }

    let happyNumbers = [];

    for (let i = fromRange; i <= toRange; i++) {
        if (isHappyNumber(i)) {
            happyNumbers.push(i);
        }
    }

    if (happyNumbers.length > 0) {
        document.getElementById('rangeResult').innerHTML = `<span class="happy-number-result">Happy Numbers in the range ${fromRange} to ${toRange}: ${happyNumbers.join(', ')}</span>`;
    } else {
        document.getElementById('rangeResult').innerHTML = `There are no Happy Numbers in the range ${fromRange} to ${toRange}.`;
    }
}

function validateInput(number) {
    return /^(0|[1-9]\d*)$/.test(number);
}
