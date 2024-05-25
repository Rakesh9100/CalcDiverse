let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let calc = document.forms["calc"];
let txt = calc.elements["txt"];
let math = window.math;
let display = document.getElementById("display");

document.addEventListener("keydown", function (event) {
    const validKeys = /^[0-9.\+\-\*\/\(\)\^\%\{\}\[\]&]$/;
    if (validKeys.test(event.key)) {
        if (event.key === ".") {
            console.log(event.key)
            event.preventDefault();
            point();
        }
        else {
            event.preventDefault();
            document.getElementById("display").value += event.key;
        }

    } else if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (event.key === "Backspace") {
        removeFromDisplay();
    }

});

function removeFromDisplay() {
    let value = display.value;
    value = value.substring(0, value.length - 1);
    display.value = value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

btn.onclick = function () {
    body.classList.toggle("light");
};

calc.onsubmit = calculate(e);



function clearOne() {
    let currentValue = calc.txt.value;
    calc.txt.value = currentValue.slice(0, -1);
}

function point() {
    let currentValue = calc.txt.value;
    if (currentValue == "") {
        calc.txt.value = '0' + '.';
    }
    else {

        if (currentValue.charAt(currentValue.length - 1) == "." || currentValue.charAt(currentValue.length - 1) == "(") {
            calc.txt.value = calc.txt.value + '0' + '.';
            return;
        }
        if (currentValue.charAt(currentValue.length - 1) == "+" ||
            currentValue.charAt(currentValue.length - 1) == "*" ||
            currentValue.charAt(currentValue.length - 1) == "-" ||
            currentValue.charAt(currentValue.length - 1) == "/" ||
            currentValue.charAt(currentValue.length - 1) == "%" ||
            currentValue.charAt(currentValue.length - 1) == "√" ||
            currentValue.charAt(currentValue.length - 1) == "^") {
            calc.txt.value = calc.txt.value + '0' + '.';
            return;
        }
        else {
            calc.txt.value = calc.txt.value + ".";
            return;
        }
    }
};




