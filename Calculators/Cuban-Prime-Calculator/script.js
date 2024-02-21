function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function cubeOfNum(num) {
    return num * num * num;
}

function isCubanPrime(num) {
    let res = cubeOfNum(num) - cubeOfNum(num - 1);
    return isPrime(res) && isPrime(num);
}

function checkCubanPrime() {
    let number = document.getElementById('number').value;

    if (!validateInput(number)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    let result = isCubanPrime(parseInt(number));

    document.getElementById('resultSingle').innerText = `${number} is ${result ? '' : 'not '}a Cuban Prime number.`;
}

function checkCubanPrimesInRange() {
    let fromRange = parseInt(document.getElementById('fromRange').value);
    let toRange = parseInt(document.getElementById('toRange').value);

    if (isNaN(fromRange) || isNaN(toRange) || fromRange >= toRange) {
        alert('Please enter valid range values.');
        return;
    }

    let cubanPrimes = [];

    for (let i = fromRange; i <= toRange; i++) {
        if (isCubanPrime(i)) {
            cubanPrimes.push(i);
        }
    }

    if (cubanPrimes.length > 0) {
        document.getElementById('rangeResult').innerText = `Cuban Prime numbers in the range ${fromRange} to ${toRange}: ${cubanPrimes.join(', ')}`;
    } else {
        document.getElementById('rangeResult').innerText = `There are no Cuban Prime numbers in the range ${fromRange} to ${toRange}.`;
    }
}

function validateInput(number) {
    return /^(0|[1-9]\d*)$/.test(number);
}
