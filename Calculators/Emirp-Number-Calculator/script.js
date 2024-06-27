function handleOptionChange() {
    const option = document.getElementById('option-select').value;
    document.getElementById('single-number-section').style.display = option === "single" ? 'block' : 'none';
    document.getElementById('range-section').style.display = option === "range" ? 'block' : 'none';
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isEmirpNumber(num) {
    if (!isPrime(num)) return { isEmirp: false, reason: `${num} is not a prime number.` };
    const reversedNum = parseInt(num.toString().split('').reverse().join(''));
    if (num === reversedNum) return { isEmirp: false, reason: `${num} is a prime number, but it is the same when reversed.` };
    if (!isPrime(reversedNum)) return { isEmirp: false, reason: `${num} is a prime number, but its reverse ${reversedNum} is not a prime number.` };
    return { isEmirp: true, reason: `${num} is a prime number and its reverse ${reversedNum} is also a prime number.` };
}

function checkEmirpNumber() {
    const num = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');
    const reasonDiv = document.getElementById('reason');
    if (num === "") {
        resultDiv.textContent = "Please enter a number.";
        reasonDiv.textContent = "";
        return;
    }
    const { isEmirp, reason } = isEmirpNumber(parseInt(num));
    resultDiv.textContent = isEmirp ? `${num} is an Emirp Number!` : `${num} is not an Emirp Number.`;
    reasonDiv.textContent = `Reason: ${reason}`;
}

function findEmirpNumbersInRange() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const rangeResultDiv = document.getElementById('range-result');
    if (isNaN(start) || isNaN(end) || start > end) {
        rangeResultDiv.textContent = "Please enter a valid range.";
        return;
    }

    let emirpNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isEmirpNumber(i).isEmirp) {
            emirpNumbers.push(i);
        }
    }
    
    rangeResultDiv.textContent = emirpNumbers.length > 0 ?
        `Emirp Numbers in range ${start} to ${end}: ${emirpNumbers.join(", ")}` :
        `No Emirp Numbers found in the range ${start} to ${end}.`;
}
