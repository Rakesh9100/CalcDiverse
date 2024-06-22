document.getElementById('spyNumberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');


    if (!/^\d+$/.test(numberInput)) {
        resultElement.textContent = 'Please enter a valid positive integer.';
        resultElement.style.color = 'red';
        return;
    }

    const number = parseInt(numberInput, 10);

    let sum = 0;
    let product = 1;
    let tempNumber = number;

    while (tempNumber > 0) {
        let digit = tempNumber % 10;
        sum += digit;
        product *= digit;
        tempNumber = Math.floor(tempNumber / 10);
    }

    if (sum === product) {
        resultElement.textContent = `${number} is a Spy Number!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${number} is not a Spy Number.`;
        resultElement.style.color = 'black';
    }

    document.getElementById('numberInput').value = '';
});

const memoizedFindSpyNumbers = (function() {
    const cache = {};

    function calculateSpyNumbers(digits) {
        const spyNumbers = [];
        const start = Math.pow(10, digits - 1);
        const end = Math.pow(10, digits) - 1;

        for (let number = start; number <= end; number++) {
            let sum = 0;
            let product = 1;
            let tempNumber = number;

            while (tempNumber > 0) {
                let digit = tempNumber % 10;
                sum += digit;
                product *= digit;
                tempNumber = Math.floor(tempNumber / 10);
            }

            if (sum === product) {
                spyNumbers.push(number);
            }
        }

        return spyNumbers;
    }

    return function(digits) {
        if (!cache[digits]) {
            cache[digits] = calculateSpyNumbers(digits);
        }
        return cache[digits];
    }
})();

document.getElementById('digitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const digitInput = document.getElementById('digitInput').value;
    const spyNumbersResult = document.getElementById('spyNumbersResult');
    spyNumbersResult.innerHTML = '';

    if (digitInput < 1 || digitInput > 9) {
        spyNumbersResult.textContent = 'Please enter a valid digit count between 1 and 9.';
        spyNumbersResult.style.color = 'red';
        return;
    }

    const spyNumbers = memoizedFindSpyNumbers(parseInt(digitInput, 10));
    if (spyNumbers.length === 0) {
        spyNumbersResult.textContent = `No Spy Numbers found with ${digitInput} digits.`;
        spyNumbersResult.style.color = 'black';
    } else {
        spyNumbersResult.textContent = `Spy Numbers with ${digitInput} digits: ${spyNumbers.join(', ')}`;
        spyNumbersResult.style.color = 'black';
    }

    document.getElementById('digitInput').value = '';
});


document.getElementById('clearResultBtn').addEventListener('click', function() {
    document.getElementById('result').textContent = '';
    document.getElementById('numberInput').value = '';
});


document.getElementById('clearSpyNumbersBtn').addEventListener('click', function() {
    document.getElementById('spyNumbersResult').innerHTML = '';
    document.getElementById('digitInput').value = '';
});
