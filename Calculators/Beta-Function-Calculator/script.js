function calculate(event) {
    const num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var a = 1;
    var b = 1;
    var c = 1;
    var add = 1;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please do not leave any field blank');
    } else {
        a = math.gamma(num1);
        b = math.gamma(num2);
        add = num1 + num2;
        c = math.gamma(add);

        let result = (a * b) / c;

        if (result == Infinity) {
            alert("Neither of the numbers can be zero.Please try again.");
            // Code to make all fields blank after alert message
            document.getElementById('res').value = '';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        }
        if (result == NaN) {

            alert("Neither of the fields can be blank..Please try again.");
            // Code to make all fields blank after alert message
            document.getElementById('res').value = '';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        }

        document.getElementById('res').value = result;
    }
}
