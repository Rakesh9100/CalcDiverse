function calculateLease() {
    const assetValue = parseFloat(document.getElementById('assetValue').value);
    const residualValue = parseFloat(document.getElementById('residualValue').value);
    const leaseTerm = parseFloat(document.getElementById('leaseTerm').value) * 12;
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;

    const errorMessage = document.getElementById('errorMessage');
    const results = document.getElementById('results');

    if (isNaN(assetValue) || isNaN(residualValue) || isNaN(leaseTerm) || isNaN(interestRate)) {
        errorMessage.innerText = "Please fill in all fields correctly.";
        errorMessage.style.display = "block";
        results.style.display = "none";
        return;
    }

    const depreciation = (assetValue - residualValue) / leaseTerm;
    const interest = (assetValue + residualValue) * interestRate / 2;

    const monthlyPayment = depreciation + interest;
    const totalPayment = monthlyPayment * leaseTerm;
    const totalInterest = totalPayment - (assetValue - residualValue);

    document.getElementById('monthlyPayment').innerText = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').innerText = `$${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').innerText = `$${totalInterest.toFixed(2)}`;

    errorMessage.style.display = "none";
    results.style.display = "block";
}

function resetResults() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('monthlyPayment').innerText = '';
    document.getElementById('totalPayment').innerText = '';
    document.getElementById('totalInterest').innerText = '';
}

document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault();
    check();
});

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function check() {
    const num = document.getElementById('no').value;
    const resultElement = document.getElementById("strongNumbers");

    if (num === "" || num.includes('.') || num < 0) {
        showResult("Please enter a valid whole number.", "error");
        return;
    }

    const numValue = parseInt(num, 10);
    let sum = 0;
    let temp = numValue;

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }

    if (sum === numValue) {
        showResult(`Yes, ${numValue} is a strong number.<br>Explanation: Sum of the factorial of the digits of ${numValue} equals ${numValue} itself.`, "success");
    } else {
        showResult(`No, ${numValue} is not a strong number.<br>Explanation: Sum of the factorial of the digits of ${numValue} is not equal to ${numValue} itself.`, "error");
    }
}

function showResult(message, type) {
    const resultElement = document.getElementById("strongNumbers");
    resultElement.innerHTML = message;
    resultElement.className = `result ${type}`;
    resultElement.style.animation = 'none';
    resultElement.offsetHeight; // Trigger reflow
    resultElement.style.animation = null;
    resultElement.style.animation = 'fadeIn 0.5s';
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .result.success { color: #4caf50; font-weight: 600; }
    .result.error { color: #f44336; font-weight: 600; }
`;
document.head.appendChild(style);