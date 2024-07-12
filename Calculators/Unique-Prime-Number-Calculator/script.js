function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

function isUniquePrime(n) {
    if (!isPrime(n)) return false;
    let nStr = n.toString();
    for (let i = 0; i < nStr.length; i++) {
        let newNumber = parseInt(nStr.slice(0, i) + nStr.slice(i + 1));
        if (!isPrime(newNumber)) return false;
    }
    return true;
}

function checkUniquePrime() {
    let number = parseInt(document.getElementById("numberInput").value);
    let result = document.getElementById("result");

    if(isNaN(number)) {
        result.textContent = `Please enter a number`;
        return;
    }

    if (isUniquePrime(number)) {
        result.textContent = `${number} is a unique prime number. 
        ${number} remains prime even after removing any single digit.`;
    } else {
        result.textContent = `${number} is not a unique prime number. 
        ${number} is either not prime or does not remain prime after removing any single digit.`;
    }
}

function findUniquePrimesInRange() {
    let start = parseInt(document.getElementById("rangeStart").value);
    let end = parseInt(document.getElementById("rangeEnd").value);
    let rangeResult = document.getElementById("rangeResult");
    let uniquePrimes = [];

    if(isNaN(start) || isNaN(end)) {
        rangeResult.textContent = `Please enter a valid range`;
        return;
    }

    if(start > end) {
        rangeResult.textContent = `The starting number should be smaller than the ending number`;
        return;
    }

    for (let num = start; num <= end; num++) {
        if (isUniquePrime(num)) {
            uniquePrimes.push(num);
        }
    }
    if (uniquePrimes.length > 0) {
        rangeResult.textContent = `Unique prime numbers in range: ${uniquePrimes.join(", ")}`;
    } else {
        rangeResult.textContent = `No unique prime numbers found in range.`;
    }
}
