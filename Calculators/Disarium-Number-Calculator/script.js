function checkDisariumNumber() {
    let number = document.getElementById('number').value;

    if (!validateInput(number)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    let result = isNumberDisarium(number);

    if (result.isDisarium) {
        document.getElementById('result').innerText = `${number} is a Disarium number.`;
        document.getElementById('explanation').innerText = `Explanation: ${result.explanation}`;
    } else {
        document.getElementById('result').innerText = `${number} is not a Disarium number.`;
        document.getElementById('explanation').innerText = '';
    }
}

function findDisariumNumbersInRange() {
    let fromRange = parseInt(document.getElementById('fromRange').value);
    let toRange = parseInt(document.getElementById('toRange').value);

    if (isNaN(fromRange) || isNaN(toRange) || fromRange >= toRange) {
        alert('Please enter valid range values.');
        return;
    }

    let disariumNumbers = [];

    for (let i = fromRange; i <= toRange; i++) {
        if (isNumberDisarium(i.toString()).isDisarium) {
            disariumNumbers.push(i);
        }
    }

    if (disariumNumbers.length > 0) {
        document.getElementById('rangeResult').innerText = `Disarium numbers in the range ${fromRange} to ${toRange}: ${disariumNumbers.join(', ')}`;
    } else {
        document.getElementById('rangeResult').innerText = `There are no Disarium numbers in the range ${fromRange} to ${toRange}.`;
    }
}

function validateInput(number) {
    return /^[1-9]\d*$/.test(number);
}

function isNumberDisarium(number) {
    let digits = number.toString().split('');
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), i + 1);
    }

    return {
        isDisarium: sum === parseInt(number),
        explanation: `Sum of digits' powers: ${digits.map((digit, index) => `${digit}^${index + 1}`).join(' + ')} = ${sum}`
    };
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
