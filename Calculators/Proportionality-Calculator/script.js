function calculate() {
    var f1 = document.getElementById('f1');
    var f2 = document.getElementById('f2');
    var f3 = document.getElementById('f3');
    var f4 = document.getElementById('f4');

    var a = parseFloat(f1.value);
    var b = parseFloat(f2.value);
    var c = parseFloat(f3.value);
    var d = parseFloat(f4.value);

    var emptyFields = 0;

    if (isNaN(a)) emptyFields++;
    if (isNaN(b)) emptyFields++;
    if (isNaN(c)) emptyFields++;
    if (isNaN(d)) emptyFields++;

    if (emptyFields == 0) {
        alert("You already have the answer, don't you see?");
        return;
    } else if (emptyFields != 1) {
        alert("Please fill in three of those fields!");
        return;
    }

    if (isNaN(a)) f1.value = b * c / d;
    else if (isNaN(b)) f2.value = a * d / c;
    else if (isNaN(c)) f3.value = a * d / b;
    else if (isNaN(d)) f4.value = b * c / a;
}

function resetForm() {
    var form = document.getElementById('calculator-form');
    form.reset();
}

window.addEventListener('load', function () {
    document.getElementById('calculator-form').addEventListener('submit', function (event) {
        event.preventDefault();
        calculate();
    });

    document.getElementById('reset-button').addEventListener('click', function (event) {
        event.preventDefault();
        resetForm();
    });
});