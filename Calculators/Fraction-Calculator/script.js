var n1, n2, d1, d2, An, Ad, Op;
var neg = 1;

function solve() {
    if (!isNaN(document.calc.n1.value) && !isNaN(document.calc.d1.value) &&
        !isNaN(document.calc.n2.value) && !isNaN(document.calc.d2.value)) {
        if (document.calc.n1.value !== '' && document.calc.d1.value !== '' &&
            document.calc.n2.value !== '' && document.calc.d2.value !== '') {
            n1 = parseInt(document.calc.n1.value);
            d1 = parseInt(document.calc.d1.value);
            n2 = parseInt(document.calc.n2.value);
            d2 = parseInt(document.calc.d2.value);
            Op = document.calc.Op.value;
        } else {
            alert('Please fill in all fields!');
            return;
        }
    } else {
        alert('Please enter only numbers into the fields!');
        return;
    }

    switch (Op) {
        case '+':
            An = (n1 * d2) + (n2 * d1);
            Ad = (d1 * d2);
            break;
        case '-':
            An = (n1 * d2) - (n2 * d1);
            Ad = (d1 * d2);
            break;
        case '*':
            An = n1 * n2;
            Ad = d1 * d2;
            break;
        case '/':
            An = n1 * d2;
            Ad = d1 * n2;
            break;
        default:
            alert('Unknown operator');
            return;
    }

    // Reduce the fraction
    reduce();

    display();
}

// Function to reduce the fraction
function reduce() {
    neg = An < 0 ? -1 : 1;
    An = Math.abs(An);
    Ad = Math.abs(Ad);
    let gcd = (a, b) => b ? gcd(b, a % b) : a;
    let commonFactor = gcd(An, Ad);
    An = (An / commonFactor) * neg;
    Ad = Ad / commonFactor;
}

function display() {
    document.calc.An.value = An;
    document.calc.Ad.value = Ad;
}
