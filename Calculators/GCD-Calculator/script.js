let a = document.getElementById('a');
let b = document.getElementById('b');
let answer_single = document.getElementById('answer');
let answer_multi = document.getElementById('answer-multi');
let cal = document.getElementById('calculate');
let error = document.getElementById('error-single');

function gcd(x, y) {
    let m = Math.min(x, y);
    let ans = m;

    for (let i = m; i >= 1; i--) {
        if (x % i === 0 && y % i === 0) {
            ans = i;
            break;
        }
    }
    return ans;
}

function value() {
    error.innerHTML = '';

    let x = parseInt(a.value);
    let y = parseInt(b.value);

    if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        error.innerHTML = 'Enter valid positive integer inputs.';
    } else {
        let z = gcd(x, y);
        if (isNaN(z)) {
            error.innerHTML = 'GCD is undefined. Enter non-zero values.';
        } else {
            answer_single.innerHTML = `${z}`;
        }
    }
}

cal.addEventListener('click', (e) => {
    value();
});

let multiple = document.getElementById('multiple');

function multi_value() {
    error.innerHTML = '';

    let stringValues = (multiple.value.replace(/,+$/, '')).split(',');

    let intValues = stringValues.map(element => parseInt(element));

    if (intValues.some(value => isNaN(value) || value <= 0 || !Number.isInteger(value))) {
        error.innerHTML = 'Enter valid positive integer inputs for all values and remove extra commas if present';
        return;
    }

    let n = stringValues.length;
    let ans = intValues[0];

    for (let i = 1; i < n; i++) {
        ans = gcd(ans, intValues[i]);
    }
    answer_multi.innerHTML = `${ans}`;
}

let cal_multi = document.getElementById('calculate-multiple');

cal_multi.addEventListener('click', () => {
    multi_value();
});
