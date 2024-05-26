document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById('animatedTitle');
    title.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'SPAN') {
            event.target.style.color = '#4ca1af'; 
        }
    });

    title.addEventListener('mouseout', (event) => {
        if (event.target.tagName === 'SPAN') {
            event.target.style.color = ''; 
        }
    });
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkCircularPrime() {
    let number = document.getElementById('numberInput').value;

    if (!/^\d+$/.test(number)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    let numStr = number.toString();
    let isCircularPrime = true;
    let primePermutations = [];

    for (let i = 0; i < numStr.length; i++) {
        let rotatedNumber = parseInt(numStr.slice(i) + numStr.slice(0, i));
        primePermutations.push(rotatedNumber);

        if (!isPrime(rotatedNumber)) {
            isCircularPrime = false;
            break;
        }
    }

    let result;
    if (isCircularPrime) {
        result = `Yes, it is a Circular Prime. Circular Permutations: ${primePermutations.join(', ')}`;
    } else {
        result = `No, it is not a Circular Prime. Circular Permutations: ${primePermutations
            .map((num, index) => `${num} (${isPrime(num) ? 'Prime' : 'Not Prime'})`)
            .join(', ')}`;
    }

    document.getElementById('result').innerText = result;
}

function findCircularPrimesInRange() {
    let fromRange = parseInt(document.getElementById('fromRange').value);
    let toRange = parseInt(document.getElementById('toRange').value);

    if (isNaN(fromRange) || isNaN(toRange) || fromRange >= toRange) {
        alert('Please enter valid range values.');
        return;
    }

    let circularPrimes = [];

    for (let num = fromRange; num <= toRange; num++) {
        if (isPrime(num)) {
            let numStr = num.toString();
            let isCircularPrime = true;
            let primePermutations = [];

            for (let i = 0; i < numStr.length; i++) {
                let rotatedNumber = parseInt(numStr.slice(i) + numStr.slice(0, i));
                primePermutations.push(rotatedNumber);

                if (!isPrime(rotatedNumber)) {
                    isCircularPrime = false;
                    break;
                }
            }

            if (isCircularPrime) {
                circularPrimes.push({ number: num, permutations: primePermutations });
            }
        }
    }

    let result;
    if (circularPrimes.length > 0) {
        result = `Circular Primes in the range ${fromRange} to ${toRange}: ${circularPrimes
            .map(cp => `${cp.number} `)
            .join(', ')}`;
    } else {
        result = `There are no Circular Primes in the range ${fromRange} to ${toRange}.`;
    }

    document.getElementById('rangeResult').innerText = result;
}

function clearSection() {
    document.getElementById('numberInput').value = '';
    document.getElementById('result').innerText = '';
}

function clearRangeSection() {
    document.getElementById('fromRange').value = '';
    document.getElementById('toRange').value = '';
    document.getElementById('rangeResult').innerText = '';
}
