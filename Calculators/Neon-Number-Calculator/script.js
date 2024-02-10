function checkNeonNumber() {
    let number = document.getElementById('number').value;

    if (!validateInput(number)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    let result = isNeonNumber(number);

    document.getElementById('resultSingle').innerText = `${number} is ${result.isNeon ? '' : 'not '}a Neon number. ${result.explanation}`;
}

function checkNeonNumbersInRange() {
    let fromRange = parseInt(document.getElementById('fromRange').value);
    let toRange = parseInt(document.getElementById('toRange').value);

    if (isNaN(fromRange) || isNaN(toRange) || fromRange >= toRange) {
        alert('Please enter valid range values.');
        return;
    }

    let neonNumbers = [];

    for (let i = fromRange; i <= toRange; i++) {
        if (isNeonNumber(i.toString()).isNeon) {
            neonNumbers.push(i);
        }
    }

    if (neonNumbers.length > 0) {
        document.getElementById('rangeResult').innerText = `Neon numbers in the range ${fromRange} to ${toRange}: ${neonNumbers.join(', ')}`;
    } else {
        document.getElementById('rangeResult').innerText = `There are no Neon numbers in the range ${fromRange} to ${toRange}.`;
    }
}

function validateInput(number) {
    return /^(0|[1-9]\d*)$/.test(number);
}

function isNeonNumber(number) {
    let square = parseInt(number) ** 2;
    let digitSum = Array.from(square.toString()).reduce((acc, digit) => acc + parseInt(digit), 0);

    return {
        isNeon: digitSum === parseInt(number),
        explanation: `The square of ${number} is ${square}. The sum of its digits is ${digitSum}.`
    };
}
