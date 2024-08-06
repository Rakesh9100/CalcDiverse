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

function isMersennePrime(num) {
    if (!isPrime(num)) return { isMersenne: false, reason: `${num} is not a prime number.` };
    let p = Math.log2(num + 1);
    if (Number.isInteger(p) && isPrime(p)) {
        return { isMersenne: true, reason: `${num} is a Mersenne prime as 2^${p} - 1 = ${num}.` };
    }
    return { isMersenne: false, reason: `${num} is a prime number but not a Mersenne prime.` };
}

function checkMersennePrime() {
    const num = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');
    const reasonDiv = document.getElementById('reason');
    if (num === "") {
        resultDiv.textContent = "Please enter a number.";
        reasonDiv.textContent = "";
        return;
    }
    const { isMersenne, reason } = isMersennePrime(parseInt(num));
    resultDiv.textContent = isMersenne ? `${num} is a Mersenne Prime!` : `${num} is not a Mersenne Prime.`;
    reasonDiv.textContent = `Reason: ${reason}`;
}

function findMersennePrimesInRange() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const rangeResultDiv = document.getElementById('range-result');
    if (isNaN(start) || isNaN(end) || start > end) {
        rangeResultDiv.textContent = "Please enter a valid range.";
        return;
    }

    let mersennePrimes = [];
    for (let i = start; i <= end; i++) {
        if (isMersennePrime(i).isMersenne) {
            mersennePrimes.push(i);
        }
    }

    rangeResultDiv.textContent = mersennePrimes.length > 0 ?
        `Mersenne Primes in range ${start} to ${end}: ${mersennePrimes.join(", ")}` :
        `No Mersenne Primes found in the range ${start} to ${end}.`;
}
