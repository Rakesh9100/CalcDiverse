const fact = []
fact.push(1)
for (let i = 1; i <= 100; i++) {
    fact.push(fact[i - 1] * i);
}

function findCatalanNumber() {
    const term = document.forms.myform.term.value;
    const n = parseInt(term, 10);
    //Validate User Input
    if (n === "" || n < 0 || n === 0 || n > 32 || Number.isNaN(n)) {
        alert('Please enter a valid number between 1 and 32');
    } else {
        myElement = document.getElementById("catalanNumbers");
        const num = catalanNumber(n);
        const st = num.toString();
        if (n % 10 === 1 && n != 11) {
            myElement.textContent = "The value of the " + n.toString() + "st Catalan Number is " + st;
        } else if (n % 10 === 2 && n != 12) {
            myElement.textContent = "The value of the " + n.toString() + "nd Catalan Number is " + st;
        } else if (n % 10 === 3 && n != 13) {
            myElement.textContent = "The value of the " + n.toString() + "rd Catalan Number is " + st;
        } else {
            myElement.textContent = "The value of the " + n.toString() + "th Catalan Number is " + st;
        }
    }
}

function catalanNumber(val) {
    let numerator = factorial(2 * val);
    let firstDenominator = factorial(val + 1);
    let secondDenominator = factorial(val);
    let denominator = firstDenominator * secondDenominator;
    return Math.floor(numerator / denominator);
}

function factorial(j) {
    return fact[j];
}
