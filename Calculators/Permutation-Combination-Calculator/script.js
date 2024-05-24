
function calculate() {
    const n = parseInt(document.getElementById('totalItems').value);
    const r = parseInt(document.getElementById('chooseItems').value);
    const result = document.getElementById('result');
    if (n < 0 || r < 0 || n < r) {
        result.innerHTML = "Please enter valid numbers for n and r , for eg : n = 4 , r = 2 (remember n>r)";
        return;
    }

    var permutationResult = calculatePermutation(n, r);
    var combinationResult = calculateCombination(n, r);

    result.innerHTML = "Permutation (" + n + "P" + r + ")= " + permutationResult +
        "<br>Combination (" + n + "C" + r + ")= " + combinationResult;
}

function calculatePermutation(n, r) {
    if (n < r) {
        const result = document.getElementById('result');
        result.innerHTML = 'Error : n should be greater than or equal to r'
    }
    var permutationResult = factorial(n) / factorial(n - r);
    return permutationResult;
}

function calculateCombination(n, r) {
    if (n < r) {
        const result = document.getElementById('result');
        result.innerHTML = 'Error : n should be greater than or equal to r'
    }
    var combinationResult = factorial(n) / (factorial(r) * factorial(n - r));
    return combinationResult;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
function reset() {
    document.getElementById('totalItems').value = ''
    document.getElementById('chooseItems').value = ''
    const result = document.getElementById('result');
    result.innerHTML = '';
}