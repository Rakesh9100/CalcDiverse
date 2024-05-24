'use strict'
var a1, a2, b1, b2, c1, c2;
var valueOfX, valueOfY;
var typeOfEqn, warningMsg;

const result = () => {
    var validity = true;
    a1 = document.getElementById('a1').value;
    a2 = document.getElementById('a2').value;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    c1 = document.getElementById('c1').value;
    c2 = document.getElementById('c2').value;


    (a1 == "") ? a1 = 0 : a1 = a1;
    (a2 == "") ? a2 = 0 : a2 = a2;
    (b1 == "") ? b1 = 0 : b1 = b1;
    (b2 == "") ? b2 = 0 : b2 = b2;
    (c1 == "") ? c1 = 0 : c1 = c1;
    (c2 == "") ? c2 = 0 : c2 = c2;

    if (a1 == 0 && a2 == 0 && b1 == 0 && b2 == 0 && c1 == 0 && c2 == 0) {
        validity = false;
        warningMsg = "Insufficient Data !!";
    }
    else if (a1 == 0 && b1 == 0) {
        validity = false;
        warningMsg = "First Equation Invalid !!";
    }

    else if (a2 == 0 && b2 == 0) {
        validity = false;
        warningMsg = "Second Equation Invalid !!";
    }

    else if (a1 != 0 && a2 != 0 && b1 == 0 && b2 == 0) {
        validity = false;
        warningMsg = "Co-efficients of 'y' missing !!";
    }

    else if (a1 == 0 && a2 == 0 && b1 != 0 && b2 != 0) {
        validity = false;
        warningMsg = "Co-efficients of 'x' missing !!";
    }


    if (validity == false) {
        document.getElementById('warning-msg').setAttribute('class', 'warning-msg');
        document.getElementById('warning-msg').innerHTML = warningMsg;
    }

    if (a2 % a1 == 0 && b2 % b1 == 0) {
        if (c1 == c2) {
            typeOfEqn = "Infinitely Many Solutions (Identical Lines)"
            valueOfX = "INF";
            valueOfY = "INF";
        }
        else {
            typeOfEqn = "NO";
            valueOfX = "NO";
            valueOfY = "NO";
        }
    }
    else if (a1 == a2 && b1 == b2 && c1 != c2) {
        typeOfEqn = "No Solutions (Parallel Lines)";
        valueOfX = "NO";
        valueOfY = "NO";
    }
    else {
        typeOfEqn = "Exactly one ordered pair Solution";
        valueOfX = ((c2 * b1) - (c1 * b2)) / ((a1 * b2) - (a2 * b1));
        valueOfY = ((c2 * a1) - (c1 * a2)) / ((a2 * b1) - (a1 * b2));


        valueOfX = Number.isInteger(valueOfX) ? valueOfX : valueOfX.toPrecision(4);
        valueOfY = Number.isInteger(valueOfY) ? valueOfY : valueOfY.toPrecision(4);

    }

    if (validity == true) {
        document.getElementById('warning-msg').setAttribute('class', 'warning-msg');
        document.getElementById('warning-msg').innerHTML = "";

        document.getElementById('x-result').innerHTML = valueOfX;
        document.getElementById('y-result').innerHTML = valueOfY;
        document.getElementById('solution-type').innerText = typeOfEqn;
    }
}

const clearData = () => {
    a1 = document.getElementById('a1').value = "";
    a2 = document.getElementById('a2').value = "";
    b1 = document.getElementById('b1').value = "";
    b2 = document.getElementById('b2').value = "";
    c1 = document.getElementById('c1').value = "";
    c2 = document.getElementById('c2').value = "";

    document.getElementById('x-result').innerHTML = "";
    document.getElementById('y-result').innerHTML = "";
    document.getElementById('solution-type').innerText = "";
}