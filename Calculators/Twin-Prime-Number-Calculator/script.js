document.getElementById('twin-prime-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const limit = parseInt(document.getElementById('limit').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (isNaN(limit) || limit < 2) {
        resultDiv.innerHTML = '<p>Please enter a valid number greater than or equal to 2.</p>';
        return;
    }
    const twinPrimes = findTwinPrimes(limit);
    displayResults(twinPrimes, 'Twin primes');
});

document.getElementById('show-primes-button').addEventListener('click', function() {
    const limit = parseInt(document.getElementById('limit').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (isNaN(limit) || limit < 2) {
        resultDiv.innerHTML = '<p>Please enter a valid number greater than or equal to 2.</p>';
        return;
    }
    const primes = findPrimes(limit);
    displayResults(primes, 'Primes');
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('limit').value = '';
    document.getElementById('result').innerHTML = '';
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('limit').value = '';
    document.getElementById('result').innerHTML = '';
});

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function findTwinPrimes(limit) {
    const twins = [];
    for (let num = 2; num <= limit - 2; num++) {
        if (isPrime(num) && isPrime(num + 2)) {
            twins.push([num, num + 2]);
        }
    }
    return twins;
}

function findPrimes(limit) {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

function displayResults(results, label) {
    const resultDiv = document.getElementById('result');
    if (results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            if (Array.isArray(result)) {
                li.textContent = `${result[0]} and ${result[1]}`;
            } else {
                li.textContent = result;
            }
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    } else {
        resultDiv.innerHTML = `<p>No ${label} found.</p>`;
    }
}
