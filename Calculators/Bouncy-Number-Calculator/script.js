function checkBouncyNumber() {
    let number = document.getElementById('number').value;

    if (!validateInput(number)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    let result = isNumberBouncy(number);

    if (result.isBouncy) {
        document.getElementById('result').innerText = `${number} is a Bouncy number.`;
        document.getElementById('explanation').innerText = `Explanation: The digits of ${number} are unsorted.`;
    } else {
        document.getElementById('result').innerText = `${number} is not a Bouncy number.`;
        document.getElementById('explanation').innerText = `Explanation: The digits of ${number} are sorted.`;
    }
}

function findBouncyNumbersInRange() {
    let fromRange = parseInt(document.getElementById('fromRange').value);
    let toRange = parseInt(document.getElementById('toRange').value);

    if (isNaN(fromRange) || isNaN(toRange) || fromRange >= toRange) {
        alert('Please enter valid range values.');
        return;
    }

    let bouncyNumbers = [];

    for (let i = fromRange; i <= toRange; i++) {
        if (isNumberBouncy(i.toString()).isBouncy) {
            bouncyNumbers.push(i);
        }
    }

    if (bouncyNumbers.length > 0) {
        document.getElementById('rangeResult').innerText = `Bouncy numbers in the range ${fromRange} to ${toRange}: ${bouncyNumbers.join(', ')}`;
    } else {
        document.getElementById('rangeResult').innerText = `There are no bouncy numbers in the range ${fromRange} to ${toRange}.`;
    }
}

function validateInput(number) {
    return /^[1-9]\d*$/.test(number);
}

function isNumberBouncy(number) {
    let increasing = false;
    let decreasing = false;

    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] < number[i + 1]) {
            increasing = true;
        } else if (number[i] > number[i + 1]) {
            decreasing = true;
        }

        if (increasing && decreasing) {
            return { isBouncy: true };
        }
    }

    return { isBouncy: false };
}

function clearSection() {
    document.getElementById('number').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('explanation').innerText = '';
}

function clearRangeSection() {
    document.getElementById('fromRange').value = '';
    document.getElementById('toRange').value = '';
    document.getElementById('rangeResult').innerText = '';
}
