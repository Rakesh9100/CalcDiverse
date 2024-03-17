const numberInput = document.getElementById("txtNumber");
const intervalInput = document.getElementById("txtInterval");
const generateButton = document.getElementById("btnGenerate");
const resultOutput = document.getElementById("ans");

document.addEventListener("DOMContentLoaded", onFocus);
generateButton.addEventListener("click", onClick);
intervalInput.addEventListener("keydown", onKeyDown);
numberInput.addEventListener("keydown", onKeyDown);

function onClick() {
    const number = parseFloat(numberInput.value);
    const interval = parseFloat(intervalInput.value);

    if (validateInputs(number, interval)) {
        displayErrorMessage("Please enter a valid number and interval.");
        return;
    }

    if (number < 0) {
        displayErrorMessage("Number must be greater than or equal to 0.");
        return;
    }

    resultOutput.innerHTML = ""; // Clear previous results

    for (let count = 0; count <= interval; count++) {
        resultOutput.innerHTML += `${number} X ${count} = ${number * count}<br>`;
    }
}

function validateInputs(number, interval) {
    return isNaN(number) || isNaN(interval) || number === "" || interval === "";
}

function displayErrorMessage(message) {
    resultOutput.innerHTML = `<span style="color: red;">${message}</span>`;
}

function onKeyDown(e) {
    if (e.key === "e") {
        e.preventDefault();
    }
}

function onFocus() {
    numberInput.focus();
}